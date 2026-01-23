import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    technical: true,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ technical: true, analytics: true }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ technical: true, analytics: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowConfig(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg animate-slide-up">
      <div className="container py-4 md:py-6">
        {!showConfig ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <p className="font-body text-sm text-foreground">
                Utilizamos cookies técnicas y de análisis para mejorar tu experiencia.{" "}
                <Link to="/politica-cookies" className="text-secondary hover:underline">
                  Más información
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowConfig(true)}>
                Configurar
              </Button>
              <Button variant="outline" size="sm" onClick={handleRejectAll}>
                Rechazar
              </Button>
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={handleAcceptAll}>
                Aceptar
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Configurar Cookies</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.technical}
                  disabled
                  className="w-4 h-4 accent-secondary"
                />
                <span className="font-body text-sm">
                  <strong>Técnicas</strong> (necesarias)
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 accent-secondary"
                />
                <span className="font-body text-sm">
                  <strong>Análisis</strong> (para mejorar la web)
                </span>
              </label>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowConfig(false)}>
                Volver
              </Button>
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={handleSavePreferences}>
                Guardar preferencias
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
