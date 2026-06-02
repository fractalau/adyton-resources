import { useState } from "react";
import { Mail, Phone, Briefcase, Newspaper, MapPin, Building2, Loader2, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
    email: "ir@adytonresources.com",
  },
  {
    icon: Newspaper,
    title: "Media",
    description: "Press inquiries, interview requests, and media accreditation.",
    email: "ir@adytonresources.com",
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
    address:
      "C/O Sinton Spence Chartered Accountants\n2nd Floor, Brian Bell Plaza\nTurumu Street, Boroko\nMoresby North East, NCD\nPort Moresby, Papua New Guinea\nPO Box 6861",
    type: "PNG Operations",
  },
];

const Contact = () => {
  useSEO(
    "Contact Adyton Resources",
    "Get in touch with Adyton Resources — investor relations, media inquiries, corporate partnerships, and general contact for PNG gold-copper projects.",
  );

  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again or email ir@adytonresources.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <section aria-label="Contact form" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">SEND A MESSAGE</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              Get in Touch
            </h2>
            {isSuccess ? (
              <div
                className="rounded-lg p-8 text-center"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
              >
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-display font-semibold mb-2" style={{ color: "hsl(var(--text-dark))" }}>
                  Message Sent
                </h3>
                <p style={{ color: "hsl(var(--light-muted-foreground))" }}>
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="rounded-lg p-6 space-y-4"
                style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 font-body"
                    style={{ color: "hsl(var(--text-dark))" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-transparent text-[#333333] font-body border border-[#d6d2cd] hover:border-[#1b4e6a] focus:border-[#1b4e6a] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 font-body"
                    style={{ color: "hsl(var(--text-dark))" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-transparent text-[#333333] font-body border border-[#d6d2cd] hover:border-[#1b4e6a] focus:border-[#1b4e6a] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 font-body"
                    style={{ color: "hsl(var(--text-dark))" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-transparent text-[#333333] font-body border border-[#d6d2cd] hover:border-[#1b4e6a] focus:border-[#1b4e6a] focus:outline-none"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
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
