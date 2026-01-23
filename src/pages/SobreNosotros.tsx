import { MapPin, Heart, FileCheck } from "lucide-react";
import Layout from "@/components/Layout";

const SobreNosotros = () => {
  const values = [
    {
      icon: MapPin,
      title: "Valencia",
      description: "Ubicados en Valencia, conocemos el tejido empresarial local y sus necesidades.",
    },
    {
      icon: Heart,
      title: "Comercio local",
      description: "Creemos en el comercio local y en apoyar a los negocios de nuestro entorno.",
    },
    {
      icon: FileCheck,
      title: "Transparencia",
      description: "Trabajamos de forma transparente, emitiendo factura en todos nuestros servicios.",
    },
  ];

  return (
    <Layout
      title="Estudio de diseño web en Valencia | Valencia Web Studio"
      description="Estudio joven de diseño web en Valencia enfocado en comercio local."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Estudio de diseño web en Valencia
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg animate-fade-in">
              <p className="font-body text-lg text-foreground leading-relaxed mb-6">
                Valencia Web Studio es un estudio de diseño web ubicado en Valencia. Acabamos de empezar como estudio, pero trabajamos cada proyecto con profesionalidad, atención al detalle y trato cercano.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Creemos en el comercio local y en la importancia de que cada negocio tenga una web que lo represente de verdad. Ofrecemos diseño web accesible y trabajamos siempre de forma transparente, emitiendo factura en todos nuestros servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-alt py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
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
