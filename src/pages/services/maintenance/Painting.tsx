
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const PaintingService = () => {
  const relatedServices = [
    { title: 'Electricals', link: '/services/maintenance/electricals' },
    { title: 'Carpentry', link: '/services/maintenance/carpentry' },
    { title: 'Cleaning', link: '/services/maintenance/cleaning' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Painting Services" 
      serviceCategory="Maintenance"
      serviceCategorySlug="maintenance"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Transform your space with our professional painting services. Our expert painters deliver
          flawless finishes for interior and exterior surfaces, enhancing the beauty and protection
          of your property.
        </p>
        
        <h2>Our Painting Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Interior residential painting</li>
          <li>Exterior house painting</li>
          <li>Commercial property painting</li>
          <li>Cabinet refinishing</li>
          <li>Wallpaper removal and installation</li>
          <li>Decorative finishes and techniques</li>
          <li>Color consultation and matching</li>
          <li>Wood staining and finishing</li>
        </ul>
        
        <h2>The Civitas Painting Advantage</h2>
        <p>
          Our painting professionals use premium paints and materials to ensure long-lasting, beautiful results.
          We pay attention to proper preparation, including cleaning, sanding, and priming surfaces,
          which is crucial for a perfect finish that stands the test of time.
        </p>
        
        <p>
          We understand that painting can disrupt your daily routine, so we work efficiently and
          maintain a clean, organized work area. Our goal is to minimize inconvenience while
          delivering exceptional results.
        </p>
        
        <h2>Our Painting Process</h2>
        <ol className="space-y-4">
          <li>
            <strong>Consultation:</strong> We discuss your color preferences, finish options, and project scope.
          </li>
          <li>
            <strong>Surface Preparation:</strong> We properly clean, repair, sand, and prime surfaces for optimal paint adhesion.
          </li>
          <li>
            <strong>Protection:</strong> We carefully protect surrounding areas from paint splatter and dust.
          </li>
          <li>
            <strong>Application:</strong> Our painters apply paint with precision using high-quality brushes, rollers, and sprayers.
          </li>
          <li>
            <strong>Inspection:</strong> We conduct a thorough inspection to ensure every surface is perfectly finished.
          </li>
          <li>
            <strong>Clean-up:</strong> We leave your space clean and tidy, removing all equipment and materials.
          </li>
        </ol>
        
        <h2>When to Consider Professional Painting</h2>
        <ul className="space-y-2">
          <li>When paint is peeling, cracking, or bubbling</li>
          <li>Before selling your property to increase value</li>
          <li>After renovations or repairs</li>
          <li>When you want to refresh your space with a new color scheme</li>
          <li>For weather protection of exterior surfaces</li>
          <li>When specialized finishes or techniques are desired</li>
        </ul>
        
        <p className="mt-6">
          Whether you're looking to revitalize a single room or completely transform your property's
          appearance, our painting services provide the perfect solution for a beautiful, long-lasting finish.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default PaintingService;
