
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Plug, 
  Home, 
  PaintRoller, 
  Building, 
  SolarPanel, 
  SecuritySystem,
  House
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Maintenance',
    description: 'Regular maintenance and emergency repairs for all your property needs.',
    icon: Wrench,
    link: '/services/maintenance',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    id: 2,
    title: 'Installations',
    description: 'Professional installation of smart technology, solar panels, and security systems.',
    icon: Plug,
    link: '/services/installations',
    color: 'bg-green-50 text-green-700',
  },
  {
    id: 3,
    title: 'Renovation',
    description: 'Complete interior and exterior renovations and remodeling.',
    icon: PaintRoller,
    link: '/services/renovation',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: 4,
    title: 'Property Management',
    description: 'Comprehensive property management for residential and commercial properties.',
    icon: Building,
    link: '/services/property-management',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    id: 5,
    title: 'Architectural Design',
    description: 'Custom architectural design and planning services.',
    icon: House,
    link: '/services/architectural-design',
    color: 'bg-indigo-50 text-indigo-700',
  },
];

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-civitas-light/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            We provide a comprehensive range of estate maintenance and management services to keep your property in perfect condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link to={service.link} key={service.id} className="service-card group">
              <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-civitas-dark/70 mb-4">{service.description}</p>
              <span className="text-civitas-primary font-medium flex items-center">
                Learn more <ArrowRight className="ml-2" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;

import { ArrowRight } from 'lucide-react';
