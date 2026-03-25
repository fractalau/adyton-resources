import { Link } from "react-router-dom";
import { Linkedin, Youtube, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <img src={logo} alt="Adyton Resources" className="h-7 invert opacity-70" />
          <p className="text-xs text-foreground/50 font-body">TSXV: ADY | OTC: ADYRF | FSE: 701GR</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Projects</h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/projects/feni"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              Feni Island
            </Link>
            <Link
              to="/projects/fergusson"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              Fergusson Island
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Investors</h4>
          <div className="flex flex-col gap-2">
            <Link to="/investors" className="text-sm text-foreground/60 hover:text-primary transition-colors font-body">
              Investor Hub
            </Link>
            <Link to="/investors" className="text-sm text-foreground/60 hover:text-primary transition-colors font-body">
              Capital Structure
            </Link>
            <Link to="/investors" className="text-sm text-foreground/60 hover:text-primary transition-colors font-body">
              Technical Reports
            </Link>
            <a
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              Filings (SEDAR+)
            </a>
            <a
              href="https://www.newsfilecorp.com/alert/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              Subscribe
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-foreground/60 hover:text-primary transition-colors font-body">
              About Adyton
            </Link>
            <Link
              to="/about#management"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              Management & Board
            </Link>
            <Link
              to="/about#community"
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
            >
              PNG & Community
            </Link>
          </div>
          <h4 className="text-sm font-display font-semibold text-foreground pt-2">News</h4>
          <div className="flex flex-col gap-2">
            <Link to="/news" className="text-sm text-foreground/60 hover:text-primary transition-colors font-body">
              Latest Releases
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground">Contact</h4>
          <address className="flex flex-col gap-2 text-sm text-foreground/60 font-body not-italic">
            <a href="mailto:info@adytonresources.com" className="hover:text-primary transition-colors">
              info@adytonresources.com
            </a>
            <span>+61 7 3854 2389</span>
            <span>
              PO Box 5807
              <br />
              Brisbane QLD 4000 Australia
            </span>
          </address>
          <h4 className="text-sm font-display font-semibold text-foreground pt-2">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/adyton-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/Adyton_TSXADY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              aria-label="X"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://adytonresources.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40 font-body">
            © {new Date().getFullYear()} Adyton Resources Corp. | Privacy Policy | Disclaimer
          </p>
        </div>
      </div>
    </div>
    <div
      className="text-[10px] font-body leading-relaxed space-y-3 px-4 py-4 text-foreground/50"
      style={{ background: "hsl(201 65% 18%)" }}
    >
      <div className="container">
        <p>
          DISCLAIMER: Mineral resources are not mineral reserves and have not demonstrated economic viability. This
          website contains forward-looking statements. Actual results may differ materially from those anticipated.
          Readers are cautioned not to place undue reliance on forward-looking information.
        </p>
        <p className="mt-3">
          NI 43-101 Technical Reports: Feni Island Project (Oct 14, 2021); Fergusson Gold Property (Oct 14, 2021);
          Wapolu Gold Project (Jan 7, 2026 — filed SEDAR+ Feb 25, 2026). Qualified Person: Dr. Chris Bowden PhD, GCMEE,
          FAusIMM(CP), FSEG, COO & Chief Geologist, Adyton Resources Corp.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
