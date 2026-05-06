import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, FileText, ExternalLink, Bell } from "lucide-react";

const InvestorHubCTA = () => (
  <section className="teal-panel py-16 md:py-20">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
        Investor Hub
      </h2>
      <p className="text-foreground/70 max-w-xl mx-auto mb-10 text-sm md:text-base font-body">
        Fast access to materials for diligence and research.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Button variant="gold" size="lg" asChild>
          <a href="/Adyton-Investor-Deck.pdf" download>
            <Download className="h-4 w-4" />
            Download Investor Deck
          </a>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/investors">
            <FileText className="h-4 w-4" />
            Technical Reports
          </Link>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            SEDAR+ Filings
          </a>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <a href="https://www.newsfilecorp.com/alert/login" target="_blank" rel="noopener noreferrer">
            <Bell className="h-4 w-4" />
            Subscribe for Updates
          </a>
        </Button>
      </div>
      <p className="text-sm text-foreground/40 font-body">
        Investor Relations: ir@adytonresources.com | +61 7 3854 2389
      </p>
    </div>
  </section>
);

export default InvestorHubCTA;
