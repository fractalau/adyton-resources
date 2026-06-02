import { useState } from "react";
import {
  Download,
  Star,
  FileText,
  ExternalLink,
  PieChart,
  Building2,
  Users,
  Landmark,
  TrendingUp,
  Hash,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import DownloadTile from "@/components/DownloadTile";
import TagChip from "@/components/TagChip";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

/* ─── Capital Structure ─── */
const capitalStats = [
  { icon: Hash, value: "315.0 M", label: "Shares on Issue" },
  { icon: TrendingUp, value: "46.9 M", label: "Options/Warrants/RSU" },
  { icon: Hash, value: "361.9 M", label: "Fully Diluted" },
  { icon: Landmark, value: "$15 M", label: "Cash at Bank" },
];

const ownership = [
  { holder: "Retail/HNW", pct: "41%", note: "Aligned interests" },
  { holder: "Family Offices", pct: "17%", note: "Including resource-focused funds" },
  { holder: "Strategic", pct: "16%", note: "Broad market participation" },
  { holder: "Institutions", pct: "16%", note: "Broad market participation" },
  { holder: "Insiders", pct: "10%", note: "Broad market participation" },
];

const categories = ["All", "Presentations", "Technical Reports", "Corporate Documents", "Filings"];

const downloads = [
  {
    title: "PDAC 2026 Conference Presentation",
    date: "March 2026",
    description: "Presentation at PDAC 2026 conference.",
    fileType: "PDF",
    fileSize: "5.1 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_Resources_PDAC_2026.pdf",
  },
  {
    title: "Precious Metals Summit Zurich 2025",
    date: "November 2025",
    description: "Presentation at Precious Metals Summit, Zurich.",
    fileType: "PDF",
    fileSize: "6.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_Precious_Metals_Summit_Zurich_2025.pdf",
  },
  {
    title: "Precious Metals Summit Beaver Creek 2025",
    date: "September 2025",
    description: "Presentation at Precious Metals Summit, Beaver Creek.",
    fileType: "PDF",
    fileSize: "6.4 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_Precious_Metals_Summit_Beaver_Creek_2025.pdf",
  },
  {
    title: "PDAC 2025 Conference Presentation",
    date: "March 2025",
    description: "Presentation at PDAC 2025 conference.",
    fileType: "PDF",
    fileSize: "4.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_PDAC_2025_Conference_Presentation.pdf",
  },
  {
    title: "World Class Gold-Copper Discovery",
    date: "October 2024",
    description: "Corporate presentation on Adyton's world-class gold-copper discovery.",
    fileType: "PDF",
    fileSize: "6.9 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_World_Class_Gold_Copper_October_2024.pdf",
  },
  {
    title: "Québec Conference Presentation",
    date: "June 2024",
    description: "Presentation at the Québec Mines + Énergie conference.",
    fileType: "PDF",
    fileSize: "3.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/Adyton_Quebec_Conference_Presentation_June_2024.pdf",
  },
  {
    title: "Consolidated Financial Statements",
    date: "December 2025",
    description: "Audited consolidated financial statements for the period ending December 31, 2025.",
    fileType: "PDF",
    fileSize: "1.0 MB",
    category: "Corporate Documents",
    featured: false,
    href: "/documents/ADY_FS_Dec_31_2025.pdf",
  },
  {
    title: "Consolidated Financial Statements",
    date: "March 2026",
    description: "Consolidated financial statements for the three months ended March 31, 2026.",
    fileType: "PDF",
    fileSize: "0.6 MB",
    category: "Corporate Documents",
    featured: false,
    href: "/documents/ADY_FS_Mar_31_2026.pdf",
  },
  {
    title: "Filing of Financial Statements and MD&A for Q1 2026",
    date: "May 2026",
    description: "Announcement of filing of financial statements and MD&A for the three months ending March 31, 2026.",
    fileType: "PDF",
    fileSize: "0.6 MB",
    category: ["Corporate Documents", "Filings"],
    featured: false,
    href: "/documents/ADY_Q1_2026_Financials_Filing_Announcement.pdf",
  },
  {
    title: "Management's Discussion and Analysis",
    date: "December 2025",
    description: "Management's Discussion and Analysis for the period ending December 31, 2025.",
    fileType: "PDF",
    fileSize: "5.0 MB",
    category: "Corporate Documents",
    featured: false,
    href: "/documents/ADY_MDA_Dec_31_2025.pdf",
  },
  {
    title: "Management's Discussion and Analysis",
    date: "March 2026",
    description: "Management's Discussion and Analysis for the three months ended March 31, 2026.",
    fileType: "PDF",
    fileSize: "0.9 MB",
    category: "Corporate Documents",
    featured: false,
    href: "/documents/ADY_MDA_Mar_31_2026.pdf",
  },
];

const Investors = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = downloads.find((d) => d.featured);
  const filtered =
    activeCategory === "All"
      ? downloads.filter((d) => !d.featured)
      : downloads.filter(
          (d) =>
            !d.featured &&
            (Array.isArray(d.category) ? d.category.includes(activeCategory) : d.category === activeCategory),
        );

  useSEO(
    "Investor Hub",
    "Adyton Resources investor relations — capital structure, ownership data, NI 43-101 technical reports, presentations, and SEDAR+ regulatory filings.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section
          className="relative py-16 md:py-20 border-b overflow-hidden"
          style={{ background: "hsl(var(--off-white))", borderColor: "hsl(var(--light-border))" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${projectHeaderBg})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--off-white))] via-[hsl(var(--off-white))]/95 to-[hsl(var(--off-white))]/80"
            aria-hidden="true"
          />
          <div className="container relative z-10">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">INVESTOR RELATIONS</p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
              style={{ color: "hsl(var(--text-dark))" }}
            >
              Investor Hub
            </h1>
            <p className="text-lg max-w-2xl font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Capital structure, ownership data, presentations, and regulatory filings — everything for diligence in one
              place.
            </p>
          </div>
        </section>
        <Subscribe />

        {/* Capital Structure */}
        <section id="capital-structure-section" aria-label="Capital structure" className="teal-panel py-12 md:py-14">
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-center text-primary font-semibold mb-6 font-body">
              CAPITAL STRUCTURE
            </p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
              {capitalStats.map((s) => (
                <div key={s.label} className="text-center flex flex-col items-center gap-2">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-mono font-bold text-foreground">{s.value}</p>
                  <p className="text-foreground/60 font-body">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground/30 text-center mt-6 font-body italic">
              Figures are approximate and sourced from latest available public disclosures. Consult SEDAR+ for official
              filings.
            </p>
          </div>
        </section>

        {/* Ownership Breakdown */}
        <section
          aria-label="Ownership breakdown"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OWNERSHIP</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              Shareholder Breakdown
            </h2>
            <div className="space-y-4">
              {ownership.map((o) => (
                <div
                  key={o.holder}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                  style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}
                >
                  <div className="flex-1">
                    <p className="font-display font-semibold text-xl" style={{ color: "hsl(var(--text-dark))" }}>
                      {o.holder}
                    </p>
                    <p className="text-sm hidden" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                      {o.note}
                    </p>
                  </div>
                  <p className="text-2xl font-mono font-bold text-primary">{o.pct}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-4 italic" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
              Ownership data is approximate based on latest public insider filings and SEDI reports.
            </p>
          </div>
        </section>

        {/* Featured Deck */}
        <section aria-label="Featured investor deck" className="bg-background py-14 md:py-18">
          <div className="container max-w-4xl">
            {featured && (
              <div className="rounded-lg p-8 flex flex-col md:flex-row md:items-center gap-6 border-2 border-primary/20 bg-card">
                <div
                  className="h-16 w-16 rounded-xl gold-gradient flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="uppercase tracking-wider text-primary font-semibold mb-1 font-body">
                    LATEST INVESTOR DECK
                  </p>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">{featured.title}</h2>
                  <p className="text-foreground/60 font-body">{featured.description}</p>
                  <p className="text-foreground/40 mt-1 font-body">
                    {featured.date} · {featured.fileType} · {featured.fileSize}
                  </p>
                </div>
                <Button variant="gold" size="lg" asChild>
                  <a href="/Adyton-Investor-Deck.pdf">View Deck</a>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Document Library */}
        <section
          aria-label="Document library"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container max-w-5xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">DOCUMENT LIBRARY</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              Reports, Filings & Presentations
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((c) => (
                <TagChip key={c} label={c} active={c === activeCategory} onClick={() => setActiveCategory(c)} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filtered.map((d) => (
                <DownloadTile key={d.href ?? d.title} {...d} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section aria-label="External resources" className="teal-panel py-14 md:py-16 border-t border-gold/30">
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
              <a href="mailto:ir@adytonresources.com">
                <Building2 className="h-4 w-4" />
                Contact IR
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investors;
