import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsCard from "@/components/NewsCard";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const allNews = [
  {
    title: "Adyton Resources Announces Filing of NI 43-101 Technical Report on Fergusson Island Wapolu Gold Project",
    date: "February 25, 2026",
    excerpt: "The Company announces filing on SEDAR+ of an independent NI 43-101 technical report on the Wapolu Gold Project, Fergusson Island, PNG.",
    tags: ["Fergusson", "Technical"],
    sourceUrl: "https://www.newsfilecorp.com/release/285234/Adyton-Resources-Announces-Filing-of-NI-43101-Technical-Report-on-Fergusson-Island-Wapolu-Gold-Project",
  },
  {
    title: "Adyton Discovers New Au-Cu Mineralized Zones and Documents Resource Continuity",
    date: "February 18, 2026",
    excerpt: "Successful results from the ongoing drill program at the 100% owned Feni Island Gold-Copper Project. To date, 10,663m of the ongoing drill program completed.",
    tags: ["Feni", "Drilling"],
    sourceUrl: "https://www.newsfilecorp.com/release/284304/Adyton-Discovers-New-AuCu-Mineralized-Zones-and-Documents-Resource-Continuity",
  },
  {
    title: "Adyton Reports ~200% Increase to Wapolu Updated Inferred Mineral Resource Estimate",
    date: "January 13, 2026",
    excerpt: "Updated NI 43-101 MRE for the Wapolu gold project on Fergusson Island — 1.0 million tonnes grading 1.00 g/t Au.",
    tags: ["Fergusson", "Resource"],
    sourceUrl: "https://www.newsfilecorp.com/release/280210/Adyton-Reports-200-Increase-to-Wapolu-Updated-Inferred-Mineral-Resource-Estimate",
  },
  {
    title: "Adyton 2025: Momentum, Execution and a Clear Path Forward",
    date: "December 22, 2025",
    excerpt: "A message from Managing Director Tim Crossley reflecting on 2025 achievements and the outlook ahead.",
    tags: ["Corporate"],
    sourceUrl: "https://www.newsfilecorp.com/release/278810/Adyton-2025-Momentum-Execution-and-a-Clear-Path-Forward",
  },
  {
    title: "Adyton Expands Discovery Capability at Feni Gold-Copper Project with Global Ore Discovery Consultants",
    date: "December 17, 2025",
    excerpt: "Formal engagement of world-class geological consulting group Global Ore Discovery to accelerate Feni exploration.",
    tags: ["Feni", "Exploration"],
    sourceUrl: "https://www.newsfilecorp.com/release/278318/Adyton-Expands-Discovery-Capability-at-Feni-GoldCopper-Project-with-Global-Ore-Discovery-Consultants",
  },
  {
    title: "Adyton Resources Receives Non-Binding LOI for the Purchase of Gold Concentrate from Its Wapolu Project",
    date: "December 10, 2025",
    excerpt: "Non-Binding LOI received from Korean group Hyosung TNC Corporation for purchase of gold concentrate from Wapolu.",
    tags: ["Fergusson", "Corporate"],
    sourceUrl: "https://www.newsfilecorp.com/release/277415/Adyton-Resources-Receives-NonBinding-Letter-of-Intent-LOI-for-the-Purchase-of-Gold-Concentrate-from-Its-Wapolu-Project",
  },
  {
    title: "Adyton Resources Welcomes Lihir Deposit Expert Dr. Erin Johns to the Team",
    date: "December 2, 2025",
    excerpt: "Appointment of Dr. Erin Johns to the technical team, focusing on the Company's flagship Feni Gold-Copper Project.",
    tags: ["Corporate", "Leadership"],
    sourceUrl: "https://www.newsfilecorp.com/release/276606/Adyton-Resources-Welcomes-Lihir-Deposit-Expert-Dr.-Erin-Johns-to-the-Team-to-Drive-Feni-GoldCopper-Project-Development",
  },
  {
    title: "Adyton Resources Announces Filing of Financial Statements and MD&A for Q3 2025",
    date: "November 26, 2025",
    excerpt: "Financial statements for the three and nine months ended September 30, 2025 and accompanying MD&A filed on SEDAR+.",
    tags: ["Corporate", "Financials"],
    sourceUrl: "https://www.newsfilecorp.com/release/276132/Adyton-Resources-Announces-Filing-of-Financial-Statements-and-MDA-for-the-Three-Nine-Months-Ended-September-30-2025",
  },
  {
    title: "Adyton Reports Completion of Land Ownership and Baseline Field Work at Wapolu Joint Venture",
    date: "November 18, 2025",
    excerpt: "50/50 JV Partner EVIH completes land ownership mapping and baseline social and environmental fieldwork.",
    tags: ["Fergusson", "EVIH JV"],
    sourceUrl: "https://www.newsfilecorp.com/release/274924/Adyton-Reports-Completion-of-Land-Ownership-and-Baseline-Field-Work-at-Wapolu-Joint-Venture",
  },
  {
    title: "Adyton Confirms Significant Scale at Feni Gold-Copper Project: FDD005 Returns 158m @ 0.72 g/t Au.Eq",
    date: "October 14, 2025",
    excerpt: "Final assays from expansionary drill hole FDD005 confirm significant scale. New high-priority drill targets identified.",
    tags: ["Feni", "Drilling"],
    sourceUrl: "https://www.newsfilecorp.com/release/270342/Adyton-Confirms-Significant-Scale-at-Feni-GoldCopper-Project-FDD005-Returns-158m-0.72-gt-Au.Eq-0.54-gt-Au-0.14-Cu-and-Identifies-New-HighPriority-Drill-Targets.",
  },
];

const News = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      <div className="container relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">PRESS RELEASES</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
          News & Announcements
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl font-body">
          Corporate news, exploration updates, and regulatory filings. All releases link directly to the authoritative source on Newsfile Corp.
        </p>
      </div>
    </section>

    {/* News Grid */}
    <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allNews.map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </div>
        <p className="text-center text-xs mt-10 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          All press releases are sourced from{" "}
          <a href="https://adytonresources.com/press-releases/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Newsfile Corp
          </a>{" "}
          and represent the authoritative version of each announcement.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default News;
