import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Palette, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const benefits = [
    { icon: Globe, text: "Estudio de diseño web en Valencia" },
    { icon: Users, text: "Trato cercano y comunicación clara" },
    { icon: Palette, text: "Precios accesibles para pequeños negocios" },
    { icon: Check, text: "Enfoque en comercio local" },
    { icon: FileText, text: "Emitimos factura en todos los proyectos" },
  ];

  return (
    <Layout
      title="Diseño web en Valencia | Valencia Web Studio"
      description="Estudio de diseño web en Valencia. Webs profesionales, modernas y accesibles para negocios locales. Emitimos factura."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Diseño web en Valencia para negocios que quieren crecer
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              En Valencia Web Studio diseñamos páginas web profesionales para negocios de Valencia que buscan una presencia online clara, moderna y fiable. Somos un estudio joven, cercano y comprometido con el comercio local.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
                <Link to="/proyectos">
                  Ver proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Webs profesionales, accesibles y pensadas para tu negocio
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Creamos páginas web a medida, adaptadas a cada proyecto y a cada cliente. Nos centramos en el diseño, la experiencia de usuario y la claridad del mensaje para transmitir confianza desde el primer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-alt py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Por qué elegir Valencia Web Studio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="font-body text-foreground font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="gradient-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Cuéntanos tu idea y te ayudamos a darle forma con una web profesional.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
              <Link to="/contacto">
                Contactar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
