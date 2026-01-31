import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <a
      href="tel:+34679910422"
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:bg-secondary/90 transition-all hover:scale-110 active:scale-95"
      aria-label="Llamar ahora"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default MobileCallButton;
