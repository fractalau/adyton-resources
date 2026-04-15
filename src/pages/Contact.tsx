import { Mail, Phone, Briefcase, Newspaper, MapPin, Building2, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const contactRoutes = [
  { icon: Mail, title: "Investor Relations", description: "General investor inquiries, presentations, and subscription requests.", email: "ir@adytonresources.com" },
  { icon: Briefcase, title: "Brokers & Analysts", description: "Broker introductions, analyst coverage requests, and institutional meetings.", email: "ir@adytonresources.com" },
  { icon: Phone, title: "Strategic Partners", description: "Joint venture, technical partnerships, and corporate development discussions.", email: "corporate@adytonresources.com" },
  { icon: Newspaper, title: "Media", description: "Press inquiries, interview requests, and media accreditation.", email: "media@adytonresources.com" },
];

const offices = [
  { city: "Brisbane", country: "Australia", address: "Level XX, XX Street\nBrisbane QLD 4000", type: "Registered Office" },
  { city: "Port Moresby", country: "Papua New Guinea", address: "XX Floor, XX Building\nPort Moresby, NCD", type: "PNG Operations" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("contact_submissions").insert({
        id,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || null,
        message: formData.message,
      });
      if (error) throw error;

      // Send notification email
      await supabase.functions.invoke("send-contact-notification", {
        body: { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully.");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" aria-hidden="true" />
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
        <section aria-label="Contact departments" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactRoutes.map((r) => (
                <div key={r.title} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
                  <r.icon className="h-7 w-7 text-primary mb-3" aria-hidden="true" />
                  <h2 className="font-display font-semibold mb-1" style={{ color: "hsl(var(--text-dark))" }}>{r.title}</h2>
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
        <section aria-label="Office locations" className="teal-panel py-14 md:py-18">
          <div className="container">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">OFFICES</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Our Locations
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
              {offices.map((o) => (
                <address key={o.city} className="rounded-lg p-6 bg-card border border-border not-italic">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{o.city}, {o.country}</h3>
                      <p className="text-xs text-primary font-body">{o.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/50 font-body whitespace-pre-line">{o.address}</p>
                </address>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section aria-label="Contact form" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">SEND A MESSAGE</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              General Inquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
                />
                <label className="sr-only" htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
                />
              </div>
              <label className="sr-only" htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
              />
              <label className="sr-only" htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))", color: "hsl(var(--text-dark))" }}
              />
              {submitted ? (
                <div className="flex items-center gap-2 text-sm text-green-600 font-body">
                  <CheckCircle className="h-5 w-5" />
                  Thank you — we'll be in touch shortly.
                </div>
              ) : (
                <Button variant="gold" size="lg" type="submit" disabled={submitting}>
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              )}
            </form>
          </div>
        </section>

        {/* Quick Contact */}
        <section aria-label="Quick contact" className="bg-background py-10 border-t border-border">
          <div className="container text-center">
            <address className="not-italic text-sm text-foreground/50 font-body">
              <Building2 className="inline h-4 w-4 mr-1" aria-hidden="true" />
              Investor Relations: <a href="mailto:ir@adytonresources.com" className="text-primary hover:text-primary/80">ir@adytonresources.com</a> | +61 7 3854 2389
            </address>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
