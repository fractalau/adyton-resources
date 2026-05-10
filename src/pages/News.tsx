import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import NewsCard from "@/components/NewsCard";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const PER_PAGE = 9;

const fetchRss = async () => {
  const { data, error } = await supabase.functions.invoke("fetch-rss");
  if (error) throw error;
  return (data.items ?? []).map((item: any) => ({
    title: item.title,
    date:
      new Date(item.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) || item.pubDate,
    excerpt: item.excerpt || "",
    tags: [] as string[],
    sourceUrl: item.link,
  }));
};

const fetchAnnouncements = async () => {
  const { data, error } = await supabase.functions.invoke("fetch-announcements");
  if (error) throw error;
  return (data.items ?? []).map((item: any) => ({
    title: item.title,
    date: item.date,
    excerpt: "",
    tags: [] as string[],
    sourceUrl: item.link,
  }));
};

const News = () => {
  useSEO("News & Announcements", "Latest press releases and corporate announcements from Adyton Resources — exploration updates, drilling results, and regulatory filings.");
  const [page, setPage] = useState(1);
  const [announcementsPage, setAnnouncementsPage] = useState(1);
  const { data: newsItems = [], isLoading } = useQuery({
    queryKey: ["rss-news-all"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 15,
  });

  const { data: announcements = [], isLoading: isLoadingAnnouncements } = useQuery({
    queryKey: ["announcements-all"],
    queryFn: fetchAnnouncements,
    staleTime: 1000 * 60 * 15,
  });

  const totalPages = Math.ceil(newsItems.length / PER_PAGE);
  const paged = newsItems.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const announcementsTotalPages = Math.ceil(announcements.length / PER_PAGE);
  const pagedAnnouncements = announcements.slice((announcementsPage - 1) * PER_PAGE, announcementsPage * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToAnnouncements = (p: number) => {
    setAnnouncementsPage(p);
    document.getElementById("news-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${projectHeaderBg})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"
            aria-hidden="true"
          />
          <div className="container relative z-10">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
              PRESS RELEASES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              News & Announcements
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl font-body">
              Corporate news, exploration updates, and regulatory filings. All releases link directly to the
              authoritative source.
            </p>
            <p className="text-sm text-foreground/40 mt-2 font-mono">{newsItems.length} announcements</p>
          </div>
        </section>
        <Subscribe />

        {/* Press Release Grid */}
        <section
          id="press-release-section"
          aria-label="News articles"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "#3e6174" }}>
              Press Releases
            </h2>
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {paged.map((n, i) => (
                  <NewsCard key={`${page}-${i}`} {...n} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  className="h-9 w-9"
                  style={{ color: "hsl(var(--text-dark))" }}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "gold" : "ghost"}
                    size="sm"
                    onClick={() => goTo(p)}
                    className="h-9 w-9 p-0 font-mono text-sm"
                    style={p !== page ? { color: "hsl(var(--text-dark))" } : undefined}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </Button>
                ))}

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                  className="h-9 w-9"
                  style={{ color: "hsl(var(--text-dark))" }}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </nav>
            )}

            <p className="text-center text-sm mt-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              All press releases sourced from{" "}
              <a
                href="https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TMX Newsfile
              </a>
            </p>
          </div>
        </section>

        {/* News from adytonresources.com */}
        <section id="news-section" aria-label="News" className="py-14 md:py-18 bg-background">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "#ffffff" }}>
              News
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <NewsCard
                title="Adyton 2025: Momentum, Execution and a Clear Path Forward"
                date="December 22, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-2025-momentum-execution-and-a-clear-path-forward"
              />
              <NewsCard
                title="Adyton Reports Completion Of Land Ownership And Baseline Field Work At Wapolu Joint Venture"
                date="November 19, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-completion-of-land-ownership-and-baseline-field-work-at-wapolu-joint-venture"
              />
              <NewsCard
                title="Adyton Confirms Significant Scale at Feni Gold-Copper Project: FDD005 Returns 158m @ 0.72g/t Au.Eq and Identifies New High-Priority Drill Targets"
                date="October 15, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-confirms-significant-scale-at-feni-gold-copper-project-fdd005-returns-158m-0-72g-t-au-eq-0-54g-t-au-0-14-cu-and-identifies-new-high-priority-drill-targets"
              />
              <NewsCard
                title="Adyton Reports Final Assays from FDD004 Confirming Strong Mineralized Intercepts at Feni Island"
                date="September 9, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-final-assays-from-fdd004-confirming-strong-mineralized-intercepts-of-115m-at-1-00g-t-gold-equivalent-0-92g-t-au-0-07-cu-within-a-broader-mineralized-zone-of-229m-at-0-79g-t-gold-equ"
              />
              <NewsCard
                title="Adyton Reports Final Assays From Feni Drillholes 1-3 Confirming Multiple Copper Mineralised Zones; FDD003 Upgraded By 40% For Combined 125.9 Gxm (Au.eq)"
                date="August 29, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-final-assays-from-feni-drillholes-1-3-confirming-multiple-copper-mineralised-zones-complementing-previously-reported-gold-fdd003-upgraded-by-40-for-combined-125-9-gxm-au-eq"
              />
              <NewsCard
                title="Adyton Resources Closes Oversubscribed C$20 Million Financing Comprised of $14 Million Brokered Private Placement of Units and Concurrent $6 Million Nonbrokered Private Placements"
                date="August 14, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-closes-oversubscribed-c20-million-financing-comprised-of-14-million-brokered-private-placement-of-units-and-concurrent-6-million-nonbrokered-private-placements"
              />
              <NewsCard
                title="Adyton Resources Strengthens Board and Grants Stock Options and RSUs"
                date="July 28, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-strengthens-board-and-grants-stock-options-and-rsus"
              />
              <NewsCard
                title="Adyton Resources Announces Upsized C$20 Million Financing Comprised Of $14 Million Private Placement Of Units And Concurrent $6 Million Non-Brokered Private Placement Of Units"
                date="July 24, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-announces-upsized-c20-million-financing-comprised-of-14-million-private-placement-of-units-and-concurrent-6-million-non-brokered-private-placement-of-units"
              />
              <NewsCard
                title="Adyton Reports Multiple Significant Gold Intersections from its Feni Island Gold-Copper Project Drilling, Including 144m at 1.18g/t Au"
                date="July 23, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-multiple-significant-gold-intersections-from-its-feni-island-gold-copper-project-drilling"
              />
              <NewsCard
                title="Adyton Reports Update On Feni Island Gold-Copper Project Drilling"
                date="June 13, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-update-on-feni-island-gold-copper-project-drilling"
              />
              <NewsCard
                title="Adyton Resources Announces Filing of Financial Statements and MD&A for the Three Months Ended March 31, 2025"
                date="May 30, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-months-ended-march-31-2025"
              />
              <NewsCard
                title="Adyton Resources Featured on Clarus Securities' Mining Watch List"
                date="May 21, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-featured-on-clarus-securities-mining-watch-list"
              />
              <NewsCard
                title="Adyton Reports First Drill Intercepts Of Up To 36 Grams Per Tonne Gold From Its Wapolu Drill Campaign"
                date="May 7, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-first-drill-intercepts-of-up-to-36-grams-per-tonne-gold-from-its-wapolu-drill-campaign"
              />
              <NewsCard
                title="Adyton Announces First Drill Samples From Latest Campaign At Its Feni Island Gold Project (With High Copper Prospectivity) Have Been Dispatched For Analysis"
                date="April 30, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-announces-first-drill-samples-from-latest-campaign-at-its-feni-island-gold-project-with-high-copper-prospectivity-have-been-dispatched-for-analysis"
              />
              <NewsCard
                title="Adyton Resources Announces Filing Of Financial Statements And MD&A For The Period Ending December 31, 2024 And Provides Corporate Update"
                date="April 24, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-period-ending-december-31-2024-and-provides-corporate-update"
              />
              <NewsCard
                title="Adyton Reports ~200% Increase To Wapolu Updated Inferred Mineral Resources Estimate"
                date="January 14, 2026"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-reports-200-increase-to-wapolu-updated-inferred-mineral-resources-estimate"
              />
              <NewsCard
                title="Adyton Expands Discovery Capability at Feni Gold-Copper Project With Global Ore Discovery Consultants"
                date="December 18, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-expands-discovery-capability-at-feni-gold-copper-project-with-global-ore-discovery-consultants"
              />
              <NewsCard
                title="Adyton Resources Receives Non-Binding Letter of Intent (LOI) for the Purchase of Gold Concentrate From Its Wapolu Project"
                date="December 11, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-receives-non-binding-letter-of-intent-loi-for-the-purchase-of-gold-concentrate-from-its-wapolu-project"
              />
              <NewsCard
                title="Adyton Resources Welcomes Lihir Deposit Expert Dr. Erin Johns to the Team to Drive Feni Gold-Copper Project Development"
                date="December 3, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-welcomes-lihir-deposit-expert-dr-erin-johns-to-the-team-to-drive-feni-gold-copper-project-development"
              />
              <NewsCard
                title="Adyton Resources Outlines Dual-Track Growth Strategy in Crux Investor Interview"
                date="June 19, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-outlines-dual-track-growth-strategy-in-crux-investor-interview"
              />
              <NewsCard
                title="Adyton Resources Completes Over 4,000m Drilling at Wapolu and Prepares for Gameta Drilling with Unanimous Landowner Support"
                date="March 26, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-completes-over-4000m-drilling-at-wapolu-and-prepares-for-gameta-drilling-with-unanimous-landowner-support"
              />
              <NewsCard
                title="Adyton Resources Announces Drilling Advances at 100%-Owned Feni Island Gold-Copper Project"
                date="March 20, 2025"
                excerpt=""
                tags={[]}
                sourceUrl="/news/adyton-resources-announces-drilling-advances-at-100-owned-feni-island-gold-copper-project"
              />
            </div>

            <p className="text-center text-sm mt-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              News sourced from{" "}
              <a
                href="https://adytonresources.com/announcements/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                adytonresources.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
