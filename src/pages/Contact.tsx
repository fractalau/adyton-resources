import { Mail, Phone, Briefcase, Newspaper, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const contactRoutes = [
  { icon: Mail, title: "Investor Relations", description: "General investor inquiries, presentations, and subscription requests.", email: "ir@adytonresources.com.au" },
  { icon: Briefcase, title: "Brokers & Analysts", description: "Broker introductions, analyst coverage requests, and institutional meetings.", email: "ir@adytonresources.com.au" },
  { icon: Phone, title: "Strategic Partners", description: "Joint venture, technical partnerships, and corporate development discussions.", email: "corporate@adytonresources.com.au" },
  { icon: Newspaper, title: "Media", description: "Press inquiries, interview requests, and media accreditation.", email: "media@adytonresources.com.au" },
];

const offices = [
  { city: "Sydney", country: "Australia", address: "Level XX, XX Street\nSydney NSW 2000", type: "Registered Office" },
  { city: "Port Moresby", country: "Papua New Guinea", address: "XX Floor, XX Building\nPort Moresby, NCD", type: "PNG Operations" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to backend later
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Contact
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl font-body">
            Reach the right team directly. Select the contact appropriate for your inquiry.
          </p>
        </div>
      </section>

      {/* Contact Routes */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-5">
            {contactRoutes.map((r) => (
              <div key={r.title} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
                <r.icon className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1" style={{ color: "hsl(var(--text-dark))" }}>{r.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.description}</p>
                <a href={`mailto:${r.email}`} className="text-sm text-primary hover:text-primary/80 font-medium font-body">
                  {r.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="teal-panel py-14 md:py-18">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OFFICES</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Our Locations
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {offices.map((o) => (
              <div key={o.city} className="rounded-lg p-6 bg-card border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{o.city}, {o.country}</h4>
                    <p className="text-xs text-primary font-body">{o.type}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/50 font-body whitespace-pre-line">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">SEND A MESSAGE</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
            General Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
            />
            <textarea
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
            />
            <Button variant="gold" size="lg" type="submit">
              <Mail className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-background py-10 border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-foreground/50 font-body">
            <Building2 className="inline h-4 w-4 mr-1" />
            Investor Relations: <a href="mailto:ir@adytonresources.com.au" className="text-primary hover:text-primary/80">ir@adytonresources.com.au</a> | +61 2 3854 2389
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
