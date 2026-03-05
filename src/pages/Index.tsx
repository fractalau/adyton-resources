import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import MetricsStrip from "@/components/home/MetricsStrip";
import TwoPillarSection from "@/components/home/TwoPillarSection";
import EVIHSection from "@/components/home/EVIHSection";
import CopperUpsideSection from "@/components/home/CopperUpsideSection";
import WhyPNGSection from "@/components/home/WhyPNGSection";
import ManagementStrip from "@/components/home/ManagementStrip";
import NewsSection from "@/components/home/NewsSection";
import InvestorHubCTA from "@/components/home/InvestorHubCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <MetricsStrip />
    <TwoPillarSection />
    <EVIHSection />
    <CopperUpsideSection />
    <WhyPNGSection />
    <ManagementStrip />
    <NewsSection />
    <InvestorHubCTA />
    <Footer />
  </div>
);

export default Index;
