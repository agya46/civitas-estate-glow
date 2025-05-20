
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const CommercialPropertyManagementService = () => {
  const relatedServices = [
    { title: 'Residential', link: '/services/property-management/residential' },
    { title: 'Maintenance', link: '/services/maintenance' },
    { title: 'Architectural Design', link: '/services/architectural-design' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Commercial Property Management" 
      serviceCategory="Property Management"
      serviceCategorySlug="property-management"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our commercial property management services optimize your investment while minimizing your involvement. 
          We handle the complexities of commercial property operations, tenant relations, and maintenance to 
          maximize occupancy rates and property value.
        </p>
        
        <h2>Our Commercial Property Management Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Commercial tenant acquisition and retention</li>
          <li>Lease negotiation and administration</li>
          <li>Rent collection and financial management</li>
          <li>Building maintenance and systems oversight</li>
          <li>Vendor and contractor management</li>
          <li>Regulatory compliance and risk management</li>
          <li>Capital improvement planning and implementation</li>
          <li>Building security and emergency response coordination</li>
        </ul>
        
        <h2>The Civitas Commercial Management Advantage</h2>
        <p>
          Our commercial property managers bring specialized expertise in managing various property types, 
          including office buildings, retail spaces, industrial facilities, and mixed-use developments. 
          We understand the unique challenges and opportunities each commercial property type presents.
        </p>
        
        <p>
          We employ sophisticated property management systems to track all aspects of your commercial 
          property's performance, from financial metrics to maintenance histories. This data-driven 
          approach allows for informed decision-making and strategic planning to enhance your investment returns.
        </p>
        
        <h2>Benefits of Professional Commercial Property Management</h2>
        <ul className="space-y-2">
          <li>Maximized rental income through optimal pricing strategies</li>
          <li>Reduced operating expenses through efficient management</li>
          <li>Enhanced tenant satisfaction and retention</li>
          <li>Preservation and improvement of property value</li>
          <li>Decreased owner involvement in day-to-day operations</li>
          <li>Expert handling of complex commercial lease terms</li>
          <li>Proactive maintenance that prevents costly emergency repairs</li>
        </ul>
        
        <h2>Our Commercial Management Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Property Analysis:</strong> We conduct a thorough assessment of your commercial property's condition, systems, and current performance.
          </li>
          <li>
            <strong>Strategic Planning:</strong> We develop a customized management plan aligned with your investment goals.
          </li>
          <li>
            <strong>Tenant Relations:</strong> We establish and maintain professional relationships with tenants to address needs promptly.
          </li>
          <li>
            <strong>Preventative Maintenance:</strong> We implement scheduled maintenance programs to optimize building systems and prevent failures.
          </li>
          <li>
            <strong>Financial Oversight:</strong> We manage all financial aspects, including rent collection, expense payments, and budgeting.
          </li>
          <li>
            <strong>Performance Reporting:</strong> We provide detailed monthly and annual reports on property performance.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We regularly evaluate and refine management strategies to enhance property performance.
          </li>
        </ol>
        
        <p className="mt-6">
          Commercial property ownership should be a rewarding investment, not a time-consuming obligation. 
          Our commercial property management services provide the expertise and systems needed to maximize 
          returns while minimizing stress. Contact us today to learn how we can enhance your commercial 
          property investment.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default CommercialPropertyManagementService;
