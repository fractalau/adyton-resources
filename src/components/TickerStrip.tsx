import { TrendingUp, TrendingDown } from "lucide-react";

const tickers = [
  { label: "GOLD", value: "2,340.50", change: "+1.2%", up: true },
  { label: "COPPER", value: "4.28", change: "+0.8%", up: true },
  { label: "TSXV: ADY", value: "$0.085", change: "-2.3%", up: false },
];

const TickerItem = ({ t }: { t: typeof tickers[0] }) => (
  <div className="flex items-center gap-2 shrink-0 px-4">
    <span className="text-muted-foreground font-semibold tracking-wide">{t.label}</span>
    <span className="text-foreground font-bold">{t.value}</span>
    <span className={`flex items-center gap-0.5 font-semibold ${t.up ? "text-green-500" : "text-red-400"}`}>
      {t.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
      {t.change}
    </span>
  </div>
);

const TickerStrip = () => (
  <div className="bg-background border-b border-border overflow-hidden">
    <div className="flex items-center py-1.5 text-xs animate-ticker-scroll whitespace-nowrap w-max">
      {/* Duplicate content for seamless loop */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center">
          {tickers.map((t) => (
            <TickerItem key={`${i}-${t.label}`} t={t} />
          ))}
          <span className="text-muted-foreground/60 px-4 shrink-0">
            Data may be delayed · {new Date().toLocaleDateString()}
          </span>
          <span className="text-muted-foreground/20 px-2">|</span>
        </div>
      ))}
    </div>
  </div>
);

export default TickerStrip;
