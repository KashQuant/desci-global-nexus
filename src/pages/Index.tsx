
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GlobalImpact from '@/components/GlobalImpact';
import KeyInitiatives from '@/components/KeyInitiatives';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GlobalImpact />
      <KeyInitiatives />
      <Footer />
    </div>
  );
};

export default Index;
