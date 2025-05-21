
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: 'Ama Serwaa',
    title: 'Property Owner',
    text: "Civitas has been a game-changer for managing my properties. Their maintenance team is responsive and professional, ensuring my tenants are always satisfied.",
    image: 'https://images.unsplash.com/photo-1573496800643-6135b3ebad96?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 2,
    name: 'Kwame Boateng',
    title: 'Real Estate Investor',
    text: "I've used Civitas for several renovation projects, and their attention to detail is unmatched. They consistently deliver high-quality results on time and within budget.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 4
  },
  {
    id: 3,
    name: 'Nana Yaa',
    title: 'Homeowner',
    text: "From plumbing repairs to electrical work, Civitas handles all my home maintenance needs. Their 24/7 emergency service is a lifesaver!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 4,
    name: 'Kofi Mensah',
    title: 'Commercial Property Manager',
    text: "Civitas provides comprehensive property management services for my commercial properties. Their proactive approach and transparent communication make them an invaluable partner.",
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884cebd?auto=format&fit=crop&q=80&w=200',
    rating: 4
  },
  {
    id: 5,
    name: 'Abena Serwaa',
    title: 'Landlord',
    text: "I highly recommend Civitas for anyone looking for reliable and efficient property maintenance services. Their team is professional, courteous, and always goes the extra mile.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b2933e?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients and discover why they trust us with their properties.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            onSelect={(api) => setActiveIndex(api?.selectedScrollSnap() || 0)}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-civitas-dark/70 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star key={i} className="text-yellow-500 w-5 h-5 mr-1" />
                        ))}
                      </div>
                    </div>
                    <p className="text-civitas-dark/80 flex-grow">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const api = document.querySelector(".embla")?.getAttribute("data-embla-api");
                    if (api) {
                      JSON.parse(api).scrollTo(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-civitas-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
