import { Link } from "react-router-dom";
import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import projectPeluqueria from "@/assets/project-peluqueria.jpg";

const Proyectos = () => {
  const projects = [
    {
      title: "Peluquería en Valencia",
      description: "Demo de una web para una peluquería en Valencia. Diseño moderno, claro y profesional, enfocado en mostrar servicios, horarios y facilitar el contacto con clientes.",
      image: projectPeluqueria,
      demoUrl: "/demo/peluqueria",
      status: "available",
    },
    {
      title: "Próximamente",
      description: "Estamos preparando nuevas demos de diseño web para distintos tipos de negocios locales.",
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
      <section className="gradient-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Proyectos de diseño web
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Ejemplos de diseño web para negocios locales en Valencia. Todas las demos se visualizan dentro de nuestra web.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
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
                    <Clock className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-3">
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
      <section className="section-alt py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Quieres ver tu negocio aquí?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Contacta con nosotros y diseñamos la web perfecta para tu proyecto.
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
