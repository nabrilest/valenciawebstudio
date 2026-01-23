import Layout from "@/components/Layout";

const PoliticaCookies = () => {
  return (
    <Layout
      title="Política de Cookies | Valencia Web Studio"
      description="Política de cookies de Valencia Web Studio. Información sobre el uso de cookies en nuestra web."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Política de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <h3 className="font-body font-semibold text-foreground mb-2">Cookies técnicas</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Son necesarias para el funcionamiento de la web. Permiten recordar tus preferencias de cookies.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <h3 className="font-body font-semibold text-foreground mb-2">Cookies de análisis</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Nos ayudan a entender cómo los visitantes interactúan con la web para mejorar su funcionamiento.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Gestión de cookies</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  El usuario puede aceptar, rechazar o configurar las cookies desde el aviso inicial que aparece al visitar la web. También puedes modificar la configuración de tu navegador para gestionar las cookies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Más información</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Si tienes dudas sobre nuestra política de cookies, puedes contactar con nosotros a través del formulario de contacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaCookies;
