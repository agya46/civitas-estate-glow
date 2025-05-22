
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Plug, 
  PaintRoller, 
  Building, 
  House,
  ArrowRight,
  Check,
  Bath
} from 'lucide-react';

// Service categories with their sub-services
const serviceCategories = [
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Comprehensive maintenance services to keep your property in perfect condition.',
    icon: Wrench,
    color: 'bg-blue-50 text-blue-700',
    link: '/services/maintenance',
    subservices: [
      { name: 'Electricals', link: '/services/maintenance/electricals' },
      { name: 'Plumbing', link: '/services/maintenance/plumbing' },
      { name: 'Cleaning', link: '/services/maintenance/cleaning' },
      { name: 'Carpentry', link: '/services/maintenance/carpentry' },
      { name: 'Painting', link: '/services/maintenance/painting' }
    ]
  },
  {
    id: 'installations',
    title: 'Installations',
    description: 'Expert installation services for modern technology and systems.',
    icon: Plug,
    color: 'bg-green-50 text-green-700',
    link: '/services/installations',
    subservices: [
      { name: 'Smart Tech', link: '/services/installations/smart-tech' },
      { name: 'Solar Panels', link: '/services/installations/solar-panels' },
      { name: 'Security Systems', link: '/services/installations/security-systems' }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Transform your spaces with our professional renovation services.',
    icon: PaintRoller,
    color: 'bg-amber-50 text-amber-700',
    link: '/services/renovation',
    subservices: [
      { name: 'Interior', link: '/services/renovation/interior' },
      { name: 'Exterior', link: '/services/renovation/exterior' },
      { name: 'Garden', link: '/services/renovation/garden' },
      { name: 'Green Construction', link: '/services/renovation/green-construction' }
    ]
  },
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Complete property management services for residential and commercial properties.',
    icon: Building,
    color: 'bg-purple-50 text-purple-700',
    link: '/services/property-management',
    subservices: [
      { name: 'Residential', link: '/services/property-management/residential' },
      { name: 'Commercial', link: '/services/property-management/commercial' }
    ]
  },
  {
    id: 'architectural-design',
    title: 'Architectural Design & Planning',
    description: 'Professional design and planning services for your property projects.',
    icon: House,
    color: 'bg-indigo-50 text-indigo-700',
    link: '/services/architectural-design',
    subservices: []
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    description: 'Professional cleaning services for residential and commercial properties.',
    icon: Bath,
    color: 'bg-cyan-50 text-cyan-700',
    link: '/services/cleaning',
    subservices: [
      { name: 'Deep Cleaning', link: '/services/cleaning/deep-cleaning' },
      { name: 'Post-Construction', link: '/services/cleaning/post-construction' },
      { name: 'Regular Maintenance', link: '/services/cleaning/regular-maintenance' },
      { name: 'Move-in/Move-out', link: '/services/cleaning/move-in-out' }
    ]
  }
];

const ServicesOverview = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Discover our comprehensive range of estate maintenance and management services designed to meet all your property needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Category description */}
                  <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
                    <p className="text-lg text-civitas-dark/80 mb-4">{category.description}</p>
                    
                    <Link 
                      to={category.link} 
                      className="text-civitas-primary font-medium flex items-center hover:underline"
                    >
                      Learn more about {category.title} <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                  
                  {/* Sub-services */}
                  <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
                    <h3 className="text-xl font-semibold mb-4">Our {category.title} Services</h3>
                    
                    {category.subservices.length > 0 ? (
                      <ul className="space-y-3">
                        {category.subservices.map((subservice, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-3 text-civitas-primary" size={18} />
                            <Link 
                              to={subservice.link} 
                              className="hover:text-civitas-primary transition-colors"
                            >
                              {subservice.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-civitas-dark/70">Contact us to learn more about our custom architectural design services.</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your property maintenance and management needs. Our team is ready to provide the solutions you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Service
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesOverview;
