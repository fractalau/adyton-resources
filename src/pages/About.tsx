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
  <div className="min-h-screen bg-background">
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Company</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6 max-w-3xl">
          About Adyton Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Adyton Resources Corp. (TSXV: ADY) is a gold and copper exploration company building a portfolio of high-quality assets in Papua New Guinea.
        </p>

        {/* Company overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-2">Experienced Team</h3>
            <p className="text-sm text-muted-foreground">Leadership team with deep PNG expertise and proven track record in exploration and development.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-2">Governance</h3>
            <p className="text-sm text-muted-foreground">Committed to transparent disclosure, compliant reporting, and strong corporate governance practices.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Leaf className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-2">Sustainability</h3>
            <p className="text-sm text-muted-foreground">Responsible exploration practices that respect communities and the environment. Framework in development.</p>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((l) => (
              <div key={l.role} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Users className="h-10 w-10 text-muted-foreground/20" />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-foreground text-sm">{l.name}</h4>
                  <p className="text-xs text-primary mb-2">{l.role}</p>
                  <p className="text-xs text-muted-foreground">{l.bio}</p>
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
