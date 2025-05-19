
import React from 'react';
import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle } from 'lucide-react';

const MaintenanceElectricals = () => {
  const relatedServices = [
    { title: 'Plumbing', link: '/services/maintenance/plumbing' },
    { title: 'Cleaning', link: '/services/maintenance/cleaning' },
    { title: 'Carpentry', link: '/services/maintenance/carpentry' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Electrical Services" 
      serviceCategory="Maintenance"
      serviceCategorySlug="maintenance"
      relatedServices={relatedServices}
    >
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Our professional electrical services cover all aspects of residential and commercial electrical needs. 
          From routine inspections to emergency repairs, our certified electricians provide safe and reliable solutions.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Electrical Services Include:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Electrical Repairs</h3>
                    <p className="text-civitas-dark/80">
                      Troubleshooting and fixing electrical issues, from outlets to circuit breakers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Panel Upgrades</h3>
                    <p className="text-civitas-dark/80">
                      Modernizing electrical panels for improved safety and capacity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lighting Installation</h3>
                    <p className="text-civitas-dark/80">
                      Installing new fixtures, recessed lighting, and outdoor lighting solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Safety Inspections</h3>
                    <p className="text-civitas-dark/80">
                      Comprehensive electrical safety inspections for residential and commercial properties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-civitas-light p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Electrical Services</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Licensed and insured electricians</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>24/7 emergency service available</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Upfront pricing with no hidden fees</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Warranty on all work performed</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Latest tools and technologies</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <p className="mb-4">
          When you choose Civitas Estate & Maintenance for your electrical needs, our process ensures a smooth experience:
        </p>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li>Initial consultation to understand your needs</li>
          <li>Detailed inspection of your electrical systems</li>
          <li>Transparent quote with all costs explained</li>
          <li>Professional and timely service delivery</li>
          <li>Post-service walkthrough and quality check</li>
          <li>Follow-up to ensure complete satisfaction</li>
        </ol>
      </div>
    </ServiceDetailLayout>
  );
};

export default MaintenanceElectricals;
