import { useEffect, useRef } from "react";

const StockDio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://www.stockdio.com/ticker/widget.js";
      script.async = true;
      script.setAttribute("data-ticker", "ADY.V;ADYRF");
      script.setAttribute("data-api-key", "2FB2EC30D32C4B3390E328CE8F25C1BC");
      script.setAttribute("data-display", "ticker");
      script.setAttribute("data-culture", "English-US");
      script.setAttribute("data-palette", "gray");
      script.setAttribute("data-font-color", "ffffff");
      script.setAttribute("data-background-color", "0F172A");
      script.setAttribute("data-speed", "50");
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full bg-[#0F172A] border-b border-white/10 flex items-center overflow-hidden">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default StockDio;
