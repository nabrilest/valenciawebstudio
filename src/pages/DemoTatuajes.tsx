import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Clock, MapPin, Instagram, MessageCircle, Star, Users, Menu, Home, Image, MessageSquare, Palette, Zap, Droplets, Feather, PenTool, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/tattoo-hero.jpg";
import gallery1 from "@/assets/tattoo-gallery-1.jpg";
import gallery2 from "@/assets/tattoo-gallery-2.jpg";
import gallery3 from "@/assets/tattoo-gallery-3.jpg";
import gallery4 from "@/assets/tattoo-gallery-4.jpg";
import gallery5 from "@/assets/tattoo-gallery-5.jpg";
import gallery6 from "@/assets/tattoo-gallery-6.jpg";
import gallery7 from "@/assets/tattoo-gallery-7.jpg";
import gallery8 from "@/assets/tattoo-gallery-8.jpg";

// Animated section wrapper component
const AnimatedSection = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const DemoTatuajes = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Color palette
  const colors = {
    primary: "#1A1A1A",
    accent: "#C9A227",
    secondary: "#2D2D2D",
    background: "#F5F5F0",
    text: "#1A1A1A",
  };

  const styles = [
    { name: "Tradicional / Old School", icon: Palette, description: "Líneas gruesas, colores vibrantes y diseños clásicos" },
    { name: "Realismo", icon: Image, description: "Retratos y diseños fotorrealistas" },
    { name: "Blackwork", icon: Droplets, description: "Diseños en negro puro, geometría y sombras" },
    { name: "Fine Line / Minimalista", icon: Feather, description: "Líneas finas y diseños delicados" },
    { name: "Lettering", icon: PenTool, description: "Tipografías y caligrafías personalizadas" },
    { name: "Cover-ups", icon: RefreshCw, description: "Transformamos tatuajes antiguos en obras nuevas" },
  ];

  const gallery = [
    { src: gallery1, alt: "Tatuaje realista" },
    { src: gallery2, alt: "Blackwork geométrico" },
    { src: gallery3, alt: "Fine line floral" },
    { src: gallery4, alt: "Tradicional color" },
    { src: gallery5, alt: "Lettering script" },
    { src: gallery6, alt: "Retrato realista" },
    { src: gallery7, alt: "Minimalista" },
    { src: gallery8, alt: "Nuestro estudio" },
  ];

  const testimonials = [
    {
      name: "David Martínez",
      text: "Mi primer tatuaje y no podría estar más contento. El equipo me explicó todo el proceso y el resultado es brutal.",
      location: "Cliente desde 2022"
    },
    {
      name: "Laura Sánchez",
      text: "Buscaba un estudio que entendiera mi visión. Aquí la convirtieron en realidad. Trabajo impecable.",
      location: "Vecina de Ruzafa"
    },
    {
      name: "Marcos López",
      text: "La higiene y profesionalidad son de otro nivel. Me han hecho 4 tatuajes y repetiré sin duda.",
      location: "Cliente habitual"
    },
  ];

  const benefits = [
    { icon: Sparkles, text: "Diseño personalizado incluido" },
    { icon: Zap, text: "Materiales de primera calidad" },
    { icon: Users, text: "Consulta gratuita sin compromiso" },
    { icon: Star, text: "Retoque gratis en 3 meses" },
  ];

  const navItems = [
    { href: "#inicio", label: "Inicio", icon: Home },
    { href: "#nosotros", label: "Nosotros", icon: Users },
    { href: "#estilos", label: "Estilos", icon: Palette },
    { href: "#galeria", label: "Galería", icon: Image },
    { href: "#opiniones", label: "Opiniones", icon: MessageSquare },
    { href: "#contacto", label: "Contacto", icon: Phone },
  ];

  const whatsappLink = "https://wa.me/34679910422?text=Hola!%20Quiero%20info%20sobre%20tatuajes";

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Demo Banner */}
      <div style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }} className="text-white py-3">
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
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-40" style={{ borderColor: colors.accent }}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
                  aria-label="Abrir menú"
                >
                  <Menu className="w-6 h-6" style={{ color: colors.primary }} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0" style={{ backgroundColor: colors.background }}>
                <SheetHeader className="p-6 border-b" style={{ borderColor: colors.accent }}>
                  <SheetTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
                    <Droplets className="w-6 h-6" style={{ color: colors.accent }} />
                    INK STUDIO
                  </SheetTitle>
                </SheetHeader>
                <nav className="p-4 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors font-body"
                      style={{ color: colors.primary }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: colors.accent }} />
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="p-4 border-t mt-auto" style={{ borderColor: colors.accent }}>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full font-body gap-2 text-white" style={{ backgroundColor: colors.primary }}>
                      <MessageCircle className="w-5 h-5" />
                      Pedir cita
                    </Button>
                  </a>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a 
                      href="https://instagram.com/inkstudio.valencia.demo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href="tel:+34679910422"
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6" style={{ color: colors.accent }} />
              <span className="font-display text-xl font-bold tracking-wider" style={{ color: colors.primary }}>INK STUDIO</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="font-body text-sm hover:opacity-70 transition-opacity" 
                style={{ color: colors.primary }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-body text-sm gap-2 text-white" style={{ backgroundColor: colors.primary }}>
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Pedir cita</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[85vh] min-h-[550px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interior del estudio de tatuajes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.85))` }} />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: colors.accent }}>Estudio de tatuajes en Valencia</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tight">INK STUDIO</h1>
          <p className="font-body text-lg md:text-xl mb-2 text-white/90 max-w-xl mx-auto">
            Tu visión, nuestra tinta
          </p>
          <p className="font-body text-base mb-8 text-white/70 max-w-md mx-auto">
            Creamos tatuajes únicos que cuentan tu historia. Más de 10 años de experiencia en Ruzafa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-body text-lg px-8 py-6 gap-3" style={{ backgroundColor: colors.accent, color: colors.primary }}>
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
      <section id="nosotros" className="py-16 md:py-24" style={{ backgroundColor: colors.background }}>
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Nuestra historia</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.primary }}>
              Más que tinta sobre piel
            </h2>
            <div className="space-y-4 text-left md:text-center">
              <p className="font-body text-lg leading-relaxed" style={{ color: colors.primary }}>
                Ink Studio nació en 2013 de la pasión de un grupo de artistas por crear tatuajes que cuenten historias. Cada diseño que sale de nuestro estudio es una pieza única, creada específicamente para ti.
              </p>
              <p className="font-body leading-relaxed" style={{ color: colors.primary, opacity: 0.8 }}>
                Nuestro equipo de tatuadores especializados trabaja en un espacio diseñado para que te sientas cómodo y seguro. Usamos solo materiales de primera calidad y seguimos los más estrictos protocolos de higiene.
              </p>
              <p className="font-body leading-relaxed" style={{ color: colors.primary, opacity: 0.8 }}>
                Ya sea tu primer tatuaje o el número 20, te acompañamos en todo el proceso: desde la idea inicial hasta el cuidado posterior.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Por qué elegirnos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
              Nuestra garantía
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div 
                  className="flex flex-col items-center text-center p-5 rounded-xl"
                  style={{ backgroundColor: colors.background }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: colors.accent }}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: colors.primary }}>{benefit.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos */}
      <section id="estilos" className="py-16 md:py-24" style={{ backgroundColor: colors.background }}>
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Lo que hacemos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
              Estilos de tatuaje
            </h2>
            <p className="font-body max-w-xl mx-auto" style={{ color: colors.primary, opacity: 0.7 }}>
              Dominamos múltiples estilos para adaptarnos a tu visión. ¿No sabes cuál elegir? Te asesoramos gratis.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {styles.map((style, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <div 
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
                  style={{ borderLeft: `4px solid ${colors.accent}` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primary }}>
                      <style.icon className="w-5 h-5" style={{ color: colors.accent }} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1" style={{ color: colors.primary }}>
                        {style.name}
                      </h3>
                      <p className="font-body text-sm" style={{ color: colors.primary, opacity: 0.6 }}>
                        {style.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <p className="font-body text-sm" style={{ color: colors.accent }}>
              ¿Tienes una idea diferente? Diseñamos cualquier estilo personalizado
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Nuestro trabajo</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
              Galería
            </h2>
            <p className="font-body max-w-xl mx-auto" style={{ color: colors.primary, opacity: 0.7 }}>
              Haz clic en cualquier imagen para verla en grande. Síguenos en Instagram para ver más trabajos.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <button 
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 w-full"
                  style={{ "--tw-ring-color": colors.accent } as React.CSSProperties}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{ background: `linear-gradient(to top, rgba(26, 26, 26, 0.9), transparent)` }}
                  >
                    <p className="font-body text-white text-sm p-4">{item.alt}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/inkstudio.valencia.demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body hover:underline"
              style={{ color: colors.accent }}
            >
              <Instagram className="w-5 h-5" />
              Ver más en @inkstudio
            </a>
          </div>
        </div>
      </section>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg"
                style={{ background: `linear-gradient(to top, rgba(26, 26, 26, 0.95), transparent)` }}
              >
                <p className="font-display text-white text-lg text-center">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Testimonios */}
      <section id="opiniones" className="py-16 md:py-24" style={{ backgroundColor: colors.background }}>
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Lo que dicen de nosotros</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
              Opiniones de clientes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
                    ))}
                  </div>
                  <p className="font-body mb-4 italic" style={{ color: colors.primary }}>
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-display font-semibold" style={{ color: colors.primary }}>{testimonial.name}</p>
                    <p className="font-body text-sm" style={{ color: colors.accent }}>{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Promoción */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Primera consulta gratuita
          </h2>
          <p className="font-body text-white/90 mb-2 text-xl">
            Cuéntanos tu idea y te asesoramos sin compromiso
          </p>
          <p className="font-body text-white/70 mb-8 max-w-md mx-auto">
            Hablamos sobre el diseño, el tamaño, la ubicación y te damos un presupuesto cerrado.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-body text-lg px-8 py-6 gap-3" style={{ backgroundColor: colors.accent, color: colors.primary }}>
              <MessageCircle className="w-5 h-5" />
              Reservar consulta gratis
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
              <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Cuándo venir</p>
              <h3 className="font-display text-2xl font-bold mb-6" style={{ color: colors.primary }}>Horario</h3>
              <div className="rounded-xl p-6" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: colors.accent }} />
                </div>
                <div className="space-y-3 font-body">
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: `1px solid ${colors.accent}33` }}>
                    <span style={{ color: colors.primary, opacity: 0.7 }}>Lunes a viernes</span>
                    <span className="font-semibold" style={{ color: colors.primary }}>11:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: `1px solid ${colors.accent}33` }}>
                    <span style={{ color: colors.primary, opacity: 0.7 }}>Sábados</span>
                    <span className="font-semibold" style={{ color: colors.primary }}>Solo con cita</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span style={{ color: colors.primary, opacity: 0.7 }}>Domingos</span>
                    <span className="font-semibold" style={{ color: colors.primary }}>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Dónde estamos</p>
              <h3 className="font-display text-2xl font-bold mb-6" style={{ color: colors.primary }}>Ubicación</h3>
              <div className="rounded-xl p-6" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" style={{ color: colors.accent }} />
                </div>
                <p className="font-display text-xl font-semibold mb-2" style={{ color: colors.primary }}>C/ Dénia, 23</p>
                <p className="font-body mb-4" style={{ color: colors.primary, opacity: 0.7 }}>46006 Ruzafa, Valencia</p>
                <p className="font-body text-sm" style={{ color: colors.primary, opacity: 0.6 }}>
                  En el corazón de Ruzafa.<br />
                  Metro: línea 5 y 7 (Xàtiva).<br />
                  Parking cercano en Plaza Xúquer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Final */}
      <section className="py-16" style={{ backgroundColor: colors.background }}>
        <div className="container text-center">
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: colors.accent }}>Contacta</p>
          <h3 className="font-display text-2xl font-bold mb-6" style={{ color: colors.primary }}>Pide tu cita</h3>
          <div className="max-w-sm mx-auto space-y-4">
            <a 
              href="tel:+34679910422"
              className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 font-display text-2xl font-bold hover:shadow-md transition-shadow"
              style={{ color: colors.primary }}
            >
              <Phone className="w-6 h-6" style={{ color: colors.accent }} />
              679 910 422
            </a>
            <p className="font-body text-sm" style={{ color: colors.primary, opacity: 0.6 }}>
              También puedes pasarte por el estudio para consultas
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full font-body gap-2 py-6 text-white" style={{ backgroundColor: colors.primary }}>
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
          <p className="font-body mb-4" style={{ color: colors.primary, opacity: 0.7 }}>Síguenos en redes</p>
          <a 
            href="https://instagram.com/inkstudio.valencia.demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body hover:shadow-md transition-shadow"
            style={{ backgroundColor: colors.background, color: colors.primary }}
          >
            <Instagram className="w-5 h-5" style={{ color: colors.accent }} />
            @inkstudio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ backgroundColor: colors.primary }}>
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Droplets className="w-5 h-5" style={{ color: colors.accent }} />
            <span className="font-display text-lg font-bold text-white tracking-wider">INK STUDIO</span>
          </div>
          <p className="font-body text-sm text-white/60 mb-6">
            Estudio de tatuajes en Ruzafa, Valencia
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a 
              href="https://instagram.com/inkstudio.valencia.demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="font-body text-xs text-white/40 mb-4">
            C/ Dénia, 23 · 46006 Ruzafa, Valencia
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

export default DemoTatuajes;
