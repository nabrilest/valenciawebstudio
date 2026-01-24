import { Link } from "react-router-dom";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Star, 
  ChefHat, 
  Users, 
  CalendarCheck,
  UtensilsCrossed,
  BookOpen,
  Navigation,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    name: "Antipasti",
    items: [
      { name: "Burrata con Pomodorini", description: "Burrata cremosa con tomates cherry confitados y albahaca fresca", price: "14€" },
      { name: "Carpaccio di Manzo", description: "Finas láminas de ternera con rúcula, parmesano y aceite de trufa", price: "16€" },
      { name: "Vitello Tonnato", description: "Ternera asada con salsa de atún y alcaparras", price: "15€" },
      { name: "Bruschetta Tradizionale", description: "Pan tostado con tomate fresco, ajo y albahaca", price: "8€" },
    ]
  },
  {
    name: "Pasta Fresca",
    items: [
      { name: "Tagliatelle al Ragù", description: "Pasta fresca con ragú de ternera cocinado 6 horas", price: "16€" },
      { name: "Cacio e Pepe", description: "Tonnarelli con pecorino romano y pimienta negra", price: "14€" },
      { name: "Carbonara Autentica", description: "Guanciale, yema de huevo, pecorino y pimienta", price: "15€" },
      { name: "Pappardelle ai Funghi", description: "Pasta ancha con setas de temporada y trufa", price: "18€" },
    ]
  },
  {
    name: "Pizze del Forno",
    items: [
      { name: "Margherita DOP", description: "Tomate San Marzano, mozzarella di bufala y albahaca", price: "12€" },
      { name: "Diavola", description: "Tomate, mozzarella, salame picante y aceite de guindilla", price: "14€" },
      { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, parmesano y taleggio", price: "15€" },
      { name: "Tartufo e Prosciutto", description: "Crema de trufa, jamón de Parma y rúcula", price: "18€" },
    ]
  },
  {
    name: "Secondi Piatti",
    items: [
      { name: "Ossobuco alla Milanese", description: "Jarrete de ternera estofado con gremolata", price: "24€" },
      { name: "Saltimbocca alla Romana", description: "Ternera con jamón, salvia y vino blanco", price: "22€" },
      { name: "Branzino al Forno", description: "Lubina al horno con patatas y aceitunas taggiasche", price: "26€" },
    ]
  },
  {
    name: "Dolci",
    items: [
      { name: "Tiramisù della Casa", description: "Receta tradicional con mascarpone y café", price: "8€" },
      { name: "Panna Cotta", description: "Con coulis de frutos rojos de temporada", price: "7€" },
      { name: "Cannoli Siciliani", description: "Rellenos de ricotta, pistachos y chocolate", price: "9€" },
    ]
  }
];

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

const quickLinks = [
  { icon: BookOpen, label: "Carta", href: "#carta" },
  { icon: UtensilsCrossed, label: "Menús", href: "#menus" },
  { icon: CalendarCheck, label: "Reservas", href: "#reservas" },
  { icon: Clock, label: "Horarios", href: "#horarios" },
  { icon: MapPin, label: "Ubicación", href: "#ubicacion" },
  { icon: Phone, label: "Contacto", href: "#contacto" },
];

const whatsappLink = "https://wa.me/34600000000?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca";

