import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import ExploreCTA from "@/components/ExploreCTA";
import TwoPillarSection from "@/components/home/TwoPillarSection";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const keyStats = [
  { value: "100+ Moz", label: "Historical gold production" },
  { value: "5+", label: "Major miners operating" },
  { value: "Tidewater", label: "Island-based logistics" },
  { value: "Under-explored", label: "vs. peer jurisdictions" },
];

const facts = [
  {
    heading: "Geological Prospectivity",
    points: [
      "Papua New Guinea sits on the Pacific Ring of Fire, hosting world-class gold and copper deposits.",
      "The PNG mineral province has produced over 100 million ounces of gold historically.",
      "Multiple deposit types present: porphyry, epithermal, and orogenic gold systems.",
    ],
  },
  {
    heading: "Established Mining Jurisdiction",
    points: [
      "Major miners including Newmont, Barrick, and Harmony Gold operate successfully in PNG.",
      "Modernized Mining Act provides clear framework for exploration and development.",
      "Government of PNG actively supports responsible resource development as a pillar of national economic strategy.",
    ],
  },
  {
    heading: "Infrastructure & Access",
    points: [
      "Significant government investment in roads, ports, and power infrastructure.",
      "Multiple international airports and deep-water port facilities.",
      "Growing telecommunications and logistics networks support exploration operations.",
    ],
  },
  {
    heading: "Under-Explored Opportunity",
    points: [
      "Despite proven geological prospectivity, PNG remains significantly under-explored compared to peer jurisdictions.",
      "Modern exploration techniques have not been systematically applied across most of the country.",
      "Discovery opportunity remains substantial for well-funded, technically capable operators.",
    ],
  },
];

const ProjectsOverview = () => {
  useSEO(
    "Projects Overview",
    "Adyton's portfolio of copper/gold projects within Papua New Guinea's prolific Pacific Ring of Fire — Feni Island and Fergusson Island.",
  );

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
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">PROJECTS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Projects Overview
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl font-body">
              Adyton's portfolio of copper/gold projects within Papua New Guinea's prolific Pacific Ring of Fire, which
              hosts a number of the world's largest mines including Ok Tedi, Porgera, Lihir and Golpu.
            </p>
          </div>
        </section>
        <Subscribe />

        {/* Two-Pillar Strategy */}
        <TwoPillarSection />

        {/* Why PNG */}
        <section
          aria-label="Why Papua New Guinea"
          className="py-14 md:py-18 bg-background"
        >
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">JURISDICTION</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Why Papua New Guinea?
            </h2>
            <p className="text-foreground/70 max-w-2xl mb-8 font-body">
              A world-class mineral province with proven geology, established mining operations, and substantial
              discovery runway.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {keyStats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-lg border border-border bg-card">
                  <p className="text-xl md:text-2xl font-mono font-bold text-primary">{s.value}</p>
                  <p className="text-foreground/50 mt-1 font-body">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "hsl(var(--off-white))" }} className="py-14 md:py-18">
            <div className="container">
              <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">THE OPPORTUNITY</p>
              <h2
                className="text-2xl md:text-3xl font-display font-bold mb-10"
                style={{ color: "hsl(var(--text-dark))" }}
              >
                Why PNG Stands Out
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {facts.map((f) => (
                  <div
                    key={f.heading}
                    className="rounded-lg p-6"
                    style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
                  >
                    <h3 className="font-display font-semibold mb-4" style={{ color: "hsl(var(--text-dark))" }}>
                      {f.heading}
                    </h3>
                    <ul className="space-y-3">
                      {f.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                          style={{ color: "hsl(var(--light-muted-foreground))" }}
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-center mt-10 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                For the full jurisdiction overview including peer comparison and stakeholder principles{" "}
                <Link to="/why-png" className="text-primary font-semibold hover:underline">
                  Learn More about Why PNG →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <ExploreCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsOverview;
