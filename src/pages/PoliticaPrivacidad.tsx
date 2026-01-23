import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const PoliticaPrivacidad = () => {
  return (
    <Layout
      title="Política de Privacidad | Valencia Web Studio"
      description="Política de privacidad de Valencia Web Studio. Información sobre el tratamiento de datos personales."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Política de Privacidad
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Datos recogidos</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Los datos recogidos a través del formulario (nombre, email y mensaje) se utilizan únicamente para responder a consultas.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Cesión de datos</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  No se ceden datos a terceros.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Base legal</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  La base legal es el consentimiento del usuario.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Derechos del usuario</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  El usuario puede ejercer sus derechos de acceso, rectificación o supresión mediante el{" "}
                  <Link to="/contacto" className="text-secondary hover:underline">
                    formulario de contacto
                  </Link>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Responsable del tratamiento</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Valencia Web Studio, ubicado en Valencia, España.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidad;
