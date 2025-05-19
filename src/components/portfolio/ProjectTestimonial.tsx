
import React from 'react';
import { TestimonialType } from '@/data/portfolioData';

interface ProjectTestimonialProps {
  testimonial: TestimonialType;
}

export const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({ testimonial }) => {
  if (!testimonial) return null;
  
  return (
    <div className="bg-civitas-light p-6 rounded-lg mb-8 relative">
      <div className="text-4xl text-civitas-primary/20 font-serif absolute top-3 left-3">"</div>
      <blockquote className="pl-6">
        <p className="italic text-civitas-dark/90 mb-4">{testimonial.text}</p>
        <footer className="text-civitas-dark font-medium">— {testimonial.author}</footer>
      </blockquote>
    </div>
  );
};
