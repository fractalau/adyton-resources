interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "upcoming" | "in-progress";
}

interface TimelineComponentProps {
  items: TimelineItem[];
}

const TimelineComponent = ({ items }: TimelineComponentProps) => (
  <div className="space-y-0">
    {items.map((item, i) => (
      <div key={i} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div
            className={`h-3 w-3 rounded-full border-2 shrink-0 ${
              item.status === "completed"
                ? "bg-primary border-primary"
                : item.status === "in-progress"
                ? "bg-transparent border-primary"
                : "bg-transparent border-muted-foreground/30"
            }`}
          />
          {i < items.length - 1 && (
            <div className="w-px flex-1 bg-border min-h-[2rem]" />
          )}
        </div>
        <div className="pb-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.date}</p>
          <h4 className="text-sm font-display font-semibold text-foreground">{item.title}</h4>
          <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineComponent;
