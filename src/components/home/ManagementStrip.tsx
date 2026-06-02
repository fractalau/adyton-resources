import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Timothy Crossley",
    role: "Managing Director",
    bio: "Extensive experience as a director and mining executive, including Deputy CEO of ASX-listed Gloucester Coal, and President & COO at BHP Billiton's West Australian Iron Ore business. Currently Non-Executive Director at Pacific Lime and Cement Limited (ASX). Former President of the Northern Territory Minerals Council.",
  },
  {
    name: "Dr. Chris Bowden",
    role: "COO & Chief Geologist",
    bio: "Geologist with almost 30 years global experience discovering and commercialising mineral assets. PhD in Economic Geology, postgraduate finance and economics qualifications. FAusIMM(CP) and FSEG. Unique blend of technical and commercial experience across the mining life cycle.",
  },
  {
    name: "Chirag Patel",
    role: "CFO & Company Secretary",
    bio: "Chartered Professional Accountant (CPA) with extensive experience in financial management, tax reporting, and corporate strategy for public and multinational firms, including multiple years specialising in the mining sector. Previous roles with PwC and Starcore International Mines.",
  },
];

const ManagementStrip = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container">
      <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 text-center font-body">
        PROVEN TRACK RECORD
      </p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
        Led by Experienced Mining Executives
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {team.map((t) => (
          <div
            key={t.name}
            className="rounded-lg p-6 border"
            style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}
          >
            <h3 className="font-display font-bold text-2xl mb-1" style={{ color: "hsl(var(--text-dark))" }}>
              {t.name}
            </h3>
            <p className="text-primary font-semibold mb-3 font-body">{t.role}</p>
            <p className="leading-relaxed font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              {t.bio}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center flex flex-wrap items-center justify-center gap-4 font-body text-foreground/60">
        <span className="font-mono font-semibold text-foreground">70+ Years Combined Experience</span>
        <span className="text-foreground/30">|</span>
        <span>PNG Specialised Focus</span>
        <Link to="/about" className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary/80">
          Meet the Full Team <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  </section>
);

export default ManagementStrip;
