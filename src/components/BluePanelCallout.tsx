import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const BluePanelCallout = () => (
  <section className="blue-panel py-14 md:py-20 relative overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(215 50% 40%), transparent 60%)" }}
    />
    <div className="container text-center relative z-10">
      <p className="text-[10px] uppercase tracking-[0.25em] text-secondary-foreground/50 font-semibold mb-3">
        Due Diligence
      </p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
        Investor Hub
      </h2>
      <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-8 text-[13px] leading-relaxed">
        Presentations, technical reports, regulatory filings, and disclosure documents.
      </p>
      <div className="flex flex-wrap justify-center gap-2.5">
        <Button variant="gold" size="default">
          <Download className="h-3.5 w-3.5" />
          Latest Deck
        </Button>
        <Button variant="gold-outline" size="default" asChild>
          <Link to="/investors">
            <FileText className="h-3.5 w-3.5" />
            Technical Reports
          </Link>
        </Button>
        <Button variant="gold-outline" size="default">
          <Shield className="h-3.5 w-3.5" />
          Filings
        </Button>
        <Button variant="gold-outline" size="default">
          <Bell className="h-3.5 w-3.5" />
          Subscribe
        </Button>
      </div>
    </div>
  </section>
);

export default BluePanelCallout;
