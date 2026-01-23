import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Palette, Users, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const benefits = [
    { icon: Globe, text: "Estudio ubicado en Valencia, conocemos el tejido local" },
    { icon: Users, text: "Trato directo, sin intermediarios ni rollos" },
    { icon: Palette, text: "Precios claros desde el primer día" },
    { icon: Check, text: "Enfocados 100% en comercio local" },
    { icon: FileText, text: "Siempre con factura, sin sorpresas" },
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
        
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl animate-slide-up">
            <p className="font-body text-secondary font-semibold text-lg mb-3">
              Hola, somos Valencia Web Studio
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              Webs que funcionan para negocios como el tuyo
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-2xl">
              Somos un estudio pequeño pero con las ideas muy claras: diseñamos webs profesionales, bonitas y que convierten visitas en clientes. Sin humo, sin jerga técnica.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
                <Link to="/proyectos">
                  Ver proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-body font-semibold">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tu web, pero hecha con cariño
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nada de plantillas genéricas ni diseños que parecen sacados de una fábrica. Cada web la pensamos desde cero para que represente tu negocio de verdad y conecte con tus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-alt py-10 md:py-14">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            ¿Por qué currar con nosotros?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-5 shadow-sm border border-border hover:shadow-md hover:border-secondary/30 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="font-body text-foreground font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="gradient-primary rounded-2xl p-6 md:p-10 lg:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              ¿Hablamos?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Cuéntanos tu idea por el canal que prefieras. Sin compromiso, sin agobios.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
                <Link to="/contacto">
                  Escribir mensaje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 font-body font-semibold">
                <a href="https://wa.me/34679910422" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
