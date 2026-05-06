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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DownloadTile from "@/components/DownloadTile";
import TagChip from "@/components/TagChip";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

/* ─── Capital Structure ─── */
const capitalStats = [
  { icon: Hash, value: "~173M", label: "Shares Outstanding", source: "TSXV / MD&A" },
  { icon: TrendingUp, value: "C$0.405", label: "Last Close (TSXV: ADY)", source: "Market data" },
  { icon: Landmark, value: "~C$17M", label: "Cash & Equivalents", source: "Q3 2025 MD&A" },
  { icon: PieChart, value: "~C$70M", label: "Market Cap (undiluted)", source: "Calculated" },
];

const ownership = [
  { holder: "Management & Directors", pct: "~12%", note: "Aligned interests" },
  { holder: "Institutional Investors", pct: "~18%", note: "Including resource-focused funds" },
  { holder: "Retail & Other", pct: "~70%", note: "Broad market participation" },
];

const categories = ["All", "Presentations", "Technical Reports", "Corporate Documents", "Filings"];

const downloads = [
  {
    title: "Investor Deck — March 2026 (PDAC)",
    date: "March 2026",
    description: "Latest corporate overview and investment thesis.",
    fileType: "PDF",
    fileSize: "5.1 MB",
    category: "Presentations",
    featured: true,
    href: "/Adyton-Investor-Deck.pdf",
  },
  {
    title: "Precious Metals Summit Zurich 2025",
    date: "November 2025",
    description: "Presentation at Precious Metals Summit, Zurich.",
    fileType: "PDF",
    fileSize: "6.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Zurich_Nov2025.pdf",
  },
  {
    title: "Precious Metals Summit Beaver Creek 2025",
    date: "September 2025",
    description: "Presentation at Precious Metals Summit, Beaver Creek.",
    fileType: "PDF",
    fileSize: "6.5 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_BeaverCreek_Sep2025.pdf",
  },
  {
    title: "PDAC 2025 Conference Presentation",
    date: "March 2025",
    description: "Presentation at PDAC 2025 conference.",
    fileType: "PDF",
    fileSize: "4.1 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_PDAC_Mar2025.pdf",
  },
  {
    title: "World Class Gold & Copper — October 2024",
    date: "October 2024",
    description: "Corporate presentation.",
    fileType: "PDF",
    fileSize: "6.7 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Oct2024.pdf",
  },
  {
    title: "Québec Conference Presentation",
    date: "June 2024",
    description: "Presentation at the Québec Mining Conference.",
    fileType: "PDF",
    fileSize: "3.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Quebec_Jun2024.pdf",
  },
  {
    title: "World Class Gold & Copper — December 2022",
    date: "December 2022",
    description: "Corporate presentation.",
    fileType: "PDF",
    fileSize: "3.0 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Dec2022.pdf",
  },
  {
    title: "World Class Gold & Copper — April 2022",
    date: "April 2022",
    description: "Corporate presentation.",
    fileType: "PDF",
    fileSize: "4.4 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Apr2022.pdf",
  },
  {
    title: "World Class Gold & Copper — February 2022",
    date: "February 2022",
    description: "Corporate presentation.",
    fileType: "PDF",
    fileSize: "4.4 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Feb2022.pdf",
  },
  {
    title: "World Class Gold & Copper — October 2021",
    date: "October 2021",
    description: "Corporate presentation post resource estimate.",
    fileType: "PDF",
    fileSize: "3.5 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Oct2021.pdf",
  },
  {
    title: "Unlocking Gold & Copper Value — September 2021",
    date: "September 2021",
    description: "Updated investor presentation.",
    fileType: "PDF",
    fileSize: "2.9 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Sep2021.pdf",
  },
  {
    title: "Gold & Copper Industry Overview",
    date: "August 2021",
    description: "Industry overview and peer analysis.",
    fileType: "PDF",
    fileSize: "0.6 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_IndustryOverview_Aug2021.pdf",
  },
  {
    title: "Gold and Copper in World Class Jurisdictions — July 2021",
    date: "July 2021",
    description: "Investor presentation.",
    fileType: "PDF",
    fileSize: "5.5 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Jul2021.pdf",
  },
  {
    title: "Gold and Copper in World Class Jurisdictions — June 2021",
    date: "June 2021",
    description: "Investor presentation.",
    fileType: "PDF",
    fileSize: "3.6 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_Jun2021.pdf",
  },
  {
    title: "Gold and Copper in World Class Jurisdictions — May 2021",
    date: "May 2021",
    description: "Investor presentation.",
    fileType: "PDF",
    fileSize: "3.2 MB",
    category: "Presentations",
    featured: false,
    href: "/presentations/ADY_May2021.pdf",
  },
  {
    title: "NI 43-101 Feni Island Technical Report",
    date: "November 2021",
    description: "Independent technical report on Feni Island gold-copper property.",
    fileType: "PDF",
    fileSize: "9.1 MB",
    category: "Technical Reports",
    featured: false,
    href: "/reports/NI43-101_Feni_Oct2021.pdf",
  },
  {
    title: "NI 43-101 Fergusson Island Technical Report",
    date: "November 2021",
    description: "Independent technical report on Fergusson Island gold property.",
    fileType: "PDF",
    fileSize: "13 MB",
    category: "Technical Reports",
    featured: false,
    href: "/reports/NI43-101_Fergusson_Oct2021.pdf",
  },
  {
    title: "NI 43-101 Wapolu Updated Technical Report",
    date: "February 2026",
    description: "Updated mineral resource estimate for Wapolu deposit. Filed on SEDAR+.",
    fileType: "PDF",
    fileSize: "—",
    category: "Technical Reports",
    featured: false,
    href: "https://www.sedarplus.ca/csa-party/records/record.html?id=ff2e5e2b3cb06d6b01fce4a6e1dfe2cc94d94ada0a5c4db26d8d5fc96c8ab6b3",
  },
  {
    title: "NI 43-101 Gameta Technical Report",
    date: "March 2024",
    description: "Independent technical report on Gameta mineral resource. Filed on SEDAR+.",
    fileType: "PDF",
    fileSize: "—",
    category: "Technical Reports",
    featured: false,
    href: "https://www.sedarplus.ca/csa-party/records/record.html?id=c5418632e6a3340ed2748563450540e82cf9712f1323b6943c7a04373c01b203",
  },
  {
    title: "Annual Information Form 2024",
    date: "April 2024",
    description: "Annual disclosure document filed with securities regulators.",
    fileType: "PDF",
    fileSize: "—",
    category: "Corporate Documents",
    featured: false,
    href: "https://www.sedarplus.ca/csa-party/records/record.html?keyword=adyton&category=annual_information_forms",
  },
  {
    title: "Q3 2024 MD&A",
    date: "November 2024",
    description: "Management discussion and analysis for Q3 fiscal 2024.",
    fileType: "PDF",
    fileSize: "—",
    category: "Corporate Documents",
    featured: false,
    href: "https://www.sedarplus.ca/csa-party/records/record.html?keyword=adyton&category=interim_financial_statements",
  },
  {
    title: "SEDAR+ Filings",
    date: "Ongoing",
    description: "View all Adyton regulatory filings on SEDAR+.",
    fileType: "External",
    fileSize: "—",
    category: "Filings",
    featured: false,
    href: "https://www.sedarplus.ca/csa-party/records/record.html?keyword=adyton",
  },
];

