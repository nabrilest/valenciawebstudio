import { Link } from "react-router-dom";
import { Monitor, Layout as LayoutIcon, Zap, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Servicios = () => {
  const services = [
    {
      icon: Monitor,
      title: "Diseño web a medida",
      price: "desde 450€",
      description: "Tu web pensada desde cero. Nada de plantillas ni diseños sacados de una fábrica. Cada proyecto es único, como tu negocio.",
    },
    {
      icon: LayoutIcon,
      title: "Webs corporativas",
      price: "desde 600€",
      description: "Para empresas que quieren transmitir profesionalidad y confianza. Diseño serio pero cercano, sin aburrir.",
    },
    {
      icon: Zap,
      title: "Landing pages",
      price: "desde 350€",
      description: "Páginas directas al grano. Perfectas para captar clientes, presentar un producto o lanzar una campaña.",
    },
    {
      icon: MousePointer,
      title: "Experiencia de usuario",
      price: "incluido",
      description: "Webs fáciles de usar y agradables de navegar. Que tus clientes encuentren lo que buscan sin frustrarse.",
    },
  ];

  return (
    <Layout
      title="Servicios de diseño web en Valencia | Valencia Web Studio"
      description="Diseño web profesional en Valencia. Webs corporativas, diseño a medida y landings con factura."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Servicios de diseño web
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Precios claros desde el principio. Sin sorpresas, sin letra pequeña. Siempre con factura.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="font-body text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
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
      <section className="section-alt py-10 md:py-14">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Tienes dudas sobre precios?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Cuéntanos tu proyecto y te hacemos un presupuesto personalizado sin compromiso.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
            <Link to="/contacto">Pedir presupuesto</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
