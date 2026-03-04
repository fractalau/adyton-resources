interface MetricCardProps {
  label: string;
  value: string;
  source?: string;
}

const MetricCard = ({ label, value, source = "Source: placeholder" }: MetricCardProps) => (
  <div className="text-center py-2">
    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-1">{label}</p>
    <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{value}</p>
    <p className="text-[10px] text-muted-foreground/60 mt-1">{source}</p>
  </div>
);

export default MetricCard;
