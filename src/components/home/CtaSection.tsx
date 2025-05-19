
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const CtaSection = () => {
  const benefits = [
    'Professional, licensed technicians',
    'Transparent pricing with no hidden fees',
    'Fast response times, including emergency services',
    'Custom solutions for every property',
    'Satisfaction guaranteed on all services'
  ];

  return (
    <section className="section-padding bg-civitas-primary text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
            
            <p className="text-lg mb-8">
              Whether you need routine maintenance or a complete renovation, our expert team is ready to help. 
              Book a consultation today and experience the Civitas difference.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-3 text-civitas-secondary shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-civitas-primary hover:bg-civitas-secondary hover:text-civitas-dark">
                <Link to="/contact">Book a Service</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl hover-lift hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80" 
              alt="Professional maintenance team" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
