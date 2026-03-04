import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src={logo} alt="Adyton Resources" className="h-7 invert opacity-70" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            PNG gold and copper explorer with near-term restart pathway and scalable discovery upside.
          </p>
          <p className="text-xs text-muted-foreground">TSXV: ADY</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/why-adyton" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Adyton</Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/why-png" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why PNG</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Investors</h4>
          <div className="flex flex-col gap-2">
            <Link to="/investors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investor Hub</Link>
            <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">News</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Filings</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reports</a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Contact</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investor Relations</Link>
            <a href="mailto:info@adytonresources.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@adytonresources.com</a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Adyton Resources Corp. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Forward-Looking Statements</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
