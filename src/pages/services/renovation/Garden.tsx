
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const GardenRenovationService = () => {
  const relatedServices = [
    { title: 'Interior', link: '/services/renovation/interior' },
    { title: 'Exterior', link: '/services/renovation/exterior' },
    { title: 'Green Construction', link: '/services/renovation/green-construction' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Garden Renovation" 
      serviceCategory="Renovation & Remodeling"
      serviceCategorySlug="renovation"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Transform your outdoor space into a beautiful, functional garden with our professional 
          garden renovation services. We create stunning landscapes that enhance your property and 
          provide the perfect environment for relaxation and entertainment.
        </p>
        
        <h2>Our Garden Renovation Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Landscape design and planning</li>
          <li>Garden layout redesign</li>
          <li>Hardscaping installation (patios, walkways, retaining walls)</li>
          <li>Planting and soft landscaping</li>
          <li>Water features and pond construction</li>
          <li>Outdoor lighting installation</li>
          <li>Irrigation system setup</li>
          <li>Garden maintenance programs</li>
        </ul>
        
        <h2>The Civitas Garden Renovation Advantage</h2>
        <p>
          Our landscape architects and garden designers create custom outdoor spaces that reflect 
          your personal style while complementing your property's architecture. We consider factors 
          such as soil conditions, sun exposure, and local climate to create sustainable gardens that 
          thrive with minimal maintenance.
        </p>
        
        <p>
          We combine horticultural expertise with design creativity to transform neglected or 
          outdated gardens into vibrant outdoor havens. Our comprehensive approach ensures that 
          your garden renovation is both beautiful and practical.
        </p>
        
        <h2>Benefits of Garden Renovation</h2>
        <ul className="space-y-2">
          <li>Extended living space for outdoor enjoyment</li>
          <li>Increased property value</li>
          <li>Enhanced biodiversity and environmental benefits</li>
          <li>Improved drainage and water management</li>
          <li>Reduced maintenance with strategic design</li>
          <li>Personalized outdoor spaces that reflect your lifestyle</li>
          <li>Seasonal interest throughout the year</li>
        </ul>
        
        <h2>Our Garden Renovation Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Site Analysis:</strong> We evaluate your existing garden space, noting soil conditions, drainage, sunlight patterns, and existing vegetation.
          </li>
          <li>
            <strong>Design Consultation:</strong> We discuss your preferences, how you want to use the space, and your maintenance expectations.
          </li>
          <li>
            <strong>Concept Development:</strong> Our designers create a garden concept that balances aesthetics with functionality.
          </li>
          <li>
            <strong>Detailed Planning:</strong> We develop comprehensive plans including plant selections, hardscape materials, and installation specifications.
          </li>
          <li>
            <strong>Construction and Installation:</strong> Our landscaping team implements the design with precision and care.
          </li>
          <li>
            <strong>Planting and Finishing:</strong> We install plants, mulch, lighting, and other elements to complete your garden transformation.
          </li>
          <li>
            <strong>Maintenance Guidance:</strong> We provide care instructions and optional ongoing maintenance services to keep your garden thriving.
          </li>
        </ol>
        
        <p className="mt-6">
          Whether you dream of a tranquil retreat, an entertaining space, or a productive garden, 
          our garden renovation services can help you achieve your vision. Contact us today to 
          begin transforming your outdoor space.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default GardenRenovationService;
