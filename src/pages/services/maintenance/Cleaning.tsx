
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const CleaningService = () => {
  const relatedServices = [
    { title: 'Electricals', link: '/services/maintenance/electricals' },
    { title: 'Plumbing', link: '/services/maintenance/plumbing' },
    { title: 'Carpentry', link: '/services/maintenance/carpentry' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Cleaning Services" 
      serviceCategory="Maintenance"
      serviceCategorySlug="maintenance"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our professional cleaning services ensure your property maintains its pristine condition. 
          We offer comprehensive cleaning solutions for residential and commercial properties.
        </p>
        
        <h2>Our Cleaning Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Regular maintenance cleaning</li>
          <li>Deep cleaning services</li>
          <li>Post-construction cleaning</li>
          <li>Move-in/move-out cleaning</li>
          <li>Window and glass cleaning</li>
          <li>Carpet and upholstery cleaning</li>
          <li>Floor maintenance and polishing</li>
          <li>Pressure washing services</li>
        </ul>
        
        <h2>The Civitas Cleaning Advantage</h2>
        <p>
          Our skilled cleaning professionals use industry-leading equipment and eco-friendly cleaning products 
          that effectively remove dirt and germs while being safe for your family, pets, and the environment.
        </p>
        
        <p>
          We tailor our cleaning services to meet your specific needs, whether it's a one-time deep clean or 
          regular scheduled maintenance. Our attention to detail ensures no corner is left untouched.
        </p>
        
        <h2>Our Cleaning Process:</h2>
        <ol className="space-y-4">
          <li>
            <strong>Initial Assessment:</strong> We evaluate your property to understand your specific cleaning needs.
          </li>
          <li>
            <strong>Customized Plan:</strong> We create a cleaning plan tailored to your requirements and schedule.
          </li>
          <li>
            <strong>Professional Execution:</strong> Our trained staff carries out the cleaning according to industry best practices.
          </li>
          <li>
            <strong>Quality Check:</strong> We inspect all areas to ensure they meet our high standards of cleanliness.
          </li>
          <li>
            <strong>Client Feedback:</strong> We welcome your feedback to continuously improve our services.
          </li>
        </ol>
        
        <h2>Why Professional Cleaning Matters</h2>
        <p>
          Regular professional cleaning not only maintains the appearance of your property but also extends
          the life of surfaces and materials. It creates a healthier environment by removing allergens and
          contaminants that can affect indoor air quality. For businesses, a clean space creates a positive
          impression on clients and provides a more productive environment for employees.
        </p>
        
        <p>
          Trust Civitas to keep your property immaculately clean, allowing you to enjoy your space
          without worrying about cleaning and maintenance.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default CleaningService;
