
import React from 'react';
import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';
import { Card, CardContent } from "@/components/ui/card";
import { PaintRoller, CheckCircle } from 'lucide-react';

const RenovationInterior = () => {
  const relatedServices = [
    { title: 'Exterior Renovation', link: '/services/renovation/exterior' },
    { title: 'Garden Redesign', link: '/services/renovation/garden' },
    { title: 'Green Construction', link: '/services/renovation/green-construction' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Interior Renovation" 
      serviceCategory="Renovation & Remodeling"
      serviceCategorySlug="renovation"
      relatedServices={relatedServices}
    >
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Our interior renovation services transform your living spaces to reflect your style and meet your functional needs. From single room makeovers to complete home remodels, our expert team delivers exceptional results with meticulous attention to detail.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interior Renovation Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <PaintRoller size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Kitchen Remodeling</h3>
                    <p className="text-civitas-dark/80">
                      Modern kitchen designs with custom cabinetry, countertops, and appliance installation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <PaintRoller size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bathroom Renovation</h3>
                    <p className="text-civitas-dark/80">
                      Luxury bathroom upgrades with high-quality fixtures, tiling, and custom features.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <PaintRoller size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Living Space Redesign</h3>
                    <p className="text-civitas-dark/80">
                      Open-concept designs, custom built-ins, and architectural enhancements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <PaintRoller size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Flooring & Finishes</h3>
                    <p className="text-civitas-dark/80">
                      Premium flooring installation, custom millwork, and interior painting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-civitas-light p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Interior Renovation Services</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Expert designers and skilled craftsmen</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>High-quality materials and superior finishes</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Project management from concept to completion</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Attention to detail and clean workmanship</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-civitas-primary mr-3" size={20} />
              <span>Respectful of your home and schedule</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Interior Renovation Process</h2>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li>Initial consultation and space assessment</li>
          <li>Design concept development and material selection</li>
          <li>Detailed proposal and project timeline</li>
          <li>Permitting and preparation</li>
          <li>Quality construction and installation</li>
          <li>Final walkthrough and project completion</li>
        </ol>
        
        <p className="mb-6">
          Whether you're looking to update a single room or transform your entire home, our interior renovation services deliver beautiful, functional spaces that exceed expectations.
        </p>
      </div>
    </ServiceDetailLayout>
  );
};

export default RenovationInterior;
