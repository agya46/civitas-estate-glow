
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-civitas-dark">Civitas</span>
            <span className="text-lg text-civitas-primary">Estate & Maintenance</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="btn-primary">
              <Link to="/contact">Book Now</Link>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-civitas-dark focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-civitas-dark hover:text-civitas-primary transition-colors p-2"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-civitas-dark hover:text-civitas-primary transition-colors p-2"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-civitas-dark hover:text-civitas-primary transition-colors p-2"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-civitas-dark hover:text-civitas-primary transition-colors p-2"
            >
              Contact
            </Link>
            <Button asChild className="btn-primary w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
