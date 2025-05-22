
import React from 'react';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const DeepCleaningService = () => {
  const relatedServices = [
    { title: 'Regular Maintenance', link: '/services/cleaning/regular-maintenance' },
    { title: 'Post-Construction Cleaning', link: '/services/cleaning/post-construction' },
    { title: 'Move-in/Move-out Cleaning', link: '/services/cleaning/move-in-out' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Deep Cleaning Services" 
      serviceCategory="Cleaning"
      serviceCategorySlug="cleaning"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our deep cleaning services go beyond regular cleaning to tackle the toughest dirt, 
          grime, and buildup in your residential or commercial property.
        </p>
        
        <h2>What is Deep Cleaning?</h2>
        <p>
          Deep cleaning is an intensive cleaning process that reaches areas often missed during 
          regular cleaning routines. It targets accumulated dirt, dust, grease, and bacteria in 
          hard-to-reach places, providing a thorough sanitization of your entire space.
        </p>
        
        <h2>Our Deep Cleaning Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Detailed kitchen cleaning (inside appliances, cabinets, drawers)</li>
          <li>Complete bathroom sanitization (tile grout, fixtures, drains)</li>
          <li>Interior window washing and track cleaning</li>
          <li>Baseboards, crown molding, and door frame dusting</li>
          <li>Behind and under furniture cleaning</li>
          <li>Light fixture and ceiling fan dusting</li>
          <li>Wall spot cleaning and cobweb removal</li>
          <li>Air vent and register cleaning</li>
          <li>Scale and mineral deposit removal</li>
          <li>Thorough carpet and upholstery cleaning</li>
        </ul>
        
        <h2>When to Schedule Deep Cleaning</h2>
        <p>
          Deep cleaning is recommended:
        </p>
        <ul className="space-y-2">
          <li>Quarterly as part of regular maintenance</li>
          <li>Before or after special events or gatherings</li>
          <li>Seasonally to address allergens and buildup</li>
          <li>When moving into a new home or office</li>
          <li>After renovation or construction work</li>
          <li>For properties that haven't been cleaned thoroughly in months</li>
        </ul>
        
        <h2>Our Deep Cleaning Process</h2>
        <p>
          We follow a systematic top-to-bottom, left-to-right approach to ensure no area is missed:
        </p>
        <ol className="space-y-4">
          <li>
            <strong>Initial Assessment:</strong> We evaluate your space to identify areas needing special attention.
          </li>
          <li>
            <strong>Dusting and Cobweb Removal:</strong> Starting from the ceiling, we work our way down to remove dust and cobwebs.
          </li>
          <li>
            <strong>Surface Cleaning:</strong> We clean and disinfect all surfaces, fixtures, and appliances.
          </li>
          <li>
            <strong>Floor Treatment:</strong> We vacuum, mop, and treat floors according to their material.
          </li>
          <li>
            <strong>Final Inspection:</strong> We perform a thorough quality check to ensure everything meets our high standards.
          </li>
        </ol>
        
        <h2>The Benefits of Professional Deep Cleaning</h2>
        <p>
          Regular deep cleaning offers numerous benefits:
        </p>
        <ul className="space-y-2">
          <li>Eliminates hidden germs, bacteria, and allergens</li>
          <li>Improves indoor air quality</li>
          <li>Extends the lifespan of fixtures and furnishings</li>
          <li>Creates a healthier living or working environment</li>
          <li>Reduces the need for replacement due to buildup damage</li>
          <li>Provides a sense of renewal and freshness</li>
        </ul>
        
        <p>
          Trust Civitas professionals to deliver exceptional deep cleaning services that will transform 
          your space into a pristine, healthy environment. Our trained technicians use industry-leading 
          equipment and eco-friendly products to achieve remarkable results.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default DeepCleaningService;
