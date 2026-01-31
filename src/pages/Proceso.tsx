import { Link } from "react-router-dom";
import { Calendar, TrendingUp, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const timelineSteps = [
  {
    day: "30",
    title: "Web publicada",
    description:
      "Tu web está online y conectada con Google. Empezamos a indexar y configuramos Analytics para medir.",
    icon: Calendar,
    metrics: ["Web 100% funcional", "Google Analytics activo", "Ficha de Google configurada"],
  },
  {
    day: "60",
    title: "Más visitas",
    description:
      "Google empieza a mostrarte en búsquedas locales. Las primeras visitas empiezan a llegar.",
    icon: TrendingUp,
    metrics: ["Posicionamiento inicial", "Primeras visitas orgánicas", "Mejoras de SEO aplicadas"],
  },
  {
    day: "90",
    title: "Más llamadas",
    description:
      "El trabajo de SEO da resultados. Empiezas a recibir llamadas y mensajes de clientes nuevos.",
    icon: Phone,
    metrics: ["Llamadas desde Google", "Mensajes de contacto", "Clientes nuevos"],
  },
];

const Proceso = () => {
  return (
    <Layout
      title="Proceso y resultados | Valencia Web Studio"
      description="Cómo trabajamos y qué resultados puedes esperar. Timeline de 30, 60 y 90 días con métricas reales."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Cómo medimos si funciona
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              No hablamos de promesas, hablamos de datos. Así es como trabajamos
              y qué puedes esperar.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Tu timeline de resultados
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Esto es lo que pasa después de publicar tu web
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              {timelineSteps.map((step, index) => (
                <AnimatedSection key={step.day} delay={index * 150}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 mb-10 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 md:px-8">
                      <div
                        className={`bg-card rounded-xl p-6 border border-border shadow-sm ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-4 ${
                            index % 2 === 0
                              ? "md:justify-end"
                              : "md:justify-start"
                          }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="font-body text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <ul
                          className={`space-y-2 ${
                            index % 2 === 0 ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          {step.metrics.map((metric, metricIndex) => (
                            <li
                              key={metricIndex}
                              className={`flex items-center gap-2 text-sm text-muted-foreground ${
                                index % 2 === 0
                                  ? "md:flex-row-reverse"
                                  : "md:flex-row"
                              }`}
                            >
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Day marker */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex flex-col items-center justify-center shadow-lg">
                        <span className="font-display text-xl font-bold">
                          {step.day}
                        </span>
                        <span className="text-xs">días</span>
                      </div>
                    </div>

                    {/* Mobile day marker */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex flex-col items-center justify-center">
                        <span className="font-display text-lg font-bold">
                          {step.day}
                        </span>
                        <span className="text-[10px]">días</span>
                      </div>
                    </div>

                    {/* Empty space for layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Nuestro proceso paso a paso
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Hablamos 10 minutos",
                  desc: "Nos cuentas tu negocio y vemos qué necesitas",
                },
                {
                  step: 2,
                  title: "Te decimos qué plan encaja",
                  desc: "Sin presión, con opciones claras",
                },
                {
                  step: 3,
                  title: "Diseñamos y montamos",
                  desc: "Tú ves el progreso y das feedback",
                },
                {
                  step: 4,
                  title: "Publicamos y conectamos",
                  desc: "Web online + Google configurado",
                },
                {
                  step: 5,
                  title: "Revisamos y mejoramos",
                  desc: "Analizamos datos y optimizamos",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 100}>
                  <div className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 font-display font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Empezamos?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Pide tu auditoría gratuita y te contamos cómo podemos ayudarte.
          </p>
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
        </div>
      </section>
    </Layout>
  );
};

export default Proceso;
