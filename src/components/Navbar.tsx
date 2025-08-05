import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-in-right ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="cursor-pointer animate-fade-in-delay-100"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className={`text-2xl font-light transition-all duration-300 ${
              isScrolled ? 'text-architect-charcoal' : 'text-white'
            }`}>
              Ar. <span className="font-semibold text-architect-gold">Sunil</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-delay-200">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-architect-gold hover:scale-105 animate-fade-in-delay-${(index + 3) * 100} ${
                  isScrolled ? 'text-architect-charcoal' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
            {/* <div className="hidden md:flex items-center space-x-4 animate-fade-in-delay-300">
              <Button 
                variant="ghost" 
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-architect-charcoal hover:text-architect-gold hover:bg-architect-gold/10' 
                    : 'text-white hover:text-architect-gold hover:bg-white/10'
                }`}
              >
                <Download className="mr-2 h-4 w-4" />
                Portfolio
              </Button>
              <Button 
                size="sm"
                className="bg-architect-gold text-architect-charcoal hover:bg-architect-gold/90 hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 animate-fade-in-delay-400 ${
              isScrolled 
                ? 'text-architect-charcoal hover:bg-architect-stone/20' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-elegant border border-white/20 animate-fade-in-up">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 font-medium text-architect-charcoal hover:text-architect-gold hover:bg-architect-gold/10 transition-all duration-300 hover:scale-105 animate-fade-in-delay-${(index + 1) * 100}`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-4 border-t border-architect-stone/30 space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-architect-charcoal hover:text-architect-gold hover:bg-architect-gold/10 animate-fade-in-delay-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Portfolio
              </Button>
              <Button 
                className="w-full bg-architect-gold text-architect-charcoal hover:bg-architect-gold/90 animate-fade-in-delay-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;