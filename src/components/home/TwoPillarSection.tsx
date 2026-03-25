import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TwoPillarSection = () => (
  <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
    <div className="container">
      <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 text-center font-body">
        A TWO-PILLAR STRATEGY
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3" style={{ color: "hsl(var(--text-dark))" }}>
        Two Island Assets. Two Value Drivers.
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
        Adyton operates a dual-track strategy: near-term cash flow from Fergusson Island, funded through a joint venture at zero capital cost to Adyton — and district-scale exploration growth at Feni Island. This structure is designed to weather market cycles while pursuing discovery, providing resilience and structural durability that sets the company apart.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Feni Card — dark */}
        <div className="rounded-lg p-6 md:p-8 bg-background border border-border relative overflow-hidden">
          <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 font-body">
            Flagship Growth Asset
          </span>
          <h3 className="text-2xl font-display font-bold text-foreground mb-1">Feni Island</h3>
          <p className="text-xs text-foreground/50 mb-4 font-body">New Ireland Province, PNG</p>
          <p className="text-3xl font-mono font-bold text-primary mb-1">1.46 Moz Au</p>
          <p className="text-xs text-foreground/50 mb-5 font-body">Inferred Mineral Resource (Kabang Deposit, NI 43-101, Oct 2021)</p>
          <p className="text-sm text-foreground/70 mb-6 font-body leading-relaxed">
            Tier 1 gold-copper discovery potential with whole-of-island tenure across multiple epithermal targets. Significant copper upside not yet captured in the current MRE.
          </p>
          <Link to="/projects/feni" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors font-body">
            Explore Feni Island <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Fergusson Card — white */}
        <div className="rounded-lg p-6 md:p-8 border relative overflow-hidden" style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}>
          <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 font-body">
            Near-Term Cash Flow
          </span>
          <h3 className="text-2xl font-display font-bold mb-1" style={{ color: "hsl(var(--text-dark))" }}>Fergusson Island</h3>
          <p className="text-xs mb-4 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>Milne Bay Province, PNG</p>
          <p className="text-3xl font-mono font-bold text-primary mb-1">939 Koz Au</p>
          <p className="text-xs mb-5 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>Indicated + Inferred Mineral Resource (Wapolu + Gameta, NI 43-101)</p>
          <p className="text-sm mb-6 font-body leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            Wapolu and Gameta deposits. 100% funded by JV partner East Vision Investment Holdings (EVIH), committing up to US$9.5M. Adyton retains 50% of free cash flow with zero capital outlay.
          </p>
          <Link to="/projects/fergusson" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors font-body">
            Explore Fergusson Island <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default TwoPillarSection;
