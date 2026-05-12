import { Shield, Leaf, Globe, Award, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";
import timCrossleyImg from "@/assets/team/tim-crossley.jpg";
import chrisBowdenImg from "@/assets/team/chris-bowden.jpg";
import chiragPatelImg from "@/assets/team/chirag-patel.jpg";
import sintonSpenceImg from "@/assets/team/sinton-spence.jpg";
import davidIrvineImg from "@/assets/team/david-irvine.jpg";
import michaelGrayImg from "@/assets/team/michael-gray.jpg";

const leadership = [
  {
    name: "Tim Crossley",
    role: "Managing Director",
    photo: timCrossleyImg,
    bio: "Extensive experience as a director and mining executive, including Deputy CEO of ASX-listed Gloucester Coal, and President & COO at BHP Billiton's West Australian Iron Ore business. Currently Executive Director at Mayur Resources (ASX). Former President of the Northern Territory Minerals Council.",
  },
  {
    name: "Dr Chris Bowden",
    role: "Chief Operating Officer",
    photo: chrisBowdenImg,
    bio: "Geologist with almost 30 years global experience discovering and commercialising mineral assets. PhD in Economic Geology, postgraduate finance and economics qualifications. FAusIMM(CP) and FSEG. Unique blend of technical and commercial experience across the mining life cycle.",
  },
  {
    name: "Chirag Patel",
    role: "Chief Financial Officer & Company Secretary",
    photo: chiragPatelImg,
    bio: "Chartered Professional Accountant (CPA) with extensive experience in financial management, tax reporting, and corporate strategy for public and multinational firms, including multiple years specialising in the mining sector. Previous roles with PwC and Starcore International Mines.",
  },
];

const boardMembers = [
  {
    name: "Sinton Spence",
    role: "Chairman",
    photo: sintonSpenceImg,
    bio: "Chartered Accountant based in Port Moresby, PNG. Principal of Sinton Spence Chartered Accountants, PNG's largest independent accounting firm. Awarded MBE for services to Papua New Guinea commerce and community. Former director of Sierra Mining and Shell Oil Exploration PNG.",
  },
  {
    name: "David Irvine",
    role: "Non-Executive Director",
    photo: davidIrvineImg,
    bio: "Experienced company director and corporate strategy expert with more than two decades providing solutions to large, complex organisations. Has worked with BHP Billiton, Rio Tinto, Aurizon, Santos, Origin, and others.",
  },
  {
    name: "Michael Gray",
    role: "Non-Executive Director",
    photo: michaelGrayImg,
    bio: "One of the industry's most respected independent research analysts. Geologist (MSc) and top-ranked mining equity analyst for 20+ years. Co-founded Agentis Capital Mining Partners. Former Managing Director at Macquarie Capital Markets, Mining Equity Research, Canada. Past President of the Association for Mineral Exploration.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Strategy",
    desc: "Build a portfolio of high-quality gold-copper assets in PNG with clear pathways to production, cash flow and resource growth.",
  },
  {
    icon: Shield,
    title: "Governance",
    desc: "Committed to transparent disclosure, compliant NI 43-101 reporting, and strong corporate governance practices.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Responsible exploration practices that respect local communities, protect the environment, and deliver lasting benefits.",
  },
  {
    icon: Globe,
    title: "PNG Expertise",
    desc: "Deep in-country knowledge, established relationships with landowners, and proven ability to operate effectively in PNG.",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    desc: "World-class geological team supported by Global Ore Discovery with deep expertise in epithermal and porphyry systems.",
  },
  {
    icon: Users,
    title: "Aligned Interests",
    desc: "~12% management and director ownership ensures alignment between leadership and shareholders.",
  },
];

const About = () => {
  useSEO(
    "About Adyton Resources",
    "Meet the leadership team behind Adyton Resources — 70+ years combined experience in gold-copper exploration, development, and PNG operations.",
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
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">COMPANY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              About Adyton Resources
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl font-body">
              A gold and copper exploration company building high-quality assets in Papua New Guinea, positioned for
              near-term cash flow and long-term growth.
            </p>
          </div>
        </section>
        <Subscribe />

        {/* Company Pillars */}
        <section
          aria-label="Company approach"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OUR APPROACH</p>
            <h2
              className="text-2xl md:text-3xl font-display font-bold mb-10"
              style={{ color: "hsl(var(--text-dark))" }}
            >
              Built for Discovery, Structured for Growth
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg p-6"
                  style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
                >
                  <p.icon className="h-7 w-7 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-display font-semibold mb-2" style={{ color: "hsl(var(--text-dark))" }}>
                    {p.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management */}
        <section id="management" aria-label="Management team" className="teal-panel py-14 md:py-18">
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">LEADERSHIP</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">Management Team</h2>
            <p className="text-foreground/50 mb-10 font-body">
              70+ years combined experience in exploration, development, and PNG operations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {leadership.map((l) => (
                <article key={l.role} className="rounded-lg overflow-hidden bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                    <img src={l.photo} alt={l.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-display font-semibold text-sm text-foreground">{l.name}</h3>
                    <p className="text-primary mb-2 font-body">{l.role}</p>
                    <p className="text-foreground/50 leading-relaxed font-body">{l.bio}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Board */}
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-14 mb-6">
              Board of Directors
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {boardMembers.map((b) => (
                <article key={b.role} className="rounded-lg overflow-hidden bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                    <img src={b.photo} alt={b.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-display font-semibold text-sm text-foreground">{b.name}</h3>
                    <p className="text-primary mb-2 font-body">{b.role}</p>
                    <p className="text-foreground/50 leading-relaxed font-body">{b.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Company History / Timeline */}
        <section
          id="community"
          aria-label="Company milestones"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">COMPANY HISTORY</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              Key Milestones
            </h2>
            <div className="space-y-6">
              {[
                {
                  year: "2020",
                  event:
                    "Adyton Resources Corp. listed on TSXV (ADY), acquiring the Feni Island and Fergusson Island gold projects in PNG.",
                },
                {
                  year: "2021",
                  event:
                    "NI 43-101 Technical Report completed for Feni Island — 1.46 Moz Au Inferred at the Kabang deposit.",
                },
                {
                  year: "",
                  event:
                    "NI 43-101 Technical Report completed for Fergusson Island projects — 715 koz Au resource defined.",
                },
                {
                  year: "2022",
                  event: "Metallurgical Testing completed for Gameta.",
                },
                {
                  year: "2024",
                  event:
                    "EVIH JV partnership secured — US$9.5M committed to advance Fergusson Island to shovel-ready status. Global Ore Discovery engaged for Feni targeting.",
                },
                {
                  year: "",
                  event: "Successful C$7.5 M financing.",
                },
                {
                  year: "2025",
                  event:
                    "Successful C$20 million financing: The Company completed a non-brokered/brokered financing for gross proceeds of C$20 million, strengthening its balance sheet and providing sufficient capital to advance exploration activities predominantly focussed on the Feni project while the continued advancement of the Fergusson projects are funded through the EVIH JV earn in structure.",
                },
                {
                  year: "",
                  event:
                    "Appointment of Michael Gray to the Board of Directors: The Company strengthened its Board with the appointment of Michael Gray, Co-Founder of Agentis Capital. Michael brings extensive experience in technical, corporate and capital markets experience. His expertise will play a key role in advancing the Company’s strategic growth and development objectives.",
                },
                {
                  year: "",
                  event:
                    "Commencement of drilling at Feni: The Company successfully commenced its inaugural drill program at the Feni Gold-Copper Project, marking a significant milestone in advancing the asset beyond the Kabang resource footprint. The primary objective is to demonstrate that the scale and continuity and the structural controls of the Feni system support expansion of the resource that underpin feasible and economic mining scenarios.",
                },
                {
                  year: "",
                  event:
                    "Successful 8,000 metre drilling program at Fergusson Island Projects: The Company through its JV partner EVIH completed approximately 8,000 metres of drilling across the Fergusson Island projects, including Wapolu and Gameta. The program was executed on time and within budget, targeting resource expansion and conversion, with results supporting continued confidence  to advance the projects into development.",
                },
                {
                  year: "",
                  event: "Completion of Metallurgical testing for Wapolu.",
                },
                {
                  year: "2026",
                  event:
                    "Updated Mineral Resource Estimate at Wapolu: On January 13, 2026, the Company reported an updated NI 43 101 Mineral Resource Estimate (MRE) for its Wapolu gold project on Fergusson Island, Papua New Guinea (PNG). The updated MRE is comprised of 1.0 million tonnes grading 1.00 g/t Au for an indicated resource of 33 koz Au and 12.7 million tonnes grading 0.97 g/t Au for an inferred resource of 393 koz Au. The restart of the Wapolu gold project is an important pillar to Adytons strategy to achieve near term production and cash flow. The proposed initial Wapolu operation would be a shallow open pit ~300kt ROM operation with a simple crush, grind, float flow sheet to produce and market a gold rich concentrate.",
                },
                {
                  year: "",
                  event: "Submission of EL and ML permits for the restart of the Wapolu mine.",
                },
                {
                  year: "",
                  event: "Commencement of purchasing of long lead items for the Wapolu processing plant.",
                },
                {
                  year: "",
                  event: "10,000 M drilling milestone achieved at Feni.",
                },
              ].map((m) => (
                <div key={m.year} className="flex gap-6">
                  <time className="text-lg font-mono font-bold text-primary shrink-0 w-16">{m.year}</time>
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                      {m.event}
                    </p>
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
              <Link to="/projects/feni">
                Explore Feni Island <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/projects/fergusson">
                Explore Fergusson Island <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/investors">
                Investor Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
