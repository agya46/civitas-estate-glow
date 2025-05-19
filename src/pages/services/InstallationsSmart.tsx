
import React from 'react';
import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Plug, CheckCircle } from 'lucide-react';

const InstallationsSmart = () => {
  const relatedServices = [
    { title: 'Solar Panels', link: '/services/installations/solar-panels' },
    { title: 'Security Systems', link: '/services/installations/security-systems' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Smart Home Technology" 
      serviceCategory="Installations"
      serviceCategorySlug="installations"
      relatedServices={relatedServices}
    >
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Transform your home into a connected, intelligent living space with our professional smart home technology installation services. We design, install, and configure systems that enhance comfort, convenience, security, and energy efficiency.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Smart Home Solutions We Offer:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                    <Plug size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Home Automation</h3>
                    <p className="text-civitas-dark/80">
                      Centralized control of lighting, heating, ventilation, air conditioning, and appliances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                    <Plug size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Smart Security</h3>
                    <p className="text-civitas-dark/80">
                      Integrated surveillance cameras, smart locks, and alarm systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                    <Plug size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Entertainment Systems</h3>
                    <p className="text-civitas-dark/80">
                      Multi-room audio, home theater systems, and streaming platform integration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                    <Plug size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Energy Management</h3>
                    <p className="text-civitas-dark/80">
                      Smart thermostats, energy monitoring, and automated systems to reduce utility costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-civitas-light p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Benefits of Smart Home Technology</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Enhanced comfort and convenience</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Improved energy efficiency and cost savings</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Advanced security and peace of mind</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Remote monitoring and control capabilities</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Increased property value</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Smart Home Installation Process</h2>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li>Initial consultation to assess your needs and preferences</li>
          <li>System design and component selection</li>
          <li>Professional installation by certified technicians</li>
          <li>System configuration and integration</li>
          <li>User training and setup assistance</li>
          <li>Ongoing support and maintenance options</li>
        </ol>
        
        <p className="mb-6">
          Whether you're looking to automate a single room or create a fully integrated smart home, our team has the expertise to deliver a solution that meets your needs and budget.
        </p>
      </div>
    </ServiceDetailLayout>
  );
};

export default InstallationsSmart;
