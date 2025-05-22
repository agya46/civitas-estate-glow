import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Check, ArrowRight } from 'lucide-react';

// Service categories and their sub-services
const serviceCategories = [
  {
    label: 'Maintenance',
    options: ['Electricals', 'Plumbing', 'Cleaning', 'Carpentry', 'Painting']
  },
  {
    label: 'Installations',
    options: ['Smart Tech', 'Solar Panels', 'Security Systems']
  },
  {
    label: 'Renovation',
    options: ['Interior', 'Exterior', 'Garden', 'Green Construction']
  },
  {
    label: 'Property Management',
    options: ['Residential', 'Commercial']
  },
  {
    label: 'Architectural Design',
    options: ['Design Consultation', 'Planning', 'Blueprint Creation']
  },
  {
    label: 'Cleaning',
    options: ['Deep Cleaning', 'Regular Maintenance', 'Post-Construction', 'Move-in/Move-out']
  }
];

const ContactForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  // Find services for the selected category
  const servicesForCategory = serviceCategories.find(cat => cat.label === selectedCategory)?.options || [];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedService('');
  };
  
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };
  
  const handleNextStep = () => {
    if (formStep === 0 && !selectedCategory) {
      toast({
        title: "Please select a service category",
        variant: "destructive"
      });
      return;
    }
    
    if (formStep === 0 && !selectedService) {
      toast({
        title: "Please select a specific service",
        variant: "destructive"
      });
      return;
    }
    
    setFormStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, category: selectedCategory, service: selectedService });
    
    // Show success message
    toast({
      title: "Request submitted successfully",
      description: "We'll get back to you shortly.",
      variant: "default"
    });
    
    // Redirect to thank you page
    navigate('/thank-you');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-civitas-dark/60">
            Step {formStep + 1} of 3
          </span>
          <div className="flex space-x-2">
            {[0, 1, 2].map((step) => (
              <div
                key={step}
                className={`h-2 w-10 rounded-full ${
                  step === formStep
                    ? 'bg-civitas-primary'
                    : step < formStep
                    ? 'bg-civitas-primary/70'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold">
          {formStep === 0 && 'Select a Service'}
          {formStep === 1 && 'Your Contact Information'}
          {formStep === 2 && 'Confirm Your Request'}
        </h3>
        <p className="text-civitas-dark/70">
          {formStep === 0 && 'Choose the service category and specific service you need.'}
          {formStep === 1 && 'Provide your contact details so we can get back to you.'}
          {formStep === 2 && 'Review your information before submitting.'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Select Service */}
        {formStep === 0 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h4 className="font-medium mb-3">Service Category</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {serviceCategories.map((category) => (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => handleCategorySelect(category.label)}
                    className={`p-3 border rounded-md text-left flex items-start transition-all ${
                      selectedCategory === category.label
                        ? 'border-civitas-primary bg-civitas-primary/5'
                        : 'border-gray-200 hover:border-civitas-primary/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center ${
                      selectedCategory === category.label
                        ? 'border-civitas-primary bg-civitas-primary text-white'
                        : 'border-gray-300'
                    }`}>
                      {selectedCategory === category.label && <Check size={14} />}
                    </div>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {selectedCategory && (
              <div className="animate-fade-in">
                <h4 className="font-medium mb-3">Specific Service</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesForCategory.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceSelect(service)}
                      className={`p-3 border rounded-md text-left flex items-start transition-all ${
                        selectedService === service
                          ? 'border-civitas-primary bg-civitas-primary/5'
                          : 'border-gray-200 hover:border-civitas-primary/50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center ${
                        selectedService === service
                          ? 'border-civitas-primary bg-civitas-primary text-white'
                          : 'border-gray-300'
                      }`}>
                        {selectedService === service && <Check size={14} />}
                      </div>
                      <span>{service}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Step 2: Contact Info */}
        {formStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-civitas-dark mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-civitas-dark mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-civitas-dark mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-civitas-dark mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-civitas-dark mb-1">
                Service Address (Optional)
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-civitas-dark mb-1">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary/50"
                placeholder="Please provide any additional details about your service request..."
              />
            </div>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {formStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-civitas-light/50 p-4 rounded-md">
              <h4 className="font-medium mb-3">Service Request</h4>
              <p className="mb-1"><span className="font-medium">Category:</span> {selectedCategory}</p>
              <p><span className="font-medium">Service:</span> {selectedService}</p>
            </div>
            
            <div className="bg-civitas-light/50 p-4 rounded-md">
              <h4 className="font-medium mb-3">Contact Information</h4>
              <p className="mb-1"><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
              <p className="mb-1"><span className="font-medium">Email:</span> {formData.email}</p>
              <p className="mb-1"><span className="font-medium">Phone:</span> {formData.phone}</p>
              {formData.address && <p className="mb-1"><span className="font-medium">Address:</span> {formData.address}</p>}
            </div>
            
            {formData.message && (
              <div className="bg-civitas-light/50 p-4 rounded-md">
                <h4 className="font-medium mb-3">Additional Details</h4>
                <p>{formData.message}</p>
              </div>
            )}
          </div>
        )}
        
        {/* Navigation buttons */}
        <div className="flex justify-between pt-4">
          {formStep > 0 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2 border border-civitas-primary text-civitas-primary rounded-md hover:bg-civitas-primary/5 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {formStep < 2 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="btn-primary"
            >
              Continue <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary"
            >
              Submit Request <ArrowRight size={16} className="ml-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
