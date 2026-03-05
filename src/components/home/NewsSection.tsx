import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "Adyton Reports New Gold-Copper Mineralised Zones at Feni Island",
    date: "February 18, 2026",
    excerpt: "Adyton has completed 10,663 m of its ongoing drill program at Feni Island, successfully confirming high-grade extensions to the north.",
    url: "https://www.newsfilecorp.com/company/7416",
  },
  {
    title: "Updated Wapolu Mineral Resource Estimate — ~200% Increase",
    date: "January 13, 2026",
    excerpt: "The updated Wapolu Mineral Resource materially strengthens the foundation of Adyton's Fergusson Island development strategy.",
    url: "https://www.newsfilecorp.com/company/7416",
  },
  {
    title: "Hyosung TNC Corporation LOI for Wapolu Gold Concentrate",
    date: "December 10, 2025",
    excerpt: "Adyton received a non-binding Letter of Intent from Korean trading group Hyosung TNC Corporation for the purchase of gold concentrate.",
    url: "https://www.newsfilecorp.com/company/7416",
  },
];

const NewsSection = () => (
  <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
    <div className="container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold" style={{ color: "hsl(var(--text-dark))" }}>
          Latest News & Announcements
        </h2>
        <Link to="/news" className="text-sm text-primary font-semibold hover:text-primary/80 flex items-center gap-1 font-body">
          View All Releases <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {news.map((n, i) => (
          <div key={i} className="border rounded-lg p-5 flex flex-col" style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}>
            <p className="text-xs mb-2 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>{n.date}</p>
            <h3 className="font-display font-semibold mb-2 line-clamp-2" style={{ color: "hsl(var(--text-dark))" }}>{n.title}</h3>
            <p className="text-sm line-clamp-3 mb-4 flex-1 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>{n.excerpt}</p>
            <Button variant="gold-outline" size="sm" asChild>
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                Read Full Release <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
