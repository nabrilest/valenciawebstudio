import { Link } from "react-router-dom";
import { Shield, CreditCard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingCard from "@/components/PricingCard";

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
      "Diseño responsive",
      "Formulario de contacto",
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
      "Integración redes sociales",
      "Soporte prioritario",
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
      "Sistema de reservas",
      "Catálogo de productos",
      "Formación avanzada",
    ],
  },
];

const Precios = () => {
  return (
    <Layout
      title="Precios diseño web Valencia | Valencia Web Studio"
      description="Precios claros y sin sorpresas. Webs profesionales desde 799€ con SEO local incluido."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Precios claros, sin sorpresas
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Sabemos lo que cuesta porque sabemos lo que hacemos. Aquí no hay
              letra pequeña.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Pago en 3 plazos
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  40% al empezar, 30% a mitad, 30% al final
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Garantía 90 días
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Si algo técnico no está bien, lo corregimos sin coste
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Trato cercano
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Hablas siempre con la misma persona, sin intermediarios
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-muted/50 rounded-xl p-5 border border-border">
              <p className="font-body text-sm text-muted-foreground text-center leading-relaxed">
                Todos los planes incluyen SEO local. El mantenimiento adicional
                tiene un coste de 49€/mes. Dominio y hosting se contratan aparte
                (te ayudamos a elegirlos).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="gradient-primary rounded-2xl p-6 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              ¿No sabes cuál elegir?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Te ayudamos a elegir el plan que mejor encaja con tu negocio.
              Hablamos 10 minutos y lo vemos juntos.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
            >
              <Link to="/contacto">Contactar para empezar</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
