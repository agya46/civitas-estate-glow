
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
          <span className="inline-block px-3 py-1 bg-civitas-secondary/20 text-civitas-secondary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Trusted by 100+ Property Owners
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-civitas-dark mb-6 animate-fade-in">
            Professional Estate <span className="text-civitas-primary">Maintenance</span> & <span className="text-civitas-primary">Management</span>
          </h1>
          <p className="text-xl text-civitas-dark/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From routine maintenance to complete renovations, we deliver comprehensive property solutions with precision and care. One call handles it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-civitas-primary hover:bg-civitas-primary/90 text-white font-medium">
              <Link to="#onboarding" className="flex items-center">
                Get a Free Quote <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-civitas-dark/20 text-civitas-dark hover:bg-civitas-dark/5">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-2">
              <svg className="text-green-600 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Licensed & Insured</span>
            </span>
            <span className="flex items-center gap-2">
              <svg className="text-green-600 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>24/7 Emergency Service</span>
            </span>
            <span className="flex items-center gap-2">
              <svg className="text-green-600 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Free Consultation</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
