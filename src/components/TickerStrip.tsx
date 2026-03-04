import { TrendingUp, TrendingDown } from "lucide-react";

const tickers = [
  { label: "GOLD", value: "2,340.50", change: "+1.2%", up: true },
  { label: "COPPER", value: "4.28", change: "+0.8%", up: true },
  { label: "TSXV: ADY", value: "$0.085", change: "-2.3%", up: false },
];

const TickerStrip = () => (
  <div className="bg-background border-b border-border">
    <div className="container flex items-center gap-6 py-2 text-xs overflow-x-auto">
      {tickers.map((t) => (
        <div key={t.label} className="flex items-center gap-2 shrink-0">
          <span className="text-muted-foreground font-semibold tracking-wide">{t.label}</span>
          <span className="text-foreground font-bold">{t.value}</span>
          <span className={`flex items-center gap-0.5 font-semibold ${t.up ? "text-green-500" : "text-red-400"}`}>
            {t.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {t.change}
          </span>
        </div>
      ))}
      <span className="ml-auto text-muted-foreground/60 hidden md:inline shrink-0">
        Data may be delayed · {new Date().toLocaleDateString()}
      </span>
    </div>
  </div>
);

export default TickerStrip;
