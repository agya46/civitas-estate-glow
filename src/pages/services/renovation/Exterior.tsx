
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const ExteriorRenovationService = () => {
  const relatedServices = [
    { title: 'Interior', link: '/services/renovation/interior' },
    { title: 'Garden', link: '/services/renovation/garden' },
    { title: 'Green Construction', link: '/services/renovation/green-construction' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Exterior Renovation" 
      serviceCategory="Renovation & Remodeling"
      serviceCategorySlug="renovation"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Transform the outer appearance of your property with our professional exterior renovation services. 
          We enhance curb appeal, improve functionality, and increase your property's value with expert exterior renovations.
        </p>
        
        <h2>Our Exterior Renovation Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Exterior siding installation and repair</li>
          <li>Roof replacement and repairs</li>
          <li>Window and door upgrades</li>
          <li>Porch and deck construction</li>
          <li>Outdoor living space creation</li>
          <li>Facade improvements</li>
          <li>External insulation and weatherproofing</li>
          <li>Exterior painting and finishing</li>
        </ul>
        
        <h2>The Civitas Exterior Renovation Advantage</h2>
        <p>
          Our exterior renovation experts combine aesthetic vision with practical construction knowledge.
          We understand how to balance curb appeal with durability to create exteriors that look beautiful
          and withstand the elements for years to come.
        </p>
        
        <p>
          We work with high-quality, weather-resistant materials and employ proper installation techniques
          that ensure long-lasting results. Our team manages the entire exterior renovation process,
          from design to completion, with meticulous attention to detail.
        </p>
        
        <h2>Benefits of Exterior Renovation</h2>
        <ul className="space-y-2">
          <li>Enhanced curb appeal and aesthetic value</li>
          <li>Improved energy efficiency</li>
          <li>Better protection against weather elements</li>
          <li>Increased property value</li>
          <li>Prevention of structural damage</li>
          <li>Modernization of outdated exteriors</li>
          <li>Creation of additional outdoor living space</li>
        </ul>
        
        <h2>Our Exterior Renovation Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Initial Consultation:</strong> We discuss your vision, needs, and budget for your exterior renovation.
          </li>
          <li>
            <strong>Property Assessment:</strong> We thoroughly evaluate your property's exterior condition and structural integrity.
          </li>
          <li>
            <strong>Design Development:</strong> Our design team creates a renovation plan that transforms your property's exterior.
          </li>
          <li>
            <strong>Material Selection:</strong> We help you choose appropriate, quality materials that match your style and durability requirements.
          </li>
          <li>
            <strong>Scheduling and Preparation:</strong> We create a timeline and prepare the site to minimize disruption.
          </li>
          <li>
            <strong>Professional Execution:</strong> Our skilled craftsmen implement the renovation with precision and care.
          </li>
          <li>
            <strong>Final Inspection:</strong> We conduct a thorough inspection to ensure every aspect meets our quality standards.
          </li>
        </ol>
        
        <p className="mt-6">
          Whether you're looking to refresh your property's appearance, improve its functionality, or
          increase its market value, our exterior renovation services provide the perfect solution.
          Contact us today to discuss how we can transform your property's exterior.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default ExteriorRenovationService;
