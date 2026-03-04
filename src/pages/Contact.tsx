import { Mail, Phone, Briefcase, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const contactRoutes = [
  { icon: Mail, title: "Investor Relations", description: "General investor inquiries, presentations, and subscription requests.", email: "ir@adytonresources.com" },
  { icon: Briefcase, title: "Brokers & Analysts", description: "Broker introductions, analyst coverage requests, and institutional meetings.", email: "ir@adytonresources.com" },
  { icon: Phone, title: "Strategic Partners", description: "Joint venture, technical partnerships, and corporate development discussions.", email: "corporate@adytonresources.com" },
  { icon: Newspaper, title: "Media", description: "Press inquiries, interview requests, and media accreditation.", email: "media@adytonresources.com" },
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
      <section className="py-16 md:py-24">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Reach the right team directly. Select the contact appropriate for your inquiry.
          </p>

          {/* Routing blocks */}
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {contactRoutes.map((r) => (
              <div key={r.title} className="bg-card border border-border rounded-lg p-6">
                <r.icon className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{r.description}</p>
                <a href={`mailto:${r.email}`} className="text-sm text-primary hover:text-primary/80 font-medium">
                  {r.email}
                </a>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <Button variant="gold" size="lg" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