const Investors = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = downloads.find((d) => d.featured);
  const filtered =
    activeCategory === "All"
      ? downloads.filter((d) => !d.featured)
      : downloads.filter((d) => d.category === activeCategory && !d.featured);

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

        {/* Capital Structure */}
        <section aria-label="Capital structure" className="teal-panel py-12 md:py-14">
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-center text-primary font-semibold mb-6 font-body">
              CAPITAL STRUCTURE
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {capitalStats.map((s) => (
                <div key={s.label} className="text-center flex flex-col items-center gap-2">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-mono font-bold text-foreground">{s.value}</p>
                  <p className="text-foreground/60 font-body">{s.label}</p>
                  <p className="text-foreground/30 font-body italic">Source: {s.source}</p>
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
                    <p className="font-display font-semibold text-sm" style={{ color: "hsl(var(--text-dark))" }}>
                      {o.holder}
                    </p>
                    <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>
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
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">{featured.title}</h2>
                  <p className="text-foreground/60 font-body">{featured.description}</p>
                  <p className="text-foreground/40 mt-1 font-body">
                    {featured.date} · {featured.fileType} · {featured.fileSize}
                  </p>
                </div>
                <Button variant="gold" size="lg" asChild>
                  <a href="/Adyton-Investor-Deck.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Deck
                  </a>
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
              DOCUMENT LIBRARY
            </p>
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
                <DownloadTile key={d.title} {...d} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section aria-label="External resources" className="bg-background py-10 border-t border-border">
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
