import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Valencia Web Studio" className="h-12 w-auto brightness-0 invert" />
            <p className="font-body text-sm text-primary-foreground/80 max-w-xs">
              Estudio de diseño web en Valencia. Webs profesionales para negocios locales.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
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
          <div className="space-y-4">
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
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {currentYear} Valencia Web Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
