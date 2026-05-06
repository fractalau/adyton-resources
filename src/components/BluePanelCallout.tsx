import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const BluePanelCallout = () => (
  <section className="teal-panel py-16 md:py-20">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
        Investor Hub
      </h2>
      <p className="text-foreground/70 max-w-xl mx-auto mb-10 text-sm md:text-base">
        Current investor materials and key disclosures in one place, built for fast diligence.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <Button variant="gold" size="lg">
          <Download className="h-4 w-4" />
          Latest Deck
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/investors">
            <FileText className="h-4 w-4" />
            Technical Reports
          </Link>
        </Button>
        <Button variant="gold-outline" size="lg">
          <Shield className="h-4 w-4" />
          Filings
        </Button>
        <Button variant="gold-outline" size="lg">
          <Bell className="h-4 w-4" />
          Subscribe
        </Button>
      </div>
      <p className="text-sm text-muted-foreground/60">
        Looking for something specific? Use search and filters in the Investor Hub.
      </p>
    </div>
  </section>
);

export default BluePanelCallout;
