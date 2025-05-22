
import Layout from '../components/Layout';
import { Users, Heart, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { 
      title: 'Integrity', 
      description: 'We operate with honesty and transparency in all our dealings.'
    },
    { 
      title: 'Quality', 
      description: 'We are committed to delivering exceptional quality in every service.'
    },
    { 
      title: 'Reliability', 
      description: 'We stand behind our work and promise to meet deadlines.'
    },
    { 
      title: 'Sustainability', 
      description: 'We prioritize eco-friendly practices and sustainable solutions.'
    },
  ];

  const team = [
    {
      name: 'Robert Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      bio: 'With over 20 years of experience in property management and construction.'
    },
    {
      name: 'Emily Chen',
      position: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      bio: 'Specializes in streamlining operations and ensuring service excellence.'
    },
    {
      name: 'Marcus Garcia',
      position: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      bio: 'Award-winning architect with a passion for sustainable design.'
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Civitas</h1>
            <p className="text-xl opacity-90">
              Building trust through quality service since 2005. Learn about our mission, values, and the team behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Civitas Estate & Maintenance is a pioneering Ghanaian firm at the forefront of urban transformation in Africa. Established in 2025, we specialize in Smart Cities, Green Housing, Renewable Energy Solutions, and Integrated Estate Management.
              </p>
              <p className="text-lg mb-4">
                Our mission is to shape the future of African cities by blending cutting-edge technology, sustainable engineering, and impact-driven initiatives.
              </p>
              <p className="text-lg mb-4">
                We are dedicated to designing, building, and maintaining eco-friendly, energy-efficient infrastructures that not only enhance urban living but also support the United Nations Sustainable Development Goals (SDGs).
              </p>
              <p className="text-lg">
                By fostering strong public-private partnerships, Civitas Estate & Maintenance delivers scalable solutions that drive positive change and long-term value for communities. Join us as we redefine urban development—creating smarter, greener, and more resilient cities for generations to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="African handylady from Civitas team" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              These core principles guide everything we do at Civitas Estate & Maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-civitas-secondary/20 hover-lift">
                <Heart className="text-civitas-primary mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-civitas-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise in property maintenance, management, and architectural design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-civitas-primary mb-2">{member.position}</p>
                  <p className="text-civitas-dark/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-civitas-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Civitas</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              We're committed to excellence in every aspect of our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>Industry-certified technicians</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>Member of National Association of Home Builders</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>Green Building Council certified</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Guarantees</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>100% satisfaction guarantee on all services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>On-time service or we discount your bill</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-civitas-primary mr-3 shrink-0 mt-1" size={18} />
                  <span>24/7 emergency response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-civitas-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Civitas Difference?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your property needs and discover how we can help you maintain and enhance your property value.
          </p>
          <Link to="/contact" className="bg-white text-civitas-primary px-8 py-3 rounded-md font-medium inline-flex items-center hover:bg-civitas-secondary hover:text-civitas-dark transition-all">
            Contact Us Today <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
