import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail } from "lucide-react";
import TickerStrip from "@/components/TickerStrip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Why Adyton", path: "/why-adyton" },
  { label: "Projects", path: "/projects" },
  { label: "Investor Hub", path: "/investors" },
  { label: "News", path: "/news" },
  { label: "Why PNG", path: "/why-png" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Adyton Resources" className="h-8 invert" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="gold-outline" size="sm" asChild>
                  <Link to="/contact">
                    <Mail className="h-3.5 w-3.5" />
                    Contact IR
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Investor Relations enquiries</p>
                <p className="text-muted-foreground text-xs">Partner and diligence enquiries</p>
              </TooltipContent>
            </Tooltip>
            <Button variant="gold" size="sm">
              <Download className="h-3.5 w-3.5" />
              Download Deck
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                    location.pathname === item.path
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <Button variant="gold-outline" size="sm" className="flex-1" asChild>
                  <Link to="/contact">Contact IR</Link>
                </Button>
                <Button variant="gold" size="sm" className="flex-1">
                  Download Deck
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <TickerStrip />
    </TooltipProvider>
  );
};

export default Header;
