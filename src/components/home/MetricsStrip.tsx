import { Gem, Landmark, BarChart3, Handshake, Flag } from "lucide-react";

const metrics = [
  { icon: Gem, stat: "2.4Moz Au", label: "Total Resources (NI 43-101)" },
  { icon: Landmark, stat: "~C$17M", label: "Cash at Bank" },
  { icon: BarChart3, stat: "C$45.42", label: "EV per Resource Ounce" },
  { icon: Handshake, stat: "US$9.5M", label: "Committed by JV Partner EVIH" },
  { icon: Flag, stat: "3", label: "Active Projects, PNG" },
];

const MetricsStrip = () => (
  <section className="border-b border-border py-10 md:py-12" style={{ background: "hsl(201 65% 18%)" }}>
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="text-center flex flex-col items-center gap-2">
            <m.icon className="h-6 w-6 text-primary" />
            <p className="text-2xl md:text-3xl font-mono font-bold text-foreground">{m.stat}</p>
            <p className="text-xs text-foreground/60 font-body">{m.label}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-foreground/40 text-center mt-6 font-body italic">
        Resource figures prepared in accordance with NI 43-101. Mineral resources are not mineral reserves and have not
        demonstrated economic viability.
      </p>
    </div>
  </section>
);

export default MetricsStrip;
