import Layout from "@/components/Layout";

const AvisoLegal = () => {
  return (
    <Layout
      title="Aviso Legal | Valencia Web Studio"
      description="Aviso legal de Valencia Web Studio. Información legal y condiciones de uso."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Aviso Legal
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Datos del titular</h2>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Titular:</strong> Valencia Web Studio</li>
                  <li><strong className="text-foreground">Actividad:</strong> Servicios de diseño web</li>
                  <li><strong className="text-foreground">Ubicación:</strong> Valencia, España</li>
                  <li><strong className="text-foreground">Contacto:</strong> Formulario web</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Propiedad intelectual</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Todos los contenidos de esta web son propiedad de Valencia Web Studio. Queda prohibida su reproducción total o parcial sin autorización.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Condiciones de uso</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  El acceso a esta web implica la aceptación de las presentes condiciones legales. Valencia Web Studio se reserva el derecho de modificar en cualquier momento el contenido y las condiciones de uso de este sitio web.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Exclusión de responsabilidad</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Valencia Web Studio no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de esta web, ni de las decisiones tomadas a partir de la información contenida en ella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AvisoLegal;
