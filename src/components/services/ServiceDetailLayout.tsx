
import React from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface ServiceDetailLayoutProps {
  serviceTitle: string;
  serviceCategory: string;
  serviceCategorySlug: string;
  children: React.ReactNode;
  relatedServices?: Array<{
    title: string;
    link: string;
  }>;
}

const ServiceDetailLayout = ({ 
  serviceTitle, 
  serviceCategory,
  serviceCategorySlug,
  children, 
  relatedServices = [] 
}: ServiceDetailLayoutProps) => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
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
                    <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={`/services#${serviceCategorySlug}`} className="text-white/80 hover:text-white">{serviceCategory}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <span className="text-white">{serviceTitle}</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{serviceTitle}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {children}
              
              <div className="mt-12">
                <Link to="/services" className="inline-flex items-center text-civitas-primary font-medium hover:underline mb-8">
                  <ChevronLeft className="mr-2" size={16} />
                  Back to Services Overview
                </Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
                <p className="text-civitas-dark/80 mb-6">
                  Ready to get started? Contact us today for a free consultation and quote for your {serviceTitle.toLowerCase()} needs.
                </p>
                <Button asChild className="w-full mb-4">
                  <Link to="/contact" className="flex items-center justify-center">
                    Book Now <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                
                {relatedServices.length > 0 && (
                  <>
                    <div className="border-t border-gray-100 my-6"></div>
                    <h3 className="text-xl font-semibold mb-4">Related Services</h3>
                    <ul className="space-y-2">
                      {relatedServices.map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={service.link} 
                            className="text-civitas-primary hover:underline flex items-center"
                          >
                            <ArrowRight className="mr-2" size={14} />
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your {serviceTitle.toLowerCase()} needs. Our team of professionals is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Book a Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailLayout;
