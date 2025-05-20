
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { Plug, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const subServices = [
  { name: 'Smart Tech', link: '/services/installations/smart-tech', description: 'Modern smart home technology installation and setup.' },
  { name: 'Solar Panels', link: '/services/installations/solar-panels', description: 'Sustainable solar panel solutions for energy efficiency.' },
  { name: 'Security Systems', link: '/services/installations/security-systems', description: 'Advanced security system installation and monitoring.' }
];

const Installations = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <Plug className="mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold">Installation Services</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Expert installation services for modern technology and systems. 
            Enhance your property with the latest innovations, professionally installed.
          </p>
        </div>
      </section>

      {/* Sub-services Listing */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Installation Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Installers</h3>
              <p className="text-civitas-dark/70">
                Our installation team consists of certified professionals with extensive experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-civitas-dark/70">
                We stay updated with the latest advances in technology to provide cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-civitas-dark/70">
                We provide comprehensive support and training after installation is complete.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Property?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your installation needs and discover how we can enhance your property.
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

export default Installations;
