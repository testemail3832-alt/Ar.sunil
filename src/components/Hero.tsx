import { Button } from "@/components/ui/button";
import { Mail, ArrowDown, MessageCircle } from "lucide-react";
// import architectPortrait from "@/assets/architect-portrait.jpg";
import architectPortrait from "@/assets/WhatsApp Image 2025-08-05 at 10.01.09 PM.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-white/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-gradient-accent animate-slide-in-left"></div>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight animate-fade-in-delay-100 flex gap-3">
              Ar.
              <span className="block font-semibold text-architect-gold animate-fade-in-delay-200">
                Sunil
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed animate-fade-in-delay-300">
              Creating innovative spaces that blend form, function, and
              sustainability. Transforming visions into architectural
              masterpieces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-400">
            {/* Email Button */}
            <a
              href="mailto:your-email@example.com?subject=Architect%20Inquiry&body=Hi%20Sunil%2C%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-architect-gold text-architect-charcoal hover:bg-architect-gold/90 font-medium px-8 py-3 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919816724796?text=Hi%20Sunil%2C%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:bg-white/10 font-medium px-8 py-3 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative animate-slide-in-right">
          <div className="relative z-10 animate-float">
            <img
              src={architectPortrait}
              alt="Architect Sunil"
              className="w-full max-w-md max-h-[500px] mx-auto rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
            />
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-architect-gold/30 rounded-lg -z-10 animate-scale-in"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
