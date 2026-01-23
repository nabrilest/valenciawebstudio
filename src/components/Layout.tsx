import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://valenciawebstudio.es" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
};

export default Layout;
