import { useState } from "react";
import { Download, Star, FileText, ExternalLink, PieChart, Building2, Users, Landmark, TrendingUp, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DownloadTile from "@/components/DownloadTile";
import TagChip from "@/components/TagChip";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

/* ─── Capital Structure ─── */
const capitalStats = [
  { icon: Hash, value: "~173M", label: "Shares Outstanding", source: "TSXV / MD&A" },
  { icon: TrendingUp, value: "C$0.405", label: "Last Close (TSXV: ADY)", source: "Market data" },
  { icon: Landmark, value: "~C$17M", label: "Cash & Equivalents", source: "Q3 2025 MD&A" },
  { icon: PieChart, value: "~C$70M", label: "Market Cap (undiluted)", source: "Calculated" },
];

/* ─── Ownership ─── */
const ownership = [
  { holder: "Management & Directors", pct: "~12%", note: "Aligned interests" },
  { holder: "Institutional Investors", pct: "~18%", note: "Including resource-focused funds" },
  { holder: "Retail & Other", pct: "~70%", note: "Broad market participation" },
];

/* ─── Document Library ─── */
const categories = ["All", "Presentations", "Technical Reports", "Corporate Documents", "Filings"];

const downloads = [
  { title: "Investor Deck — Q1 2025", date: "January 2025", description: "Latest corporate overview and investment thesis.", fileType: "PDF", fileSize: "4.8 MB", category: "Presentations", featured: true },
  { title: "NI 43-101 Feni Technical Report", date: "October 2021", description: "Independent technical report on Feni mineral resource estimate.", fileType: "PDF", fileSize: "12.3 MB", category: "Technical Reports", featured: false },
  { title: "NI 43-101 Wapolu Technical Report", date: "February 2026", description: "Updated mineral resource estimate for Wapolu deposit.", fileType: "PDF", fileSize: "9.7 MB", category: "Technical Reports", featured: false },
  { title: "NI 43-101 Gameta Technical Report", date: "March 2024", description: "Independent technical report on Gameta mineral resource.", fileType: "PDF", fileSize: "8.2 MB", category: "Technical Reports", featured: false },
  { title: "Annual Information Form 2024", date: "April 2024", description: "Annual disclosure document filed with securities regulators.", fileType: "PDF", fileSize: "2.4 MB", category: "Corporate Documents", featured: false },
  { title: "Q3 2024 MD&A", date: "November 2024", description: "Management discussion and analysis for Q3 fiscal 2024.", fileType: "PDF", fileSize: "1.8 MB", category: "Corporate Documents", featured: false },
  { title: "SEDAR+ Filings", date: "Ongoing", description: "View all regulatory filings on SEDAR+.", fileType: "External", fileSize: "—", category: "Filings", featured: false },
];

const Investors = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = downloads.find((d) => d.featured);
  const filtered =
    activeCategory === "All"
      ? downloads.filter((d) => !d.featured)
      : downloads.filter((d) => d.category === activeCategory && !d.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─── */}
      <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">INVESTOR RELATIONS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Investor Hub
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl font-body">
            Capital structure, ownership data, presentations, and regulatory filings — everything for diligence in one place.
          </p>
        </div>
      </section>

      {/* ─── Capital Structure ─── */}
      <section className="teal-panel py-12 md:py-14">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6 font-body">CAPITAL STRUCTURE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capitalStats.map((s) => (
              <div key={s.label} className="text-center flex flex-col items-center gap-2">
                <s.icon className="h-5 w-5 text-primary" />
                <p className="text-2xl md:text-3xl font-mono font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-foreground/60 font-body">{s.label}</p>
                <p className="text-[10px] text-foreground/30 font-body italic">Source: {s.source}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-foreground/30 text-center mt-6 font-body italic">
            Figures are approximate and sourced from latest available public disclosures. Consult SEDAR+ for official filings.
          </p>
        </div>
      </section>

      {/* ─── Ownership Breakdown ─── */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OWNERSHIP</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
            Shareholder Breakdown
          </h2>
          <div className="space-y-4">
            {ownership.map((o) => (
              <div key={o.holder} className="flex items-center gap-4 p-4 rounded-lg border" style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}>
                <div className="flex-1">
                  <p className="font-display font-semibold text-sm" style={{ color: "hsl(var(--text-dark))" }}>{o.holder}</p>
                  <p className="text-xs" style={{ color: "hsl(var(--light-muted-foreground))" }}>{o.note}</p>
                </div>
                <p className="text-2xl font-mono font-bold text-primary">{o.pct}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-center mt-4 italic" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
            Ownership data is approximate based on latest public insider filings and SEDI reports.
          </p>
        </div>
      </section>

      {/* ─── Featured Deck ─── */}
      <section className="bg-background py-14 md:py-18">
        <div className="container max-w-4xl">
          {featured && (
            <div className="rounded-lg p-8 flex flex-col md:flex-row md:items-center gap-6 border-2 border-primary/20 bg-card">
              <div className="h-16 w-16 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1 font-body">LATEST INVESTOR DECK</p>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{featured.title}</h3>
                <p className="text-sm text-foreground/60 font-body">{featured.description}</p>
                <p className="text-xs text-foreground/40 mt-1 font-body">{featured.date} · {featured.fileType} · {featured.fileSize}</p>
              </div>
              <Button variant="gold" size="lg">
                <Download className="h-4 w-4" />
                Download Deck
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ─── Document Library ─── */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">DOCUMENT LIBRARY</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
            Reports, Filings & Presentations
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <TagChip key={c} label={c} active={c === activeCategory} onClick={() => setActiveCategory(c)} />
            ))}
          </div>

          {/* Tiles */}
          <div className="space-y-3">
            {filtered.map((d) => (
              <DownloadTile key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Links ─── */}
      <section className="bg-background py-10 border-t border-border">
        <div className="container max-w-4xl flex flex-wrap justify-center gap-3">
          <Button variant="gold-outline" size="lg" asChild>
            <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              SEDAR+ Filings
            </a>
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <a href="https://www.newsfilecorp.com/alert/login" target="_blank" rel="noopener noreferrer">
              <Users className="h-4 w-4" />
              Subscribe for Updates
            </a>
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <a href="mailto:ir@adytonresources.com.au">
              <Building2 className="h-4 w-4" />
              Contact IR
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
