import { Link } from "react-router-dom";
import { 
  Phone, 
  Clock, 
  ChefHat, 
  Users, 
  CalendarCheck,
  UtensilsCrossed,
  BookOpen,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappNumber = "34600000000";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca`;

const quickLinks = [
  { icon: BookOpen, label: "Carta", path: "/demo/trattoria/carta" },
  { icon: UtensilsCrossed, label: "Menús", path: "/demo/trattoria/menus" },
  { icon: CalendarCheck, label: "Reservas", href: whatsappLink, external: true },
  { icon: Clock, label: "Horarios", path: "/demo/trattoria/contacto" },
  { icon: MapPin, label: "Ubicación", path: "/demo/trattoria/contacto" },
  { icon: Phone, label: "Contacto", path: "/demo/trattoria/contacto" },
];

const TrattoriaHome = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/70 via-[#2C1810]/50 to-[#2C1810]/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
            Ruzafa, Valencia
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5E6D3] mb-6 leading-tight">
            La Italia que se disfruta sin prisas
          </h1>
          <p className="text-[#F5E6D3]/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Cocina tradicional italiana con productos frescos, pasta hecha en casa cada día 
            y el sabor auténtico de la nonna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[#D4A574] hover:bg-[#C49460] text-[#2C1810] font-semibold text-lg px-8"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Reservar por WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-[#F5E6D3] hover:bg-[#E8DED4] text-[#2C1810] font-semibold text-lg px-8"
            >
              <Link to="/demo/trattoria/carta">
                <BookOpen className="mr-2 h-5 w-5" />
                Ver carta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[#2C1810]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#3D2317] hover:bg-[#4A2D1F] transition-colors group"
                >
                  <link.icon className="h-6 w-6 text-[#D4A574] group-hover:scale-110 transition-transform" />
                  <span className="text-[#F5E6D3] text-sm font-medium">{link.label}</span>
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path!}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#3D2317] hover:bg-[#4A2D1F] transition-colors group"
                >
                  <link.icon className="h-6 w-6 text-[#D4A574] group-hover:scale-110 transition-transform" />
                  <span className="text-[#F5E6D3] text-sm font-medium">{link.label}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Cocina Auténtica",
                description: "Recetas tradicionales italianas con ingredientes importados directamente de Italia."
              },
              {
                icon: Users,
                title: "Ambiente Acogedor",
                description: "Un espacio íntimo y cálido donde cada mesa se siente como la cocina de la nonna."
              },
              {
                icon: CalendarCheck,
                title: "Reserva Fácil",
                description: "Reserva tu mesa en segundos por WhatsApp y te confirmamos al instante."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg border border-[#E8DED4]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-6">
                  <feature.icon className="h-8 w-8 text-[#D4A574]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5C4033]/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-4">
            ¿Te apetece una cena inolvidable?
          </h2>
          <p className="text-[#F5E6D3]/80 text-lg mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y déjanos mimarte. Prometemos que no te irás con hambre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[#D4A574] hover:bg-[#C49460] text-[#2C1810] font-semibold text-lg px-10"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Reservar ahora
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-[#F5E6D3] hover:bg-[#E8DED4] text-[#2C1810] font-semibold text-lg px-10"
            >
              <Link to="/demo/trattoria/carta">
                <BookOpen className="mr-2 h-5 w-5" />
                Ver nuestra carta
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrattoriaHome;
