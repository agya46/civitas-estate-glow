
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import ServiceCategories from '../components/home/ServiceCategories';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCategories />
      <Testimonials />
      <CtaSection />
    </Layout>
  );
};

export default Index;
