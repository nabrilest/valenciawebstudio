import { Link } from "react-router-dom";
import { Globe, Search, Wrench, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const services = [
  {
    icon: Globe,
    title: "Diseño web",
    description:
      "Webs profesionales, fáciles de usar y pensadas para que te contacten. Diseñamos con un objetivo claro: convertir visitas en clientes.",
    features: [
      "Diseño responsive (móvil, tablet, ordenador)",
      "Formularios de contacto o WhatsApp directo",
      "Velocidad optimizada",
      "Panel para editar contenidos",
    ],
  },
  {
    icon: Search,
    title: "SEO local",
    description:
      "Trabajamos tu presencia en Google para que te encuentren personas cercanas a tu negocio cuando buscan tus servicios.",
    features: [
      "Optimización para búsquedas locales",
      "Google Business Profile configurada",
      "Palabras clave de tu sector",
      "Seguimiento de posiciones",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Nos ocupamos de que todo funcione bien. Actualizaciones, copias de seguridad, pequeños cambios y soporte cuando lo necesites.",
    features: [
      "Actualizaciones de seguridad",
      "Copias de seguridad periódicas",
      "Pequeños cambios de contenido",
      "Soporte por WhatsApp",
    ],
    price: "Desde 49€/mes",
  },
  {
    icon: Camera,
    title: "Fotografía y contenidos",
    description:
      "Fotos y textos que hacen que tu negocio se vea más profesional. Porque la imagen importa.",
    features: [
      "Fotografía de tu local o productos",
      "Redacción de textos para la web",
      "Optimización de imágenes",
      "Banco de fotos profesional",
    ],
  },
];

const Servicios = () => {
  return (
    <Layout
      title="Servicios de diseño web en Valencia | Valencia Web Studio"
      description="Diseño web, SEO local, mantenimiento y fotografía para negocios de Valencia. Servicios profesionales con precios claros."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Servicios para hacer crecer tu negocio
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Todo lo que necesitas para tener presencia online y que te
              encuentren tus clientes. Sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full border-border hover:border-secondary/30 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-display text-xl md:text-2xl text-foreground">
                      {service.title}
                    </CardTitle>
                    {service.price && (
                      <p className="font-body text-secondary font-semibold">
                        {service.price}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Local Highlight */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Por qué el SEO local es importante?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Cuando alguien busca "peluquería cerca de mí" o "restaurante en
              Ruzafa", quieres aparecer ahí. El SEO local es lo que hace que
              Google te muestre a personas de tu zona que buscan lo que tú
              ofreces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { number: "76%", text: "de búsquedas locales visitan un negocio en 24h" },
                { number: "88%", text: "de búsquedas en móvil son locales" },
                { number: "46%", text: "de todas las búsquedas en Google son locales" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 border border-border"
                >
                  <p className="font-display text-3xl font-bold text-secondary mb-1">
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Quieres saber qué servicio necesitas?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Te hacemos una auditoría gratuita de tu presencia online y te
            recomendamos lo que mejor encaja contigo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
            >
              <Link to="/contacto">
                Solicitar información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-body font-semibold"
            >
              <Link to="/precios">Ver precios</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
