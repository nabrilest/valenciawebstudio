import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Clock, MapPin, Scissors, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import peluqueriaImage from "@/assets/project-peluqueria.jpg";

const DemoPeluqueria = () => {
  const services = [
    { name: "Corte de cabello", price: "15€ - 25€" },
    { name: "Coloración", price: "35€ - 60€" },
    { name: "Mechas", price: "45€ - 80€" },
    { name: "Peinado especial", price: "25€ - 45€" },
    { name: "Tratamientos capilares", price: "20€ - 40€" },
    { name: "Barba y afeitado", price: "10€ - 15€" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Demo Banner */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container flex items-center justify-between">
          <p className="font-body text-sm">
            <strong>Demo:</strong> Esta es una web de ejemplo diseñada por Valencia Web Studio
          </p>
          <Link to="/proyectos" className="flex items-center gap-2 text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-rose-600" />
            <span className="font-display text-xl font-bold text-gray-900">Estilo Valencia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="font-body text-sm text-gray-700 hover:text-rose-600">Inicio</a>
            <a href="#servicios" className="font-body text-sm text-gray-700 hover:text-rose-600">Servicios</a>
            <a href="#horarios" className="font-body text-sm text-gray-700 hover:text-rose-600">Horarios</a>
            <a href="#contacto" className="font-body text-sm text-gray-700 hover:text-rose-600">Contacto</a>
          </nav>
          <Button className="bg-rose-600 text-white hover:bg-rose-700 font-body text-sm">
            Reservar cita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tu peluquería de confianza en <span className="text-rose-600">Valencia</span>
              </h1>
              <p className="font-body text-lg text-gray-600 mb-8">
                Expertos en cuidado capilar con más de 10 años de experiencia. Descubre nuestros servicios y luce un cabello espectacular.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700 font-body">
                  <Phone className="mr-2 w-5 h-5" />
                  Llamar ahora
                </Button>
                <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 font-body">
                  Ver servicios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={peluqueriaImage} 
                alt="Interior de la peluquería" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-600">Clientes satisfechos</p>
                    <p className="font-display text-2xl font-bold text-gray-900">+500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="font-body text-gray-600 max-w-xl mx-auto">
              Ofrecemos una amplia gama de servicios para que luzcas siempre perfecta/o
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-rose-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-rose-600 font-medium">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horarios" className="py-16 md:py-24 bg-rose-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Horarios
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-4 font-body">
                <div className="flex justify-between items-center py-2 border-b border-rose-100">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-semibold text-gray-900">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-rose-100">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-semibold text-gray-900">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-semibold text-gray-900">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Visítanos
            </h2>
            <div className="bg-rose-50 rounded-xl p-8">
              <MapPin className="w-10 h-10 text-rose-600 mx-auto mb-4" />
              <p className="font-body text-gray-600 mb-4">
                Calle Ejemplo 123, Valencia
              </p>
              <p className="font-display text-2xl font-bold text-gray-900 mb-6">
                960 123 456
              </p>
              <Button size="lg" className="w-full bg-rose-600 text-white hover:bg-rose-700 font-body">
                <Phone className="mr-2 w-5 h-5" />
                Llamar para reservar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scissors className="w-5 h-5 text-rose-400" />
            <span className="font-display text-lg font-bold">Estilo Valencia</span>
          </div>
          <p className="font-body text-sm text-gray-400 mb-4">
            Peluquería profesional en Valencia
          </p>
          <p className="font-body text-xs text-gray-500 flex items-center justify-center gap-1">
            Diseñado con <Heart className="w-3 h-3 text-rose-500" /> por{" "}
            <Link to="/" className="text-rose-400 hover:underline">Valencia Web Studio</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DemoPeluqueria;
