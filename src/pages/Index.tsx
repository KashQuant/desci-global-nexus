
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GlobalImpact from '@/components/GlobalImpact';
import DesciPillars from '@/components/DesciPillars';
import ResearchPolicy from '@/components/ResearchPolicy';
import GlobalCommunity from '@/components/GlobalCommunity';
import EventsForums from '@/components/EventsForums';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GlobalImpact />
      <DesciPillars />
      <ResearchPolicy />
      <GlobalCommunity />
      <EventsForums />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
