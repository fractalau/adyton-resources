import { Users, Shield, Leaf, Globe, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const leadership = [
  {
    name: "Tim Crossley",
    role: "Managing Director & CEO",
    bio: "Experienced mining executive with extensive PNG operational background. Previously held senior leadership roles across exploration and development-stage gold companies in the Asia-Pacific region.",
  },
  {
    name: "Dr. Erin Johns",
    role: "Senior Geologist",
    bio: "PhD research focused specifically on the Lihir Gold Deposit. Brings world-class epithermal and porphyry system expertise directly relevant to the Feni Island project.",
  },
  {
    name: "Placeholder Name",
    role: "Chief Financial Officer",
    bio: "CPA with deep expertise in public market mining finance, corporate governance, and capital markets strategy for junior resource companies.",
  },
  {
    name: "Placeholder Name",
    role: "Non-Executive Director",
    bio: "Board member with significant institutional investment and mining board experience across multiple jurisdictions.",
  },
];

const boardMembers = [
  {
    name: "Placeholder Name",
    role: "Non-Executive Chairman",
    bio: "Seasoned mining industry leader with decades of experience in resource company governance and strategic oversight.",
  },
  {
    name: "Placeholder Name",
    role: "Independent Director",
    bio: "Capital markets and corporate governance specialist with extensive experience advising junior mining companies.",
  },
];

const pillars = [
  { icon: Target, title: "Strategy", desc: "Build a portfolio of high-quality gold-copper assets in PNG with clear pathways to production and cash flow." },
  { icon: Shield, title: "Governance", desc: "Committed to transparent disclosure, compliant NI 43-101 reporting, and strong corporate governance practices." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible exploration practices that respect local communities, protect the environment, and deliver lasting benefits." },
  { icon: Globe, title: "PNG Expertise", desc: "Deep in-country knowledge, established relationships with landowners, and proven ability to operate effectively in PNG." },
  { icon: Award, title: "Technical Excellence", desc: "World-class geological team supported by Global Ore Discovery and domain experts with direct Lihir deposit experience." },
  { icon: Users, title: "Aligned Interests", desc: "~12% management and director ownership ensures alignment between leadership and shareholders." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      <div className="container relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">COMPANY</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
          About Adyton Resources
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl font-body">
          A gold and copper exploration company building high-quality assets in Papua New Guinea, positioned for near-term cash flow and long-term growth.
        </p>
      </div>
    </section>

    {/* Company Pillars */}
    <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OUR APPROACH</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-10" style={{ color: "hsl(var(--text-dark))" }}>
          Built for Discovery, Structured for Growth
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
              <p.icon className="h-7 w-7 text-primary mb-4" />
              <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--text-dark))" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Management */}
    <section id="management" className="teal-panel py-14 md:py-18">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">LEADERSHIP</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Management Team
        </h2>
        <p className="text-sm text-foreground/50 mb-10 font-body">70+ years combined experience in exploration, development, and PNG operations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leadership.map((l) => (
            <div key={l.role} className="rounded-lg overflow-hidden bg-card border border-border">
              <div className="aspect-[4/3] flex items-center justify-center bg-muted/30">
                <Users className="h-10 w-10 text-foreground/10" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-sm text-foreground">{l.name}</h4>
                <p className="text-xs text-primary mb-2 font-body">{l.role}</p>
                <p className="text-xs text-foreground/50 leading-relaxed font-body">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Board */}
        <h3 className="text-xl font-display font-bold text-foreground mt-14 mb-6">Board of Directors</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {boardMembers.map((b) => (
            <div key={b.role} className="rounded-lg overflow-hidden bg-card border border-border">
              <div className="aspect-[4/3] flex items-center justify-center bg-muted/30">
                <Users className="h-10 w-10 text-foreground/10" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-sm text-foreground">{b.name}</h4>
                <p className="text-xs text-primary mb-2 font-body">{b.role}</p>
                <p className="text-xs text-foreground/50 leading-relaxed font-body">{b.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Company History / Timeline */}
    <section id="community" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">COMPANY HISTORY</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
          Key Milestones
        </h2>
        <div className="space-y-6">
          {[
            { year: "2020", event: "Adyton Resources Corp. listed on TSXV (ADY), acquiring the Feni Island and Fergusson Island gold projects in PNG." },
            { year: "2021", event: "NI 43-101 Technical Report completed for Feni Island — 1.46 Moz Au Inferred at the Kabang deposit." },
            { year: "2024", event: "NI 43-101 Technical Report completed for Gameta — 513 koz Au resource defined." },
            { year: "2025", event: "EVIH JV partnership secured — US$9.5M committed to advance Fergusson Island to shovel-ready status. Global Ore Discovery engaged for Feni targeting." },
            { year: "2026", event: "Updated Wapolu MRE filed — combined Fergusson resource reaches 939 koz Au. Active drilling continues at Feni with new gold-copper discoveries." },
          ].map((m) => (
            <div key={m.year} className="flex gap-6">
              <p className="text-lg font-mono font-bold text-primary shrink-0 w-16">{m.year}</p>
              <div className="border-l-2 border-primary/20 pl-6">
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-background py-10 border-t border-border">
      <div className="container max-w-4xl flex flex-wrap justify-center gap-3">
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/projects/feni">Explore Feni Island</Link>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/projects/fergusson">Explore Fergusson Island</Link>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/investors">Investor Hub</Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
