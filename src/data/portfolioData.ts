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
  }
  // Other portfolio items would be added here
];
