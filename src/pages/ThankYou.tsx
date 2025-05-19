
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={36} />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          
          <p className="text-xl mb-8">
            Your service request has been successfully submitted. Our team will review your details and get back to you shortly.
          </p>
          
          <div className="bg-civitas-light rounded-lg p-6 mb-8 inline-block">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <ol className="text-left space-y-3">
              <li className="flex items-start">
                <span className="bg-civitas-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                <span>Our team will review your request (typically within 24 hours)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-civitas-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                <span>A representative will contact you to discuss details and provide a quote</span>
              </li>
              <li className="flex items-start">
                <span className="bg-civitas-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                <span>We'll schedule your service at a time that works for you</span>
              </li>
            </ol>
          </div>
          
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            Return to Home <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <footer className="bg-civitas-dark text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Civitas Estate & Maintenance. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/" className="text-civitas-secondary hover:text-white transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
