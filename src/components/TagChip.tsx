interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TagChip = ({ label, active = false, onClick }: TagChipProps) => (
  <span
    onClick={onClick}
    className={`inline-flex items-center px-2 py-px rounded text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors ${
      onClick ? "cursor-pointer" : ""
    } ${
      active
        ? "bg-primary/15 text-primary border border-primary/25"
        : "bg-muted/80 text-muted-foreground/70 border border-border/60"
    }`}
  >
    {label}
  </span>
);

export default TagChip;
