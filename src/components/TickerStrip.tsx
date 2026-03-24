import { TrendingUp, TrendingDown } from "lucide-react";
import pricesData from "@/data/prices.json";

const TickerItem = ({ t }: { t: (typeof pricesData.tickers)[0] }) => (
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
          {pricesData.tickers.map((t) => (
            <TickerItem key={`${i}-${t.label}`} t={t} />
          ))}
          <span className="text-foreground/30 px-4 shrink-0 font-mono">
            as of {pricesData.date}
          </span>
          <span className="text-foreground/10 px-2">|</span>
        </div>
      ))}
    </div>
  </div>
);

export default TickerStrip;
