import { Mail, Phone, MapPin,  Instagram, Facebook, MessageCircleMore} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-architect-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-light mb-2 animate-slide-in-left">
                Ar. <span className="font-semibold text-architect-gold">Sunil</span>
              </h3>
              <p className="text-white/70 leading-relaxed animate-fade-in-delay-200">
                Creating innovative and sustainable architectural solutions 
                that transform spaces and enhance lives.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 animate-fade-in-delay-300">
              {[
                { icon: MessageCircleMore, href: "https://wa.me/919816724796?text=Hi%20Sunil%2C%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.", label: "Whatsapp" },
                { icon: Instagram, href: "https://www.instagram.com/homes_tead93?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-architect-gold hover:text-architect-charcoal transition-all duration-300 hover:scale-110 hover:rotate-6 animate-fade-in-delay-${(index + 4) * 100}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-delay-200">
            <h4 className="text-lg font-semibold mb-6 animate-slide-in-left">Quick Links</h4>
            <div className="space-y-3">
              {[
                "About", 
                "Projects", 
                "Services", 
                "Contact",
                "Consultation"
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block text-white/70 hover:text-architect-gold transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-fade-in-delay-${(index + 3) * 100}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-delay-400">
            <h4 className="text-lg font-semibold mb-6 animate-slide-in-right">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 animate-fade-in-delay-500 hover:scale-105 hover:translate-x-2 transition-all duration-300">
                <Mail className="h-5 w-5 text-architect-gold animate-scale-in" />
                <span className="text-white/70">Sunil.sk.kumar93@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-delay-600 hover:scale-105 hover:translate-x-2 transition-all duration-300">
                <Phone className="h-5 w-5 text-architect-gold animate-scale-in" />
                <span className="text-white/70">+91 9816724796</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-delay-700 hover:scale-105 hover:translate-x-2 transition-all duration-300">
                <MapPin className="h-5 w-5 text-architect-gold animate-scale-in" />
                <span className="text-white/70">2761, Basement Floor Aerocity Block-c, Mohali.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 animate-fade-in-delay-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm animate-fade-in-delay-900">
              © 2024 Architect Sunil. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm animate-fade-in-delay-1000">
              <a href="#" className="text-white/70 hover:text-architect-gold transition-all duration-300 hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-architect-gold transition-all duration-300 hover:scale-105">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;