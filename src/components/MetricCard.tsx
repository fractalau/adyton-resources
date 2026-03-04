interface MetricCardProps {
  label: string;
  value: string;
  source?: string;
}

const MetricCard = ({ label, value, source = "Source: placeholder" }: MetricCardProps) => (
  <div className="text-center py-2">
    <p className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{ color: "hsl(var(--light-muted-foreground))" }}>{label}</p>
    <p className="text-2xl md:text-3xl font-display font-bold text-primary">{value}</p>
    <p className="text-[10px] mt-1" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>{source}</p>
  </div>
);

export default MetricCard;
