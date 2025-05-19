
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-civitas-dark text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Civitas</h3>
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
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services/installations" className="text-gray-300 hover:text-white transition-colors">Installations</Link></li>
              <li><Link to="/services/renovation" className="text-gray-300 hover:text-white transition-colors">Renovation & Remodeling</Link></li>
              <li><Link to="/services/property-management" className="text-gray-300 hover:text-white transition-colors">Property Management</Link></li>
              <li><Link to="/services/architectural-design" className="text-gray-300 hover:text-white transition-colors">Architectural Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-civitas-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-civitas-secondary shrink-0 mt-1" />
                <span className="text-gray-300">123 Estate Avenue, City, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">info@civitasestate.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-civitas-secondary" />
                <span className="text-gray-300">Mon-Fri: 8am - 6pm</span>
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
