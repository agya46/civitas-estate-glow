import React, { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { 
  useEmblaCarousel, 
  EmblaCarouselType 
} from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index, true);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setScrollSnaps, setSelectedIndex]);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients and discover why they trust us with their properties.
          </p>
        </div>
        
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex -ml-6">
            {testimonials.map((testimonial, index) => (
              <div className="embla__slide relative min-w-full pl-6" key={testimonial.id}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="embla__dots flex justify-center mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? 'bg-civitas-primary' : 'bg-gray-300'}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
