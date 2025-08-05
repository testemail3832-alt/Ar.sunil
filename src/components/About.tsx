const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "25+", label: "Awards Won" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="w-20 h-1 bg-gradient-accent mb-6 animate-scale-in"></div>
              <h2 className="text-4xl lg:text-5xl font-light text-architect-charcoal mb-6 animate-fade-in-up">
                About <span className="font-semibold">Ar. Sunil</span>
              </h2>
              <div className="space-y-6 text-lg text-architect-concrete leading-relaxed">
                <p className="animate-fade-in-delay-200">
                  With over 10 years of experience in architectural design, I specialize in creating 
                  innovative and sustainable spaces that seamlessly blend aesthetic appeal with 
                  functional excellence.
                </p>
                <p className="animate-fade-in-delay-300">
                  My approach to architecture is rooted in understanding the unique needs of each 
                  client while respecting the environment and community. Every project is an 
                  opportunity to push boundaries and create something extraordinary.
                </p>
                <p className="animate-fade-in-delay-400">
                  From residential masterpieces to commercial landmarks, my portfolio reflects 
                  a commitment to design excellence, sustainability, and innovative problem-solving.
                </p>
              </div>
            </div>
            
            {/* Specializations */}
            <div className="animate-fade-in-delay-500">
              <h3 className="text-2xl font-medium text-architect-charcoal mb-4">Specializations</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Residential Architecture",
                  "Commercial Buildings", 
                  "Sustainable Design",
                  "Interior Architecture",
                  "Urban Planning",
                  "Renovation Projects"
                ].map((specialization, index) => (
                  <div key={index} className={`flex items-center space-x-3 animate-fade-in-delay-${(index + 6) * 100} hover:scale-105 transition-transform duration-300`}>
                    <div className="w-2 h-2 bg-architect-gold rounded-full animate-scale-in"></div>
                    <span className="text-architect-concrete">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-8 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-delay-${(index + 2) * 100}`}>
                <div className="text-4xl lg:text-5xl font-light text-architect-charcoal mb-2 animate-scale-in">
                  {stat.number}
                </div>
                <div className="text-architect-concrete font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;