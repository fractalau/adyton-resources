import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Quote = {
  symbol: string;
  label: string;
  name: string;
  price: number | null;
  currency: string;
  unit?: string;
};

const formatPrice = (q: Quote) => {
  if (q.price == null) return "—";
  const digits = q.price < 10 ? 3 : 2;
  return q.price.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const PriceTicker = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("fetch-ticker-prices");
        if (error || cancelled) return;
        if (data?.quotes) setQuotes(data.quotes as Quote[]);
      } catch {
        /* silent */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (quotes.length === 0) return null;

  return (
    <div className="flex-1 flex items-center justify-start gap-4">
      {quotes.map((q) => (
        <div
          key={q.symbol}
          className="flex items-baseline font-mono whitespace-nowrap text-xs border border-slate-800 border-solid rounded-xl gap-0 overflow-hidden"
          style={{ color: "#1b4e6a" }}
        >
          <span className="font-semibold tracking-wide text-slate-50 bg-slate-700 px-[5px] py-[2.5px] rounded-none text-xs">{q.label}</span>
          <span className="tabular-nums bg-slate-50 text-slate-800 px-[5px] py-[2.5px] text-xs">
            {q.currency === "CAD" ? "C$" : "$"}
            {formatPrice(q)}
            {q.unit ? <span className="tabular-nums bg-slate-50 text-slate-800 opacity-70 ml-0.5">{q.unit}</span> : null}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PriceTicker;
