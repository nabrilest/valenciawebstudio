import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import DemoPeluqueria from "./pages/DemoPeluqueria";
import {
  TrattoriaLayout,
  TrattoriaHome,
  TratториаCarta,
  TrattoriaMenus,
  TratториаNosotros,
  TrattoriaContacto
} from "./pages/trattoria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/demo/peluqueria" element={<DemoPeluqueria />} />
            
            {/* Trattoria Demo - Nested Routes */}
            <Route path="/demo/trattoria" element={<TrattoriaLayout />}>
              <Route index element={<TrattoriaHome />} />
              <Route path="carta" element={<TratториаCarta />} />
              <Route path="menus" element={<TrattoriaMenus />} />
              <Route path="nosotros" element={<TratториаNosotros />} />
              <Route path="contacto" element={<TrattoriaContacto />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
