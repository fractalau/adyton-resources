import { Users, Shield, Leaf, Globe, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const leadership = [
  {
    name: "Tim Crossley",
    role: "Managing Director",
    bio: "Extensive experience as a director and mining executive, including Deputy CEO of ASX-listed Gloucester Coal, and President & COO at BHP Billiton's West Australian Iron Ore business. Currently Executive Director at Mayur Resources (ASX). Former President of the Northern Territory Minerals Council.",
  },
  {
    name: "Dr Chris Bowden",
    role: "Chief Operating Officer",
    bio: "Geologist with almost 30 years global experience discovering and commercialising mineral assets. PhD in Economic Geology, postgraduate finance and economics qualifications. FAusIMM(CP) and FSEG. Unique blend of technical and commercial experience across the mining life cycle.",
  },
  {
    name: "Chirag Patel",
    role: "Chief Financial Officer & Company Secretary",
    bio: "Chartered Professional Accountant (CPA) with extensive experience in financial management, tax reporting, and corporate strategy for public and multinational firms, including multiple years specialising in the mining sector. Previous roles with PwC and Starcore International Mines.",
  },
];

const boardMembers = [
  {
    name: "Sinton Spence",
    role: "Chairman",
    bio: "Chartered Accountant based in Port Moresby, PNG. Principal of Sinton Spence Chartered Accountants, PNG's largest independent accounting firm. Awarded MBE for services to Papua New Guinea commerce and community. Former director of Sierra Mining and Shell Oil Exploration PNG.",
  },
  {
    name: "David Irvine",
    role: "Non-Executive Director",
    bio: "Experienced company director and corporate strategy expert with more than two decades providing solutions to large, complex organisations. Has worked with BHP Billiton, Rio Tinto, Aurizon, Santos, Origin, and others.",
  },
  {
    name: "Michael Gray",
    role: "Non-Executive Director",
    bio: "One of the industry's most respected independent research analysts. Geologist (MSc) and top-ranked mining equity analyst for 20+ years. Co-founded Agentis Capital Mining Partners. Former Managing Director at Macquarie Capital Markets, Mining Equity Research, Canada. Past President of the Association for Mineral Exploration.",
  },
];

const pillars = [
  { icon: Target, title: "Strategy", desc: "Build a portfolio of high-quality gold-copper assets in PNG with clear pathways to production and cash flow." },
  { icon: Shield, title: "Governance", desc: "Committed to transparent disclosure, compliant NI 43-101 reporting, and strong corporate governance practices." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible exploration practices that respect local communities, protect the environment, and deliver lasting benefits." },
  { icon: Globe, title: "PNG Expertise", desc: "Deep in-country knowledge, established relationships with landowners, and proven ability to operate effectively in PNG." },
  { icon: Award, title: "Technical Excellence", desc: "World-class geological team supported by Global Ore Discovery with deep expertise in epithermal and porphyry systems." },
  { icon: Users, title: "Aligned Interests", desc: "~12% management and director ownership ensures alignment between leadership and shareholders." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="About Adyton Resources"
      description="Meet the leadership team behind Adyton Resources — 70+ years combined experience in gold-copper exploration, development, and PNG operations."
      canonical={`${seoConfig.siteUrl}/about`}
    />
    <Header />

    <main>
      {/* Hero */}
      <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" aria-hidden="true" />
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
      <section aria-label="Company approach" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OUR APPROACH</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10" style={{ color: "hsl(var(--text-dark))" }}>
            Built for Discovery, Structured for Growth
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
                <p.icon className="h-7 w-7 text-primary mb-4" aria-hidden="true" />
                <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--text-dark))" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" aria-label="Management team" className="teal-panel py-14 md:py-18">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">LEADERSHIP</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Management Team
          </h2>
          <p className="text-sm text-foreground/50 mb-10 font-body">70+ years combined experience in exploration, development, and PNG operations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((l) => (
              <article key={l.role} className="rounded-lg overflow-hidden bg-card border border-border">
                <div className="aspect-[4/3] flex items-center justify-center bg-muted/30">
                  <Users className="h-10 w-10 text-foreground/10" role="presentation" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground">{l.name}</h3>
                  <p className="text-xs text-primary mb-2 font-body">{l.role}</p>
                  <p className="text-xs text-foreground/50 leading-relaxed font-body">{l.bio}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Board */}
          <h3 className="text-xl font-display font-bold text-foreground mt-14 mb-6">Board of Directors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boardMembers.map((b) => (
              <article key={b.role} className="rounded-lg overflow-hidden bg-card border border-border">
                <div className="aspect-[4/3] flex items-center justify-center bg-muted/30">
                  <Users className="h-10 w-10 text-foreground/10" role="presentation" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground">{b.name}</h3>
                  <p className="text-xs text-primary mb-2 font-body">{b.role}</p>
                  <p className="text-xs text-foreground/50 leading-relaxed font-body">{b.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company History / Timeline */}
      <section id="community" aria-label="Company milestones" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
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
                <time className="text-lg font-mono font-bold text-primary shrink-0 w-16">{m.year}</time>
                <div className="border-l-2 border-primary/20 pl-6">
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Explore projects" className="bg-background py-10 border-t border-border">
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
    </main>

    <Footer />
  </div>
);

export default About;
