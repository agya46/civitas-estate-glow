
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-civitas-primary text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/54ba51e1-ce1c-4d23-ba25-a1ea13a526d7.png" 
                alt="Civitas Logo" 
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-bold text-civitas-secondary">Civitas</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Professional estate maintenance and management services with a commitment to quality, sustainability, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/maintenance/electricals" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services/installations/smart-tech" className="text-gray-300 hover:text-white transition-colors">Installations</Link></li>
              <li><Link to="/services/renovation/interior" className="text-gray-300 hover:text-white transition-colors">Renovation & Remodeling</Link></li>
              <li><Link to="/services/property-management" className="text-gray-300 hover:text-white transition-colors">Property Management</Link></li>
              <li><Link to="/services/architectural-design" className="text-gray-300 hover:text-white transition-colors">Architectural Design</Link></li>
              <li><Link to="/services/cleaning" className="text-gray-300 hover:text-white transition-colors">Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-civitas-secondary shrink-0 mt-1" />
                <span className="text-gray-300">Hospital Junction, of Ofanko Sowutuom Road, Accra</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">0555062589</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">admin@civitasestate.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">Mon-Fri: 8am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Civitas Estate & Maintenance. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
