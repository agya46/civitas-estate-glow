
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const SecuritySystemsService = () => {
  const relatedServices = [
    { title: 'Smart Tech', link: '/services/installations/smart-tech' },
    { title: 'Solar Panels', link: '/services/installations/solar-panels' },
    { title: 'Electricals', link: '/services/maintenance/electricals' }
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Security System Installation" 
      serviceCategory="Installations"
      serviceCategorySlug="installations"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Protect your property and loved ones with our professional security system installation services.
          We design and implement comprehensive security solutions tailored to your specific needs and concerns.
        </p>
        
        <h2>Our Security System Services Include:</h2>
        
        <ul className="space-y-2">
          <li>CCTV camera installation and monitoring</li>
          <li>Alarm system design and installation</li>
          <li>Access control systems</li>
          <li>Smart security integration</li>
          <li>Intercom and video doorbell installation</li>
          <li>Motion sensor lighting</li>
          <li>Security system maintenance and upgrades</li>
          <li>24/7 monitoring solutions</li>
        </ul>
        
        <h2>The Civitas Security Advantage</h2>
        <p>
          Our security experts conduct a thorough assessment of your property to identify
          vulnerable areas and recommend appropriate security measures. We use state-of-the-art
          equipment and technology to create a robust security system that provides peace of mind.
        </p>
        
        <p>
          We specialize in discreet installations that protect your property without compromising its
          aesthetic appeal. Our systems can be integrated with your existing smart home technology for
          seamless control and monitoring.
        </p>
        
        <h2>Benefits of Professional Security Systems</h2>
        <ul className="space-y-2">
          <li>Deterrence of potential intruders</li>
          <li>Real-time alerts and notifications</li>
          <li>Remote monitoring capabilities</li>
          <li>Visual evidence in case of incidents</li>
          <li>Potential insurance premium reductions</li>
          <li>Peace of mind when away from home</li>
          <li>Enhanced safety for family members and employees</li>
        </ul>
        
        <h2>Our Security System Installation Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Security Assessment:</strong> We evaluate your property and discuss your specific security concerns.
          </li>
          <li>
            <strong>Customized Design:</strong> We design a security system tailored to your property's layout and your requirements.
          </li>
          <li>
            <strong>Equipment Selection:</strong> We recommend and source high-quality security equipment that fits your budget and needs.
          </li>
          <li>
            <strong>Professional Installation:</strong> Our technicians install all components with minimal disruption to your property.
          </li>
          <li>
            <strong>System Configuration:</strong> We set up and configure all devices, ensuring proper functioning and integration.
          </li>
          <li>
            <strong>User Training:</strong> We provide comprehensive training on how to operate and manage your security system.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We offer maintenance plans and technical support to keep your system functioning optimally.
          </li>
        </ol>
        
        <p className="mt-6">
          Don't compromise on security. Contact us today to learn how our custom security system
          installations can protect what matters most to you, providing safety and peace of mind
          for years to come.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default SecuritySystemsService;
