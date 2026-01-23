import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000, "Máximo 1000 caracteres"),
  privacy: z.boolean().refine((val) => val === true, "Debes aceptar la política de privacidad"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacy: false,
    },
  });

  const privacyValue = watch("privacy");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
        return;
      }

      console.log("Form submitted successfully:", { name: data.name, email: data.email });
      setIsSubmitted(true);
      toast.success("Mensaje enviado correctamente");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <Layout
      title="Contacto diseño web en Valencia | Valencia Web Studio"
      description="Contacta con Valencia Web Studio. Diseño web profesional en Valencia con factura."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              ¿Hablamos?
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Cuéntanos tu idea y te respondemos en menos de 24h. Sin compromiso, sin agobios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Quick Contact */}
            <div className="bg-accent rounded-xl p-5 md:p-6 mb-8 animate-fade-in">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                ¿Prefieres escribirnos directamente?
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                También puedes contactarnos por WhatsApp o Instagram. Respondemos rápido.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 font-body font-semibold">
                  <a href="https://wa.me/34679910422" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-body font-semibold border-2">
                  <a href="https://instagram.com/valenciawebstudio" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    @valenciawebstudio
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-xl mx-auto">
              <h2 className="font-display text-xl font-bold text-foreground mb-5 text-center">
                O déjanos un mensaje aquí
              </h2>
              
              {isSubmitted ? (
                <div className="text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-body text-muted-foreground mb-5">
                    Gracias por escribirnos. Te respondemos lo antes posible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="font-body"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 animate-fade-in">
                  <div>
                    <label htmlFor="name" className="font-body text-sm font-medium text-foreground block mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Tu nombre"
                      className="font-body"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="font-body text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="tu@email.com"
                      className="font-body"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="font-body text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="font-body text-sm font-medium text-foreground block mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Cuéntanos tu proyecto..."
                      rows={4}
                      className="font-body resize-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="font-body text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyValue}
                      onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
                      disabled={isSubmitting}
                      className="mt-0.5"
                    />
                    <label htmlFor="privacy" className="font-body text-sm text-muted-foreground cursor-pointer">
                      He leído y acepto la{" "}
                      <Link to="/politica-privacidad" className="text-secondary hover:underline">
                        política de privacidad
                      </Link>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="font-body text-sm text-destructive">{errors.privacy.message}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
