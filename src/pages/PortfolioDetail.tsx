import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

// Sample portfolio data - in a real app this would come from an API or database
const portfolioData = [
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
    challenge: 'The main challenge was working within the constraints of the building's structural elements while creating an open concept design. Additionally, the owners wanted high-end finishes on a moderate budget.',
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
  // Other portfolio items would be added here
];

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find(item => item.id === id);
  
  // Fallback if project not found
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">Sorry, the project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/portfolio">Return to Portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: `url('${project.coverImage}')`,
        }}></div>
        <div className="absolute inset-0 bg-civitas-dark/60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/80 hover:text-white">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/portfolio" className="text-white/80 hover:text-white">Portfolio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-white">{project.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl">
            <span className="inline-block bg-civitas-primary text-white px-3 py-1 text-sm rounded mb-4">
              {project.categoryName}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {project.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg mb-6">{project.description}</p>
                
                {/* Before & After */}
                <h3 className="text-xl font-semibold mb-4">Before & After</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Before</h4>
                    <img 
                      src={project.beforeImage} 
                      alt="Before" 
                      className="w-full h-80 object-cover rounded-md shadow-md" 
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">After</h4>
                    <img 
                      src={project.afterImage} 
                      alt="After" 
                      className="w-full h-80 object-cover rounded-md shadow-md" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <p>{project.solution}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-civitas-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-civitas-light p-6 rounded-lg mb-8 relative">
                    <div className="text-4xl text-civitas-primary/20 font-serif absolute top-3 left-3">"</div>
                    <blockquote className="pl-6">
                      <p className="italic text-civitas-dark/90 mb-4">{project.testimonial.text}</p>
                      <footer className="text-civitas-dark font-medium">— {project.testimonial.author}</footer>
                    </blockquote>
                  </div>
                )}
                
                <div className="mt-10">
                  <Link to="/portfolio" className="inline-flex items-center text-civitas-primary font-medium hover:underline">
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm text-civitas-dark/60 font-medium">CLIENT</h4>
                      <p className="text-civitas-dark">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-civitas-dark/60 font-medium">CATEGORY</h4>
                      <p className="text-civitas-dark">{project.categoryName}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-civitas-dark/60 font-medium">COMPLETION DATE</h4>
                      <p className="text-civitas-dark">{project.date}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-civitas-dark/60 font-medium">LOCATION</h4>
                      <p className="text-civitas-dark">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Services Provided</h3>
                    <ul className="space-y-2">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-civitas-primary mr-3 mt-1 flex-shrink-0" size={16} />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Interested in a similar project?</h3>
                    <Button asChild className="w-full">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects - would be implemented in a real scenario */}
    </Layout>
  );
};

export default PortfolioDetail;
