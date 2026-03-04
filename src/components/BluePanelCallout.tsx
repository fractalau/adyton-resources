import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const BluePanelCallout = () => (
  <section className="blue-panel py-16 md:py-20">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
        Investor Hub
      </h2>
      <p className="text-blue-panel-foreground max-w-xl mx-auto mb-10 text-sm md:text-base">
        Access presentations, technical reports, filings, and disclosures.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
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
          Filings & Disclosures
        </Button>
        <Button variant="gold-outline" size="lg">
          <Bell className="h-4 w-4" />
          Subscribe
        </Button>
      </div>
    </div>
  </section>
);

export default BluePanelCallout;
