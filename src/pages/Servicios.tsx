import { Link } from "react-router-dom";
import { Check, Globe, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Servicios = () => {
  const packs = [
    {
      icon: Globe,
      title: "Web básica profesional",
      price: "149",
      features: [
        "1 página con secciones (inicio, servicios, contacto)",
        "Diseño limpio y moderno",
        "Web adaptable a móvil y tablet",
        "Formulario de contacto o botón de WhatsApp",
        "Textos facilitados por el cliente",
        "Entrega rápida",
      ],
    },
    {
      icon: Layers,
      title: "Web básica ampliada",
      price: "189",
      featured: true,
      features: [
        "Hasta 3 páginas (Inicio, Servicios, Contacto)",
        "Diseño personalizado sencillo",
        "Web responsive",
        "Enlaces a redes sociales",
        "Optimización básica de velocidad",
        "Asesoramiento inicial",
      ],
    },
    {
      icon: Target,
      title: "Landing page",
      price: "129",
      subtitle: "Una landing page es una página web de una sola página, diseñada para que el visitante realice una acción concreta, como contactar, solicitar información o comprar, sin distracciones.",
      features: [
        "Página única enfocada a conversión",
        "Estructura clara y directa",
        "Llamadas a la acción visibles",
        "Versión móvil incluida",
      ],
    },
  ];

  return (
    <Layout
      title="Servicios de diseño web en Valencia | Valencia Web Studio"
      description="Diseño web profesional en Valencia. Packs cerrados con precios económicos y sin sorpresas."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Servicios de diseño web
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Packs cerrados con precios claros. Sin sorpresas, sin letra pequeña.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Trabajo con packs cerrados y bien definidos, lo que me permite ofrecer precios económicos sin renunciar a la calidad. Cada proyecto tiene un alcance claro desde el inicio, así sabes exactamente qué incluye tu web y evitas costes inesperados.
            </p>
          </div>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="pb-10 md:pb-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packs.map((pack, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up ${
                  pack.featured 
                    ? "border-secondary shadow-lg ring-2 ring-secondary/20" 
                    : "border-border hover:border-secondary/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pack.featured && (
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Más popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    pack.featured ? "bg-secondary/10" : "bg-accent"
                  }`}>
                    <pack.icon className={`w-7 h-7 ${pack.featured ? "text-secondary" : "text-accent-foreground"}`} />
                  </div>
                  <CardTitle className="font-display text-xl md:text-2xl text-foreground">
                    {pack.title}
                  </CardTitle>
                  <div className="mt-3">
                    <span className="font-display text-4xl font-bold text-foreground">{pack.price}</span>
                    <span className="font-body text-muted-foreground ml-1">€</span>
                  </div>
                  {pack.subtitle && (
                    <CardDescription className="mt-3 text-sm leading-relaxed">
                      {pack.subtitle}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full mt-6 font-body font-semibold ${
                      pack.featured 
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <Link to="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Note */}
      <section className="pb-10 md:pb-14">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-muted/50 rounded-xl p-5 border border-border">
              <p className="font-body text-sm text-muted-foreground text-center leading-relaxed">
                No incluye dominio, hosting ni mantenimiento. Cambios adicionales o páginas extra se presupuestan aparte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt py-10 md:py-14">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Tienes dudas sobre los packs?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Cuéntame tu proyecto y te ayudo a elegir el pack que mejor se adapta a tus necesidades.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
            <Link to="/contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
