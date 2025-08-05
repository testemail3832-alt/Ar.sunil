import { Building, Home, Leaf, PenTool, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Custom homes that reflect your lifestyle and values, from concept to completion."
    },
    {
      icon: Building,
      title: "Commercial Architecture", 
      description: "Innovative office buildings, retail spaces, and mixed-use developments."
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Eco-friendly architecture that minimizes environmental impact while maximizing efficiency."
    },
    {
      icon: PenTool,
      title: "Interior Architecture",
      description: "Thoughtful interior spaces that enhance functionality and aesthetic appeal."
    },
    {
      icon: Users,
      title: "Urban Planning",
      description: "Community-focused planning that creates vibrant, livable neighborhoods."
    },
    {
      icon: Zap,
      title: "Renovation & Restoration",
      description: "Breathing new life into existing structures while preserving their character."
    }
  ];

  return (
    <section id="services" className="py-20 bg-architect-stone/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6 animate-slide-in-left"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-architect-charcoal mb-6 animate-fade-in-up">
            Services <span className="font-semibold">Offered</span>
          </h2>
          <p className="text-lg text-architect-concrete max-w-2xl mx-auto animate-fade-in-delay-200">
            Comprehensive architectural services tailored to bring your vision to life 
            with precision, creativity, and sustainable practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const delayClass = `animate-fade-in-delay-${(index + 1) * 100}`;
            return (
              <div 
                key={index}
                className={`group bg-white p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${delayClass}`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                    <IconComponent className="h-8 w-8 text-architect-charcoal" />
                  </div>
                  <h3 className="text-xl font-semibold text-architect-charcoal mb-3 group-hover:text-architect-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-architect-concrete leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-architect-charcoal mb-4">
              Design <span className="font-semibold">Process</span>
            </h3>
            <p className="text-architect-concrete">
              A collaborative approach to exceptional architecture
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
              { step: "02", title: "Concept", description: "Developing initial design concepts and ideas" },
              { step: "03", title: "Design", description: "Detailed architectural plans and specifications" },
              { step: "04", title: "Execution", description: "Construction oversight and project completion" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-architect-charcoal text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-architect-charcoal mb-2">
                  {phase.title}
                </h4>
                <p className="text-architect-concrete text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;