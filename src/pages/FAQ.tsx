import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const faqs = [
  {
    question: "¿Cuánto cuesta una web?",
    answer:
      "Tenemos tres opciones: 799€, 1.499€ y 2.799€. Cada plan incluye diferentes servicios según las necesidades de tu negocio. Te ayudamos a elegir la que mejor encaja contigo sin compromiso.",
  },
  {
    question: "¿Cuánto tarda en estar lista?",
    answer:
      "Entre 2 y 8 semanas, según el proyecto. Una web básica puede estar en 2-3 semanas. Proyectos más complejos con ecommerce o muchas páginas pueden llevar más tiempo. Te damos fechas concretas desde el principio.",
  },
  {
    question: "¿Me aseguras salir el primero en Google?",
    answer:
      "No se pueden garantizar posiciones exactas (nadie puede hacerlo legalmente). Lo que sí hacemos es trabajar bien tu web y tu ficha de Google para mejorar tu visibilidad local. Muchos clientes empiezan a recibir llamadas en las primeras semanas.",
  },
  {
    question: "¿Incluye SEO local?",
    answer:
      "Sí, todos los planes incluyen SEO local. Esto significa que optimizamos tu web para que aparezcas cuando alguien busca tu servicio en tu zona. También configuramos tu Google Business Profile para que te encuentren en Google Maps.",
  },
  {
    question: "¿Puedo editar la web yo mismo?",
    answer:
      "Sí, te damos acceso a un panel sencillo donde puedes cambiar textos, fotos y contenidos básicos. Además, te explicamos cómo hacerlo en una formación incluida en todos los planes.",
  },
  {
    question: "¿Hay permanencia?",
    answer:
      "No. El proyecto es tuyo y el mantenimiento es opcional. Una vez terminada la web, es tuya para siempre. Si quieres que nos encarguemos del mantenimiento mensual (actualizaciones, backups, pequeños cambios), son 49€/mes sin permanencia.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer:
      "Trabajamos contigo durante todo el proceso. Te mostramos el diseño antes de publicar y hacemos las revisiones necesarias hasta que estés satisfecho. Incluimos varias rondas de cambios en todos los planes.",
  },
  {
    question: "¿Necesito tener dominio y hosting?",
    answer:
      "No es obligatorio tenerlo antes. Te ayudamos a elegir y contratar el dominio y hosting más adecuados para tu negocio. Son servicios aparte (desde 50€/año aproximadamente) pero te guiamos en todo.",
  },
  {
    question: "¿Hacéis webs para cualquier tipo de negocio?",
    answer:
      "Nos especializamos en negocios locales de Valencia: restaurantes, peluquerías, clínicas, tiendas, talleres... Si tu negocio atiende a clientes de tu zona, podemos ayudarte.",
  },
  {
    question: "¿Cómo es la garantía de 90 días?",
    answer:
      "Durante 90 días después de la entrega, corregimos sin coste cualquier problema técnico de la web (errores, fallos de funcionamiento, etc.). No incluye cambios de diseño o nuevas funcionalidades, pero sí todo lo que no funcione como debería.",
  },
];

const FAQ = () => {
  return (
    <Layout
      title="Preguntas frecuentes | Valencia Web Studio"
      description="Respuestas a las preguntas más habituales sobre diseño web y SEO local en Valencia."
    >
      {/* Hero Section */}
      <section className="gradient-primary py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Preguntas frecuentes
            </h1>
            <p className="font-body text-lg text-primary-foreground/90">
              Las dudas más comunes sobre nuestros servicios. Si no encuentras
              tu respuesta, escríbenos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="font-display text-left text-lg font-semibold text-foreground hover:text-secondary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Tienes más preguntas?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Escríbenos sin compromiso y te respondemos en menos de 24 horas.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold"
          >
            <Link to="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
