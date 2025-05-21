
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Plug, 
  PaintRoller, 
  Building, 
  House,
  ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: 'Maintenance',
    description: 'Regular maintenance and emergency repairs for all your property needs.',
    icon: Wrench,
    link: '/services/maintenance',
    color: 'bg-blue-50 text-blue-700',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=500',
    subServices: [
      { name: 'Electricals', link: '/services/maintenance/electricals' },
      { name: 'Plumbing', link: '/services/maintenance/plumbing' },
      { name: 'Painting', link: '/services/maintenance/painting' },
    ]
  },
  {
    id: 2,
    title: 'Installations',
    description: 'Professional installation of smart technology, solar panels, and security systems.',
    icon: Plug,
    link: '/services/installations',
    color: 'bg-green-50 text-green-700',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=500',
    subServices: [
      { name: 'Smart Tech', link: '/services/installations/smart-tech' },
      { name: 'Solar Panels', link: '/services/installations/solar-panels' },
      { name: 'Security Systems', link: '/services/installations/security-systems' },
    ]
  },
  {
    id: 3,
    title: 'Renovation',
    description: 'Complete interior and exterior renovations and remodeling.',
    icon: PaintRoller,
    link: '/services/renovation',
    color: 'bg-amber-50 text-amber-700',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=500',
    subServices: [
      { name: 'Interior', link: '/services/renovation/interior' },
      { name: 'Exterior', link: '/services/renovation/exterior' },
      { name: 'Garden', link: '/services/renovation/garden' },
    ]
  },
  {
    id: 4,
    title: 'Property Management',
    description: 'Comprehensive property management for residential and commercial properties.',
    icon: Building,
    link: '/services/property-management',
    color: 'bg-purple-50 text-purple-700',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500',
    subServices: [
      { name: 'Residential', link: '/services/property-management/residential' },
      { name: 'Commercial', link: '/services/property-management/commercial' },
    ]
  },
  {
    id: 5,
    title: 'Architectural Design',
    description: 'Custom architectural design and planning services.',
    icon: House,
    link: '/services/architectural-design',
    color: 'bg-indigo-50 text-indigo-700',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=500',
    subServices: [
      { name: 'Custom Design', link: '/services/architectural-design' },
      { name: 'Blueprint Planning', link: '/services/architectural-design' },
    ]
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
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-civitas-dark/70 mb-4">{service.description}</p>
                
                <ul className="mb-5 space-y-1">
                  {service.subServices.map((subService, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight size={12} className="mr-2 text-civitas-primary" />
                      <Link to={subService.link} className="text-civitas-dark/80 hover:text-civitas-primary text-sm">
                        {subService.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full mt-2 bg-civitas-primary text-white hover:bg-civitas-primary/90">
                  <Link to={service.link}>View All {service.title} Services</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
