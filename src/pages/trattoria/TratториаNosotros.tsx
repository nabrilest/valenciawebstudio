import { ChefHat, Users, CalendarCheck } from "lucide-react";

const TratториаNosotros = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
            Nuestra historia
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4">
            Un rincón de Italia en el corazón de Ruzafa
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-[#5C4033]">
                <p className="text-lg">
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
                <p>
                  Cada ingrediente es seleccionado con mimo: el aceite de oliva viene directamente de 
                  Umbría, los tomates San Marzano llegan de las faldas del Vesubio, y el parmesano 
                  tiene la denominación de origen que garantiza su autenticidad.
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

      {/* Our Philosophy */}
      <section className="py-16 bg-[#2C1810]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
              Nuestra filosofía
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5E6D3]">
              Lo que nos hace únicos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Cocina Auténtica",
                description: "Recetas tradicionales italianas con ingredientes importados directamente de Italia. Sin atajos, sin sustitutos."
              },
              {
                icon: Users,
                title: "Ambiente Acogedor",
                description: "Un espacio íntimo y cálido donde cada mesa se siente como la cocina de la nonna. Aquí se viene a disfrutar, no a correr."
              },
              {
                icon: CalendarCheck,
                title: "Atención Personal",
                description: "Conocemos a nuestros clientes por su nombre. Sabemos qué les gusta y cómo les gusta. Eso es lo que nos diferencia."
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

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
              Nuestro equipo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810]">
              Las personas detrás de cada plato
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Marco Bianchi",
                role: "Chef Ejecutivo",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
                description: "20 años de experiencia en cocinas de Roma y Florencia"
              },
              {
                name: "Lucia Romano",
                role: "Sommelier",
                image: "https://images.unsplash.com/photo-1559575089-0a5f0c0a9c1a?w=400&q=80",
                description: "Experta en vinos italianos con certificación WSET"
              },
              {
                name: "Giuseppe Ferri",
                role: "Pizzaiolo",
                image: "https://images.unsplash.com/photo-1583394293214-28ez0a0c1f81?w=400&q=80",
                description: "Formado en Nápoles, maestro del horno de leña"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#D4A574]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1810]">{member.name}</h3>
                <p className="text-[#D4A574] font-medium">{member.role}</p>
                <p className="text-sm text-[#5C4033]/70 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TratториаNosotros;
