const StockdioTicker = () => {
  // 1. You will need to get a free App Key from stockdio.com
  const appKey = "2FB2EC30D32C4B3390E328CE8F25C1BC";

  // 2. Define your symbols separated by semicolons (;)
  // Stockdio uses standard commodity codes (GC = Gold, HG = Copper)
  // You can prefix exchanges with a colon (e.g., TSXV:ADY)
  const symbols = "OANDA:XAUUSD;CAPITALCOM:COPPER;TSXV:ADY;FRA: 701.F";

  // 3. Pick your favorite layout from the page you linked (1 through 14)
  const layoutType = 12; // Change this number to match the layout you liked best!

  // 4. Construct the Stockdio API URL
  const iframeSrc = `https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=${appKey}&symbols=${symbols}&layoutType=${layoutType}&palette=Financial-Light&width=100%25`;

  return (
    // The wrapper ensures the iframe takes up the full width and hides any scrollbars
    <div className="w-full bg-[#0F172A] border-b border-white/10 flex items-center h-16 overflow-hidden">
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        title="Stockdio Live Ticker"
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default StockdioTicker;
