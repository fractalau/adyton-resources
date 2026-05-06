const stats = [
  { value: "US$9.5M", label: "EVIH commitment" },
  { value: "50%", label: "Adyton FCF entitlement" },
  { value: "Zero", label: "Capital outlay for Adyton" },
];

const EVIHSection = () => (
  <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
    <div className="container max-w-4xl">
      <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
        FULLY FUNDED PATH TO PRODUCTION
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
        The EVIH Joint Venture
      </h2>
      <div className="leading-relaxed space-y-4 mb-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
        <p>
          East Vision Investment Holdings (EVIH) is Adyton's joint venture partner at Fergusson Island, committing up to
          US$9.5M to advance the project from current status to shovel-ready. EVIH will fund feasibility studies,
          metallurgical work, permitting, and bulk sample activities to earn a 50% interest in Fergusson Mining Pte.
          Ltd.
        </p>
        <p>
          Adyton retains 50% of free cash flow — with zero capital outlay required for construction. Adyton's treasury
          is preserved for Feni exploration and corporate activities.
        </p>
      </div>
      <blockquote
        className="border-l-2 border-primary pl-4 mb-8 italic font-body"
        style={{ color: "hsl(var(--light-muted-foreground))" }}
      >
        "EVIH is currently focused on supporting Adyton to restart operations at the Wapolu Mine."
        <span className="block mt-1 not-italic text-sm text-primary">
          — Gary Wang, CEO, East Vision Investment Holdings
        </span>
      </blockquote>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-4 rounded-lg border"
            style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}
          >
            <p className="text-2xl md:text-3xl font-mono font-bold text-primary mb-1">{s.value}</p>
            <p className="font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm mt-4 italic font-body" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
        Subject to EVIH completing earn-in conditions. See ASX/TSXV disclosures for full terms.
      </p>
    </div>
  </section>
);

export default EVIHSection;
