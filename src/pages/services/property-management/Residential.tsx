
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const ResidentialPropertyManagementService = () => {
  const relatedServices = [
    { title: 'Commercial', link: '/services/property-management/commercial' },
    { title: 'Maintenance', link: '/services/maintenance' },
    { title: 'Cleaning', link: '/services/maintenance/cleaning' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Residential Property Management" 
      serviceCategory="Property Management"
      serviceCategorySlug="property-management"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our comprehensive residential property management services take the stress out of property ownership. 
          We handle every aspect of managing your residential investments, from tenant relations to maintenance, 
          allowing you to enjoy the benefits of ownership without the day-to-day responsibilities.
        </p>
        
        <h2>Our Residential Property Management Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Property marketing and tenant acquisition</li>
          <li>Tenant screening and selection</li>
          <li>Lease preparation and administration</li>
          <li>Rent collection and financial reporting</li>
          <li>Regular property inspections</li>
          <li>Maintenance coordination and emergency response</li>
          <li>Tenant communication and relationship management</li>
          <li>Legal compliance and eviction handling (when necessary)</li>
        </ul>
        
        <h2>The Civitas Property Management Advantage</h2>
        <p>
          Our property management team combines real estate expertise with customer service excellence. 
          We treat your property as if it were our own, applying diligent care to tenant selection, 
          maintenance oversight, and financial management.
        </p>
        
        <p>
          We leverage technology for efficient operations, offering online portals for owners and tenants, 
          electronic payment systems, and digital documentation. This modern approach ensures transparency, 
          accessibility, and prompt communication for all parties involved.
        </p>
        
        <h2>Benefits of Professional Residential Property Management</h2>
        <ul className="space-y-2">
          <li>Higher quality tenants through rigorous screening</li>
          <li>Reduced vacancy periods with effective marketing</li>
          <li>Timely rent collection and financial disbursement</li>
          <li>Prevention of maintenance issues through regular inspections</li>
          <li>Lower maintenance costs through our vendor network</li>
          <li>Legal compliance in an increasingly regulated environment</li>
          <li>Stress reduction and time savings for property owners</li>
        </ul>
        
        <h2>Our Property Management Approach</h2>
        <ol className="space-y-4">
          <li>
            <strong>Initial Property Evaluation:</strong> We assess your property's condition, rental potential, and any immediate needs.
          </li>
          <li>
            <strong>Management Planning:</strong> We develop a customized management strategy based on your goals and property characteristics.
          </li>
          <li>
            <strong>Marketing and Tenant Acquisition:</strong> We implement effective marketing to attract qualified tenants quickly.
          </li>
          <li>
            <strong>Tenant Screening:</strong> We conduct thorough background, credit, and reference checks to select reliable tenants.
          </li>
          <li>
            <strong>Ongoing Management:</strong> We handle day-to-day operations, including maintenance requests, rent collection, and tenant concerns.
          </li>
          <li>
            <strong>Regular Reporting:</strong> We provide detailed financial statements and property updates on a monthly basis.
          </li>
          <li>
            <strong>Continuous Evaluation:</strong> We regularly review rental rates and property performance to maximize your investment return.
          </li>
        </ol>
        
        <p className="mt-6">
          Whether you own a single rental property or a portfolio of residential investments, our property 
          management services provide peace of mind and optimize your returns. Contact us today to discover 
          how we can enhance your experience as a property owner.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default ResidentialPropertyManagementService;
