interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TagChip = ({ label, active = false, onClick }: TagChipProps) => (
  <span
    onClick={onClick}
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors ${
      onClick ? "cursor-pointer" : ""
    } ${
      active
        ? "bg-primary/20 text-primary border border-primary/30"
        : "bg-muted text-muted-foreground border border-border"
    }`}
  >
    {label}
  </span>
);

export default TagChip;
