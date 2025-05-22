
import React from 'react';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const MoveInOutCleaning = () => {
  const relatedServices = [
    { title: 'Deep Cleaning', link: '/services/cleaning/deep-cleaning' },
    { title: 'Post-Construction Cleaning', link: '/services/cleaning/post-construction' },
    { title: 'Regular Maintenance', link: '/services/cleaning/regular-maintenance' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Move-in/Move-out Cleaning" 
      serviceCategory="Cleaning"
      serviceCategorySlug="cleaning"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our comprehensive move-in/move-out cleaning services ensure your property is immaculate 
          when transitioning between occupants, helping you start fresh or secure your deposit return.
        </p>
        
        <h2>Specialized Move-in/Move-out Cleaning</h2>
        <p>
          Whether you're a homeowner, tenant, landlord, or property manager, our move-in/move-out 
          cleaning services provide a thorough cleaning that goes beyond regular maintenance. We target 
          areas that show wear and tear from occupancy to restore the property to a like-new condition.
        </p>
        
        <h2>Our Move-in/Move-out Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Complete top-to-bottom cleaning of all rooms</li>
          <li>Deep cleaning of kitchens, including inside appliances</li>
          <li>Thorough bathroom sanitization</li>
          <li>Interior cabinet and drawer cleaning</li>
          <li>Baseboards, trim, and door frame cleaning</li>
          <li>Window sill and track cleaning</li>
          <li>Dust removal from ceiling fans and light fixtures</li>
          <li>Wall spot cleaning and scuff removal</li>
          <li>Comprehensive floor cleaning (vacuum, mop, polish)</li>
          <li>Interior window cleaning</li>
          <li>Removal of all dust and cobwebs</li>
          <li>Closet and storage area cleaning</li>
        </ul>
        
        <h2>For Tenants Moving Out</h2>
        <p>
          Moving out can be stressful, and ensuring your rental property is clean enough to receive your security deposit back adds another layer of pressure. Our move-out cleaning services help:
        </p>
        <ul className="space-y-2">
          <li>Maximize your security deposit return</li>
          <li>Reduce stress during the moving process</li>
          <li>Meet landlord or property management cleaning requirements</li>
          <li>Leave the property in excellent condition</li>
        </ul>
        
        <h2>For Property Owners and Landlords</h2>
        <p>
          Our move-in cleaning ensures your property is ready for new occupants:
        </p>
        <ul className="space-y-2">
          <li>Makes a positive first impression on new tenants or buyers</li>
          <li>Helps attract quality tenants or buyers</li>
          <li>Demonstrates your commitment to property maintenance</li>
          <li>Establishes a clean baseline for future inspections</li>
        </ul>
        
        <h2>Our Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Property Assessment:</strong> We evaluate the property to understand its specific cleaning needs.
          </li>
          <li>
            <strong>Customized Cleaning Plan:</strong> We develop a detailed plan addressing all areas requiring attention.
          </li>
          <li>
            <strong>Thorough Execution:</strong> Our trained team implements comprehensive cleaning using professional equipment.
          </li>
          <li>
            <strong>Quality Inspection:</strong> We perform a detailed quality check to ensure all areas meet our high standards.
          </li>
          <li>
            <strong>Final Walkthrough:</strong> Optional walkthrough with client to verify satisfaction.
          </li>
        </ol>
        
        <h2>The Civitas Difference</h2>
        <p>
          When you choose Civitas for your move-in/move-out cleaning, you receive:
        </p>
        <ul className="space-y-2">
          <li>Experienced professionals trained in property transition cleaning</li>
          <li>Attention to detail that others might miss</li>
          <li>High-quality, eco-friendly cleaning products</li>
          <li>Comprehensive cleaning checklist tailored to your property</li>
          <li>Flexible scheduling to accommodate your moving timeline</li>
        </ul>
        
        <p>
          Make your next move easier with our professional move-in/move-out cleaning services. 
          Contact Civitas today to schedule your cleaning and ensure a smooth property transition.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default MoveInOutCleaning;
