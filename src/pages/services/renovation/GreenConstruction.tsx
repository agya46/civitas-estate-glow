
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const GreenConstructionService = () => {
  const relatedServices = [
    { title: 'Interior', link: '/services/renovation/interior' },
    { title: 'Exterior', link: '/services/renovation/exterior' },
    { title: 'Solar Panels', link: '/services/installations/solar-panels' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Green Construction" 
      serviceCategory="Renovation & Remodeling"
      serviceCategorySlug="renovation"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Embrace sustainable building practices with our green construction services. We specialize in 
          eco-friendly building methods and materials that reduce environmental impact while creating 
          healthier, more efficient spaces.
        </p>
        
        <h2>Our Green Construction Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Energy-efficient building design and construction</li>
          <li>Sustainable material sourcing and selection</li>
          <li>High-performance insulation installation</li>
          <li>Renewable energy system integration</li>
          <li>Water conservation systems</li>
          <li>Indoor air quality improvements</li>
          <li>Sustainable landscape integration</li>
          <li>Green certification assistance (LEED, BREEAM, etc.)</li>
        </ul>
        
        <h2>The Civitas Green Construction Advantage</h2>
        <p>
          Our green construction team combines expertise in traditional building methods with specialized 
          knowledge of sustainable practices. We stay updated on the latest green building technologies 
          and materials to offer innovative solutions that benefit both your property and the planet.
        </p>
        
        <p>
          We approach each project with a holistic perspective, considering lifecycle costs, environmental 
          impact, and long-term performance. Our green building strategies create spaces that are not only 
          environmentally responsible but also healthier, more comfortable, and more economical to operate.
        </p>
        
        <h2>Benefits of Green Construction</h2>
        <ul className="space-y-2">
          <li>Reduced energy consumption and lower utility bills</li>
          <li>Decreased environmental footprint</li>
          <li>Improved indoor air quality and occupant health</li>
          <li>Enhanced property value and marketability</li>
          <li>Potential tax incentives and rebates</li>
          <li>Greater durability and reduced maintenance</li>
          <li>Resilience against climate change impacts</li>
        </ul>
        
        <h2>Our Green Construction Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Sustainable Goal Setting:</strong> We work with you to establish green building objectives that align with your values and budget.
          </li>
          <li>
            <strong>Integrated Design:</strong> We develop a comprehensive approach that optimizes all building systems for sustainability.
          </li>
          <li>
            <strong>Material Evaluation:</strong> We research and recommend sustainable materials with consideration for their environmental impact, durability, and performance.
          </li>
          <li>
            <strong>Energy Modeling:</strong> We analyze energy performance to optimize design decisions for efficiency.
          </li>
          <li>
            <strong>Green Construction Methods:</strong> Our team implements sustainable building practices with careful waste management.
          </li>
          <li>
            <strong>Systems Commissioning:</strong> We ensure all green systems are properly installed and functioning optimally.
          </li>
          <li>
            <strong>Performance Verification:</strong> We test and document the performance of green building features to confirm they meet sustainability goals.
          </li>
        </ol>
        
        <p className="mt-6">
          Green construction is an investment in the future—both for your property and for the environment. 
          Contact us today to learn how our sustainable building practices can create a healthier, more 
          efficient space while reducing your environmental footprint.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default GreenConstructionService;
