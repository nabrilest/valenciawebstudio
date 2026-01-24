import { useState } from "react";
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
  Mail,
  ArrowLeft,
  MessageCircle,
  
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
  allergens: string[];
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Antipasti",
    items: [
      { 
        name: "Burrata con Pomodorini", 
        description: "Burrata cremosa con tomates cherry confitados y albahaca fresca", 
        price: "14€",
        image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80",
        ingredients: ["Burrata fresca", "Tomates cherry", "Albahaca", "Aceite de oliva virgen extra", "Sal Maldon"],
        allergens: ["Lácteos"]
      },
      { 
        name: "Carpaccio di Manzo", 
        description: "Finas láminas de ternera con rúcula, parmesano y aceite de trufa", 
        price: "16€",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&q=80",
        ingredients: ["Solomillo de ternera", "Rúcula", "Parmigiano Reggiano", "Aceite de trufa", "Limón"],
        allergens: ["Lácteos"]
      },
      { 
        name: "Vitello Tonnato", 
        description: "Ternera asada con salsa de atún y alcaparras", 
        price: "15€",
        image: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=400&q=80",
        ingredients: ["Redondo de ternera", "Atún en aceite", "Alcaparras", "Anchoas", "Mayonesa", "Limón"],
        allergens: ["Pescado", "Huevo"]
      },
      { 
        name: "Bruschetta Tradizionale", 
        description: "Pan tostado con tomate fresco, ajo y albahaca", 
        price: "8€",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
        ingredients: ["Pan rústico", "Tomate pera", "Ajo", "Albahaca fresca", "Aceite de oliva"],
        allergens: ["Gluten"]
      },
    ]
  },
  {
    name: "Pasta Fresca",
    items: [
      { 
        name: "Tagliatelle al Ragù", 
        description: "Pasta fresca con ragú de ternera cocinado 6 horas", 
        price: "16€",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
        ingredients: ["Tagliatelle frescas", "Ternera picada", "Cerdo picado", "Tomate", "Zanahoria", "Apio", "Cebolla", "Vino tinto"],
        allergens: ["Gluten", "Huevo"]
      },
      { 
        name: "Cacio e Pepe", 
        description: "Tonnarelli con pecorino romano y pimienta negra", 
        price: "14€",
        image: "https://images.unsplash.com/photo-1673442632805-0c46c228eb04?w=400&q=80",
        ingredients: ["Tonnarelli frescos", "Pecorino Romano DOP", "Pimienta negra en grano"],
        allergens: ["Gluten", "Lácteos", "Huevo"]
      },
      { 
        name: "Carbonara Autentica", 
        description: "Guanciale, yema de huevo, pecorino y pimienta", 
        price: "15€",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
        ingredients: ["Rigatoni frescos", "Guanciale", "Yema de huevo", "Pecorino Romano", "Pimienta negra"],
        allergens: ["Gluten", "Huevo", "Lácteos"]
      },
      { 
        name: "Pappardelle ai Funghi", 
        description: "Pasta ancha con setas de temporada y trufa", 
        price: "18€",
        image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&q=80",
        ingredients: ["Pappardelle frescas", "Porcini", "Shiitake", "Champiñones", "Trufa negra", "Nata", "Parmesano"],
        allergens: ["Gluten", "Lácteos", "Huevo"]
      },
    ]
  },
  {
    name: "Pizze del Forno",
    items: [
      { 
        name: "Margherita DOP", 
        description: "Tomate San Marzano, mozzarella di bufala y albahaca", 
        price: "12€",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
        ingredients: ["Masa madre 48h", "Tomate San Marzano DOP", "Mozzarella di Bufala", "Albahaca fresca", "Aceite de oliva"],
        allergens: ["Gluten", "Lácteos"]
      },
      { 
        name: "Diavola", 
        description: "Tomate, mozzarella, salame picante y aceite de guindilla", 
        price: "14€",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
        ingredients: ["Masa madre 48h", "Tomate", "Mozzarella fior di latte", "Salame calabrese", "Aceite de guindilla"],
        allergens: ["Gluten", "Lácteos"]
      },
      { 
        name: "Quattro Formaggi", 
        description: "Mozzarella, gorgonzola, parmesano y taleggio", 
        price: "15€",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
        ingredients: ["Masa madre 48h", "Mozzarella", "Gorgonzola DOP", "Parmigiano Reggiano", "Taleggio"],
        allergens: ["Gluten", "Lácteos"]
      },
      { 
        name: "Tartufo e Prosciutto", 
        description: "Crema de trufa, jamón de Parma y rúcula", 
        price: "18€",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        ingredients: ["Masa madre 48h", "Crema de trufa", "Prosciutto di Parma DOP", "Rúcula", "Parmesano"],
        allergens: ["Gluten", "Lácteos"]
      },
    ]
  },
  {
    name: "Secondi Piatti",
    items: [
      { 
        name: "Ossobuco alla Milanese", 
        description: "Jarrete de ternera estofado con gremolata", 
        price: "24€",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
        ingredients: ["Jarrete de ternera", "Vino blanco", "Caldo de carne", "Gremolata (limón, ajo, perejil)", "Risotto alla milanese"],
        allergens: ["Lácteos", "Sulfitos"]
      },
      { 
        name: "Saltimbocca alla Romana", 
        description: "Ternera con jamón, salvia y vino blanco", 
        price: "22€",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        ingredients: ["Escalopines de ternera", "Prosciutto crudo", "Salvia fresca", "Mantequilla", "Vino blanco"],
        allergens: ["Lácteos", "Sulfitos"]
      },
      { 
        name: "Branzino al Forno", 
        description: "Lubina al horno con patatas y aceitunas taggiasche", 
        price: "26€",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
        ingredients: ["Lubina salvaje", "Patatas", "Aceitunas taggiasche", "Tomates cherry", "Romero", "Limón"],
        allergens: ["Pescado"]
      },
    ]
  },
  {
    name: "Dolci",
    items: [
      { 
        name: "Tiramisù della Casa", 
        description: "Receta tradicional con mascarpone y café", 
        price: "8€",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
        ingredients: ["Mascarpone", "Huevos", "Savoiardi", "Café espresso", "Cacao amargo", "Marsala"],
        allergens: ["Huevo", "Lácteos", "Gluten", "Sulfitos"]
      },
      { 
        name: "Panna Cotta", 
        description: "Con coulis de frutos rojos de temporada", 
        price: "7€",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
        ingredients: ["Nata fresca", "Vainilla de Madagascar", "Fresas", "Frambuesas", "Arándanos"],
        allergens: ["Lácteos"]
      },
      { 
        name: "Cannoli Siciliani", 
        description: "Rellenos de ricotta, pistachos y chocolate", 
        price: "9€",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
        ingredients: ["Masa frita crujiente", "Ricotta fresca", "Pistachos de Bronte", "Chocolate negro", "Naranja confitada"],
        allergens: ["Gluten", "Lácteos", "Frutos secos", "Huevo"]
      },
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

const whatsappNumber = "34600000000";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca`;

const DemoTrattoria = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const allergenColors: Record<string, string> = {
    "Gluten": "bg-amber-100 text-amber-800",
    "Lácteos": "bg-blue-100 text-blue-800",
    "Huevo": "bg-yellow-100 text-yellow-800",
    "Pescado": "bg-cyan-100 text-cyan-800",
    "Frutos secos": "bg-orange-100 text-orange-800",
    "Sulfitos": "bg-purple-100 text-purple-800",
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Demo Banner - Like Peluquería */}
      <div style={{ background: "linear-gradient(135deg, #2C1810 0%, #D4A574 100%)" }} className="text-white py-3">
        <div className="container flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Valencia Web Studio" className="h-8 w-auto" />
            <p className="font-body text-sm">
              <strong>Demo:</strong> Web de ejemplo diseñada por Valencia Web Studio
            </p>
          </div>
          <Link to="/proyectos" className="flex items-center gap-2 text-sm hover:underline font-body">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </div>
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
              className="bg-[#F5E6D3] hover:bg-[#E8DED4] text-[#2C1810] font-semibold text-lg px-8"
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

      {/* Menu Section with Images */}
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
              Cada plato cuenta una historia. Haz clic en cualquier plato para ver sus ingredientes y alérgenos.
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
                    <button 
                      key={itemIndex}
                      onClick={() => setSelectedItem(item)}
                      className="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all border border-[#E8DED4] hover:border-[#D4A574] text-left group cursor-pointer"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-semibold text-[#2C1810] mb-1 group-hover:text-[#D4A574] transition-colors">{item.name}</h4>
                          <span className="font-serif text-lg font-bold text-[#D4A574] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-[#5C4033]/80 line-clamp-2">{item.description}</p>
                        <p className="text-xs text-[#D4A574] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Clic para ver ingredientes y alérgenos
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Item Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-lg bg-[#FDF8F3]">
          {selectedItem && (
            <>
              <div className="aspect-video rounded-lg overflow-hidden -mx-6 -mt-6 mb-4">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#2C1810] flex justify-between items-start">
                  {selectedItem.name}
                  <span className="text-[#D4A574]">{selectedItem.price}</span>
                </DialogTitle>
              </DialogHeader>
              <p className="text-[#5C4033] mb-4">{selectedItem.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2C1810] mb-2 flex items-center gap-2">
                    <UtensilsCrossed className="w-4 h-4 text-[#D4A574]" />
                    Ingredientes
                  </h4>
                  <ul className="text-sm text-[#5C4033] space-y-1">
                    {selectedItem.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#2C1810] mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Alérgenos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.allergens.map((allergen, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${allergenColors[allergen] || 'bg-gray-100 text-gray-800'}`}
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div id="horarios">
              <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
                Encuéntranos
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#2C1810] mb-6">
                Horario y ubicación
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-2">Horario</h4>
                    <p className="text-[#5C4033]">Martes a Domingo</p>
                    <p className="text-[#5C4033]">13:30 - 16:00 y 20:30 - 23:30</p>
                    <p className="text-[#5C4033]/60 text-sm mt-1">Lunes cerrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" id="ubicacion">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-2">Dirección</h4>
                    <p className="text-[#5C4033]">Calle Literato Azorín, 42</p>
                    <p className="text-[#5C4033]">46006 Valencia (Ruzafa)</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#D4A574] text-sm hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <Navigation className="h-4 w-4" />
                      Cómo llegar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-2">Reservas</h4>
                    <a href="tel:+34960000000" className="text-[#5C4033] hover:text-[#D4A574] transition-colors">
                      +34 960 000 000
                    </a>
                    <p className="text-[#5C4033]/60 text-sm mt-1">
                      O reserva fácilmente por WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-2">Email</h4>
                    <a href="mailto:info@trattoriasanluca.es" className="text-[#5C4033] hover:text-[#D4A574] transition-colors">
                      info@trattoriasanluca.es
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#D4A574] text-[#2C1810] flex items-center justify-center hover:bg-[#C49460] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0!2d-0.37!3d39.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI3JzM2LjAiTiAwwrAyMicxMi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
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
      <footer className="bg-[#2C1810] text-[#F5E6D3] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2">Trattoria San Luca</h3>
              <p className="text-[#F5E6D3]/60 text-sm">
                La auténtica cocina italiana en Valencia
              </p>
            </div>
            
            <div className="text-center text-sm text-[#F5E6D3]/60">
              <p>© 2024 Trattoria San Luca. Todos los derechos reservados.</p>
              <p className="mt-1">
                Web diseñada por{" "}
                <Link to="/" className="text-[#D4A574] hover:underline">
                  Valencia Web Studio
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default DemoTrattoria;
