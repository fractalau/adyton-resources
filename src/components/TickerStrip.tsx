import { TrendingUp, TrendingDown } from "lucide-react";

const tickers = [
  { label: "Gold", value: "$2,340.50", change: "+1.2%", up: true, icon: "🟡" },
  { label: "Copper", value: "$4.28", change: "+0.8%", up: true, icon: "🟠" },
  { label: "TSXV: ADY", value: "C$0.405", change: "+3.8%", up: true },
  { label: "OTC: ADYRF", value: "$0.30", change: "", up: true },
  { label: "FSE: 701GR", value: "€0.28", change: "", up: true },
];

const TickerItem = ({ t }: { t: (typeof tickers)[0] }) => (
  <div className="flex items-center gap-2 shrink-0 px-4">
    {t.icon && <span>{t.icon}</span>}
    <span className="text-foreground/60 font-semibold tracking-wide font-mono">{t.label}</span>
    <span className="text-foreground font-bold font-mono">{t.value}</span>
    {t.change && (
      <span className={`flex items-center gap-0.5 font-semibold font-mono ${t.up ? "text-green-400" : "text-red-400"}`}>
        {t.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {t.change}
      </span>
    )}
  </div>
);

const TickerStrip = () => (
  <div className="ticker-strip overflow-hidden">
    <div className="flex items-center py-1.5 text-xs animate-ticker-scroll whitespace-nowrap w-max">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center">
          {tickers.map((t) => (
            <TickerItem key={`${i}-${t.label}`} t={t} />
          ))}
          <span className="text-foreground/30 px-4 shrink-0 font-mono">
            as of {new Date().toLocaleDateString()}
          </span>
          <span className="text-foreground/10 px-2">|</span>
        </div>
      ))}
    </div>
  </div>
);

export default TickerStrip;
