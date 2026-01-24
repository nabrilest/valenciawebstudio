import { useState } from "react";
import { 
  UtensilsCrossed,
  AlertTriangle,
  MousePointerClick
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

const allergenColors: Record<string, string> = {
  "Gluten": "bg-amber-100 text-amber-800",
  "Lácteos": "bg-blue-100 text-blue-800",
  "Huevo": "bg-yellow-100 text-yellow-800",
  "Pescado": "bg-cyan-100 text-cyan-800",
  "Frutos secos": "bg-orange-100 text-orange-800",
  "Sulfitos": "bg-purple-100 text-purple-800",
};

const TratториаCarta = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
            Nuestra carta
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4">
            Sabores de la tradición italiana
          </h1>
          <p className="text-[#F5E6D3]/80 max-w-2xl mx-auto">
            Cada plato cuenta una historia. Ingredientes frescos, recetas centenarias y el amor 
            por la buena cocina.
          </p>
        </div>
      </section>

      {/* Click instruction banner */}
      <section className="py-4 bg-[#D4A574]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-[#2C1810]">
            <MousePointerClick className="w-5 h-5" />
            <p className="text-sm font-medium">
              Haz clic en cualquier plato para ver sus ingredientes y alérgenos
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-6 pb-2 border-b-2 border-[#D4A574]">
                  {category.name}
                </h2>
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
                          <h3 className="font-semibold text-[#2C1810] mb-1 group-hover:text-[#D4A574] transition-colors">{item.name}</h3>
                          <span className="font-serif text-lg font-bold text-[#D4A574] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-[#5C4033]/80 line-clamp-2">{item.description}</p>
                        <p className="text-xs text-[#D4A574] mt-2 flex items-center gap-1">
                          <MousePointerClick className="w-3 h-3" />
                          Ver ingredientes y alérgenos
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
    </>
  );
};

export default TratториаCarta;
