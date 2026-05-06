import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Subscribe = () => (
  <section className="bg-gold py-12 md:py-16">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-3" style={{ color: "#1b4e6a" }}>
        Stay Informed
      </h2>
      <p className="max-w-xl mx-auto mb-6 font-body" style={{ color: "#1b4e6a" }}>
        Subscribe to receive Adyton Resources news releases and investor updates direct to your inbox.
      </p>
      <Button variant="default" size="lg" asChild className="bg-[#1b4e6a] text-gold hover:bg-[#1b4e6a]/90">
        <a href="https://www.newsfilecorp.com/alert/login" target="_blank" rel="noopener noreferrer">
          <Bell className="h-4 w-4" />
          Subscribe for Updates
        </a>
      </Button>
    </div>
  </section>
);

export default Subscribe;
