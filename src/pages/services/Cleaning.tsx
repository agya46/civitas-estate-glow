
import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight,
  Bath,
  CalendarCheck,
  ShowerHead
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Cleaning = () => {
  // List of services offered
  const cleaningServices = [
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning of all areas including hard-to-reach places, appliances, and fixtures.',
      link: '/services/cleaning/deep-cleaning',
    },
    {
      title: 'Post-Construction Cleaning',
      description: 'Specialized cleaning to remove dust, debris, and residues after construction or renovation.',
      link: '/services/cleaning/post-construction',
    },
    {
      title: 'Regular Maintenance Cleaning',
      description: 'Scheduled cleaning services to keep your property consistently clean and presentable.',
      link: '/services/cleaning/regular-maintenance',
    },
    {
      title: 'Move-in/Move-out Cleaning',
      description: 'Comprehensive cleaning when moving into a new property or leaving an old one.',
      link: '/services/cleaning/move-in-out',
    },
  ];

  // Benefits of professional cleaning
  const benefits = [
    'Improved hygiene and reduced health risks',
    'Enhanced aesthetic appeal and presentation',
    'Extended lifespan of fixtures and furnishings',
    'Time-saving convenience for busy professionals',
    'Customized cleaning plans for your specific needs',
    'Eco-friendly cleaning options available',
    'Trained professionals with proper equipment',
    'Consistent quality results',
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "Civitas' cleaning team transformed our office space. Their attention to detail is remarkable.",
      client: "Sarah Johnson, Office Manager",
      business: "Tech Solutions Inc."
    },
    {
      quote: "We've been using their regular maintenance cleaning services for our rental properties. Highly recommend!",
      client: "Michael Davis, Property Investor",
      business: "Davis Properties"
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Cleaning Services</h1>
            <p className="text-xl opacity-90">
              Expert cleaning solutions for residential and commercial properties, tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center mr-4">
                  <Bath size={24} />
                </div>
                <h2 className="text-3xl font-bold">Cleaning Services</h2>
              </div>
              <p className="text-lg text-civitas-dark/80 mb-6">
                Our professional cleaning team delivers exceptional results for homes and businesses of all sizes. 
                With state-of-the-art equipment and eco-friendly cleaning solutions, we ensure a healthier, 
                more appealing environment for you, your family, or your customers.
              </p>
              <p className="text-lg text-civitas-dark/80 mb-6">
                Whether you need a one-time deep clean, post-construction cleanup, or regular maintenance services, 
                our trained specialists will exceed your expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="mr-3 text-civitas-primary" />
                  <span>Residential Cleaning</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 text-civitas-primary" />
                  <span>Commercial Cleaning</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 text-civitas-primary" />
                  <span>Customizable Schedules</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 text-civitas-primary" />
                  <span>Eco-Friendly Options</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Book a Cleaning <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Cleaning Services" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section-padding bg-civitas-light/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cleaning Services</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              We offer a comprehensive range of cleaning services to meet the unique needs of each client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cleaningServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-civitas-dark/70 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-civitas-primary font-medium flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                alt="Cleaning Benefits" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">The Benefits of Professional Cleaning</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="mr-3 text-civitas-primary mt-1" />
                    <p className="text-civitas-dark/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-civitas-light/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cleaning Process</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-civitas-dark/70">
                We evaluate your space and discuss your specific cleaning needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-civitas-dark/70">
                We create a customized cleaning plan tailored to your requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-civitas-dark/70">
                Our trained professionals carry out the cleaning with precision.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-civitas-secondary/20 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow-up</h3>
              <p className="text-civitas-dark/70">
                We ensure your complete satisfaction and address any concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-civitas-light/50 rounded-lg p-6 relative">
                <div className="text-4xl text-civitas-primary/20 absolute top-4 left-4">"</div>
                <p className="text-civitas-dark/80 mb-4 pt-6">
                  {testimonial.quote}
                </p>
                <div className="font-semibold">{testimonial.client}</div>
                <div className="text-civitas-dark/70 text-sm">{testimonial.business}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-civitas-primary to-civitas-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Spotless Space?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your cleaning needs and receive a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-civitas-primary hover:bg-white/90">
              <Link to="/contact">Book a Service</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 bg-civitas-secondary">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cleaning;
