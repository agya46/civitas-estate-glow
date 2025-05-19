
import Layout from '../components/Layout';
import ContactForm from '../components/contact/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      subtext: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@civitasestate.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Estate Avenue',
      subtext: 'City, State 12345'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 8am - 6pm',
      subtext: 'Sat: 9am - 1pm (by appointment)'
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-civitas-primary to-civitas-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have a question or ready to book a service? We're here to help with all your property needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-civitas-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <div className="w-12 h-12 rounded-full bg-civitas-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-civitas-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="font-medium">{item.details}</p>
                <p className="text-civitas-dark/70 text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Book a Service or Get a Quote</h2>
            <p className="text-lg text-civitas-dark/80 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you promptly to discuss your property needs.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        {/* This would typically be a real map integration */}
        <div className="absolute inset-0 flex items-center justify-center bg-civitas-primary/10">
          <p className="text-civitas-dark">Map placeholder - would integrate Google Maps or similar here</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
