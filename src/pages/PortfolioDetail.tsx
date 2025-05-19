
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { portfolioData } from '@/data/portfolioData';
import { PortfolioHeroBanner } from '@/components/portfolio/PortfolioHeroBanner';
import { PortfolioBeforeAfter } from '@/components/portfolio/PortfolioBeforeAfter';
import { ProjectChallengeAndSolution } from '@/components/portfolio/ProjectChallengeAndSolution';
import { FeaturesList } from '@/components/portfolio/FeaturesList';
import { ProjectTestimonial } from '@/components/portfolio/ProjectTestimonial';
import { ProjectSidebar } from '@/components/portfolio/ProjectSidebar';

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find(item => item.id === id);
  
  // Fallback if project not found
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">Sorry, the project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/portfolio">Return to Portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <PortfolioHeroBanner project={project} />

      {/* Project Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg mb-6">{project.description}</p>
                
                {/* Before & After */}
                <PortfolioBeforeAfter 
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
                
                <ProjectChallengeAndSolution 
                  challenge={project.challenge}
                  solution={project.solution}
                />
                
                <FeaturesList features={project.features} />
                
                {/* Testimonial */}
                {project.testimonial && (
                  <ProjectTestimonial testimonial={project.testimonial} />
                )}
                
                <div className="mt-10">
                  <Link to="/portfolio" className="inline-flex items-center text-civitas-primary font-medium hover:underline">
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProjectSidebar project={project} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;
