import { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { 
  Phone, 
  Instagram, 
  MessageCircle,
  ArrowLeft,
  Menu,
  X,
  Home,
  BookOpen,
  UtensilsCrossed,
  Users,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const whatsappNumber = "34600000000";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca`;

const TrattoriaLayout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Inicio", path: "/demo/trattoria", icon: Home },
    { label: "Carta", path: "/demo/trattoria/carta", icon: BookOpen },
    { label: "Menús", path: "/demo/trattoria/menus", icon: UtensilsCrossed },
    { label: "Nosotros", path: "/demo/trattoria/nosotros", icon: Users },
    { label: "Contacto", path: "/demo/trattoria/contacto", icon: MapPin },
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
            <p className="font-body text-sm hidden sm:block">
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
            {/* Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-[#F5E6D3] hover:bg-[#3D2317] hover:text-[#D4A574]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-[#2C1810] border-[#3D2317] p-0">
                <SheetHeader className="p-6 border-b border-[#3D2317]">
                  <SheetTitle className="font-serif text-2xl font-bold text-[#F5E6D3] text-left">
                    Trattoria San Luca
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="p-4">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive(item.path) 
                              ? "bg-[#D4A574] text-[#2C1810] font-semibold" 
                              : "text-[#F5E6D3]/80 hover:bg-[#3D2317] hover:text-[#D4A574]"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#3D2317]">
                  <Button 
                    asChild 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Reservar mesa
                    </a>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#3D2317] text-[#D4A574] flex items-center justify-center hover:bg-[#4A2D1F] transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="tel:+34960000000"
                      className="w-10 h-10 rounded-full bg-[#3D2317] text-[#D4A574] flex items-center justify-center hover:bg-[#4A2D1F] transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/demo/trattoria" className="flex items-center gap-2">
              <span className="font-serif text-xl md:text-2xl font-bold text-[#F5E6D3]">Trattoria San Luca</span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
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

            {/* Reserve Button */}
            <Button 
              asChild 
              className="bg-[#D4A574] hover:bg-[#C49460] text-[#2C1810] font-semibold hidden sm:flex"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reservar
              </a>
            </Button>
            
            {/* Mobile placeholder for centering */}
            <div className="w-10 sm:hidden" />
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
