import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { 
  ArrowRight, 
  Wrench, 
  Plug, 
  PaintRoller, 
  Building, 
  House, 
  Check,
  Bath
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';

const services = [
  {
    id: "maintenance",
    title: "Maintenance",
    icon: Wrench,
    bgColor: "bg-blue-50",
    color: "text-blue-700",
    link: "/services/maintenance"
  },
  {
    id: "installation",
    title: "Installation",
    icon: Plug,
    bgColor: "bg-green-50",
    color: "text-green-700",
    link: "/services/installations"
  },
  {
    id: "renovation",
    title: "Renovation",
    icon: PaintRoller,
    bgColor: "bg-amber-50",
    color: "text-amber-700",
    link: "/services/renovation"
  },
  {
    id: "property",
    title: "Property Management",
    icon: Building,
    bgColor: "bg-purple-50",
    color: "text-purple-700",
    link: "/services/property-management"
  },
  {
    id: "design",
    title: "Architectural Design",
    icon: House,
    bgColor: "bg-indigo-50",
    color: "text-indigo-700",
    link: "/services/architectural-design"
  },
  {
    id: "cleaning",
    title: "Cleaning",
    icon: Bath,
    bgColor: "bg-cyan-50",
    color: "text-cyan-700",
    link: "/services/cleaning"
  }
];

const OnboardingWidget = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      notes: ""
    }
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", { service: selectedService, ...data });
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with your free quote.",
    });
    setStep(3);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <section id="onboarding" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-civitas-dark mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-civitas-dark/70 max-w-2xl mx-auto">
            Tell us about your project needs and we'll provide a personalized quote within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress steps */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-civitas-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                1
              </div>
              <div className={`h-1 w-16 mx-2 ${step >= 2 ? 'bg-civitas-primary' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-civitas-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
              <div className={`h-1 w-16 mx-2 ${step >= 3 ? 'bg-civitas-primary' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-civitas-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                3
              </div>
            </div>
          </div>

          <Card className="border border-gray-200 shadow-md">
            <CardContent className="p-6">
              {step === 1 && (
                <div className="py-4">
                  <h3 className="text-xl font-medium text-civitas-dark mb-6">Select a Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-4 border rounded-lg flex items-center gap-4 transition-all hover:shadow-md ${
                          selectedService === service.id 
                            ? 'border-civitas-primary bg-civitas-primary/5' 
                            : 'border-gray-200 hover:border-civitas-primary/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full ${service.bgColor} ${service.color} flex items-center justify-center`}>
                          <service.icon size={24} />
                        </div>
                        <span className="font-medium text-civitas-dark">{service.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="py-4">
                  <h3 className="text-xl font-medium text-civitas-dark mb-6">Your Contact Details</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <input 
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary"
                                  placeholder="Your name" 
                                  required
                                  {...field} 
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <input 
                                  type="email"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary"
                                  placeholder="Your email" 
                                  required
                                  {...field} 
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <input 
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary"
                                  placeholder="Your phone" 
                                  {...field} 
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Location</FormLabel>
                              <FormControl>
                                <input 
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary"
                                  placeholder="City, State" 
                                  {...field} 
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitas-primary"
                                placeholder="Tell us briefly about your project needs"
                                rows={4}
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-between pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleBack}
                          className="border-civitas-dark/20 text-civitas-dark"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-civitas-primary text-white"
                        >
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}

              {step === 3 && (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-civitas-dark mb-4">Thank You!</h3>
                  <p className="text-civitas-dark/70 mb-6">
                    Your quote request has been submitted successfully. Our team will get back to you within 24 hours.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button asChild variant="outline">
                      <Link to="/services">Explore Services</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/portfolio">View Our Portfolio</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnboardingWidget;
