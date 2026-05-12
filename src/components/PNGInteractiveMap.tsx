import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pngMapSvg from "@/assets/png-map.svg?raw";

type Island = {
  id: string;
  name: string;
  province: string;
  // Position as percentage of image (left, top)
  left: number;
  top: number;
  to: string;
  blurb: string;
};

const islands: Island[] = [
  {
    id: "feni",
    name: "Feni Island",
    province: "New Ireland Province",
    left: 82,
    top: 34.6,
    to: "/projects/feni",
    blurb: "Tier 1 gold-copper discovery target on the Lihir trend.",
  },
  {
    id: "fergusson",
    name: "Fergusson Island",
    province: "Milne Bay Province",
    left: 64.5,
    top: 80.5,
    to: "/projects/fergusson",
    blurb: "Near-term cash flow — Wapolu & Gameta deposits.",
  },
];

const PNGInteractiveMap = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<Island | null>(null);

  return (
    <div
      className="rounded-lg overflow-hidden relative"
      style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
    >
      <div className="relative w-full" style={{ aspectRatio: "624 / 438" }}>
        {/* Base map (inline SVG, tinted via currentColor) */}
        <div
          aria-label="Map of Papua New Guinea showing Adyton's Feni Island and Fergusson Island projects"
          role="img"
          className="absolute inset-0 w-full h-full [&_svg]:w-full [&_svg]:h-full [&_path]:fill-current"
          style={{ color: "#3a3a3a", opacity: 0.9 }}
          dangerouslySetInnerHTML={{ __html: pngMapSvg }}
        />

        {/* Country label */}
        <div
          className="absolute pointer-events-none font-display font-semibold tracking-[0.25em] uppercase text-xs md:text-sm"
          style={{ left: "4%", bottom: "6%", color: "hsl(var(--primary))", opacity: 0.55 }}
        >
          Papua New Guinea
        </div>

        {/* Interactive island markers */}
        {islands.map((isle) => {
          const isHover = hovered?.id === isle.id;
          return (
            <button
              key={isle.id}
              type="button"
              aria-label={`${isle.name}, ${isle.province}. View project page.`}
              onClick={() => navigate(isle.to)}
              onMouseEnter={() => setHovered(isle)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(isle)}
              onBlur={() => setHovered(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              style={{ left: `${isle.left}%`, top: `${isle.top}%` }}
            >
              {/* Pulse ring */}
              <span
                className="absolute inset-0 m-auto rounded-full animate-ping"
                style={{
                  width: 28,
                  height: 28,
                  background: "hsl(var(--primary))",
                  opacity: 0.35,
                }}
                aria-hidden="true"
              />
              {/* Halo */}
              <span
                className="block rounded-full transition-all duration-200"
                style={{
                  width: isHover ? 36 : 28,
                  height: isHover ? 36 : 28,
                  background: "hsl(var(--primary) / 0.25)",
                }}
                aria-hidden="true"
              />
              {/* Dot */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
                style={{
                  width: isHover ? 16 : 12,
                  height: isHover ? 16 : 12,
                  background: "hsl(var(--primary))",
                  border: "2px solid #ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
                aria-hidden="true"
              />
              {/* Label */}
              <span
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap text-left"
                aria-hidden="true"
              >
                <span
                  className="block font-body font-bold text-xs md:text-sm leading-tight"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {isle.name}
                </span>
                <span
                  className="block font-body text-[10px] md:text-[11px] leading-tight"
                  style={{ color: "hsl(var(--primary))", opacity: 0.7 }}
                >
                  {isle.province}
                </span>
              </span>

              {/* Hover tooltip — opens above the marker */}
              {isHover && (
                <div
                  role="tooltip"
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 rounded-md p-3 text-left shadow-lg pointer-events-none z-10"
                  style={{
                    background: "hsl(var(--background) / 0.97)",
                    border: "1px solid hsl(var(--light-border))",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold font-body mb-1">
                    {isle.province}
                  </p>
                  <h3 className="font-display font-bold text-base text-foreground mb-1 leading-tight">
                    {isle.name}
                  </h3>
                  <p className="text-xs text-foreground/70 font-body mb-1.5 leading-snug">{isle.blurb}</p>
                  <p className="text-[11px] text-primary font-body font-semibold">Click to explore →</p>
                  {/* Caret */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 top-full block h-2 w-2 rotate-45 -mt-1"
                    style={{
                      background: "hsl(var(--background) / 0.97)",
                      borderRight: "1px solid hsl(var(--light-border))",
                      borderBottom: "1px solid hsl(var(--light-border))",
                    }}
                    aria-hidden="true"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PNGInteractiveMap;
