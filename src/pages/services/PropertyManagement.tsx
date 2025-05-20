
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { Building, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const subServices = [
  { name: 'Residential', link: '/services/property-management/residential', description: 'Complete management services for residential properties.' },
  { name: 'Commercial', link: '/services/property-management/commercial', description: 'Professional management for commercial properties and facilities.' }
];

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <Building className="mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold">Property Management</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive property management services for residential and commercial properties.
            Leave the management to us while you focus on what matters.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Property Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Management</h3>
              <p className="text-civitas-dark/70">
                Our dedicated property managers ensure your property is maintained to the highest standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Reporting</h3>
              <p className="text-civitas-dark/70">
                Regular financial reports keep you informed about your property's performance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tenant Satisfaction</h3>
              <p className="text-civitas-dark/70">
                We prioritize tenant satisfaction to ensure long-term rentals and minimal vacancies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Property Ownership?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our property management services can benefit you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Schedule Consultation</Link>
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

export default PropertyManagement;
