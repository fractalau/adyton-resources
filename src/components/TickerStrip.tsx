import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const tickers = [
  { label: "Gold", value: "$2,340.50", unit: "USD/oz", change: "+1.2%", up: true },
  { label: "Copper", value: "$4.28", unit: "USD/lb", change: "+0.8%", up: true },
  { label: "TSXV: ADY", value: "$0.085", unit: "", change: "-2.3%", up: false },
];

const TickerStrip = () => (
  <div className="ticker-strip">
    <div className="container flex items-center justify-between py-1.5 text-xs">
      <div className="flex items-center gap-6">
        {tickers.map((t) => (
          <div key={t.label} className="flex items-center gap-2">
            <span className="text-muted-foreground font-medium">{t.label}</span>
            <span className="text-foreground font-semibold">{t.value}</span>
            {t.unit && <span className="text-muted-foreground">{t.unit}</span>}
            <span className={`flex items-center gap-0.5 ${t.up ? "text-green-500" : "text-red-400"}`}>
              {t.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {t.change}
            </span>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-1.5 text-muted-foreground">
        <Clock className="h-3 w-3" />
        <span>Data may be delayed · {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  </div>
);

export default TickerStrip;
