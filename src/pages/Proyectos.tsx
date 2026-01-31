import { Link } from "react-router-dom";
import { ExternalLink, TrendingUp, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const projects = [
  {
    title: "Peluquería en Valencia",
    description:
      "Web profesional para una peluquería en Valencia. Diseño moderno y claro, con sistema de contacto directo por WhatsApp.",
    image: projectPeluqueria,
    demoUrl: "/demo/peluqueria",
    metrics: [
      { icon: Phone, text: "+40% llamadas en 30 días" },
      { icon: TrendingUp, text: "Top 5 en Google Maps" },
    ],
    services: ["Diseño web", "SEO local", "Google Business"],
  },
  {
    title: "Trattoria San Luca",
    description:
      "Restaurante italiano en Ruzafa. Diseño cálido y elegante con carta, menús del día y sistema de reservas integrado.",
    image: projectTrattoria,
    demoUrl: "/demo/trattoria",
    metrics: [
      { icon: Calendar, text: "+25 reservas/semana" },
      { icon: TrendingUp, text: "Primera página Google" },
    ],
    services: ["Diseño web", "SEO local", "Sistema reservas"],
  },
  {
    title: "Estudio de Tatuajes",
    description:
      "Web con estilo industrial para un estudio de tatuajes. Galería de trabajos, estilos y reserva de citas.",
    image: projectPeluqueria,
    demoUrl: "/demo/tatuajes",
    metrics: [
      { icon: Phone, text: "+35% solicitudes de cita" },
      { icon: TrendingUp, text: "Top 5 en Google Maps" },
    ],
    services: ["Diseño web", "SEO local", "Galería interactiva"],
  },
  {
    title: "Clínica Dental Ruzafa",
    description:
      "Clínica dental con web orientada a conversión. Formulario de cita previa y galería de tratamientos.",
    image: projectPeluqueria,
    demoUrl: null,
    metrics: [
      { icon: Phone, text: "+60% citas online" },
      { icon: TrendingUp, text: "Top 3 en búsquedas locales" },
    ],
    services: ["Diseño web", "SEO local", "Formularios"],
    comingSoon: true,
  },
  {
    title: "Taller Mecánico AutoFix",
    description:
      "Taller de coches con presencia online profesional. Catálogo de servicios y solicitud de cita.",
    image: projectTrattoria,
    demoUrl: null,
    metrics: [
      { icon: Phone, text: "+35% nuevos clientes" },
      { icon: TrendingUp, text: "Visible en Google Maps" },
    ],
    services: ["Diseño web", "SEO local", "Google Business"],
    comingSoon: true,
  },
  {
    title: "Floristería Valencia",
    description:
      "Floristería con catálogo visual y pedidos por WhatsApp. Diseño fresco y colorido.",
    image: projectPeluqueria,
    demoUrl: null,
    metrics: [
      { icon: Calendar, text: "+50% pedidos online" },
      { icon: TrendingUp, text: "Mayor visibilidad local" },
    ],
    services: ["Diseño web", "Catálogo", "WhatsApp Business"],
    comingSoon: true,
  },
  {
    title: "Gimnasio CrossFit",
    description:
      "Centro deportivo con horarios, clases y formulario de inscripción. Diseño dinámico y moderno.",
    image: projectTrattoria,
    demoUrl: null,
    metrics: [
      { icon: Phone, text: "+45% inscripciones" },
      { icon: TrendingUp, text: "Mejor posicionamiento" },
    ],
    services: ["Diseño web", "SEO local", "Formularios"],
    comingSoon: true,
  },
];

const Proyectos = () => {
  return (
    <Layout
      title="Proyectos de diseño web en Valencia | Valencia Web Studio"
      description="Casos reales de diseño web y SEO local para negocios de Valencia. Mira cómo ayudamos a otros negocios a conseguir más clientes."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Proyectos que funcionan
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Casos reales de negocios que han mejorado su presencia online y
              están consiguiendo más clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                        <span className="font-body text-sm font-semibold text-primary-foreground bg-secondary/90 px-3 py-1 rounded-full">
                          Próximamente
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="font-display text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <metric.icon className="w-4 h-4 text-secondary" />
                          <span className="font-body text-foreground font-medium">
                            {metric.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="text-xs font-body bg-accent text-accent-foreground px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {project.demoUrl && (
                      <Button
                        asChild
                        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      >
                        <Link to={project.demoUrl}>
                          Ver demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Quieres ver tu negocio aquí?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Hablemos de tu proyecto y diseñamos algo que funcione de verdad
            para tu negocio.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
          >
            <Link to="/contacto">Empezar proyecto</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
