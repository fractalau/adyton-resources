import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Island = {
  id: string;
  name: string;
  province: string;
  cx: number;
  cy: number;
  to: string;
  blurb: string;
};

const islands: Island[] = [
  {
    id: "feni",
    name: "Feni Island",
    province: "New Ireland Province",
    cx: 770,
    cy: 215,
    to: "/projects/feni",
    blurb: "Tier 1 gold-copper discovery target on the Lihir trend.",
  },
  {
    id: "fergusson",
    name: "Fergusson Island",
    province: "Milne Bay Province",
    cx: 745,
    cy: 470,
    to: "/projects/fergusson",
    blurb: "Near-term cash flow — Wapolu & Gameta deposits.",
  },
];

// Stylised PNG mainland + island outlines (decorative, not to scale)
const PNG_PATH =
  "M120,300 C150,250 220,225 300,235 C360,243 410,265 470,260 C540,255 595,235 650,250 C705,265 735,295 760,330 C780,360 775,395 745,415 C705,440 645,440 600,425 C555,410 515,420 470,435 C415,455 360,470 305,460 C250,450 205,425 170,400 C140,378 115,345 120,300 Z";

const NEW_BRITAIN_PATH =
  "M620,360 C680,355 740,365 770,385 C790,400 780,420 745,425 C695,430 645,420 615,400 C595,388 595,370 620,360 Z";

const PNGInteractiveMap = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<Island | null>(null);

  return (
    <div
      className="rounded-lg overflow-hidden relative"
      style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
    >
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto block"
        role="img"
        aria-label="Interactive map of Papua New Guinea showing Adyton's Feni Island and Fergusson Island projects"
      >
        {/* Sea */}
        <rect width="900" height="600" fill="hsl(var(--off-white))" />

        {/* Subtle grid */}
        <g opacity="0.08" stroke="hsl(var(--primary))" strokeWidth="0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 75} y1="0" x2={i * 75} y2="600" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 75} x2="900" y2={i * 75} />
          ))}
        </g>

        {/* PNG Mainland */}
        <path
          d={PNG_PATH}
          fill="hsl(var(--primary) / 0.18)"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />
        {/* New Britain */}
        <path
          d={NEW_BRITAIN_PATH}
          fill="hsl(var(--primary) / 0.18)"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />

        {/* Country label */}
        <text
          x="380"
          y="350"
          fontFamily="Playfair Display, serif"
          fontSize="22"
          fontWeight="600"
          fill="hsl(var(--primary))"
          opacity="0.55"
        >
          PAPUA NEW GUINEA
        </text>

        {/* Lihir reference (non-interactive) */}
        <g opacity="0.55">
          <circle cx="730" cy="245" r="4" fill="hsl(var(--primary))" />
          <text
            x="740"
            y="240"
            fontFamily="DM Sans, sans-serif"
            fontSize="11"
            fill="hsl(var(--primary))"
          >
            Lihir (Newmont)
          </text>
        </g>

        {/* Interactive island markers */}
        {islands.map((isle) => {
          const isHover = hovered?.id === isle.id;
          return (
            <g
              key={isle.id}
              role="button"
              tabIndex={0}
              aria-label={`${isle.name}, ${isle.province}. View project page.`}
              onClick={() => navigate(isle.to)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(isle.to);
                }
              }}
              onMouseEnter={() => setHovered(isle)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(isle)}
              onBlur={() => setHovered(null)}
              style={{ cursor: "pointer" }}
              className="focus:outline-none"
            >
              {/* Pulse ring */}
              <circle
                cx={isle.cx}
                cy={isle.cy}
                r={isHover ? 26 : 20}
                fill="hsl(var(--gold, 42 56% 54%))"
                opacity="0.18"
                style={{ transition: "all 200ms ease" }}
              />
              <circle
                cx={isle.cx}
                cy={isle.cy}
                r={isHover ? 14 : 10}
                fill="#C9A84C"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                style={{ transition: "all 200ms ease" }}
              />
              <text
                x={isle.cx + 18}
                y={isle.cy + 4}
                fontFamily="DM Sans, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="hsl(var(--primary))"
              >
                {isle.name}
              </text>
              <text
                x={isle.cx + 18}
                y={isle.cy + 20}
                fontFamily="DM Sans, sans-serif"
                fontSize="11"
                fill="hsl(var(--primary))"
                opacity="0.7"
              >
                {isle.province}
              </text>
            </g>
          );
        })}
      </svg>

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
