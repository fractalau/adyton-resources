import { Gem, Layers, MapPin, Milestone, Handshake } from "lucide-react";

const items = [
  { icon: Gem, headline: "High-Quality Gold-Copper Assets", line: "PNG-focused portfolio with a clear, investor-ready narrative" },
  { icon: Layers, headline: "Two-Pillar Value Model", line: "Feni plus Fergusson, clear roles, clear focus" },
  { icon: MapPin, headline: "Tier-One Location", line: "Papua New Guinea gold and copper jurisdiction" },
  { icon: Milestone, headline: "Near-Term Pathway", line: "Defined milestones and regular market updates" },
  { icon: Handshake, headline: "Funded and Supported", line: "Strategy supported by disclosed funding and partnerships" },
];

const KeyMessages = () => (
  <section className="teal-panel py-10 md:py-12">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.headline} className="flex flex-col items-start gap-2">
            <item.icon className="h-6 w-6 text-primary shrink-0" />
            <h3 className="text-sm font-display font-semibold text-white">
              {item.headline}
            </h3>
            <p className="text-xs leading-relaxed text-foreground/70">
              {item.line}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyMessages;
