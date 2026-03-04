import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Why Adyton", path: "/why-adyton" },
  { label: "Projects", path: "/projects" },
  { label: "Investors", path: "/investors" },
  { label: "News", path: "/news" },
  { label: "Why PNG", path: "/why-png" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Adyton Resources" className="h-6 invert opacity-90" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-2.5 py-1.5 text-[13px] font-medium transition-colors rounded-sm hover:text-foreground ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — just Download Deck, always visible */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/contact" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-medium mr-1">
            Contact IR
          </Link>
          <Button variant="gold" size="sm">
            <Download className="h-3 w-3" />
            Download Deck
          </Button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <Button variant="gold" size="sm" className="text-xs">
            <Download className="h-3 w-3" />
            Deck
          </Button>
          <button className="p-1.5 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-3 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 text-[13px] font-medium rounded-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground bg-muted/50"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
