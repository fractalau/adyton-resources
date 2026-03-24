import { useParams, Link } from "react-router-dom";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TagChip from "@/components/TagChip";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";

const newsDetailData: Record<string, {
  title: string; date: string; excerpt: string; tags: string[]; sourceUrl: string; content: string;
}> = {
  "fergusson-phase-2": {
    title: "Adyton Completes Phase 2 Drilling at Fergusson Island",
    date: "January 15, 2025",
    excerpt: "Results from 12 diamond drill holes confirm high-grade gold mineralization across a 2.4 km strike length at the company's flagship Fergusson Island gold project.",
    tags: ["Fergusson", "Drilling"],
    sourceUrl: "#",
    content: "Adyton Resources Corp. (TSXV: ADY) is pleased to announce the completion of its Phase 2 diamond drilling program at the Fergusson Island gold project in Milne Bay Province, Papua New Guinea.\n\nA total of 12 diamond drill holes were completed for 4,200 metres of drilling. Results confirm the continuity of high-grade gold mineralization across a 2.4 kilometre strike length, with mineralization remaining open along strike and at depth.\n\nKey highlights include:\n• Multiple intercepts exceeding 5 g/t Au over significant widths\n• Mineralization confirmed in three parallel structural zones\n• New zone of gold mineralization identified 800m east of the main prospect\n• All assay results pending for final four drill holes\n\nThe Company's Qualified Person, [Name], P.Geo., has reviewed and approved the technical content of this news release.\n\nAbout Adyton Resources Corp.\nAdyton Resources is a gold and copper exploration company focused on building a portfolio of high-quality assets in Papua New Guinea.",
  },
  "feni-restart-study": {
    title: "Feni Restart Study Advances to Final Stage",
    date: "December 8, 2024",
    excerpt: "Updated economic assessment demonstrates robust project economics at current gold prices.",
    tags: ["Feni", "Corporate"],
    sourceUrl: "#",
    content: "Adyton Resources Corp. (TSXV: ADY) announces that the prefeasibility-level restart study for its Feni Gold-Copper Project in New Ireland Province, Papua New Guinea, has advanced to the final stage.\n\nThe study is evaluating the technical and economic viability of restarting operations at Feni, leveraging existing infrastructure and historical production knowledge.\n\nPreliminary economic metrics indicate a robust project with strong returns at current and forecast gold and copper prices. Final study results are expected in Q1 2025.\n\nThe Company will provide a detailed update upon completion of the study, including key economic parameters and the recommended path forward.",
  },
};

const relatedReleases = [
  { title: "Phase 1 Drilling Results at Fergusson Island", slug: "placeholder-1", date: "July 2024" },
  { title: "Fergusson Island Exploration Update", slug: "placeholder-2", date: "March 2024" },
  { title: "New Targets Identified at Fergusson", slug: "placeholder-3", date: "November 2023" },
];

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expanded, setExpanded] = useState(false);
  const article = newsDetailData[slug || ""] || newsDetailData["fergusson-phase-2"];

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`${seoConfig.siteUrl}/news/${slug}`}
      />
      <ArticleSchema
        headline={article.title}
        datePublished={article.date}
        description={article.excerpt}
      />
      <Header />
      <main>
      <article className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {article.tags.map((t) => <TagChip key={t} label={t} />)}
          </div>
          <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>{article.date}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-4" style={{ color: "hsl(var(--light-foreground))" }}>
            {article.title}
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{article.excerpt}</p>

          {/* Read full release accordion */}
          <div className="rounded-lg mb-10" style={{ border: "1px solid hsl(var(--light-border))" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between p-5 text-left transition-colors"
              style={{ color: "hsl(var(--light-foreground))" }}
            >
              <span className="font-display font-semibold">Read full release</span>
              {expanded ? <ChevronUp className="h-5 w-5" style={{ color: "hsl(var(--light-muted-foreground))" }} /> : <ChevronDown className="h-5 w-5" style={{ color: "hsl(var(--light-muted-foreground))" }} />}
            </button>
            {expanded && (
              <div className="px-5 pb-5" style={{ borderTop: "1px solid hsl(var(--light-border))" }}>
                <div className="prose prose-sm max-w-none mt-4">
                  {article.content.split("\n").map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>{p}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Attribution */}
          <div className="rounded-lg p-5 mb-10" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <p className="text-xs mb-2" style={{ color: "hsl(var(--light-muted-foreground))" }}>Originally published via Newsfile</p>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 inline-flex items-center gap-1.5 font-medium"
            >
              View original source <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Related */}
          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: "hsl(var(--light-foreground))" }}>Related Releases</h3>
            <div className="space-y-2">
              {relatedReleases.map((r) => (
                <Link
                  key={r.slug}
                  to={`/news/${r.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg hover:border-primary/30 transition-colors"
                  style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--light-foreground))" }}>{r.title}</p>
                    <p className="text-xs" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.date}</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground -rotate-90" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsDetail;
