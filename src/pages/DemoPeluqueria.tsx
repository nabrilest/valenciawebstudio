import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Clock, MapPin, Scissors, Heart, Instagram, Facebook, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/lumina-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const DemoPeluqueria = () => {
  const services = [
    { name: "Corte mujer y hombre", icon: Scissors },
    { name: "Color, mechas y balayage", icon: Scissors },
    { name: "Peinados para eventos", icon: Scissors },
    { name: "Tratamientos capilares", icon: Scissors },
    { name: "Asesoramiento de imagen", icon: Scissors },
  ];

  const gallery = [
    { src: gallery1, alt: "Balayage caramelo" },
    { src: gallery2, alt: "Corte bob moderno" },
    { src: gallery3, alt: "Color cobre vibrante" },
    { src: gallery4, alt: "Corte masculino fade" },
    { src: gallery5, alt: "Peinado para evento" },
    { src: gallery6, alt: "Mechas rubias naturales" },
    { src: gallery7, alt: "Tratamiento capilar" },
    { src: gallery8, alt: "Interior del salón" },
  ];

  const prices = [
    { name: "Corte mujer", price: "25 €" },
    { name: "Corte hombre", price: "18 €" },
    { name: "Color y mechas", price: "desde 40 €" },
    { name: "Peinados para eventos", price: "desde 35 €" },
    { name: "Tratamientos capilares", price: "consultar" },
  ];

  const benefits = [
    "Atención personalizada con cita previa",
    "Reserva rápida por WhatsApp",
    "Profesionales con experiencia",
    "Ambiente moderno y cuidado",
    "Ubicación céntrica en Valencia",
  ];

  const whatsappLink = "https://wa.me/34679910422";

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-rose-600 to-rose-500 text-white py-3">
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
      <header className="bg-white/95 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <span className="font-display text-2xl font-bold tracking-wide text-gray-900">LÚMINA STUDIO</span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-body text-sm text-gray-600 hover:text-rose-600 transition-colors">Inicio</a>
            <a href="#servicios" className="font-body text-sm text-gray-600 hover:text-rose-600 transition-colors">Servicios</a>
            <a href="#galeria" className="font-body text-sm text-gray-600 hover:text-rose-600 transition-colors">Galería</a>
            <a href="#tarifas" className="font-body text-sm text-gray-600 hover:text-rose-600 transition-colors">Tarifas</a>
            <a href="#contacto" className="font-body text-sm text-gray-600 hover:text-rose-600 transition-colors">Contacto</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white font-body text-sm gap-2">
              <MessageCircle className="w-4 h-4" />
              Reservar
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interior de Lúmina Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="font-body text-sm uppercase tracking-widest mb-4 text-rose-200">Peluquería moderna en Valencia</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">LÚMINA STUDIO</h1>
          <p className="font-body text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto">
            Especialistas en color, corte y estilo. Reserva tu cita de forma rápida y sin esperas.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-body text-lg px-8 py-6 gap-3">
              <MessageCircle className="w-5 h-5" />
              Reservar por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 md:py-28 bg-rose-50/50">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 text-center mb-3">Conócenos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Sobre Lúmina Studio
          </h2>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              En Lúmina Studio cuidamos cada detalle para que tu experiencia sea cómoda, cercana y profesional.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              Trabajamos con cita previa para ofrecer una atención personalizada y resultados que se adaptan a tu estilo.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              Nuestro equipo está especializado en color, corte y tratamientos capilares actuales.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 md:py-28 bg-white">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 text-center mb-3">Lo que ofrecemos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestros servicios
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-rose-50 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-body text-sm font-medium text-gray-900">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 text-center mb-3">Galería</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Nuestro trabajo
          </h2>
          <p className="font-body text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Descubre algunos de nuestros trabajos y estilos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="font-body text-white text-sm p-4">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifas */}
      <section id="tarifas" className="py-20 md:py-28 bg-white">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 text-center mb-3">Tarifas</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Precios orientativos
          </h2>
          <div className="max-w-md mx-auto bg-rose-50 rounded-2xl p-8">
            <div className="space-y-4">
              {prices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-rose-100 last:border-0"
                >
                  <span className="font-body text-gray-700">{item.name}</span>
                  <span className="font-display text-lg font-semibold text-gray-900">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 md:py-28 bg-rose-50/50">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 text-center mb-3">Nuestra diferencia</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué elegir Lúmina Studio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-rose-600" />
                </div>
                <span className="font-body text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Reserva */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Reserva tu cita
          </h2>
          <p className="font-body text-rose-100 mb-8 max-w-xl mx-auto">
            Reserva tu cita de forma rápida a través de WhatsApp. Te confirmaremos disponibilidad lo antes posible.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-body text-lg px-8 py-6 gap-3">
              <MessageCircle className="w-5 h-5" />
              Reservar por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Horario y Ubicación */}
      <section id="contacto" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Horario */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-widest text-rose-600 mb-3">Cuándo visitarnos</p>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Horario</h3>
              <div className="bg-rose-50 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-rose-600" />
                </div>
                <div className="space-y-3 font-body">
                  <div className="flex justify-between items-center py-2 border-b border-rose-100">
                    <span className="text-gray-600">Lunes a viernes</span>
                    <span className="font-semibold text-gray-900">9:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-rose-100">
                    <span className="text-gray-600">Sábados</span>
                    <span className="font-semibold text-gray-900">9:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Domingos</span>
                    <span className="font-semibold text-gray-900">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-widest text-rose-600 mb-3">Ubicación</p>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Dónde estamos</h3>
              <div className="bg-rose-50 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <p className="font-display text-xl font-semibold text-gray-900 mb-2">Calle del Mar 27</p>
                <p className="font-body text-gray-600 mb-4">46003 Valencia</p>
                <p className="font-body text-sm text-gray-500">
                  Zona céntrica, bien comunicada.<br />
                  Atendemos con cita previa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 mb-3">Redes sociales</p>
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Síguenos en redes</h3>
          <p className="font-body text-gray-600 mb-8">
            Descubre nuestros últimos trabajos y novedades en redes sociales.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://instagram.com/lumina.studio.valencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow font-body text-gray-700 hover:text-rose-600"
            >
              <Instagram className="w-5 h-5" />
              @lumina.studio.valencia
            </a>
            <a 
              href="https://facebook.com/LuminaStudioValencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow font-body text-gray-700 hover:text-rose-600"
            >
              <Facebook className="w-5 h-5" />
              Lumina Studio Valencia
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <p className="font-body text-sm uppercase tracking-widest text-rose-600 mb-3">Escríbenos</p>
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-8">Contacto</h3>
          <div className="max-w-sm mx-auto space-y-4">
            <a 
              href="tel:+34679910422"
              className="flex items-center justify-center gap-3 bg-rose-50 rounded-xl p-4 font-display text-2xl font-bold text-gray-900 hover:bg-rose-100 transition-colors"
            >
              <Phone className="w-6 h-6 text-rose-600" />
              679 910 422
            </a>
            <p className="font-body text-gray-600">Calle del Mar 27, Valencia</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-body gap-2 py-6">
                <MessageCircle className="w-5 h-5" />
                Reservar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center">
          <span className="font-display text-xl font-bold tracking-wide">LÚMINA STUDIO</span>
          <p className="font-body text-sm text-gray-400 mt-2 mb-6">
            Peluquería moderna en Valencia
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a 
              href="https://instagram.com/lumina.studio.valencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/LuminaStudioValencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="font-body text-xs text-gray-500 flex items-center justify-center gap-1">
              Diseñado con <Heart className="w-3 h-3 text-rose-500" /> por{" "}
              <Link to="/" className="text-rose-400 hover:underline inline-flex items-center gap-2">
                <img src={logo} alt="Valencia Web Studio" className="h-4 w-auto" />
                Valencia Web Studio
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoPeluqueria;
