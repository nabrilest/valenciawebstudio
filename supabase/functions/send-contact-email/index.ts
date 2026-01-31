import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Dynamic origin validation for CORS
function isValidOrigin(origin: string): boolean {
  if (!origin) return false;
  
  // Allow Lovable domains
  if (origin.endsWith('.lovable.app') || origin.endsWith('.lovableproject.com')) {
    return true;
  }
  
  // Allow localhost for development
  if (origin.startsWith('http://localhost:')) {
    return true;
  }
  
  // Allow production domain
  if (origin === 'https://valenciawebstudio.es' || origin === 'https://www.valenciawebstudio.es') {
    return true;
  }
  
  return false;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Maximum requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  entry.count++;
  return false;
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate input for suspicious patterns
function containsSuspiciousContent(text: string): boolean {
  const suspiciousPatterns = /<script|<iframe|javascript:|on\w+\s*=/i;
  return suspiciousPatterns.test(text);
}

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  business?: string;
  phone?: string;
  neighborhood?: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  console.log("send-contact-email function invoked");
  
  // Get the origin header for CORS validation
  const origin = req.headers.get("origin") || "";
  const isAllowedOrigin = isValidOrigin(origin);
  
  const corsHeaders = {
    "Access-Control-Allow-Origin": isAllowedOrigin ? origin : "https://valenciawebstudio.lovable.app",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Origin validation - reject requests from unauthorized origins
  if (!isAllowedOrigin) {
    console.warn("Request from unauthorized origin:", origin);
    return new Response(
      JSON.stringify({ error: "Acceso no autorizado" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  // Rate limiting check
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || 
                   req.headers.get("cf-connecting-ip") || 
                   "unknown";
  
  if (isRateLimited(clientIP)) {
    console.warn("Rate limit exceeded for IP:", clientIP);
    return new Response(
      JSON.stringify({ error: "Demasiados intentos. Por favor, espera un momento antes de enviar otro mensaje." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const { name, email, message, business, phone, neighborhood }: ContactEmailRequest = await req.json();
    
    console.log("Received contact form submission");

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || message.length > 5000) {
      console.error("Field length exceeded");
      return new Response(
        JSON.stringify({ error: "Los campos exceden la longitud máxima permitida" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Formato de email inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check for suspicious content (potential XSS attempts)
    if (containsSuspiciousContent(name) || containsSuspiciousContent(message)) {
      console.warn("Suspicious content detected in submission");
      return new Response(
        JSON.stringify({ error: "El contenido del mensaje no es válido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape HTML in user inputs to prevent XSS in email
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());
    const safeBusiness = business ? escapeHtml(business.trim()) : "";
    const safePhone = phone ? escapeHtml(phone.trim()) : "";
    const safeNeighborhood = neighborhood ? escapeHtml(neighborhood.trim()) : "";

    // Build optional fields HTML
    const optionalFields = [];
    if (safeBusiness) {
      optionalFields.push(`<p style="margin: 0 0 10px 0;"><strong>Negocio:</strong> ${safeBusiness}</p>`);
    }
    if (safePhone) {
      optionalFields.push(`<p style="margin: 0 0 10px 0;"><strong>Teléfono:</strong> ${safePhone}</p>`);
    }
    if (safeNeighborhood) {
      optionalFields.push(`<p style="margin: 0 0 10px 0;"><strong>Barrio/Ciudad:</strong> ${safeNeighborhood}</p>`);
    }

    const emailResponse = await resend.emails.send({
      from: "Valencia Web Studio <onboarding@resend.dev>",
      to: ["hola@valenciawebstudio.es"],
      reply_to: email,
      subject: `Nueva solicitud de auditoría - ${safeName}${safeBusiness ? ` (${safeBusiness})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #ff9500; padding-bottom: 10px;">
            Nueva solicitud de auditoría gratuita
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${safeEmail}</p>
            ${optionalFields.join("")}
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #ff9500; padding: 15px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Mensaje:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
            Este mensaje fue enviado desde el formulario de auditoría de valenciawebstudio.es
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    // Log the detailed error server-side for debugging
    console.error("Error in send-contact-email function:", error);
    
    // Return a generic error message to the client (no internal details exposed)
    return new Response(
      JSON.stringify({ 
        error: "No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
