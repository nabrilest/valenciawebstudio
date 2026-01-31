import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Search,
  Globe,
  Phone,
  MessageCircle,
  Shield,
  CreditCard,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingCard from "@/components/PricingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import projectPeluqueria from "@/assets/project-peluqueria.jpg";
import projectTrattoria from "@/assets/project-trattoria.jpg";

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

const pricingPlans = [
  {
    title: "Básico",
    price: "799",
    description: "Para negocios pequeños que necesitan presencia online.",
    features: [
      "Web hasta 5 páginas",
      "SEO local básico",
      "Google Business Profile",
      "Formación básica",
    ],
  },
  {
    title: "Avanzado",
    price: "1.499",
    description: "Para negocios que quieren más clientes.",
    features: [
      "Diseño a medida",
      "Web hasta 8 páginas",
      "SEO local avanzado",
      "Google Business Profile optimizada",
      "1 mes de mantenimiento",
    ],
    featured: true,
  },
  {
    title: "Premium",
    price: "2.799",
    description: "Para negocios con reservas o venta online.",
    features: [
      "Web avanzada o ecommerce ligero",
      "SEO local completo",
      "Fotografías del negocio",
      "3 meses de mantenimiento",
    ],
  },
];

const processSteps = [
  { step: 1, title: "Hablamos 10 minutos", desc: "Vemos tu caso y necesidades" },
  { step: 2, title: "Te decimos qué plan encaja", desc: "Sin presión, con claridad" },
  { step: 3, title: "Diseñamos y montamos", desc: "Tu web, paso a paso" },
  { step: 4, title: "Publicamos y conectamos", desc: "Online y en Google" },
  { step: 5, title: "Revisamos y mejoramos", desc: "Analizamos resultados" },
];

const caseStudies = [
  {
    title: "Peluquería en Valencia",
    result: "Más llamadas en pocas semanas",
    description:
      "Web clara con reservas por WhatsApp. El cliente empezó a recibir llamadas desde Google.",
    image: projectPeluqueria,
    link: "/demo/peluqueria",
  },
  {
    title: "Trattoria San Luca",
    result: "Reservas directas desde la web",
    description:
      "Diseño elegante con carta, menús y sistema de reservas integrado.",
    image: projectTrattoria,
    link: "/demo/trattoria",
  },
];

const Home = () => {
  return (
    <Layout
      title="Diseño web y SEO local en Valencia | Valencia Web Studio"
      description="Webs profesionales y SEO local para negocios de Valencia. Más llamadas y más clientes desde Google. Auditoría gratuita de 10 minutos."
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
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              Webs y SEO local para negocios de Valencia
            </h1>
            <p className="font-body text-xl md:text-2xl text-secondary font-semibold mb-3">
              Más llamadas y más clientes desde Google
            </p>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-2xl">
              Hacemos webs claras y trabajamos tu presencia en Google para que
              te encuentren y te llamen. Sin líos, sin humo. Auditoría gratuita
              de 10 minutos.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
              >
                <Link to="/contacto">
                  Solicitar auditoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-body font-semibold"
              >
                <Link to="/precios">Ver precios</Link>
              </Button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                Garantía técnica 90 días
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-secondary" />
                Pago en 3 plazos
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                Trato cercano
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Qué hacemos?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Ayudamos a negocios de barrio a tener una web profesional y a
              salir mejor en Google para conseguir más llamadas y reservas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Web clara y fácil de usar",
                desc: "Diseños pensados para que tus clientes encuentren lo que buscan",
              },
              {
                icon: Search,
                title: "SEO local",
                desc: "Para que te encuentren cuando buscan tu servicio cerca",
              },
              {
                icon: TrendingUp,
                title: "Seguimiento y mejoras",
                desc: "Analizamos datos y mejoramos con el tiempo",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Por qué funciona?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Search,
                text: "Te encuentran cuando buscan tu servicio en Google",
              },
              {
                icon: Phone,
                text: "Pueden llamarte fácilmente desde el móvil",
              },
              {
                icon: Eye,
                text: "Ves resultados reales (llamadas, mensajes)",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="font-body text-foreground font-medium">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Precios claros
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Sin sorpresas, sin letra pequeña
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection
                key={plan.title}
                delay={index * 100}
                className="h-full"
              >
                <PricingCard {...plan} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body font-semibold"
            >
              <Link to="/precios">Ver detalles de cada plan</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Cómo trabajamos
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-3 font-display font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body font-semibold"
            >
              <Link to="/proceso">Ver proceso completo</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Casos reales
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Ejemplos de lo que hacemos para negocios como el tuyo
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Link
                  to={study.link}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="font-body text-sm text-secondary font-semibold">
                        {study.result}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body font-semibold"
            >
              <Link to="/proyectos">Ver todos los proyectos</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="gradient-primary rounded-2xl p-6 md:p-10 lg:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              ¿Hablamos 10 minutos y lo vemos?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Te hacemos una auditoría gratuita de tu presencia online y te
              contamos cómo podemos ayudarte. Sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
              >
                <Link to="/contacto">
                  Solicitar auditoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 font-body font-semibold"
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
