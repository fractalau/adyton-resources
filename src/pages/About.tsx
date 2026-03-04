import { Users, Shield, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const leadership = [
  { name: "Placeholder Name", role: "Chief Executive Officer", bio: "Experienced mining executive with extensive PNG operational background." },
  { name: "Placeholder Name", role: "VP Exploration", bio: "Senior geologist with 20+ years experience in Pacific Rim gold exploration." },
  { name: "Placeholder Name", role: "Chief Financial Officer", bio: "CPA with deep expertise in public market mining finance and corporate governance." },
  { name: "Placeholder Name", role: "Non-Executive Director", bio: "Board member with significant institutional investment and mining board experience." },
];

const About = () => (
  <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Company</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-3xl" style={{ color: "hsl(var(--light-foreground))" }}>
          About Adyton Resources
        </h1>
        <p className="text-lg max-w-2xl mb-16" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          Adyton Resources Corp. (TSXV: ADY) is a gold and copper exploration company building a portfolio of high-quality assets in Papua New Guinea.
        </p>

        {/* Company overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--light-foreground))" }}>Experienced Team</h3>
            <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>Leadership team with deep PNG expertise and proven track record in exploration and development.</p>
          </div>
          <div className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--light-foreground))" }}>Governance</h3>
            <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>Committed to transparent disclosure, compliant reporting, and strong corporate governance practices.</p>
          </div>
          <div className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <Leaf className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--light-foreground))" }}>Sustainability</h3>
            <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>Responsible exploration practices that respect communities and the environment. Framework in development.</p>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--light-foreground))" }}>Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((l) => (
              <div key={l.role} className="rounded-lg overflow-hidden" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
                <div className="aspect-square flex items-center justify-center" style={{ background: "hsl(var(--light-bg))" }}>
                  <Users className="h-10 w-10 text-muted-foreground/20" />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-sm" style={{ color: "hsl(var(--light-foreground))" }}>{l.name}</h4>
                  <p className="text-xs text-primary mb-2">{l.role}</p>
                  <p className="text-xs" style={{ color: "hsl(var(--light-muted-foreground))" }}>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
