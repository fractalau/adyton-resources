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
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Gold &amp; Copper Exploration in Papua New Guinea"
      description="Adyton Resources (TSXV: ADY) holds 2.4 Moz Au across two PNG island projects. Near-term cash flow via Fergusson Island JV, discovery growth at Feni."
      canonical={seoConfig.siteUrl}
    />
    <Header />
    <main>
      <HeroSection />
      <MetricsStrip />
      <TwoPillarSection />
      <EVIHSection />
      <CopperUpsideSection />
      <WhyPNGSection />
      <ManagementStrip />
      <NewsSection />
      <InvestorHubCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
