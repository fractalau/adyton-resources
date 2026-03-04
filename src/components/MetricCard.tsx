interface MetricCardProps {
  label: string;
  value: string;
  source?: string;
}

const MetricCard = ({ label, value, source = "Source: placeholder" }: MetricCardProps) => (
  <div className="bg-card border border-border rounded-md p-4 text-center metric-glow">
    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium mb-1.5">{label}</p>
    <p className="text-xl md:text-2xl font-display font-bold text-foreground tabular-nums">{value}</p>
    <p className="text-[9px] text-muted-foreground/60 mt-1.5">{source}</p>
  </div>
);

export default MetricCard;
