
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const SolarPanelsService = () => {
  const relatedServices = [
    { title: 'Smart Tech', link: '/services/installations/smart-tech' },
    { title: 'Security Systems', link: '/services/installations/security-systems' },
    { title: 'Green Construction', link: '/services/renovation/green-construction' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Solar Panel Installation" 
      serviceCategory="Installations"
      serviceCategorySlug="installations"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Harness the power of the sun with our professional solar panel installation services.
          We help you reduce your carbon footprint and energy bills with custom solar solutions
          designed specifically for your property.
        </p>
        
        <h2>Our Solar Panel Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Solar panel system design and installation</li>
          <li>Battery storage solutions</li>
          <li>Solar water heating systems</li>
          <li>System monitoring and maintenance</li>
          <li>Roof assessment and preparation</li>
          <li>Grid connection and certification</li>
          <li>Grant and incentive application assistance</li>
          <li>Existing system upgrades and repairs</li>
        </ul>
        
        <h2>The Civitas Solar Advantage</h2>
        <p>
          Our certified solar installers have extensive experience designing and implementing
          renewable energy systems for residential and commercial properties. We work with
          top-quality solar panels and components that offer optimal efficiency and durability.
        </p>
        
        <p>
          We handle all aspects of solar installation, from initial assessment and design to
          permitting, installation, and grid connection. Our comprehensive approach ensures a
          smooth transition to clean, renewable energy.
        </p>
        
        <h2>Benefits of Solar Panel Installation</h2>
        <ul className="space-y-2">
          <li>Reduced energy bills and potential energy independence</li>
          <li>Lower carbon footprint and environmental impact</li>
          <li>Protection against rising energy costs</li>
          <li>Potential tax incentives and rebates</li>
          <li>Increased property value</li>
          <li>Minimal maintenance requirements</li>
          <li>Long system lifespan (25+ years for quality panels)</li>
        </ul>
        
        <h2>Our Solar Installation Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Site Assessment:</strong> We evaluate your property's solar potential, considering factors like roof orientation, shading, and structural integrity.
          </li>
          <li>
            <strong>System Design:</strong> We create a custom solar solution based on your energy needs and property characteristics.
          </li>
          <li>
            <strong>Proposal and Financing:</strong> We provide detailed information about system costs, potential savings, and financing options.
          </li>
          <li>
            <strong>Permitting:</strong> We handle all necessary permits and paperwork.
          </li>
          <li>
            <strong>Professional Installation:</strong> Our certified technicians install your system with minimal disruption.
          </li>
          <li>
            <strong>Inspection and Connection:</strong> We coordinate inspections and grid connection to ensure your system is operational.
          </li>
          <li>
            <strong>System Activation and Training:</strong> We activate your system and show you how to monitor its performance.
          </li>
        </ol>
        
        <p className="mt-6">
          Solar energy is a smart investment in your property's future. Contact us today to learn
          how our solar panel installation services can help you save money while contributing to
          a more sustainable world.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default SolarPanelsService;
