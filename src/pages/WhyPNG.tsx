import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const facts = [
  { heading: "Geological Prospectivity", points: ["Papua New Guinea sits on the Pacific Ring of Fire, hosting world-class gold and copper deposits.", "The PNG mineral province has produced over 100 million ounces of gold historically.", "Multiple deposit types present: porphyry, epithermal, and orogenic gold systems."] },
  { heading: "Established Mining Jurisdiction", points: ["Major miners including Newmont, Barrick, and Harmony Gold operate successfully in PNG.", "Modernized Mining Act provides clear framework for exploration and development.", "Government of PNG actively supports responsible resource development as a pillar of national economic strategy."] },
  { heading: "Infrastructure & Access", points: ["Significant government investment in roads, ports, and power infrastructure.", "Multiple international airports and deep-water port facilities.", "Growing telecommunications and logistics networks support exploration operations."] },
  { heading: "Under-Explored Opportunity", points: ["Despite proven geological prospectivity, PNG remains significantly under-explored compared to peer jurisdictions.", "Modern exploration techniques have not been systematically applied across most of the country.", "Discovery opportunity remains substantial for well-funded, technically capable operators."] },
];

const WhyPNG = () => (
  <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Jurisdiction</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-3xl" style={{ color: "hsl(var(--light-foreground))" }}>
          Why Papua New Guinea?
        </h1>
        <p className="text-lg max-w-2xl mb-16" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          A world-class mineral province with proven geology, established mining operations, and substantial discovery runway.
        </p>

        {/* Map placeholder */}
        <div className="bg-muted rounded-lg aspect-[21/9] mb-16 flex items-center justify-center">
          <MapPin className="h-16 w-16 text-muted-foreground/20" />
        </div>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facts.map((f) => (
            <div key={f.heading} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
              <h3 className="font-display font-semibold mb-4" style={{ color: "hsl(var(--light-foreground))" }}>{f.heading}</h3>
              <ul className="space-y-3">
                {f.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stakeholder Principles */}
        <div className="rounded-lg p-8 mb-16" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
          <h2 className="text-2xl font-display font-bold mb-4" style={{ color: "hsl(var(--light-foreground))" }}>Stakeholder & Operating Principles</h2>
          <p className="text-sm mb-6" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            Adyton is committed to responsible exploration and development practices that respect local communities, protect the environment, and deliver lasting benefits to all stakeholders. Detailed policies and frameworks will be published as the Company advances its projects.
          </p>
          <p className="text-xs italic" style={{ color: "hsl(var(--light-muted-foreground))" }}>Placeholder — governance and sustainability content to be developed.</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <Button variant="gold-outline" asChild>
            <Link to="/projects">View Projects <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button variant="gold-outline" asChild>
            <Link to="/investors">Key Documents <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default WhyPNG;
