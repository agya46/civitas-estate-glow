
import { Badge, BadgeCheck, Calendar, Clock, Heart, Shield, ThumbsUp, Trophy, Users } from 'lucide-react';

const TrustSignals = () => {
  const trustItems = [
    {
      icon: BadgeCheck,
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed and insured for your peace of mind."
    },
    {
      icon: Calendar,
      title: "5 Years Experience",
      description: "Serving residential and commercial properties with excellence since 2020."
    },
    {
      icon: Users,
      title: "100+ Happy Clients",
      description: "Join our growing list of satisfied property owners and managers."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "We're available around the clock for urgent maintenance needs."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all services."
    },
    {
      icon: Heart,
      title: "Eco-Friendly Options",
      description: "Sustainable solutions and green alternatives for environmentally conscious clients."
    }
  ];

  return (
    <section className="section-padding bg-civitas-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Civitas</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            We're committed to exceeding your expectations with professional service and meticulous attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover-lift"
            >
              <div className="w-16 h-16 bg-civitas-primary/10 text-civitas-primary rounded-full flex items-center justify-center mb-4">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-civitas-dark/70">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-center py-3 px-6">
            <img src="https://via.placeholder.com/120x60?text=Partner+1" alt="Partner Logo" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center py-3 px-6">
            <img src="https://via.placeholder.com/120x60?text=Partner+2" alt="Partner Logo" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center py-3 px-6">
            <img src="https://via.placeholder.com/120x60?text=Partner+3" alt="Partner Logo" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center py-3 px-6">
            <img src="https://via.placeholder.com/120x60?text=Partner+4" alt="Partner Logo" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
