// Illustrated sunrise harbour in inked, hand-coloured layers: HITEC towers, Charminar,
// a ghat with a family waving off a lateen dhow. Each <g data-layer> moves at its own
// depth on scroll (see Hero.tsx).
import { Charminar } from "./scene/Charminar";
import { Dhow } from "./scene/Dhow";
import { Shore } from "./scene/Shore";

const INK = { stroke: "var(--ink)", strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

function waveRow(y: number, amp: number, len: number, width = 1800) {
  let d = `M-100 ${y}`;
  for (let x = -100; x < width; x += len) {
    d += ` q ${len / 4} ${-amp} ${len / 2} 0 t ${len / 2} 0`;
  }
  return d;
}

// Matchbox-label sun: disc ringed by alternating long and short rays.
function sunRays(cx: number, cy: number, r1: number, r2: number, n = 28) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const len = i % 2 ? r2 * 0.82 : r2;
    const w = 0.05;
    const p = (ang: number, r: number) => `${(cx + Math.cos(ang) * r).toFixed(1)} ${(cy + Math.sin(ang) * r).toFixed(1)}`;
    return `M${p(a - w, r1)} L${p(a, len)} L${p(a + w, r1)}Z`;
  }).join(" ");
}

function Towers() {
  const towers = [
    { x: 1150, y: 430, w: 46 },
    { x: 1202, y: 380, w: 40 },
    { x: 1248, y: 470, w: 54 },
    { x: 1360, y: 420, w: 44 },
    { x: 1410, y: 500, w: 60 },
  ];
  return (
    <g fill="#eaa955" {...INK} strokeWidth={2}>
      {towers.map((t) => (
        <g key={t.x}>
          <rect x={t.x} y={t.y} width={t.w} height={630 - t.y} />
          {Array.from({ length: Math.floor((630 - t.y) / 22) }, (_, i) => (
            <path key={i} d={`M${t.x + 7} ${t.y + 14 + i * 22} H${t.x + t.w - 7}`} strokeWidth={1.2} opacity={0.5} />
          ))}
        </g>
      ))}
    </g>
  );
}

export function HarbourScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--ink)" strokeWidth="1.4" opacity="0.45" />
        </pattern>
      </defs>

      <g data-layer="sky">
        <rect width="1600" height="900" fill="var(--marigold)" />
        <rect y="470" width="1600" height="200" fill="var(--marigold-soft)" opacity="0.55" />
        <g fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.18">
          {[150, 210, 270, 330].map((y) => (
            <path key={y} d={`M${1050 + (y % 60)} ${y} h${320 - y / 3}`} strokeDasharray="2 10" />
          ))}
        </g>
      </g>

      <g data-layer="sun">
        <path d={sunRays(1320, 600, 168, 250)} fill="#fbd77a" opacity="0.8" />
        <circle cx="1320" cy="600" r="160" fill="#fde7a6" stroke="var(--ink)" strokeWidth="2.5" />
        <circle cx="1320" cy="600" r="132" fill="none" stroke="var(--marigold-deep)" strokeWidth="2" strokeDasharray="3 9" />
      </g>

      <g data-layer="birds" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" opacity="0.75">
        <path d="M1100 250 q12 -12 24 0 q12 -12 24 0" />
        <path d="M1170 300 q9 -9 18 0 q9 -9 18 0" />
        <path d="M1050 320 q7 -7 14 0 q7 -7 14 0" />
      </g>

      <g data-layer="towers">
        <Towers />
      </g>

      <g data-layer="city">
        <Charminar />
        <Shore />
      </g>

      <g data-layer="sea">
        <rect y="640" width="1600" height="300" fill="var(--peacock)" stroke="var(--ink)" strokeWidth="2.5" />
        <g stroke="var(--peacock-light)" strokeWidth="3" fill="none">
          <path d={waveRow(675, 6, 90)} />
          <path d={waveRow(722, 8, 130)} />
          <path d={waveRow(778, 10, 170)} />
        </g>
        <g fill="none" stroke="var(--ink)" strokeWidth="1.5" opacity="0.35">
          <path d={waveRow(700, 5, 110)} />
          <path d={waveRow(752, 7, 150)} />
        </g>
        <g stroke="#fde7a6" strokeWidth="5" strokeLinecap="round" opacity="0.85">
          <path d="M1240 660h180 M1270 684h130 M1290 708h90 M1310 734h50" />
        </g>
      </g>

      <path
        data-layer="route"
        d="M690 652 C 780 700, 900 760, 1010 744 S 1300 712, 1640 790"
        fill="none"
        stroke="var(--rice)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 14"
      />

      <g data-layer="boat">
        <Dhow />
      </g>

      <g data-layer="front">
        <path d={`${waveRow(822, 18, 260)} V 960 H -100 Z`} fill="var(--peacock-deep)" stroke="var(--ink)" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
