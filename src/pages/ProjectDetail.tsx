import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetricCard from "@/components/MetricCard";
import TimelineComponent from "@/components/TimelineComponent";
import NewsCard from "@/components/NewsCard";
import TagChip from "@/components/TagChip";
import DownloadTile from "@/components/DownloadTile";

const projectData: Record<string, {
  name: string; location: string; stage: string; description: string;
  facts: { label: string; value: string }[];
  timeline: { date: string; title: string; description: string; status: "completed" | "upcoming" | "in-progress" }[];
}> = {
  feni: {
    name: "Feni Gold-Copper Project",
    location: "New Ireland Province, PNG",
    stage: "Restart Pathway",
    description: "The Feni project is a portfolio growth opportunity with exploration upside. Key project updates are consolidated in the News section and Investor Hub.",
    facts: [
      { label: "Commodity", value: "Gold-Copper" },
      { label: "Stage", value: "Restart Pathway" },
      { label: "Area", value: "142 km²" },
      { label: "Resource", value: "Placeholder" },
    ],
    timeline: [
      { date: "2023", title: "Acquisition Completed", description: "Secured 100% ownership of the Feni project tenements.", status: "completed" },
      { date: "Q1 2024", title: "Updated Resource Estimate", description: "NI 43-101 compliant resource estimate completed.", status: "completed" },
      { date: "Q3 2024", title: "Restart Study Initiated", description: "Prefeasibility-level economic assessment underway.", status: "in-progress" },
      { date: "2025", title: "Restart Decision", description: "Target restart decision based on study outcomes.", status: "upcoming" },
    ],
  },
  fergusson: {
    name: "Fergusson Island",
    location: "Milne Bay Province, PNG",
    stage: "Exploration",
    description: "Fergusson Island is the flagship exploration focus within the PNG portfolio. Results, maps, and disclosures are available in the Investor Hub.",
    facts: [
      { label: "Commodity", value: "Gold" },
      { label: "Stage", value: "Exploration" },
      { label: "Area", value: "580 km²" },
      { label: "Strike Length", value: "2.4+ km" },
    ],
    timeline: [
      { date: "2022", title: "Initial Reconnaissance", description: "Surface sampling and geological mapping completed.", status: "completed" },
      { date: "2023", title: "Phase 1 Drilling", description: "Initial drill program confirming gold mineralization.", status: "completed" },
      { date: "2024", title: "Phase 2 Drilling", description: "Expanded drill program across multiple targets.", status: "in-progress" },
      { date: "2025", title: "Resource Delineation", description: "Target maiden resource estimate.", status: "upcoming" },
    ],
  },
  wapolu: {
    name: "Wapolu Gold Project",
    location: "Milne Bay Province, PNG",
    stage: "Exploration",
    description: "Wapolu is the near-term pathway focus within the portfolio strategy. Milestones and updates are tracked via News and company releases.",
    facts: [
      { label: "Commodity", value: "Gold" },
      { label: "Stage", value: "Exploration" },
      { label: "Area", value: "320 km²" },
      { label: "Targets", value: "Multiple" },
    ],
    timeline: [
      { date: "2023", title: "Tenement Acquired", description: "Exploration license secured.", status: "completed" },
      { date: "2024", title: "Reconnaissance Program", description: "Stream sediment and soil sampling program.", status: "in-progress" },
      { date: "2025", title: "Drill Testing", description: "First-pass drill testing of priority targets.", status: "upcoming" },
    ],
  },
  yandera: {
    name: "Yandera Copper-Gold",
    location: "Madang Province, PNG",
    stage: "Advanced",
    description: "Yandera is a large-scale copper-gold system within the broader portfolio. Supporting technical materials are available in the Investor Hub.",
    facts: [
      { label: "Commodity", value: "Copper-Gold" },
      { label: "Stage", value: "Advanced" },
      { label: "Area", value: "210 km²" },
      { label: "Resource", value: "Large-scale" },
    ],
    timeline: [
      { date: "Historical", title: "Extensive Exploration", description: "Significant prior drilling and resource estimation.", status: "completed" },
      { date: "2024", title: "Technical Review", description: "Evaluation of existing data and potential optimization.", status: "in-progress" },
      { date: "2025", title: "Strategic Assessment", description: "Determine optimal development or partnership pathway.", status: "upcoming" },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectData[slug || "feni"];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Project not found</h1>
          <Button variant="gold-outline" asChild className="mt-4">
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
      <Header />
      <section className="py-16 md:py-20">
        <div className="container">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <TagChip label={project.stage} />
              <span className="text-xs flex items-center gap-1" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                <MapPin className="h-3 w-3" /> {project.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: "hsl(var(--light-foreground))" }}>{project.name}</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(var(--light-muted-foreground))" }}>{project.description}</p>
          </div>

          {/* At-a-glance + Map */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="grid grid-cols-2 gap-4">
              {project.facts.map((f) => (
                <MetricCard key={f.label} label={f.label} value={f.value} source="Source: placeholder" />
              ))}
            </div>
            <div className="rounded-lg flex items-center justify-center aspect-[4/3]" style={{ background: "hsl(var(--light-border))" }}>
              <MapPin className="h-12 w-12 text-muted-foreground/30" />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6" style={{ color: "hsl(var(--light-foreground))" }}>Timeline & Catalysts</h2>
            <TimelineComponent items={project.timeline} />
          </div>

          {/* Reports & Downloads */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6" style={{ color: "hsl(var(--light-foreground))" }}>Results & Reports</h2>
            <div className="space-y-3">
              <DownloadTile title="NI 43-101 Technical Report" date="March 2024" description="Independent technical report on mineral resource estimate." />
              <DownloadTile title="Exploration Update Presentation" date="January 2025" description="Latest exploration results and upcoming program details." />
            </div>
          </div>

          {/* Related News */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6" style={{ color: "hsl(var(--light-foreground))" }}>Related News</h2>
            <div className="grid sm:grid-cols-2 gap-5">
               <NewsCard title="Project Update Released" date="January 2025" excerpt="Latest work program details and results available through company disclosures." tags={[project.name.split(" ")[0]]} sourceUrl="https://adytonresources.com/press-releases/" />
               <NewsCard title="Exploration Program Summary" date="December 2024" excerpt="Summary of recent exploration activities across the project area." tags={[project.name.split(" ")[0]]} sourceUrl="https://adytonresources.com/press-releases/" />
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg p-8 text-center" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <h3 className="text-xl font-display font-bold mb-3" style={{ color: "hsl(var(--light-foreground))" }}>Interested in this project?</h3>
            <p className="text-sm mb-6" style={{ color: "hsl(var(--light-muted-foreground))" }}>Contact our Investor Relations team for more information.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="gold" asChild>
                <Link to="/contact"><Mail className="h-4 w-4" /> Contact IR</Link>
              </Button>
              <Button variant="gold-outline" asChild>
                <a href="/Adyton-Investor-Deck.pdf" download>
                  <Download className="h-4 w-4" /> Download Deck
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
