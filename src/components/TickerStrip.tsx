import { useEffect, useRef } from "react";

const LiveTicker = () => {
  // We use a ref to target the div where the widget will be injected
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This check prevents React StrictMode from injecting the script twice
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
      script.type = "text/javascript";
      script.async = true;

      // Here is where we configure the exact data we want!
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: "OANDA:XAUUSD",
            title: "Gold",
          },
          {
            proName: "CAPITALCOM:COPPER",
            title: "Copper",
          },
          {
            description: "Adyton (TSX-V)",
            proName: "TSXV:ADY",
          },
          {
            description: "Adyton (OTC)",
            proName: "OTC:ADYRF",
          },
        ],
        showSymbolLogo: true,
        colorTheme: "dark", // Matches your dark mode perfectly
        isTransparent: true, // Allows your navy background to show through
        displayMode: "adaptive",
        locale: "en",
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    // The outer wrapper uses your custom Tailwind colors for the background and border
    <div className="w-full border-b border-white/10 flex items-center" style={{ background: "hsl(201 65% 18%)" }}>
      <div className="tradingview-widget-container w-full" ref={containerRef}>
        {/* The script will automatically build the iframe inside this div */}
      </div>
    </div>
  );
};

export default LiveTicker;
