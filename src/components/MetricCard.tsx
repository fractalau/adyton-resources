interface MetricCardProps {
  label: string;
  value: string;
  source?: string;
}

const MetricCard = ({ label, value, source = "Source: placeholder" }: MetricCardProps) => (
  <div className="bg-card border border-border rounded-lg p-5 metric-glow text-center">
    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">{label}</p>
    <p className="text-2xl md:text-3xl font-display font-bold text-primary">{value}</p>
    <p className="text-[10px] text-muted-foreground mt-2 italic">{source}</p>
  </div>
);

export default MetricCard;
