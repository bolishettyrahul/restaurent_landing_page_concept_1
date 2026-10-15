// Charminar, front elevation: four equal corner minarets (rear pair set back),
// great central arch, two-storey arcade, inked and hatched on the shadow side.

const INK = { stroke: "var(--ink)", strokeWidth: 2.5, strokeLinejoin: "round" as const };

function Minaret({ x, top, tone }: { x: number; top: number; tone: string }) {
  const base = 600;
  return (
    <g fill={tone} {...INK}>
      <rect x={x - 13} y={top + 40} width={26} height={base - top - 40} />
      {[top + 150, top + 95, top + 52].map((y) => (
        <g key={y}>
          <rect x={x - 20} y={y} width={40} height={9} rx={2} />
          <path d={`M${x - 18} ${y + 9} h36 l-6 9 h-24Z`} />
        </g>
      ))}
      <rect x={x - 11} y={top + 18} width={22} height={24} />
      <path d={`M${x - 5} ${top + 42} v-14 a5 5 0 0 1 10 0 v14`} fill="var(--marigold-soft)" />
      <path d={`M${x - 16} ${top + 20} q16 -10 32 0`} fill="none" />
      <path d={`M${x - 14} ${top + 18} c-2 -26 28 -26 28 0Z`} />
      <path d={`M${x} ${top - 4} v-22`} fill="none" />
      <circle cx={x} cy={top - 28} r={3} />
    </g>
  );
}

export function Charminar() {
  return (
    <g>
      {/* Rear minarets, set back */}
      <Minaret x={838} top={290} tone="#e9a14b" />
      <Minaret x={962} top={290} tone="#e9a14b" />

      <g fill="var(--marigold-deep)" {...INK}>
        {/* Upper arcade and gallery */}
        <rect x={812} y={380} width={176} height={14} />
        <rect x={806} y={394} width={188} height={42} />
        {/* Main body with the great arch */}
        <path d="M800 446h200v154h-56v-62c0-26-20-46-44-52-24 6-44 26-44 52v62h-56Z" />
        <rect x={792} y={436} width={216} height={12} />
        {/* Plinth steps */}
        <path d="M770 600h260v14h-260Z M760 614h280v22h-280Z" />
      </g>

      {/* Arcade arches */}
      <g fill="var(--marigold-soft)" {...INK} strokeWidth={2}>
        {[822, 846, 870, 894, 918, 942, 966].map((x) => (
          <path key={x} d={`M${x} 432v-18a6 6 0 0 1 12 0v18Z`} />
        ))}
        {/* Side arches on the body */}
        <path d="M816 590v-56a14 14 0 0 1 28 0v56Z" />
        <path d="M956 590v-56a14 14 0 0 1 28 0v56Z" />
        <path d="M816 500v-28a14 14 0 0 1 28 0v28Z" />
        <path d="M956 500v-28a14 14 0 0 1 28 0v28Z" />
      </g>

      {/* Balustrade marks */}
      <g stroke="var(--ink)" strokeWidth={1.5}>
        {Array.from({ length: 21 }, (_, i) => 816 + i * 8.4).map((x) => (
          <line key={x} x1={x} y1={382} x2={x} y2={392} />
        ))}
      </g>

      {/* Shadow hatching on the right face */}
      <rect x={944} y={446} width={56} height={154} fill="url(#hatch)" />
      <rect x={962} y={394} width={32} height={42} fill="url(#hatch)" />

      {/* Front corner minarets */}
      <Minaret x={790} top={270} tone="var(--marigold-deep)" />
      <Minaret x={1010} top={270} tone="var(--marigold-deep)" />
    </g>
  );
}
