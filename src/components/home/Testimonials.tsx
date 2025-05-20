
import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Homeowner',
    location: 'Lakeside District',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    quote: 'Civitas transformed my home renovation experience. Their team was professional, timely, and delivered exceptional quality work. I couldn\'t be happier with the results!',
    rating: 5,
    service: 'Kitchen Renovation'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Property Manager',
    location: 'Downtown Area',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    quote: 'We\'ve been using Civitas for all our properties for over 3 years. Their consistency and attention to detail is unmatched in the industry. They\'re our go-to maintenance partner.',
    rating: 5,
    service: 'Property Management'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Business Owner',
    location: 'West End',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    quote: 'The team at Civitas helped us redesign our commercial space. They were collaborative, innovative, and delivered on time and on budget. Our customers love the new look!',
    rating: 5,
    service: 'Commercial Renovation'
  },
  {
    id: 4,
    name: 'David Smith',
    position: 'Real Estate Investor',
    location: 'Riverside Estates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    quote: 'I manage multiple rental properties and Civitas has been instrumental in maintaining them all. Their 24/7 emergency service has saved me countless headaches. Highly recommended!',
    rating: 5,
    service: 'Maintenance Services'
  },
];

const Testimonials = () => {
  // Fix: Adding the second argument (plugins array) to useEmblaCarousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    });
    
    // Auto scroll
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0, true);
      }
    }, 5000);
    
    return () => {
      clearInterval(interval);
      emblaApi.off('select');
    };
  }, [emblaApi]);
  
  return (
    <section className="section-padding bg-civitas-primary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 left-8 opacity-30">
              <Quote size={80} />
            </div>
            
            <div className="relative z-10">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                      <Card className="bg-white text-civitas-dark h-full">
                        <CardContent className="p-6">
                          <div className="flex mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                            ))}
                          </div>
                          
                          <blockquote className="text-lg mb-4 italic">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="flex items-center">
                            <div className="shrink-0 mr-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-14 h-14 rounded-full object-cover border-2 border-civitas-light"
                              />
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-civitas-dark/70">
                                {testimonial.position}, {testimonial.location}
                              </div>
                              <div className="text-xs text-civitas-primary font-medium mt-1">
                                {testimonial.service}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index, true)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-white scale-125' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
