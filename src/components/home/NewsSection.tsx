import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
}

const fetchRss = async (): Promise<RssItem[]> => {
  const { data, error } = await supabase.functions.invoke("fetch-rss");
  if (error) throw error;
  return data.items ?? [];
};

const formatDate = (dateStr: string) => {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const NewsSection = () => {
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["rss-news"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 15,
  });

  const latest = items.slice(0, 3);

  return (
    <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold" style={{ color: "hsl(var(--text-dark))" }}>
            Latest News &amp; Press Releases
          </h2>
          <Link to="/news" className="text-sm text-primary font-semibold hover:text-primary/80 flex items-center gap-1 font-body">
            View All Releases <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-5">
            {latest.map((n, i) => (
              <div key={i} className="border rounded-lg p-5 flex flex-col" style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}>
                <p className="text-sm mb-2 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>{formatDate(n.pubDate)}</p>
                <h3 className="font-display font-semibold mb-2 line-clamp-2" style={{ color: "hsl(var(--text-dark))" }}>{n.title}</h3>
                <div className="mt-auto pt-4">
                  <Button variant="gold-outline" size="sm" asChild>
                    <a href={n.link} target="_blank" rel="noopener noreferrer">
                      Read Full Release <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
