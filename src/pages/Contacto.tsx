import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, MessageCircle, Instagram, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import MobileCallButton from "@/components/MobileCallButton";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  business: z.string().trim().max(100, "Máximo 100 caracteres").optional(),
  phone: z.string().trim().max(20, "Máximo 20 caracteres").optional(),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  neighborhood: z.string().trim().max(100, "Máximo 100 caracteres").optional(),
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
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      business: "",
      phone: "",
      email: "",
      neighborhood: "",
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
          business: data.business || "",
          phone: data.phone || "",
          neighborhood: data.neighborhood || "",
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
        return;
      }

      setIsSubmitted(true);
      toast.success("Mensaje enviado correctamente");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <Layout
      title="Pide tu auditoría gratuita | Valencia Web Studio"
      description="Solicita tu auditoría gratuita de 10 minutos. Te analizamos tu presencia online y te decimos cómo mejorar."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Pide tu auditoría gratuita
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              10 minutos para analizar tu presencia online y contarte cómo
              podemos ayudarte. Sin compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefits Sidebar */}
              <div className="md:col-span-1 space-y-4">
                <div className="bg-accent rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Solo 10 minutos
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Hablamos por teléfono o videollamada y te contamos qué
                    podemos hacer por tu negocio.
                  </p>
                </div>

                <div className="bg-accent rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-secondary" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Sin compromiso
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    No te vamos a presionar. Te damos información clara y tú
                    decides.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    ¿Prefieres escribirnos?
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      className="bg-[#25D366] text-white hover:bg-[#25D366]/90 font-body font-semibold w-full"
                    >
                      <a
                        href="https://wa.me/34679910422"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="font-body font-semibold w-full"
                    >
                      <a
                        href="https://instagram.com/valenciawebstudio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        @valenciawebstudio
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
                  <h2 className="font-display text-xl font-bold text-foreground mb-5">
                    Cuéntanos sobre tu negocio
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-8 animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        ¡Mensaje enviado!
                      </h3>
                      <p className="font-body text-muted-foreground mb-5">
                        Gracias por escribirnos. Te contactamos en menos de 24
                        horas.
                      </p>
                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="font-body"
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5 animate-fade-in"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="font-body text-sm font-medium text-foreground block mb-2"
                          >
                            Nombre *
                          </label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="Tu nombre"
                            className="font-body"
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="font-body text-sm text-destructive mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="business"
                            className="font-body text-sm font-medium text-foreground block mb-2"
                          >
                            Negocio
                          </label>
                          <Input
                            id="business"
                            {...register("business")}
                            placeholder="Nombre de tu negocio"
                            className="font-body"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="font-body text-sm font-medium text-foreground block mb-2"
                          >
                            Teléfono
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="Tu teléfono"
                            className="font-body"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="font-body text-sm font-medium text-foreground block mb-2"
                          >
                            Email *
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
                            <p className="font-body text-sm text-destructive mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="neighborhood"
                          className="font-body text-sm font-medium text-foreground block mb-2"
                        >
                          Barrio o ciudad
                        </label>
                        <Input
                          id="neighborhood"
                          {...register("neighborhood")}
                          placeholder="Ej: Ruzafa, Benimaclet, Valencia..."
                          className="font-body"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="font-body text-sm font-medium text-foreground block mb-2"
                        >
                          Mensaje *
                        </label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                          rows={4}
                          className="font-body resize-none"
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <p className="font-body text-sm text-destructive mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={privacyValue}
                          onCheckedChange={(checked) =>
                            setValue("privacy", checked as boolean)
                          }
                          disabled={isSubmitting}
                          className="mt-0.5"
                        />
                        <label
                          htmlFor="privacy"
                          className="font-body text-sm text-muted-foreground cursor-pointer"
                        >
                          He leído y acepto la{" "}
                          <Link
                            to="/politica-privacidad"
                            className="text-secondary hover:underline"
                          >
                            política de privacidad
                          </Link>
                        </label>
                      </div>
                      {errors.privacy && (
                        <p className="font-body text-sm text-destructive">
                          {errors.privacy.message}
                        </p>
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
                            Solicitar auditoría
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Call Button */}
      <MobileCallButton />
    </Layout>
  );
};

export default Contacto;
