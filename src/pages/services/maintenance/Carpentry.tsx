
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const CarpentryService = () => {
  const relatedServices = [
    { title: 'Electricals', link: '/services/maintenance/electricals' },
    { title: 'Plumbing', link: '/services/maintenance/plumbing' },
    { title: 'Painting', link: '/services/maintenance/painting' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Carpentry Services" 
      serviceCategory="Maintenance"
      serviceCategorySlug="maintenance"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our skilled carpenters deliver exceptional woodworking and carpentry services for both
          repair and new installations. With attention to detail and craftsmanship, we create and
          maintain beautiful wooden elements in your property.
        </p>
        
        <h2>Our Carpentry Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Custom cabinet design and installation</li>
          <li>Door and window frame repairs</li>
          <li>Hardwood flooring installation and repair</li>
          <li>Custom shelving and built-ins</li>
          <li>Deck and fence construction and repair</li>
          <li>Staircase and banister installations</li>
          <li>Crown molding and trim work</li>
          <li>Furniture repair and restoration</li>
        </ul>
        
        <h2>The Civitas Carpentry Advantage</h2>
        <p>
          Our carpenters combine traditional woodworking techniques with modern tools and materials
          to deliver superior results. We work with a wide range of woods and materials, 
          adapting to your design preferences and budget.
        </p>
        
        <p>
          Whether you need minor repairs or extensive custom installations, our carpentry team
          has the expertise to transform your vision into reality with precision and skill.
        </p>
        
        <h2>Our Approach to Quality Carpentry</h2>
        <ol className="space-y-4">
          <li>
            <strong>Consultation:</strong> We discuss your needs and preferences, offering professional advice and options.
          </li>
          <li>
            <strong>Design & Planning:</strong> For custom work, we create detailed designs and plans for your approval.
          </li>
          <li>
            <strong>Material Selection:</strong> We help you select the right woods and materials for your project.
          </li>
          <li>
            <strong>Skilled Craftsmanship:</strong> Our experienced carpenters execute the work with precision and care.
          </li>
          <li>
            <strong>Finishing Touches:</strong> We ensure all details are perfect, from sanding to final staining or painting.
          </li>
        </ol>
        
        <h2>Signs You Need Professional Carpentry Services</h2>
        <ul className="space-y-2">
          <li>Doors that don't close properly</li>
          <li>Squeaky or damaged floorboards</li>
          <li>Rotting wood on exterior structures</li>
          <li>Damaged cabinetry or built-ins</li>
          <li>Need for custom storage solutions</li>
          <li>Outdated woodwork in need of refreshing</li>
        </ul>
        
        <p className="mt-6">
          Whether you need repairs to existing woodwork or want to create something entirely new,
          our carpentry team has the skills and experience to deliver exceptional results that
          enhance the beauty and functionality of your property.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default CarpentryService;
