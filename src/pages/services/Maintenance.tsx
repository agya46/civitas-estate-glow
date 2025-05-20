
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { Wrench, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const subServices = [
  { name: 'Electricals', link: '/services/maintenance/electricals', description: 'Professional electrical maintenance and repairs.' },
  { name: 'Plumbing', link: '/services/maintenance/plumbing', description: 'Expert plumbing services and water system maintenance.' },
  { name: 'Cleaning', link: '/services/maintenance/cleaning', description: 'Comprehensive cleaning services for all property types.' },
  { name: 'Carpentry', link: '/services/maintenance/carpentry', description: 'Skilled carpentry work and woodwork maintenance.' },
  { name: 'Painting', link: '/services/maintenance/painting', description: 'Interior and exterior painting services.' }
];

const Maintenance = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <Wrench className="mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold">Maintenance Services</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive maintenance services to keep your property in perfect condition.
            Our expert team handles all aspects of property maintenance.
          </p>
        </div>
      </section>

      {/* Sub-services Listing */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {subServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-civitas-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-civitas-dark/80 mb-4">
                  {service.description}
                </p>
                <span className="text-civitas-primary font-medium flex items-center">
                  Learn more <ChevronRight className="ml-2" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Maintenance Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
              <p className="text-civitas-dark/70">
                Our maintenance team consists of licensed and experienced professionals in every field.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response Time</h3>
              <p className="text-civitas-dark/70">
                We prioritize urgent maintenance needs with our 24/7 emergency service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-civitas-dark/70">
                All our maintenance work comes with a satisfaction guarantee for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your maintenance needs. Our team is ready to provide the solutions you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Schedule Maintenance</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Maintenance;
