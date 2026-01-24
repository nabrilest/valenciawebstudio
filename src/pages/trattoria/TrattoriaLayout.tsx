import { useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { 
  Phone, 
  Instagram, 
  MessageCircle,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const whatsappNumber = "34600000000";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca`;

const TrattoriaLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: "Inicio", path: "/demo/trattoria" },
    { label: "Carta", path: "/demo/trattoria/carta" },
    { label: "Menús", path: "/demo/trattoria/menus" },
    { label: "Nosotros", path: "/demo/trattoria/nosotros" },
    { label: "Contacto", path: "/demo/trattoria/contacto" },
  ];

  const isActive = (path: string) => {
    if (path === "/demo/trattoria") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Demo Banner */}
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
            <Link to="/demo/trattoria" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-[#F5E6D3]">Trattoria San Luca</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium ${
                    isActive(item.path) 
                      ? "text-[#D4A574]" 
                      : "text-[#F5E6D3]/80 hover:text-[#D4A574]"
                  }`}
                >
                  {item.label}
                </Link>
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

      {/* Page Content */}
      <Outlet />

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
            
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4A574] text-[#2C1810] flex items-center justify-center hover:bg-[#C49460] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BA5C] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
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

export default TrattoriaLayout;
