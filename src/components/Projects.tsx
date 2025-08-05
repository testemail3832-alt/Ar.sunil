import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Residence",
      category: "Residential",
      year: "2023",
      location: "Mumbai, India",
      description: "A contemporary family home featuring clean lines, sustainable materials, and seamless indoor-outdoor living.",
      image: project1,
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Office Complex",
      category: "Commercial",
      year: "2023",
      location: "Bangalore, India", 
      description: "An eco-friendly office building with innovative green technologies and modern workspaces.",
      image: project2,
      featured: true
    },
    {
      id: 3,
      title: "Cultural Arts Center",
      category: "Public",
      year: "2022",
      location: "Delhi, India",
      description: "A dynamic cultural hub with flowing architectural forms that celebrate creativity and community.",
      image: project3,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6 animate-slide-in-left"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-architect-charcoal mb-6 animate-fade-in-up">
            Featured <span className="font-semibold">Projects</span>
          </h2>
          <p className="text-lg text-architect-concrete max-w-2xl mx-auto animate-fade-in-delay-200">
            Explore a selection of my recent architectural projects that showcase 
            innovation, sustainability, and exceptional design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const delayClass = `animate-fade-in-delay-${(index + 3) * 100}`;
            return (
              <div 
                key={project.id}
                className={`group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${delayClass}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-architect-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-architect-gold text-architect-charcoal px-3 py-1 rounded-full text-sm font-medium animate-scale-in">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-architect-charcoal group-hover:text-architect-gold transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-architect-concrete">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-architect-concrete leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-architect-charcoal hover:text-architect-gold hover:bg-architect-gold/10 hover:scale-105 transition-all duration-300"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-architect-charcoal text-white hover:bg-architect-charcoal/90 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;