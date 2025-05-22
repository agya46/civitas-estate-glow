
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const serviceCategories = [
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Installations', href: '/services/installations' },
    { name: 'Renovation', href: '/services/renovation' },
    { name: 'Property Management', href: '/services/property-management' },
    { name: 'Architectural Design', href: '/services/architectural-design' },
    { name: 'Cleaning', href: '/services/cleaning' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/54ba51e1-ce1c-4d23-ba25-a1ea13a526d7.png" 
              alt="Civitas Logo" 
              className="h-10 w-10"
            />
            <div>
              <span className="text-2xl font-bold text-civitas-primary">Civitas</span>
              <span className="text-lg text-civitas-secondary ml-1">Estate & Maintenance</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-civitas-dark hover:text-civitas-primary hover:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceCategories.map((category) => (
                        <li key={category.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/portfolio" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-civitas-dark hover:text-civitas-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-civitas-primary hover:bg-civitas-primary/90 text-white">
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
            
            <div className="relative">
              <div className="font-medium p-2">Services</div>
              <div className="pl-4 space-y-2 mt-1">
                {serviceCategories.map((category) => (
                  <Link 
                    key={category.name}
                    to={category.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-civitas-dark hover:text-civitas-primary transition-colors p-2 block"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className="text-civitas-dark hover:text-civitas-primary transition-colors p-2"
            >
              Portfolio
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
            <Button asChild className="bg-civitas-primary hover:bg-civitas-primary/90 text-white w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
