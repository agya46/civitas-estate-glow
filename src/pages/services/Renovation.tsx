
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { PaintRoller, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const subServices = [
  { name: 'Interior', link: '/services/renovation/interior', description: 'Complete interior renovation and design services.' },
  { name: 'Exterior', link: '/services/renovation/exterior', description: 'Transform the exterior appearance of your property.' },
  { name: 'Garden', link: '/services/renovation/garden', description: 'Professional garden design and landscaping services.' },
  { name: 'Green Construction', link: '/services/renovation/green-construction', description: 'Sustainable and eco-friendly construction solutions.' }
];

const Renovation = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <PaintRoller className="mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold">Renovation & Remodeling</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Transform your spaces with our professional renovation services.
            From interior makeovers to complete property transformations.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Renovation Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Designers</h3>
              <p className="text-civitas-dark/70">
                Our team includes experienced designers who can transform your vision into reality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-civitas-dark/70">
                We use only the highest quality materials for all our renovation projects.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Completion</h3>
              <p className="text-civitas-dark/70">
                We understand the importance of completing renovation projects on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your renovation project and schedule a consultation with our design team.
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

export default Renovation;
