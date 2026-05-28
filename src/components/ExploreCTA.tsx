import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ExploreCTA = () => (
  <section aria-label="Explore more" className="teal-panel py-14 md:py-16 border-t border-gold/30">
    <div className="container max-w-4xl flex flex-wrap justify-center gap-3">
      <Button variant="gold" size="lg" asChild>
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
        <Link to="/about">
          About the Team <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export default ExploreCTA;
