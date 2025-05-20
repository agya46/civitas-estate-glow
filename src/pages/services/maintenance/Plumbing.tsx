
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const PlumbingService = () => {
  const relatedServices = [
    { title: 'Electricals', link: '/services/maintenance/electricals' },
    { title: 'Cleaning', link: '/services/maintenance/cleaning' },
    { title: 'Carpentry', link: '/services/maintenance/carpentry' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Plumbing Services" 
      serviceCategory="Maintenance"
      serviceCategorySlug="maintenance"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our professional plumbing services ensure your water systems function perfectly. 
          From repairing leaks to complete pipe installations, our expert plumbers can handle any issue.
        </p>
        
        <h2>Our Plumbing Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Emergency leak repairs</li>
          <li>Pipe installation and replacement</li>
          <li>Drain cleaning and maintenance</li>
          <li>Water heater installation and repair</li>
          <li>Bathroom and kitchen fixture installation</li>
          <li>Sump pump services</li>
          <li>Water quality assessment</li>
          <li>Preventive maintenance</li>
        </ul>
        
        <h2>The Civitas Plumbing Advantage</h2>
        <p>
          Our licensed plumbers arrive prepared with advanced tools and equipment to diagnose and resolve your plumbing issues efficiently. 
          We understand that plumbing problems can be stressful, which is why we prioritize fast response times, especially for emergencies.
        </p>
        
        <p>
          All our plumbing work comes with a satisfaction guarantee, ensuring that your water systems operate flawlessly. 
          We also provide preventive maintenance plans to help you avoid costly plumbing emergencies in the future.
        </p>
        
        <h2>Signs You Need Professional Plumbing Services:</h2>
        <ul className="space-y-2">
          <li>Reduced water pressure</li>
          <li>Strange noises in your pipes</li>
          <li>Water discoloration</li>
          <li>Slow draining sinks or tubs</li>
          <li>Unpleasant odors from drains</li>
          <li>Unusually high water bills</li>
          <li>Visible leaks or water stains</li>
        </ul>
        
        <h2>Our Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Assessment:</strong> We thoroughly evaluate your plumbing system to identify the root cause of any issues.
          </li>
          <li>
            <strong>Recommendation:</strong> We provide transparent pricing and explain the necessary repairs or installations.
          </li>
          <li>
            <strong>Expert Service:</strong> Our experienced plumbers complete the work efficiently and with minimal disruption.
          </li>
          <li>
            <strong>Quality Check:</strong> We test all repairs and installations to ensure everything works perfectly.
          </li>
          <li>
            <strong>Cleanup:</strong> We leave your property clean and tidy, as if we were never there.
          </li>
        </ol>
      </section>
    </ServiceDetailLayout>
  );
};

export default PlumbingService;
