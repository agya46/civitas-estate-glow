
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import ServiceCategories from '../components/home/ServiceCategories';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import OnboardingWidget from '../components/home/OnboardingWidget';
import TrustSignals from '../components/home/TrustSignals';
import BeforeAfter from '../components/home/BeforeAfter';
import Faq from '../components/home/Faq';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OnboardingWidget />
      <ServiceCategories />
      <TrustSignals />
      <BeforeAfter />
      <Testimonials />
      <Faq />
      <CtaSection />
    </Layout>
  );
};

export default Index;
