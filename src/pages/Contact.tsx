import { Mail, Phone, Briefcase, Newspaper, MapPin, Building2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

import projectHeaderBg from "@/assets/project-header-bg.jpg";

const contactRoutes = [
  {
    icon: Mail,
    title: "Investor Relations",
    description: "General investor inquiries, presentations, and subscription requests.",
    email: "ir@adytonresources.com",
  },
  {
    icon: Briefcase,
    title: "Brokers & Analysts",
    description: "Broker introductions, analyst coverage requests, and institutional meetings.",
    email: "ir@adytonresources.com",
  },
  {
    icon: Phone,
    title: "Strategic Partners",
    description: "Joint venture, technical partnerships, and corporate development discussions.",
    email: "corporate@adytonresources.com",
  },
  {
    icon: Newspaper,
    title: "Media",
    description: "Press inquiries, interview requests, and media accreditation.",
    email: "media@adytonresources.com",
  },
];

const offices = [
  {
    city: "Brisbane",
    country: "Australia",
    address: "Level 7, 300 Adelaide Street\nBrisbane QLD 4000\nPO Box 5807",
    type: "Registered Office",
  },
  {
    city: "Port Moresby",
    country: "Papua New Guinea",
    address: "C/O Sinton Spence Chartered Accountants\n2nd Floor, Brian Bell Plaza\nTurumu Street, Boroko\nMoresby North East, NCD\nPort Moresby, Papua New Guinea\nPO Box 6861",
    type: "PNG Operations",
  },
];

const Contact = () => {
  useSEO(
    "Contact Adyton Resources",
    "Get in touch with Adyton Resources — investor relations, media inquiries, corporate partnerships, and general contact for PNG gold-copper projects.",
  );


  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${projectHeaderBg})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"
            aria-hidden="true"
          />
          <div className="container relative z-10">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">GET IN TOUCH</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">Contact</h1>
            <p className="text-lg text-foreground/70 max-w-2xl font-body">
              Reach the right team directly. Select the contact appropriate for your inquiry.
            </p>
          </div>
        </section>
        <Subscribe />

        {/* Contact Routes */}
        <section
          aria-label="Contact departments"
          className="py-14 md:py-18"
          style={{ background: "hsl(var(--off-white))" }}
        >
          <div className="container">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactRoutes.map((r) => (
                <div
                  key={r.title}
                  className="rounded-lg p-6"
                  style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
                >
                  <r.icon className="h-7 w-7 text-primary mb-3" aria-hidden="true" />
                  <h2
                    className="text-2xl md:text-3xl font-display font-semibold mb-1"
                    style={{ color: "hsl(var(--text-dark))" }}
                  >
                    {r.title}
                  </h2>
                  <p className="mb-4 leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    {r.description}
                  </p>
                  <a href={`mailto:${r.email}`} className="text-primary hover:text-primary/80 font-medium font-body">
                    {r.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section aria-label="Office locations" className="teal-panel py-14 md:py-18">
          <div className="container">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OFFICES</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Our Locations</h2>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
              {offices.map((o) => (
                <address key={o.city} className="rounded-lg p-6 bg-card border border-border not-italic">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {o.city}, {o.country}
                      </h3>
                      <p className="text-primary font-body">{o.type}</p>
                    </div>
                  </div>
                  <p className="text-foreground/50 font-body whitespace-pre-line">{o.address}</p>
                </address>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section aria-label="Quick contact" className="bg-background py-10 border-t border-border">
          <div className="container text-center">
            <address className="not-italic text-sm text-foreground/50 font-body">
              <Building2 className="inline h-4 w-4 mr-1" aria-hidden="true" />
              Investor Relations:{" "}
              <a href="mailto:ir@adytonresources.com" className="text-primary hover:text-primary/80">
                ir@adytonresources.com
              </a>{" "}
              | +61 7 3854 2389
            </address>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
