import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo & Description */}
          <div className="space-y-3">
            <img src={logo} alt="Valencia Web Studio" className="h-16 w-auto brightness-0 invert" />
            <p className="font-body text-sm text-primary-foreground/80 max-w-xs">
              Webs con alma valenciana. Diseñadas con cariño para negocios locales.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold">Navegación</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/servicios" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Servicios
              </Link>
              <Link to="/proyectos" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Proyectos
              </Link>
              <Link to="/contacto" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/aviso-legal" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Aviso Legal
              </Link>
              <Link to="/politica-privacidad" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/politica-cookies" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Cookies
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold">Síguenos</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/34679910422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/valenciawebstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                @valenciawebstudio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {currentYear} Valencia Web Studio. Hecho con 🍊 en Valencia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
