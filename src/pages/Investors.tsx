import { useState } from "react";
import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DownloadTile from "@/components/DownloadTile";
import TagChip from "@/components/TagChip";

const categories = ["All", "Presentations", "Technical Reports", "Corporate Documents", "Filings"];

const downloads = [
  { title: "Investor Deck — Q1 2025", date: "January 2025", description: "Latest corporate overview and investment thesis.", fileType: "PDF", fileSize: "4.8 MB", category: "Presentations", featured: true },
  { title: "NI 43-101 Feni Technical Report", date: "March 2024", description: "Independent technical report on Feni mineral resource estimate.", fileType: "PDF", fileSize: "12.3 MB", category: "Technical Reports", featured: false },
  { title: "Fergusson Island Exploration Update", date: "December 2024", description: "Phase 2 drilling results and geological interpretation.", fileType: "PDF", fileSize: "6.1 MB", category: "Presentations", featured: false },
  { title: "Annual Information Form 2024", date: "April 2024", description: "Annual disclosure document filed with securities regulators.", fileType: "PDF", fileSize: "2.4 MB", category: "Corporate Documents", featured: false },
  { title: "Q3 2024 MD&A", date: "November 2024", description: "Management discussion and analysis for Q3 fiscal 2024.", fileType: "PDF", fileSize: "1.8 MB", category: "Corporate Documents", featured: false },
  { title: "SEDAR+ Filings", date: "Ongoing", description: "View all regulatory filings on SEDAR+.", fileType: "External", fileSize: "—", category: "Filings", featured: false },
];

const Investors = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = downloads.find((d) => d.featured);
  const filtered = activeCategory === "All" ? downloads.filter((d) => !d.featured) : downloads.filter((d) => d.category === activeCategory && !d.featured);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
      <Header />
      <section className="py-16 md:py-24">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Investors</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(var(--light-foreground))" }}>
            Investor Hub
          </h1>
          <p className="text-lg max-w-2xl mb-12" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            Access presentations, technical reports, filings, and disclosures.
          </p>

          {/* Featured Deck */}
          {featured && (
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 mb-12 flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-16 w-16 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Latest Investor Deck</p>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{featured.title}</h3>
                <p className="text-sm text-muted-foreground">{featured.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{featured.date} · {featured.fileType} · {featured.fileSize}</p>
              </div>
              <Button variant="gold" size="lg">
                <Download className="h-4 w-4" />
                Download Deck
              </Button>
            </div>
          )}

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <TagChip key={c} label={c} active={c === activeCategory} onClick={() => setActiveCategory(c)} />
            ))}
          </div>

          {/* Downloads */}
          <div className="space-y-3">
            {filtered.map((d) => (
              <DownloadTile key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Investors;
