import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { toast } from "sonner";

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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", { name: data.name, email: data.email });
    setIsSubmitted(true);
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <Layout
      title="Contacto diseño web en Valencia | Valencia Web Studio"
      description="Contacta con Valencia Web Studio. Diseño web profesional en Valencia con factura."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Contacto · Diseño web en Valencia
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Si tienes un negocio en Valencia y necesitas una página web profesional, cuéntanos tu idea y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl mx-auto">
            {isSubmitted ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  ¡Mensaje enviado!
                </h2>
                <p className="font-body text-muted-foreground mb-6">
                  Gracias por contactar con nosotros. Te responderemos lo antes posible.
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
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
                    rows={5}
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
      </section>
    </Layout>
  );
};

export default Contacto;
