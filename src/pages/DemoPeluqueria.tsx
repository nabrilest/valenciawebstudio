import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Clock, MapPin, Scissors, Heart, Instagram, MessageCircle, Star, Users, Sparkles } from "lucide-react";
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
    { name: "Corte mujer", price: "desde 18€", description: "Corte personalizado con lavado y secado" },
    { name: "Corte hombre", price: "desde 12€", description: "Corte clásico o moderno con acabado" },
    { name: "Corte infantil", price: "desde 10€", description: "Para los peques del barrio (hasta 12 años)" },
    { name: "Tinte raíz", price: "desde 25€", description: "Cobertura de raíz con productos de calidad" },
    { name: "Mechas", price: "desde 45€", description: "Mechas clásicas o babylights" },
    { name: "Balayage", price: "desde 60€", description: "Técnica de color natural y degradado" },
    { name: "Peinado evento", price: "consultar", description: "Bodas, comuniones, fiestas..." },
    { name: "Keratina", price: "desde 80€", description: "Tratamiento alisador y nutritivo" },
    { name: "Manicura", price: "desde 15€", description: "Manicura clásica o semipermanente" },
    { name: "Depilación cera", price: "desde 8€", description: "Cejas, labio, piernas..." },
  ];

  const gallery = [
    { src: gallery1, alt: "Mechas naturales" },
    { src: gallery2, alt: "Corte bob" },
    { src: gallery3, alt: "Color cobrizo" },
    { src: gallery4, alt: "Corte caballero" },
    { src: gallery5, alt: "Peinado fiesta" },
    { src: gallery6, alt: "Rubio nórdico" },
    { src: gallery7, alt: "Tratamiento brillo" },
    { src: gallery8, alt: "Nuestro salón" },
  ];

  const testimonials = [
    {
      name: "Ana García",
      text: "Llevo 5 años viniendo y Marta siempre sabe lo que quiero. Es como tener una amiga que te entiende.",
      location: "Vecina de Benimaclet"
    },
    {
      name: "Carlos Ruiz",
      text: "Por fin encontré una peluquería donde me escuchan. Nada de esperas, cita y listo.",
      location: "Cliente desde 2020"
    },
    {
      name: "Lucía Fernández",
      text: "El ambiente es como estar en casa de una amiga. Y el color que me hacen es espectacular.",
      location: "Vecina del barrio"
    },
  ];

  const benefits = [
    { icon: Clock, text: "Primera visita: asesoramiento gratis" },
    { icon: Heart, text: "Te dedicamos el tiempo que necesitas" },
    { icon: Sparkles, text: "Productos profesionales de calidad" },
    { icon: Users, text: "Siempre con cita, sin esperas" },
    { icon: Star, text: "Descuento 10% para mayores de 65" },
  ];

  const whatsappLink = "https://wa.me/34679910422?text=Hola!%20Quiero%20pedir%20cita%20en%20la%20peluquer%C3%ADa";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E9" }}>
      {/* Demo Banner */}
      <div style={{ background: "linear-gradient(135deg, #5D4E42 0%, #8B9D83 100%)" }} className="text-white py-3">
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
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-40" style={{ borderColor: "#D4A5A5" }}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Scissors className="w-6 h-6" style={{ color: "#8B9D83" }} />
            <span className="font-display text-xl font-bold" style={{ color: "#5D4E42" }}>Marta y Laura</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Inicio</a>
            <a href="#nosotras" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Nosotras</a>
            <a href="#servicios" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Servicios</a>
            <a href="#galeria" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Galería</a>
            <a href="#opiniones" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Opiniones</a>
            <a href="#contacto" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: "#5D4E42" }}>Contacto</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-body text-sm gap-2 text-white" style={{ backgroundColor: "#8B9D83" }}>
              <MessageCircle className="w-4 h-4" />
              Pedir cita
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[85vh] min-h-[550px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interior de la peluquería" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(93, 78, 66, 0.5), rgba(93, 78, 66, 0.7))" }} />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: "#D4A5A5" }}>Tu peluquería de barrio en Benimaclet</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tight">Peluquería Marta y Laura</h1>
          <p className="font-body text-lg md:text-xl mb-2 text-white/90 max-w-xl mx-auto">
            Donde te conocemos por tu nombre
          </p>
          <p className="font-body text-base mb-8 text-white/70 max-w-md mx-auto">
            En el corazón de Benimaclet desde 2015. Aquí no eres un número, eres parte del barrio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-body text-lg px-8 py-6 gap-3 text-white" style={{ backgroundColor: "#8B9D83" }}>
                <MessageCircle className="w-5 h-5" />
                Pedir cita por WhatsApp
              </Button>
            </a>
            <a href="tel:+34679910422">
              <Button size="lg" variant="outline" className="font-body text-lg px-8 py-6 gap-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="w-5 h-5" />
                679 910 422
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotras" className="py-16 md:py-24" style={{ backgroundColor: "#F7F3E9" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "#8B9D83" }}>Nuestra historia</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#5D4E42" }}>
              Dos amigas, un sueño
            </h2>
            <div className="space-y-4 text-left md:text-center">
              <p className="font-body text-lg leading-relaxed" style={{ color: "#5D4E42" }}>
                Nos conocimos en la escuela de peluquería hace más de 15 años. Después de trabajar en varios salones de Valencia, decidimos abrir nuestro propio espacio en Benimaclet, el barrio donde crecimos.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5D4E42", opacity: 0.8 }}>
                Aquí no hay prisas ni tratamientos que no necesitas. Te escuchamos, te aconsejamos y te cuidamos como si fueras de la familia. Porque en el fondo, después de tantos años, ya lo eres.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5D4E42", opacity: 0.8 }}>
                Trabajamos solo con cita para poder dedicarte el tiempo que mereces. Y si llegas un poco tarde porque había cola en la frutería, no pasa nada. Lo entendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Así Trabajamos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-center mb-3" style={{ color: "#8B9D83" }}>Nuestra filosofía</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#5D4E42" }}>
            Así trabajamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-5 rounded-xl"
                style={{ backgroundColor: "#F7F3E9" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#D4A5A5" }}>
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-body text-sm" style={{ color: "#5D4E42" }}>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios y Precios */}
      <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: "#F7F3E9" }}>
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-center mb-3" style={{ color: "#8B9D83" }}>Lo que hacemos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#5D4E42" }}>
            Servicios y precios
          </h2>
          <p className="font-body text-center mb-10 max-w-xl mx-auto" style={{ color: "#5D4E42", opacity: 0.7 }}>
            Precios orientativos. Consulta nuestros bonos de 5 servicios con descuento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 flex justify-between items-start hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #8B9D83" }}
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold mb-1" style={{ color: "#5D4E42" }}>
                    {service.name}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "#5D4E42", opacity: 0.6 }}>
                    {service.description}
                  </p>
                </div>
                <span className="font-display text-lg font-bold ml-4" style={{ color: "#8B9D83" }}>
                  {service.price}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="font-body text-sm" style={{ color: "#D4A5A5" }}>
              Promoción: Trae a una amiga y os hacemos 15% de descuento a las dos
            </p>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-16 md:py-24 bg-white">
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-center mb-3" style={{ color: "#8B9D83" }}>Nuestro trabajo</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#5D4E42" }}>
            Galería
          </h2>
          <p className="font-body text-center mb-10 max-w-xl mx-auto" style={{ color: "#5D4E42", opacity: 0.7 }}>
            Algunos de nuestros trabajos. Síguenos en Instagram para ver más.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ background: "linear-gradient(to top, rgba(93, 78, 66, 0.8), transparent)" }}
                >
                  <p className="font-body text-white text-sm p-4">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/peluqueriamartaylaura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body hover:underline"
              style={{ color: "#8B9D83" }}
            >
              <Instagram className="w-5 h-5" />
              Ver más en @peluqueriamartaylaura
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="opiniones" className="py-16 md:py-24" style={{ backgroundColor: "#F7F3E9" }}>
        <div className="container">
          <p className="font-body text-sm uppercase tracking-widest text-center mb-3" style={{ color: "#8B9D83" }}>Lo que dicen de nosotras</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#5D4E42" }}>
            Opiniones del barrio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#D4A5A5" }} />
                  ))}
                </div>
                <p className="font-body mb-4 italic" style={{ color: "#5D4E42" }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-display font-semibold" style={{ color: "#5D4E42" }}>{testimonial.name}</p>
                  <p className="font-body text-sm" style={{ color: "#8B9D83" }}>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Promoción */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #8B9D83 0%, #5D4E42 100%)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Primera visita
          </h2>
          <p className="font-body text-white/90 mb-2 text-xl">
            Corte + peinado por solo 20€
          </p>
          <p className="font-body text-white/70 mb-8 max-w-md mx-auto">
            Si es tu primera vez con nosotras, queremos conocerte. Pide cita y cuéntanos qué buscas.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-body text-lg px-8 py-6 gap-3" style={{ backgroundColor: "#D4A5A5", color: "#5D4E42" }}>
              <MessageCircle className="w-5 h-5" />
              Reservar oferta
            </Button>
          </a>
        </div>
      </section>

      {/* Horario y Ubicación */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Horario */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "#8B9D83" }}>Cuándo venir</p>
              <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "#5D4E42" }}>Horario</h3>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#F7F3E9" }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: "#8B9D83" }} />
                </div>
                <div className="space-y-3 font-body">
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid #D4A5A5" }}>
                    <span style={{ color: "#5D4E42", opacity: 0.7 }}>Lunes a viernes</span>
                    <span className="font-semibold" style={{ color: "#5D4E42" }}>9:30 – 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid #D4A5A5" }}>
                    <span style={{ color: "#5D4E42", opacity: 0.7 }}>Sábados</span>
                    <span className="font-semibold" style={{ color: "#5D4E42" }}>9:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span style={{ color: "#5D4E42", opacity: 0.7 }}>Domingos</span>
                    <span className="font-semibold" style={{ color: "#5D4E42" }}>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "#8B9D83" }}>Dónde estamos</p>
              <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "#5D4E42" }}>Ubicación</h3>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#F7F3E9" }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" style={{ color: "#8B9D83" }} />
                </div>
                <p className="font-display text-xl font-semibold mb-2" style={{ color: "#5D4E42" }}>C/ Emilio Baró, 47</p>
                <p className="font-body mb-4" style={{ color: "#5D4E42", opacity: 0.7 }}>46020 Benimaclet, Valencia</p>
                <p className="font-body text-sm" style={{ color: "#5D4E42", opacity: 0.6 }}>
                  En plena calle principal del barrio.<br />
                  Fácil aparcamiento en zona azul.<br />
                  A 2 minutos del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Final */}
      <section className="py-16" style={{ backgroundColor: "#F7F3E9" }}>
        <div className="container text-center">
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "#8B9D83" }}>Contacta</p>
          <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "#5D4E42" }}>Pide tu cita</h3>
          <div className="max-w-sm mx-auto space-y-4">
            <a 
              href="tel:+34679910422"
              className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 font-display text-2xl font-bold hover:shadow-md transition-shadow"
              style={{ color: "#5D4E42" }}
            >
              <Phone className="w-6 h-6" style={{ color: "#8B9D83" }} />
              679 910 422
            </a>
            <p className="font-body text-sm" style={{ color: "#5D4E42", opacity: 0.6 }}>
              También puedes pasarte por el salón para consultas
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full font-body gap-2 py-6 text-white" style={{ backgroundColor: "#8B9D83" }}>
                <MessageCircle className="w-5 h-5" />
                Pedir cita por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Redes */}
      <section className="py-12 bg-white">
        <div className="container text-center">
          <p className="font-body mb-4" style={{ color: "#5D4E42", opacity: 0.7 }}>Síguenos en redes</p>
          <a 
            href="https://instagram.com/peluqueriamartaylaura" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body hover:shadow-md transition-shadow"
            style={{ backgroundColor: "#F7F3E9", color: "#5D4E42" }}
          >
            <Instagram className="w-5 h-5" style={{ color: "#D4A5A5" }} />
            @peluqueriamartaylaura
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ backgroundColor: "#5D4E42" }}>
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Scissors className="w-5 h-5" style={{ color: "#D4A5A5" }} />
            <span className="font-display text-lg font-bold text-white">Peluquería Marta y Laura</span>
          </div>
          <p className="font-body text-sm text-white/60 mb-6">
            Tu peluquería de barrio en Benimaclet
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a 
              href="https://instagram.com/peluqueriamartaylaura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "#8B9D83" }}
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="font-body text-xs text-white/40 mb-4">
            C/ Emilio Baró, 47 · 46020 Benimaclet, Valencia
          </p>
          <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 font-body text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              <img src={logo} alt="Valencia Web Studio" className="h-4 w-auto opacity-50" />
              Web diseñada por Valencia Web Studio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoPeluqueria;
