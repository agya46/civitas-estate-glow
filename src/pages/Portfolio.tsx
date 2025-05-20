
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from '@/data/portfolioData';

// Portfolio categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'installations', name: 'Installations' },
  { id: 'renovation', name: 'Renovation' },
  { id: 'property-management', name: 'Property Management' },
  { id: 'architectural', name: 'Architectural Design' }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  
  const filteredPortfolio = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90">
              Explore our showcase of completed projects across all service categories,
              demonstrating our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-civitas-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map(item => (
              <Card key={item.id} className="overflow-hidden hover-lift">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={item.coverImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs uppercase font-semibold text-civitas-primary bg-civitas-primary/10 py-1 px-2 rounded">
                      {item.categoryName}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-civitas-dark/70 text-sm mb-2">{item.location}</p>
                  <p className="text-civitas-dark/80">{item.description.substring(0, 100)}...</p>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 border-t">
                  <Link 
                    to={`/portfolio/${item.id}`}
                    className="text-civitas-primary font-medium flex items-center hover:underline w-full"
                  >
                    View Project Details
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Let us bring your vision to life with our professional expertise and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
