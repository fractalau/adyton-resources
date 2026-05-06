import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronDown, Linkedin, Youtube, Globe } from "lucide-react";
import TickerStrip from "@/components/TickerStrip";

import logo from "@/assets/logo.png";

const projectsDropdown = [
  { label: "Feni Island", path: "/projects/feni" },
  { label: "Fergusson Island", path: "/projects/fergusson" },
];

const companyDropdown = [
  { label: "About Adyton", path: "/about" },
  { label: "Why PNG", path: "/why-png" },
];

interface DropdownProps {
  label: string;
  items: { label: string; path: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-foreground/70"
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-md shadow-lg py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isProjectsActive = location.pathname.startsWith("/projects");
  const isCompanyActive = ["/about", "/why-png"].some((p) => location.pathname.startsWith(p));

  return (
    <>
      <div className="w-full bg-gold py-3">
        <div className="container flex justify-end items-center gap-4">
          <a
            href="https://www.linkedin.com/company/adyton-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80" style={{ color: "#1b4e6a" }}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/Adyton_TSXADY"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80" style={{ color: "#1b4e6a" }}
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@AdytonResources"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80" style={{ color: "#1b4e6a" }}
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
          <a
            href="https://adytonresources.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80" style={{ color: "#1b4e6a" }}
            aria-label="Website"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 py-4">
            <img src={logo} alt="Adyton Resources" className="h-16 invert" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground/70"
              }`}
            >
              Home
            </Link>
            <NavDropdown label="Projects" items={projectsDropdown} isActive={isProjectsActive} />
            <Link
              to="/investors"
              className={`px-3 py-2 transition-colors hover:text-primary ${
                location.pathname === "/investors" ? "text-primary" : "text-foreground/70"
              }`}
            >
              Investors
            </Link>
            <NavDropdown label="Company" items={companyDropdown} isActive={isCompanyActive} />
            <Link
              to="/news"
              className={`px-3 py-2 transition-colors hover:text-primary ${
                location.pathname === "/news" ? "text-primary" : "text-foreground/70"
              }`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground/70"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button variant="gold" size="sm" asChild>
              <a href="/Adyton-Investor-Deck.pdf" download>
                <Download className="h-3.5 w-3.5" />
                Download Investor Deck
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav aria-label="Mobile navigation" className="container py-4 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary"
              >
                Home
              </Link>
              <p className="px-3 pt-3 pb-1 text-sm font-semibold text-primary uppercase tracking-wider">Projects</p>
              {projectsDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-2 text-sm text-foreground/70 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/investors"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary"
              >
                Investors
              </Link>
              <p className="px-3 pt-3 pb-1 text-sm font-semibold text-primary uppercase tracking-wider">Company</p>
              {companyDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-2 text-sm text-foreground/70 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/news"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary"
              >
                News
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary"
              >
                Contact
              </Link>
              <div className="mt-3 pt-3 border-t border-border">
                <Button variant="gold" size="sm" className="w-full" asChild>
                  <a href="/Adyton-Investor-Deck.pdf" download>
                    <Download className="h-3.5 w-3.5" />
                    Download Investor Deck
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <TickerStrip />
    </>
  );
};

export default Header;
