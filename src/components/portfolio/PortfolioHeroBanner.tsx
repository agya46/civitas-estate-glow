
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PortfolioItemType } from '@/data/portfolioData';

interface PortfolioHeroBannerProps {
  project: PortfolioItemType;
}

export const PortfolioHeroBanner: React.FC<PortfolioHeroBannerProps> = ({ project }) => {
  return (
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
  );
};
