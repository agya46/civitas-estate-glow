
import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What services does Civitas Estate & Maintenance provide?",
    answer: "We provide comprehensive property maintenance and management services including electrical, plumbing, painting, renovations, installations (smart home tech, solar panels, security systems), property management for residential and commercial properties, and architectural design services."
  },
  {
    question: "How quickly can you respond to emergency maintenance requests?",
    answer: "We offer 24/7 emergency services for critical issues like electrical failures, water leaks, or security breaches. Our team typically responds within 1-2 hours for emergencies, depending on your location and the nature of the emergency."
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Yes, all our technicians are fully licensed, insured, and have undergone thorough background checks. We maintain all necessary certifications and stay updated with industry standards and local building codes."
  },
  {
    question: "Do you provide free estimates for your services?",
    answer: "Yes, we provide free estimates for most of our services. You can request a quote through our website, by phone, or email. For larger projects, we may schedule an on-site assessment to provide an accurate estimate."
  },
  {
    question: "What is your service area?",
    answer: "We currently serve the greater metropolitan area and surrounding suburbs within a 50-mile radius. For properties outside this area, please contact us to discuss availability and possible arrangements."
  }
];

const Faq = () => {
  return (
    <section className="section-padding bg-civitas-light/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-civitas-dark/80">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg border border-gray-200 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-civitas-light/30 transition-colors">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-civitas-dark/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-civitas-dark/80">
              Have more questions? Contact our customer service team.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
