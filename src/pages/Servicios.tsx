import { Link } from "react-router-dom";
import { Monitor, Layout as LayoutIcon, Zap, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Servicios = () => {
  const services = [
    {
      icon: Monitor,
      title: "Diseño web a medida",
      description: "Diseñamos páginas web personalizadas para negocios de Valencia. Cada web se adapta a la identidad, necesidades y objetivos del cliente.",
    },
    {
      icon: LayoutIcon,
      title: "Webs corporativas",
      description: "Webs profesionales pensadas para empresas que quieren transmitir confianza, seriedad y una imagen sólida en internet.",
    },
    {
      icon: Zap,
      title: "Landing pages",
      description: "Páginas enfocadas a conversión, ideales para captar clientes y presentar servicios de forma clara y directa.",
    },
    {
      icon: MousePointer,
      title: "Experiencia de usuario",
      description: "Diseñamos webs fáciles de usar, claras y agradables, pensadas para guiar al usuario hacia el contacto.",
    },
  ];

  return (
    <Layout
      title="Servicios de diseño web en Valencia | Valencia Web Studio"
      description="Diseño web profesional en Valencia. Webs corporativas, diseño a medida y landings con factura."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Servicios de diseño web en Valencia
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Ofrecemos soluciones de diseño web adaptadas a las necesidades de cada negocio. Desde webs corporativas hasta landing pages optimizadas para conversión.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitas una web para tu negocio?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Cuéntanos tu proyecto y te asesoramos sin compromiso.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
            <Link to="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
