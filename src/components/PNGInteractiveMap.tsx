import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pngMap from "@/assets/png-map.png";

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
    top: 28,
    to: "/projects/feni",
    blurb: "Tier 1 gold-copper discovery target on the Lihir trend.",
  },
  {
    id: "fergusson",
    name: "Fergusson Island",
    province: "Milne Bay Province",
    left: 60,
    top: 78,
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
      <div className="relative w-full" style={{ aspectRatio: "640 / 480" }}>
        {/* Base map image */}
        <img
          src={pngMap}
          alt="Map of Papua New Guinea showing Adyton's Feni Island and Fergusson Island projects"
          className="absolute inset-0 w-full h-full object-contain select-none"
          style={{
            filter: "brightness(0) saturate(100%) invert(24%) sepia(28%) saturate(1100%) hue-rotate(160deg) brightness(92%) contrast(88%)",
            opacity: 0.85,
          }}
          draggable={false}
        />

        {/* Country label */}
        <div
          className="absolute pointer-events-none font-display font-semibold tracking-[0.25em] uppercase text-xs md:text-sm"
          style={{ left: "4%", bottom: "6%", color: "hsl(var(--primary))", opacity: 0.55 }}
        >
          Papua New Guinea
        </div>

        {/* Lihir reference (non-interactive) */}
        <div
          className="absolute pointer-events-none flex items-center gap-1.5"
          style={{ left: "76%", top: "22%", opacity: 0.6 }}
        >
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: "hsl(var(--primary))" }}
          />
          <span
            className="text-[10px] md:text-[11px] font-body"
            style={{ color: "hsl(var(--primary))" }}
          >
            Lihir (Newmont)
          </span>
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
                  background: "#C9A84C",
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
                  background: "rgba(201, 168, 76, 0.25)",
                }}
                aria-hidden="true"
              />
              {/* Dot */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
                style={{
                  width: isHover ? 16 : 12,
                  height: isHover ? 16 : 12,
                  background: "#C9A84C",
                  border: "2px solid hsl(var(--primary))",
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
            </button>
          );
        })}
      </div>

      {/* Tooltip / details panel */}
      <div
        className="absolute left-4 bottom-4 right-4 md:right-auto md:max-w-sm rounded-md p-4 backdrop-blur-sm"
        style={{
          background: "hsl(var(--background) / 0.92)",
          border: "1px solid hsl(var(--light-border))",
          color: "hsl(var(--foreground))",
        }}
      >
        {hovered ? (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold font-body mb-1">
              {hovered.province}
            </p>
            <h3 className="font-display font-bold text-lg text-foreground mb-1">{hovered.name}</h3>
            <p className="text-sm text-foreground/70 font-body mb-2">{hovered.blurb}</p>
            <p className="text-xs text-primary font-body font-semibold">Click to explore →</p>
          </>
        ) : (
          <p className="text-sm font-body text-foreground/70">
            Hover or tap a <span className="font-semibold text-primary">gold marker</span> to view Adyton's project islands.
          </p>
        )}
      </div>
    </div>
  );
};

export default PNGInteractiveMap;
