import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sunil@architectsunil.com",
      link: "mailto:sunil@architectsunil.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9816724796",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Mumbai, Maharashtra, India",
      link: "#"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6 animate-scale-in"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-architect-charcoal mb-6 animate-fade-in-up">
            Get <span className="font-semibold">In Touch</span>
          </h2>
          <p className="text-lg text-architect-concrete max-w-2xl mx-auto animate-fade-in-delay-200">
            Ready to start your architectural journey? Let's discuss your vision 
            and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-architect-charcoal mb-6 animate-fade-in-delay-300">
                Start Your Project
              </h3>
              <form className="space-y-6 animate-fade-in-delay-400">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-architect-stone" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-architect-stone" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-architect-stone" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+91 9816724796" className="border-architect-stone" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                    Project Type
                  </label>
                  <select className="w-full p-3 border border-architect-stone rounded-md bg-white text-architect-charcoal">
                    <option>Select project type</option>
                    <option>Residential Design</option>
                    <option>Commercial Architecture</option>
                    <option>Interior Architecture</option>
                    <option>Renovation</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-architect-charcoal mb-2 block">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project vision, requirements, timeline, and budget..."
                    rows={5}
                    className="border-architect-stone"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-architect-charcoal text-white hover:bg-architect-charcoal/90 py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold text-architect-charcoal mb-6 animate-fade-in-delay-300">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className={`flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group hover:scale-105 hover:-translate-y-1 animate-fade-in-delay-${(index + 4) * 100}`}
                    >
                      <div className="w-12 h-12 bg-architect-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-architect-gold/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-architect-charcoal" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-architect-concrete mb-1">
                          {info.label}
                        </div>
                        <div className="text-architect-charcoal font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-subtle p-8 rounded-lg animate-fade-in-delay-800">
              <h4 className="text-xl font-semibold text-architect-charcoal mb-4">
                Why Choose Architect Sunil?
              </h4>
              <ul className="space-y-3 text-architect-concrete">
                <li className="flex items-center space-x-3 animate-fade-in-delay-900 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-architect-gold rounded-full animate-scale-in"></div>
                  <span>15+ years of proven experience</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in-delay-1000 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-architect-gold rounded-full animate-scale-in"></div>
                  <span>Sustainable design specialist</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in-delay-1100 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-architect-gold rounded-full animate-scale-in"></div>
                  <span>Award-winning projects</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in-delay-1200 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-architect-gold rounded-full animate-scale-in"></div>
                  <span>Personalized client service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;