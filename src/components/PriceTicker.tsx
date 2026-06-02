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
    const load = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("fetch-ticker-prices");
        if (error || cancelled) return;
        if (data?.quotes) setQuotes(data.quotes as Quote[]);
      } catch {
        /* silent */
      }
    };
    load();
    const id = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (quotes.length === 0) return null;

  // Duplicate for seamless marquee loop
  const items = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden flex-1">
      <div className="flex gap-10 animate-[ticker-scroll_40s_linear_infinite] whitespace-nowrap">
        {items.map((q, i) => (
          <div
            key={`${q.symbol}-${i}`}
            className="flex items-baseline gap-2 font-mono text-sm"
            style={{ color: "#1b4e6a" }}
          >
            <span className="font-semibold tracking-wide">{q.label}</span>
            <span className="tabular-nums">
              {q.currency === "USD" ? "$" : ""}
              {formatPrice(q)}
              {q.unit ? <span className="opacity-70 ml-0.5">{q.unit}</span> : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;
