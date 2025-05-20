
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { House, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArchitecturalDesign = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <House className="mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold">Architectural Design & Planning</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Professional design and planning services for your property projects.
            Our architects transform your dreams into reality with creative and functional designs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Design Services</h2>
              <p className="text-lg text-civitas-dark/80 mb-6">
                At Civitas, our architectural design team specializes in creating spaces that are both beautiful and functional. 
                Whether you're planning a new build, renovation, or simple redesign, our professionals are here to help.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-3 text-civitas-primary shrink-0 mt-1" size={18} />
                  <span>Custom architectural designs for residential properties</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-civitas-primary shrink-0 mt-1" size={18} />
                  <span>Commercial space planning and design</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-civitas-primary shrink-0 mt-1" size={18} />
                  <span>3D visualizations and renderings</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-civitas-primary shrink-0 mt-1" size={18} />
                  <span>Sustainable and eco-friendly design solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-civitas-primary shrink-0 mt-1" size={18} />
                  <span>Planning permission and building regulation applications</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-civitas-light rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Design Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Initial Consultation</h4>
                    <p className="text-civitas-dark/70">We meet to discuss your vision, requirements, and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Concept Development</h4>
                    <p className="text-civitas-dark/70">Our architects create preliminary designs based on your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Design Refinement</h4>
                    <p className="text-civitas-dark/70">We refine the designs based on your feedback until perfect.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Technical Documents</h4>
                    <p className="text-civitas-dark/70">We prepare detailed technical drawings and documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Construction Support</h4>
                    <p className="text-civitas-dark/70">We provide ongoing support during the construction phase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Design Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project Example {item}</h3>
                  <p className="text-civitas-dark/70 mb-4">Brief description of the architectural design project.</p>
                  <Link to="/portfolio" className="text-civitas-primary font-medium flex items-center hover:underline">
                    View Details <ChevronRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Design Your Dream Space?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation with our architectural design team.
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

export default ArchitecturalDesign;
