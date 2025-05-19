
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-civitas-light to-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')",
        opacity: 0.2
      }}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-civitas-dark mb-6 animate-fade-in">
            Professional Estate <span className="text-civitas-primary">Maintenance</span> & <span className="text-civitas-primary">Management</span>
          </h1>
          <p className="text-xl text-civitas-dark/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive solutions for residential and commercial properties. 
            From routine maintenance to complete renovations, we handle it all with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="btn-primary">
              <Link to="/contact" className="flex items-center">
                Book Now <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button asChild className="btn-outline">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
