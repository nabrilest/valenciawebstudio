import { MapPin, Heart, FileCheck } from "lucide-react";
import Layout from "@/components/Layout";

const SobreNosotros = () => {
  const values = [
    {
      icon: MapPin,
      title: "De Valencia",
      description: "Ubicados en Valencia. Conocemos el tejido empresarial local y hablamos tu idioma.",
    },
    {
      icon: Heart,
      title: "Comercio local",
      description: "Creemos en el comercio de barrio. Queremos ayudar a negocios reales a crecer.",
    },
    {
      icon: FileCheck,
      title: "100% transparentes",
      description: "Precios claros, siempre con factura. Sin sorpresas ni costes ocultos.",
    },
  ];

  return (
    <Layout
      title="Estudio de diseño web en Valencia | Valencia Web Studio"
      description="Estudio joven de diseño web en Valencia enfocado en comercio local."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Somos Valencia Web Studio
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Un estudio pequeño pero con las ideas muy claras 💡
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg animate-fade-in">
              <p className="font-body text-lg text-foreground leading-relaxed mb-4">
                Acabamos de empezar como estudio, es verdad. Pero trabajamos cada proyecto con el mismo cariño que si fuera el nuestro. Profesionalidad, atención al detalle y trato cercano.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Creemos que cada negocio merece una web que lo represente de verdad. Nada de plantillas que parecen sacadas de una fábrica. Diseño accesible, precios justos y siempre con factura. Así de simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-alt py-10 md:py-14">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Lo que nos mueve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNosotros;
