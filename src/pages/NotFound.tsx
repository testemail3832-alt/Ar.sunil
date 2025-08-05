import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-6xl font-light text-architect-charcoal mb-4 animate-scale-in">404</h1>
        <p className="text-xl text-architect-concrete mb-8 animate-fade-in-delay-200">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-architect-gold text-architect-charcoal px-6 py-3 rounded-lg font-medium hover:bg-architect-gold/90 transition-all duration-300 hover:scale-105 animate-fade-in-delay-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
