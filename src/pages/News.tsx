import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsCard from "@/components/NewsCard";

const allNews = [
  { title: "Adyton Completes Phase 2 Drilling at Fergusson Island", date: "January 15, 2025", excerpt: "Results from 12 diamond drill holes confirm high-grade gold mineralization across a 2.4 km strike length.", slug: "fergusson-phase-2", tags: ["Fergusson", "Drilling"], sourceUrl: "#" },
  { title: "Feni Restart Study Advances to Final Stage", date: "December 8, 2024", excerpt: "Updated economic assessment demonstrates robust project economics at current gold prices.", slug: "feni-restart-study", tags: ["Feni", "Corporate"], sourceUrl: "#" },
  { title: "Q3 2024 Financial Results Released", date: "November 22, 2024", excerpt: "Company reports strong cash position and provides update on exploration activities across PNG portfolio.", slug: "q3-2024-results", tags: ["Corporate", "Financials"], sourceUrl: "#" },
  { title: "Wapolu Reconnaissance Program Identifies New Targets", date: "October 5, 2024", excerpt: "Stream sediment sampling returns anomalous gold values across multiple drainage basins.", slug: "wapolu-recon", tags: ["Wapolu", "Exploration"], sourceUrl: "#" },
  { title: "Adyton Appoints New VP Exploration", date: "September 18, 2024", excerpt: "Experienced PNG geologist joins the leadership team to accelerate exploration programs.", slug: "new-vp-exploration", tags: ["Corporate", "Leadership"], sourceUrl: "#" },
  { title: "Yandera Technical Review Completed", date: "August 30, 2024", excerpt: "Comprehensive review of historical data identifies optimization opportunities for the porphyry copper-gold deposit.", slug: "yandera-review", tags: ["Yandera", "Technical"], sourceUrl: "#" },
];

const News = () => (
  <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Updates</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(var(--light-foreground))" }}>
          News & Releases
        </h1>
        <p className="text-lg max-w-2xl mb-12" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          Corporate news, exploration updates, and regulatory filings.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allNews.map((n) => (
            <NewsCard key={n.slug} {...n} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default News;
