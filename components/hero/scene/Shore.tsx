// Ghat steps with a family waving off the dhow, palms and lamp posts, inked.

const INK = { stroke: "var(--ink)", strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

function Person({ x, h, coat, wave }: { x: number; h: number; coat: string; wave?: boolean }) {
  const top = 628 - h;
  return (
    <g {...INK} strokeWidth={2}>
      <path d={`M${x - 7} 628 L${x - 5} ${top + h * 0.35} H${x + 5} L${x + 7} 628Z`} fill={coat} />
      <circle cx={x} cy={top + h * 0.18} r={h * 0.12} fill="#8a4a24" />
      {wave ? <path d={`M${x + 5} ${top + h * 0.42} l12 -16`} fill="none" /> : null}
    </g>
  );
}

function Palm({ x }: { x: number }) {
  return (
    <g {...INK} fill="var(--peacock)">
      <path d={`M${x} 628 c4 -50 0 -96 -10 -130 h8 c14 34 16 80 10 130Z`} fill="#a85a1e" />
      <path d={`M${x - 6} 500 c-30 -10 -56 2 -66 22 22 -14 46 -14 64 -8Z`} />
      <path d={`M${x - 2} 500 c28 -16 58 -6 70 12 -24 -10 -48 -12 -68 -6Z`} />
      <path d={`M${x - 4} 498 c-6 -26 -26 -40 -48 -40 18 10 34 24 44 42Z`} />
      <path d={`M${x - 2} 498 c10 -24 32 -34 52 -30 -20 6 -36 18 -48 32Z`} />
    </g>
  );
}

export function Shore() {
  return (
    <g>
      {/* Embankment and ghat steps down to the water */}
      <path d="M0 620 H1600 V640 H0Z" fill="var(--marigold-deep)" {...INK} />
      <g fill="#e9a14b" {...INK} strokeWidth={2}>
        <path d="M600 628 h170 v8 h-170Z" />
        <path d="M590 636 h190 v8 h-190Z" />
      </g>
      <Palm x={700} />
      <Palm x={1106} />
      {/* Lamp posts */}
      {[640, 1060].map((x) => (
        <g key={x} {...INK} strokeWidth={2}>
          <path d={`M${x} 628 V560`} fill="none" />
          <path d={`M${x - 8} 560 h16 l-3 -14 h-10Z`} fill="var(--marigold-soft)" />
        </g>
      ))}
      <Person x={620} h={52} coat="var(--chilli)" />
      <Person x={652} h={44} coat="var(--peacock)" wave />
      <Person x={672} h={28} coat="var(--marigold-soft)" wave />
      <Person x={738} h={48} coat="#7a3d8c" />
    </g>
  );
}