const DemoTrattoria = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Demo Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm">
        <span className="opacity-90">Esto es una demo de </span>
        <Link to="/proyectos" className="font-semibold underline hover:no-underline">
          Valencia Web Studio
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2C1810]/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-[#F5E6D3]">Trattoria San Luca</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              {["Carta", "Menús", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("ú", "u")}`}
                  className="text-[#F5E6D3]/80 hover:text-[#D4A574] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            <Button 
              asChild 
              className="bg-[#D4A574] hover:bg-[#C49460] text-[#2C1810] font-semibold"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reservar mesa
              </a>
            </Button>
          </div>
        </div>
      </header>

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
              variant="outline"
              className="border-[#F5E6D3] text-[#F5E6D3] hover:bg-[#F5E6D3]/10 font-semibold text-lg px-8"
            >
              <a href="#carta">
                <BookOpen className="mr-2 h-5 w-5" />
                Ver carta
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[#2C1810]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#3D2317] hover:bg-[#4A2D1F] transition-colors group"
              >
                <link.icon className="h-6 w-6 text-[#D4A574] group-hover:scale-110 transition-transform" />
                <span className="text-[#F5E6D3] text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
                Nuestra historia
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810] mb-6">
                Un rincón de Italia en el corazón de Ruzafa
              </h2>
              <div className="space-y-4 text-[#5C4033]">
                <p>
                  Desde 2015, Trattoria San Luca trae los sabores auténticos de la Toscana a Valencia. 
                  Nuestra pasta se elabora fresca cada mañana, siguiendo las recetas que la nonna 
                  Maria nos enseñó en su cocina de Lucca.
                </p>
                <p>
                  Nuestro horno de leña, construido por artesanos napolitanos, alcanza los 450°C 
                  para conseguir esa pizza crujiente por fuera y tierna por dentro que tanto amamos.
                </p>
                <p>
                  Aquí no hay prisas. Solo buena comida, buen vino y el calor de sentirnos como en casa.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80"
                alt="Interior de Trattoria San Luca"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4A574] text-[#2C1810] p-6 rounded-xl shadow-lg">
                <p className="font-serif text-3xl font-bold">+9</p>
                <p className="text-sm font-medium">años en Ruzafa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#2C1810]">
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
                className="text-center p-8 rounded-2xl bg-[#3D2317] border border-[#4A2D1F]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-6">
                  <feature.icon className="h-8 w-8 text-[#D4A574]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F5E6D3] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F5E6D3]/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="carta" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
              Nuestra carta
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              Sabores de la tradición italiana
            </h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto">
              Cada plato cuenta una historia. Ingredientes frescos, recetas centenarias y el amor 
              por la buena cocina.
            </p>
          </div>

          <div className="space-y-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-6 pb-2 border-b-2 border-[#D4A574]">
                  {category.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex justify-between items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-[#E8DED4]"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="font-semibold text-[#2C1810] mb-1">{item.name}</h4>
                        <p className="text-sm text-[#5C4033]/80">{item.description}</p>
                      </div>
                      <span className="font-serif text-lg font-bold text-[#D4A574] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Menus */}
      <section id="menus" className="py-16 bg-[#E8DED4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
              Menús especiales
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810]">
              Para disfrutar sin complicaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialMenus.map((menu, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4A574]/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C1810]">{menu.name}</h3>
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

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
              Galería
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810]">
              Un vistazo a nuestra cocina
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&q=80",
              "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80",
              "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=400&q=80",
              "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80",
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
            ].map((src, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reservas" className="py-16 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-4">
            ¿Te apetece una cena inolvidable?
          </h2>
          <p className="text-[#F5E6D3]/80 text-lg mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y déjanos mimarte. Prometemos que no te irás con hambre.
          </p>
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
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
                Encuéntranos
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810] mb-8">
                Ven a visitarnos
              </h2>

              <div className="space-y-6">
                <div id="ubicacion" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Dirección</h3>
                    <p className="text-[#5C4033]">Calle Literato Azorín, 15<br />46006 Valencia (Ruzafa)</p>
                  </div>
                </div>

                <div id="horarios" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Horario</h3>
                    <p className="text-[#5C4033]">
                      Mar - Sáb: 13:00 - 16:00 / 20:00 - 23:30<br />
                      Domingo: 13:00 - 16:00<br />
                      Lunes: Cerrado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Teléfono</h3>
                    <a href="tel:+34960000000" className="text-[#D4A574] hover:underline">
                      960 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Email</h3>
                    <a href="mailto:hola@trattoriasanluca.es" className="text-[#D4A574] hover:underline">
                      hola@trattoriasanluca.es
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#2C1810] flex items-center justify-center hover:bg-[#D4A574] transition-colors group"
                >
                  <Instagram className="h-5 w-5 text-[#F5E6D3] group-hover:text-[#2C1810]" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.8!2d-0.37!3d39.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI3JzM2LjAiTiAwwrAyMicxMi4wIlc!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Trattoria San Luca"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] py-8 border-t border-[#3D2317]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-[#F5E6D3]">Trattoria San Luca</span>
            </div>
            <p className="text-[#F5E6D3]/60 text-sm text-center">
              © 2024 Trattoria San Luca. Diseño web por{" "}
              <Link to="/" className="text-[#D4A574] hover:underline">
                Valencia Web Studio
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoTrattoria;
