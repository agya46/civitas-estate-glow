
import React from 'react';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Check } from 'lucide-react';

const RegularMaintenanceCleaning = () => {
  const relatedServices = [
    { title: 'Deep Cleaning', link: '/services/cleaning/deep-cleaning' },
    { title: 'Post-Construction Cleaning', link: '/services/cleaning/post-construction' },
    { title: 'Move-in/Move-out Cleaning', link: '/services/cleaning/move-in-out' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Regular Maintenance Cleaning" 
      serviceCategory="Cleaning"
      serviceCategorySlug="cleaning"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our regular maintenance cleaning services provide consistent, scheduled cleaning to keep 
          your residential or commercial property in pristine condition.
        </p>
        
        <div className="not-prose mb-8">
          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild className="bg-civitas-primary hover:bg-civitas-primary/90">
              <Link to="/contact">Book This Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
        
        <h2>What is Regular Maintenance Cleaning?</h2>
        <p>
          Regular maintenance cleaning is a scheduled cleaning service that maintains the cleanliness 
          and appearance of your property on a consistent basis. Unlike deep cleaning, which addresses 
          accumulated dirt and grime, maintenance cleaning focuses on preserving a clean environment 
          through routine attention.
        </p>
        
        <h2>Our Regular Maintenance Cleaning Includes:</h2>
        
        <ul className="space-y-2">
          <li>Dusting and wiping of all surfaces</li>
          <li>Vacuuming and mopping floors</li>
          <li>Bathroom cleaning and sanitizing</li>
          <li>Kitchen cleaning and organization</li>
          <li>Empty trash and replace liners</li>
          <li>Tidying and straightening rooms</li>
          <li>Interior glass and mirror cleaning</li>
          <li>Spot cleaning of walls and fixtures</li>
        </ul>
        
        <div className="not-prose bg-civitas-light/30 p-6 rounded-lg my-8">
          <div className="flex items-center mb-4">
            <Calendar className="text-civitas-primary mr-3" size={24} />
            <h3 className="text-xl font-semibold">Maintenance Cleaning Schedule Options</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Check className="text-civitas-primary mr-2 mt-1" />
              <span>Weekly cleaning</span>
            </div>
            <div className="flex items-start">
              <Check className="text-civitas-primary mr-2 mt-1" />
              <span>Bi-weekly cleaning</span>
            </div>
            <div className="flex items-start">
              <Check className="text-civitas-primary mr-2 mt-1" />
              <span>Monthly cleaning</span>
            </div>
            <div className="flex items-start">
              <Check className="text-civitas-primary mr-2 mt-1" />
              <span>Custom schedules available</span>
            </div>
          </div>
        </div>
        
        <h2>Benefits of Regular Maintenance Cleaning</h2>
        <p>
          Investing in regular maintenance cleaning offers numerous advantages:
        </p>
        <ul className="space-y-2">
          <li>Maintains a consistently clean and healthy environment</li>
          <li>Prevents dirt and dust buildup</li>
          <li>Extends the life of surfaces, fixtures, and furnishings</li>
          <li>Reduces the need for intensive deep cleaning</li>
          <li>Creates a positive impression for visitors, clients, or customers</li>
          <li>Provides peace of mind knowing your space is regularly cleaned</li>
        </ul>
        
        <h2>Our Maintenance Cleaning Approach</h2>
        <p>
          We apply a systematic approach to ensure consistent results:
        </p>
        <ol className="space-y-4">
          <li>
            <strong>Initial Assessment:</strong> We evaluate your space to create a customized cleaning plan.
          </li>
          <li>
            <strong>Dedicated Team:</strong> We assign the same cleaning professionals to your location for consistency.
          </li>
          <li>
            <strong>Quality Control:</strong> We perform regular inspections to ensure our high standards are maintained.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We welcome your feedback to refine and enhance our service.
          </li>
        </ol>
        
        <h2>Residential vs. Commercial Maintenance</h2>
        <p>
          Our regular maintenance cleaning services are tailored to the specific needs of both residential and commercial properties:
        </p>
        <ul className="space-y-2">
          <li><strong>Residential:</strong> Focus on living spaces, bedrooms, kitchens, and bathrooms</li>
          <li><strong>Commercial:</strong> Emphasis on common areas, workspaces, reception areas, and restrooms</li>
        </ul>
        
        <div className="not-prose bg-civitas-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Ready to Schedule Your Regular Cleaning?</h3>
          <p className="mb-4">Trust Civitas to provide reliable, thorough, and consistent cleaning services that keep your property 
          looking its best. Contact us today to set up your personalized cleaning schedule.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default RegularMaintenanceCleaning;
