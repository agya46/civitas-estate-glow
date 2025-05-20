
// Sample portfolio data - in a real app this would come from an API or database
export interface TestimonialType {
  text: string;
  author: string;
}

export interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  location: string;
  date: string;
  client: string;
  coverImage: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  challenge: string;
  solution: string;
  services: string[];
  features: string[];
  testimonial?: TestimonialType;
}

export const portfolioData: PortfolioItemType[] = [
  {
    id: 'modern-kitchen-remodel',
    title: 'Modern Kitchen Remodel',
    category: 'renovation',
    categoryName: 'Renovation',
    location: 'Downtown Residence, New York',
    date: 'January 2025',
    client: 'Private Residence',
    coverImage: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80',
    description: 'A complete kitchen transformation for a downtown apartment. The goal was to create an open, functional space with modern aesthetics while maximizing storage and usability in a limited area.',
    challenge: 'The main challenge was working within the constraints of the building\'s structural elements while creating an open concept design. Additionally, the owners wanted high-end finishes on a moderate budget.',
    solution: 'We designed a custom layout that removed non-load-bearing walls and incorporated clever storage solutions. By selecting strategic high-impact elements (countertops and backsplash) and balancing with more budget-friendly cabinetry, we achieved a luxury look without exceeding budget.',
    services: ['Space Planning and Design', 'Custom Cabinetry', 'Lighting Design', 'Appliance Installation', 'Countertop and Backsplash Installation'],
    features: ['Custom white quartz countertops', 'Energy-efficient appliances', 'Under-cabinet LED lighting', 'Custom island with seating', 'Smart home integration for lighting and appliances'],
    testimonial: {
      text: "Civitas transformed our outdated kitchen into a modern, functional space beyond our expectations. Their attention to detail and ability to understand our vision made all the difference. The project was completed on time and within budget.",
      author: "Michael & Sarah Johnson"
    }
  },
  {
    id: 'smart-home-integration',
    title: 'Smart Home Integration',
    category: 'installations',
    categoryName: 'Installations',
    location: 'Lakeside Villa, Lake Tahoe',
    date: 'March 2025',
    client: 'Luxury Vacation Property',
    coverImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    description: 'A comprehensive smart home system installation for a luxury vacation property, integrating security, entertainment, climate control, and lighting into a single seamless platform.',
    challenge: 'The property is used as both a private residence and a high-end rental, requiring an intuitive system that could be easily used by guests while maintaining security and control for the owners.',
    solution: 'We implemented a multi-layered smart home system with user permission levels, allowing guests access to comfort controls while reserving administrative functions for the owners. Remote monitoring provides peace of mind when the property is rented.',
    services: ['System Design and Planning', 'Hardware Installation', 'Software Integration', 'Network Setup', 'User Training'],
    features: ['Voice-controlled lighting and climate', 'Integrated entertainment system', 'Advanced security with remote monitoring', 'Automated scenes for different times of day', 'Energy usage optimization'],
    testimonial: {
      text: "The smart home system has transformed how we use and manage our vacation home. Guests love the convenience, and we love being able to monitor and control everything remotely. The Civitas team made the whole process painless.",
      author: "Robert Chen, Property Owner"
    }
  },
  {
    id: 'electrical-system-upgrade',
    title: 'Electrical System Upgrade',
    category: 'maintenance',
    categoryName: 'Maintenance',
    location: 'Heritage Building, Chicago',
    date: 'February 2025',
    client: 'Commercial Property Owner',
    coverImage: 'https://images.unsplash.com/photo-1581094282522-5ce8ad070c7d?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1563347681-6532113a4bf1?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581094282522-5ce8ad070c7d?auto=format&fit=crop&q=80',
    description: 'Complete electrical rewiring and panel upgrade for an older property to meet modern safety standards and power requirements.',
    challenge: 'The building\'s historical status required preserving architectural elements while bringing the electrical system up to code, without disrupting the daily operations of tenant businesses.',
    solution: 'Our specialized team developed a phased implementation plan with after-hours work schedules and temporary power solutions to minimize business interruption. We used minimally invasive techniques to protect historical features.',
    services: ['Electrical Assessment', 'Panel Upgrades', 'Rewiring', 'Safety Inspections', 'Lighting Upgrades'],
    features: ['Modern circuit breaker panels', 'Enhanced safety features', 'Increased power capacity', 'Energy-efficient wiring solutions', 'Smart electrical monitoring'],
    testimonial: {
      text: "The Civitas team handled our complex electrical upgrade with impressive professionalism. They respected our building\'s historical features and kept disruption to an absolute minimum for our tenants.",
      author: "Daniel Harrison, Property Manager"
    }
  },
  {
    id: 'luxury-bathroom-renovation',
    title: 'Luxury Bathroom Renovation',
    category: 'renovation',
    categoryName: 'Renovation',
    location: 'Suburban Estate, Connecticut',
    date: 'April 2025',
    client: 'Private Homeowner',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    description: 'High-end bathroom remodel with custom tile work and premium fixtures, transforming an outdated space into a luxurious spa-like retreat.',
    challenge: 'The existing bathroom had significant water damage beneath the surface that wasn\'t apparent until demolition began. The client also requested an expanded shower area without changing the room\'s footprint.',
    solution: 'We remediated the water damage and restructured the layout to accommodate a larger shower. By using space-saving fixtures and creating a wet room concept, we maximized the available area while adding luxury elements.',
    services: ['Interior Design', 'Waterproofing', 'Custom Tiling', 'Plumbing Installation', 'Lighting Design'],
    features: ['Heated flooring system', 'Custom glass shower enclosure', 'Rainfall shower head', 'Double vanity with marble countertop', 'Smart mirrors with integrated lighting'],
    testimonial: {
      text: "Our bathroom renovation exceeded all expectations. Civitas transformed our ordinary bathroom into an extraordinary spa-like retreat. Their attention to detail and craftsmanship is evident in every aspect.",
      author: "Elizabeth Moore"
    }
  },
  {
    id: 'commercial-property-management',
    title: 'Commercial Property Management',
    category: 'property-management',
    categoryName: 'Property Management',
    location: 'Business District, Atlanta',
    date: 'Ongoing Service',
    client: 'Investment Group',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'Comprehensive management services for a multi-tenant commercial building, including maintenance, tenant relations, and financial oversight.',
    challenge: 'The property was suffering from deferred maintenance issues, high vacancy rates, and tenant satisfaction problems when the new owners acquired it.',
    solution: 'Our team implemented a strategic improvement plan, addressing critical maintenance issues first, then developing a tenant retention program. We instituted transparent financial reporting and proactive communication protocols.',
    services: ['Tenant Relations', 'Preventive Maintenance', 'Financial Management', 'Vendor Coordination', 'Emergency Response'],
    features: ['24/7 emergency service', 'Online tenant portal', 'Quarterly property inspections', 'Capital improvement planning', 'Energy efficiency initiatives'],
    testimonial: {
      text: "Civitas has transformed our property\'s performance in just six months. Vacancy rates are down, tenant satisfaction is up, and operating costs have been reduced through their efficient management approach.",
      author: "James Wilson, Investment Director"
    }
  },
  {
    id: 'custom-home-design',
    title: 'Custom Home Design',
    category: 'architectural',
    categoryName: 'Architectural Design',
    location: 'Hillside Development, California',
    date: 'September 2025',
    client: 'Private Client',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
    description: 'Architectural design and planning for a modern sustainable home set on a challenging hillside plot with spectacular views.',
    challenge: 'The sloped terrain presented engineering challenges while local regulations restricted building height. The clients wanted a sustainable home that maximized views without excessive excavation costs.',
    solution: 'We designed a terraced structure that followed the natural contours of the land, using cantilevered sections to maximize living space and views without additional foundation requirements. Sustainable elements were integrated throughout the design.',
    services: ['Site Analysis', 'Architectural Design', 'Permit Management', 'Sustainability Consulting', 'Construction Oversight'],
    features: ['Passive solar design', 'Rainwater harvesting system', 'Solar panel integration', 'Natural ventilation system', 'Indigenous landscaping plan'],
    testimonial: {
      text: "Working with the Civitas team on our home design was exceptional. They listened to our needs while guiding us through the technical challenges of our site. The result is a home that exceeds our expectations in both design and functionality.",
      author: "Thomas & Julia Reynolds"
    }
  }
];
