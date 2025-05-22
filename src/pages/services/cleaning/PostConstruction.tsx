
import React from 'react';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const PostConstructionCleaning = () => {
  const relatedServices = [
    { title: 'Deep Cleaning', link: '/services/cleaning/deep-cleaning' },
    { title: 'Regular Maintenance', link: '/services/cleaning/regular-maintenance' },
    { title: 'Move-in/Move-out Cleaning', link: '/services/cleaning/move-in-out' },
  ];

  return (
    <ServiceDetailLayout 
      serviceTitle="Post-Construction Cleaning" 
      serviceCategory="Cleaning"
      serviceCategorySlug="cleaning"
      relatedServices={relatedServices}
    >
      <section className="prose max-w-none">
        <p className="lead text-lg mb-6">
          Our specialized post-construction cleaning services transform dusty, debris-filled construction 
          sites into clean, ready-to-use spaces, ensuring your newly built or renovated property is 
          spotless from day one.
        </p>
        
        <h2>Post-Construction Cleaning Challenges</h2>
        <p>
          Construction and renovation projects leave behind significant debris and fine dust that settles 
          on every surface. This specialized type of cleaning requires professional equipment, techniques, 
          and cleaning solutions to effectively remove construction residue without damaging new surfaces.
        </p>
        
        <h2>Our Post-Construction Cleaning Services Include:</h2>
        
        <ul className="space-y-2">
          <li>Removal of construction dust from all surfaces</li>
          <li>Cleaning of air vents and HVAC systems</li>
          <li>Detail cleaning of light fixtures and ceiling fans</li>
          <li>Window cleaning, including frames, tracks, and sills</li>
          <li>Thorough cleaning of all cabinetry, inside and out</li>
          <li>Fixture cleaning and polishing</li>
          <li>Detailed cleaning of bathroom and kitchen surfaces</li>
          <li>Floor cleaning appropriate to surface type (hardwood, tile, carpet)</li>
          <li>Paint overspray and adhesive removal</li>
          <li>Sticker and label removal from new fixtures and windows</li>
          <li>Baseboard and trim detail cleaning</li>
          <li>Pressure washing of exterior surfaces (optional)</li>
        </ul>
        
        <h2>Our Three-Phase Cleaning Process</h2>
        <p>
          We approach post-construction cleaning systematically to ensure no detail is missed:
        </p>
        
        <h3>Phase 1: Rough Clean</h3>
        <ul className="space-y-2">
          <li>Removal of larger debris and construction waste</li>
          <li>Sweeping and vacuuming of all floors</li>
          <li>Initial dusting of accessible surfaces</li>
          <li>Preparation for detailed cleaning</li>
        </ul>
        
        <h3>Phase 2: Detail Clean</h3>
        <ul className="space-y-2">
          <li>Thorough cleaning of all surfaces from ceiling to floor</li>
          <li>Detail cleaning of all fixtures and installations</li>
          <li>Window and glass cleaning</li>
          <li>Cabinet and closet interior cleaning</li>
          <li>Intensive bathroom and kitchen cleaning</li>
        </ul>
        
        <h3>Phase 3: Final Clean</h3>
        <ul className="space-y-2">
          <li>Final dusting of all surfaces</li>
          <li>Floor washing, mopping, and polishing</li>
          <li>Touch-up cleaning of frequently missed areas</li>
          <li>Final inspection and quality assurance</li>
        </ul>
        
        <h2>Equipment and Techniques</h2>
        <p>
          Our post-construction cleaning teams use specialized equipment:
        </p>
        <ul className="space-y-2">
          <li>Industrial-grade HEPA vacuum systems</li>
          <li>Microfiber technology for dust capture</li>
          <li>Specialized cleaning solutions safe for new surfaces</li>
          <li>Extension equipment for high ceiling cleaning</li>
          <li>Professional window cleaning tools</li>
        </ul>
        
        <h2>Who Benefits from Our Post-Construction Cleaning?</h2>
        <ul className="space-y-2">
          <li>Homeowners after renovations or new construction</li>
          <li>Commercial property owners preparing for business operations</li>
          <li>Contractors needing final cleaning before project handover</li>
          <li>Property managers preparing units after improvements</li>
          <li>Real estate agents staging newly renovated properties</li>
        </ul>
        
        <p>
          Trust Civitas' experienced post-construction cleaning specialists to transform your newly 
          built or renovated space into a clean, move-in ready environment. We handle the challenging 
          cleanup so you can focus on enjoying your newly completed project.
        </p>
      </section>
    </ServiceDetailLayout>
  );
};

export default PostConstructionCleaning;
