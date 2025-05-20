
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const BeforeAfter = () => {
  const [activeItem, setActiveItem] = useState(portfolioData[0]);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Transformations</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            See the difference our services make with these before and after showcases from our portfolio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative bg-civitas-light p-1 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-white/80 text-civitas-dark text-xs font-medium py-1 px-2 rounded">BEFORE</span>
                  <img 
                    src={activeItem.beforeImage} 
                    alt={`${activeItem.title} before`} 
                    className="rounded h-72 w-full object-cover"
                  />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-civitas-primary text-white text-xs font-medium py-1 px-2 rounded">AFTER</span>
                  <img 
                    src={activeItem.afterImage} 
                    alt={`${activeItem.title} after`} 
                    className="rounded h-72 w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {portfolioData.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/3 md:basis-1/4 lg:basis-1/3">
                      <button 
                        onClick={() => setActiveItem(item)}
                        className={`w-full p-1 rounded ${activeItem.id === item.id ? 'ring-2 ring-civitas-primary' : 'opacity-70'}`}
                      >
                        <img 
                          src={item.afterImage} 
                          alt={item.title} 
                          className="h-20 w-full object-cover rounded"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </div>
              </Carousel>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <span className="inline-block bg-civitas-secondary/20 text-civitas-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {activeItem.categoryName}
              </span>
              
              <h3 className="text-2xl font-bold text-civitas-dark mb-4">
                {activeItem.title}
              </h3>
              
              <p className="text-civitas-dark/70 mb-6">
                Located in {activeItem.location}, this project showcases our attention to detail and commitment to quality. Our team transformed this space with precision craftsmanship and innovative solutions.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 text-civitas-primary shrink-0 mt-1" size={16} />
                  <span className="text-civitas-dark/80">Complete transformation within budget</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 text-civitas-primary shrink-0 mt-1" size={16} />
                  <span className="text-civitas-dark/80">Finished ahead of schedule</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 text-civitas-primary shrink-0 mt-1" size={16} />
                  <span className="text-civitas-dark/80">High-quality materials and workmanship</span>
                </li>
              </ul>
              
              <Button asChild>
                <Link to={`/portfolio/${activeItem.id}`} className="inline-flex items-center">
                  View Project Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
