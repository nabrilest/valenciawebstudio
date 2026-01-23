import { Link } from "react-router-dom";
import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import projectPeluqueria from "@/assets/project-peluqueria.jpg";

const Proyectos = () => {
  const projects = [
    {
      title: "Peluquería en Valencia",
      description: "Demo de una web para una peluquería en Valencia. Diseño moderno, claro y profesional, enfocado en mostrar servicios, horarios y facilitar el contacto.",
      image: projectPeluqueria,
      demoUrl: "/demo/peluqueria",
      status: "available",
    },
    {
      title: "Próximamente",
      description: "Estamos preparando nuevas demos para distintos tipos de negocios locales.",
      image: null,
      demoUrl: null,
      status: "coming",
    },
    {
      title: "Próximamente",
      description: "Nuevos proyectos se añadirán próximamente.",
      image: null,
      demoUrl: null,
      status: "coming",
    },
  ];

  return (
    <Layout
      title="Proyectos de diseño web en Valencia | Valencia Web Studio"
      description="Ejemplos de diseño web para negocios locales en Valencia."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Nuestros proyectos
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Ejemplos reales de lo que hacemos. Diseños pensados para negocios de Valencia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.image ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Clock className="w-10 h-10 text-muted-foreground/50" />
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {project.demoUrl && (
                    <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link to={project.demoUrl}>
                        Ver demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt py-10 md:py-14">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Quieres ver tu negocio aquí?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Hablemos de tu proyecto y diseñamos algo que mole de verdad.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
            <Link to="/contacto">Empezar proyecto</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
