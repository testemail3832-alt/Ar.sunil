import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Helmet>
        <title>Architect Sunil | Modern Architecture Portfolio</title>
        <meta
          name="description"
          content="Transforming visions into architectural masterpieces. Explore Sunil's innovative and sustainable architecture."
        />
        <meta
          name="keywords"
          content="Architect Sunil, architecture, modern design, sustainable buildings, architectural portfolio"
        />
        <meta name="author" content="Sunil" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta (for sharing) */}
        <meta property="og:title" content="Architect Sunil | Modern Architecture" />
        <meta
          property="og:description"
          content="Explore the portfolio of Sunil, an innovative architect focused on sustainable and modern architecture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architect Sunil | Modern Architecture" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Sunil, an innovative architect focused on sustainable and modern architecture."
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Page Content */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
