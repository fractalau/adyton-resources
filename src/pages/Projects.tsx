import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectTile from "@/components/ProjectTile";
import TagChip from "@/components/TagChip";

const allProjects = [
  { name: "Feni Gold-Copper", slug: "feni", stage: "Restart Pathway", type: "Gold-Copper", highlights: ["Near-term restart candidate", "Historical production base"], location: "New Ireland Province, PNG" },
  { name: "Fergusson Island", slug: "fergusson", stage: "Exploration", type: "Gold", highlights: ["Flagship discovery target", "Multi-km alteration system"], location: "Milne Bay Province, PNG" },
  { name: "Wapolu", slug: "wapolu", stage: "Exploration", type: "Gold", highlights: ["Gold discovery potential", "Extensive tenement package"], location: "Milne Bay Province, PNG" },
  { name: "Yandera", slug: "yandera", stage: "Advanced", type: "Copper-Gold", highlights: ["Large porphyry copper-gold", "Significant resource base"], location: "Madang Province, PNG" },
];

const stages = ["All", "Restart Pathway", "Exploration", "Advanced"];

const Projects = () => {
  const [activeStage, setActiveStage] = useState("All");

  const filtered = activeStage === "All" ? allProjects : allProjects.filter((p) => p.stage === activeStage);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
      <Header />
      <section className="py-16 md:py-24">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(var(--light-foreground))" }}>
            Project Portfolio
          </h1>
          <p className="text-lg max-w-2xl mb-10" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            PNG-focused gold and copper assets spanning near-term restart to discovery-scale exploration.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {stages.map((s) => (
              <TagChip key={s} label={s} active={s === activeStage} onClick={() => setActiveStage(s)} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectTile key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
