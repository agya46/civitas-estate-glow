
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PortfolioItemType } from '@/data/portfolioData';

interface ProjectSidebarProps {
  project: PortfolioItemType;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ project }) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Project Details</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm text-civitas-dark/60 font-medium">CLIENT</h4>
            <p className="text-civitas-dark">{project.client}</p>
          </div>
          <div>
            <h4 className="text-sm text-civitas-dark/60 font-medium">CATEGORY</h4>
            <p className="text-civitas-dark">{project.categoryName}</p>
          </div>
          <div>
            <h4 className="text-sm text-civitas-dark/60 font-medium">COMPLETION DATE</h4>
            <p className="text-civitas-dark">{project.date}</p>
          </div>
          <div>
            <h4 className="text-sm text-civitas-dark/60 font-medium">LOCATION</h4>
            <p className="text-civitas-dark">{project.location}</p>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Services Provided</h3>
          <ul className="space-y-2">
            {project.services.map((service, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-civitas-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Interested in a similar project?</h3>
          <Button asChild className="w-full">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
