import { Link } from "react-router-dom";
import { Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialMenus = [
  {
    name: "Menú del Día",
    price: "16,90€",
    description: "De lunes a viernes mediodía",
    includes: ["Primo piatto a elegir", "Secondo piatto a elegir", "Postre o café", "Agua o copa de vino"]
  },
  {
    name: "Menú Degustación",
    price: "38€",
    description: "Viaje por los sabores de Italia",
    includes: ["Selección de antipasti", "Pasta fresca del día", "Secondo a elegir", "Dulce de la casa", "Maridaje de vinos opcional (+15€)"]
  }
];

const TrattoriaMenus = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
            Menús especiales
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4">
            Para disfrutar sin complicaciones
          </h1>
          <p className="text-[#F5E6D3]/80 max-w-2xl mx-auto">
            Nuestros menús pensados para que disfrutes de una experiencia completa
          </p>
        </div>
      </section>

      {/* Menus Section */}
      <section className="py-16 md:py-24 bg-[#E8DED4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialMenus.map((menu, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4A574]/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2C1810]">{menu.name}</h2>
                    <p className="text-[#5C4033]/70 text-sm">{menu.description}</p>
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#D4A574]">{menu.price}</span>
                </div>
                <ul className="space-y-2">
                  {menu.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#5C4033]">
                      <Star className="h-4 w-4 text-[#D4A574] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2C1810] mb-4">
            ¿Quieres ver todos nuestros platos?
          </h2>
          <p className="text-[#5C4033]/80 mb-6">
            Descubre nuestra carta completa con todos los antipasti, pastas, pizzas y postres
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-[#D4A574] hover:bg-[#C49460] text-[#2C1810] font-semibold"
          >
            <Link to="/demo/trattoria/carta">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver carta completa
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default TrattoriaMenus;
