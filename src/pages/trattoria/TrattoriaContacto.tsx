import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Navigation,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappNumber = "34600000000";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Trattoria%20San%20Luca`;

const TrattoriaContacto = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#2C1810]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A574] font-medium tracking-widest uppercase mb-4 text-sm">
            Encuéntranos
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4">
            Horario y ubicación
          </h1>
          <p className="text-[#F5E6D3]/80 max-w-2xl mx-auto">
            Estamos en el corazón de Ruzafa, esperándote con las puertas abiertas
          </p>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2 text-lg">Horario</h3>
                    <p className="text-[#5C4033]">Martes a Domingo</p>
                    <p className="text-[#5C4033]">13:30 - 16:00 y 20:30 - 23:30</p>
                    <p className="text-[#5C4033]/60 text-sm mt-1">Lunes cerrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2 text-lg">Dirección</h3>
                    <p className="text-[#5C4033]">Calle Literato Azorín, 42</p>
                    <p className="text-[#5C4033]">46006 Valencia (Ruzafa)</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#D4A574] text-sm hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <Navigation className="h-4 w-4" />
                      Cómo llegar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2 text-lg">Teléfono</h3>
                    <a href="tel:+34960000000" className="text-[#5C4033] hover:text-[#D4A574] transition-colors">
                      +34 960 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2 text-lg">Email</h3>
                    <a href="mailto:info@trattoriasanluca.es" className="text-[#5C4033] hover:text-[#D4A574] transition-colors">
                      info@trattoriasanluca.es
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 bg-[#2C1810] rounded-2xl">
                <h3 className="font-serif text-xl font-bold text-[#F5E6D3] mb-2">
                  ¿Quieres reservar mesa?
                </h3>
                <p className="text-[#F5E6D3]/70 text-sm mb-4">
                  La forma más rápida es por WhatsApp. Te confirmamos al instante.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Reservar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0!2d-0.37!3d39.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI3JzM2LjAiTiAwwrAyMicxMi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Trattoria San Luca"
                />
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
                  alt="Interior del restaurante"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrattoriaContacto;
