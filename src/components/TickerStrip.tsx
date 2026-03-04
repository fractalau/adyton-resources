import { TrendingUp, TrendingDown } from "lucide-react";

const tickers = [
  { label: "Gold", value: "$2,340", unit: "/oz", change: "+1.2%", up: true },
  { label: "Copper", value: "$4.28", unit: "/lb", change: "+0.8%", up: true },
  { label: "TSXV: ADY", value: "$0.085", unit: "", change: "−2.3%", up: false },
];

const TickerStrip = () => (
  <div className="ticker-strip">
    <div className="container flex items-center justify-between py-1 text-[11px]">
      <div className="flex items-center divide-x divide-border">
        {tickers.map((t) => (
          <div key={t.label} className="flex items-center gap-1.5 px-4 first:pl-0">
            <span className="text-muted-foreground/70">{t.label}</span>
            <span className="text-foreground/80 font-medium tabular-nums">{t.value}</span>
            <span className="text-muted-foreground/50">{t.unit}</span>
            <span className={`flex items-center gap-0.5 tabular-nums ${t.up ? "text-emerald-500/70" : "text-red-400/70"}`}>
              {t.up ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
              {t.change}
            </span>
          </div>
        ))}
      </div>
      <span className="hidden md:block text-muted-foreground/40 text-[10px]">
        Delayed · {new Date().toLocaleDateString()}
      </span>
    </div>
  </div>
);

export default TickerStrip;
