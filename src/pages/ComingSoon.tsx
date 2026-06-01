import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useSEO } from "@/hooks/useSEO";

const ComingSoon = () => {
  useSEO(
    "Coming Soon | Adyton Resources",
    "Adyton Resources — something new is coming. Contact us for investor or corporate inquiries."
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center space-y-12">
          <img
            src={logo}
            alt="Adyton Resources"
            className="h-12 md:h-14 mx-auto"
          />

          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-tight">
              Coming Soon
            </h1>
            <p className="font-body text-base md:text-lg text-foreground/60 max-w-lg mx-auto leading-relaxed">
              We're preparing something new. In the meantime, please reach out
              using the details below.
            </p>
          </div>

          <div className="h-px w-16 bg-[hsl(var(--gold,42_56%_55%))] mx-auto" style={{ backgroundColor: "#C9A84C" }} />

          <address className="not-italic space-y-5 font-body text-foreground/80">
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-4 w-4 text-foreground/50" />
              <a
                href="mailto:info@adytonresources.com"
                className="hover:text-primary transition-colors"
              >
                info@adytonresources.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-4 w-4 text-foreground/50" />
              <span>+61 7 3854 2389</span>
            </div>
            <div className="flex items-start justify-center gap-3">
              <MapPin className="h-4 w-4 text-foreground/50 mt-1" />
              <span>
                PO Box 5807
                <br />
                Brisbane QLD 4000, Australia
              </span>
            </div>
          </address>

          <p className="font-body text-xs text-foreground/40 pt-8">
            TSXV: ADY &nbsp;|&nbsp; OTC: ADYRF &nbsp;|&nbsp; FSE: 701GR
          </p>
        </div>
      </main>

      <footer className="py-6 text-center font-body text-xs text-foreground/40">
        © {new Date().getFullYear()} Adyton Resources Corp.
      </footer>
    </div>
  );
};

export default ComingSoon;
