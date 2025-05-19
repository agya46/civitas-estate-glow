
import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    quote: 'Civitas transformed my home renovation experience. Their team was professional, timely, and delivered exceptional quality work.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    quote: 'We\'ve been using Civitas for all our properties for over 3 years. Their consistency and attention to detail is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    quote: 'The team at Civitas helped us redesign our commercial space. They were collaborative, innovative, and delivered on time and on budget.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current testimonial */}
          <div className="bg-civitas-light rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              
              <div>
                <div className="flex mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic text-civitas-dark mb-4">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-civitas-primary">{testimonials[activeIndex].name}</p>
                  <p className="text-civitas-dark/70">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-civitas-primary scale-125' : 'bg-civitas-secondary'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
