// Lateen-rigged dhow: raked mast, long angled yard, one triangular sail with seams.

const INK = { stroke: "var(--ink)", strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

export function Dhow() {
  return (
    <g>
      {/* Hull: low bow, high carved stern */}
      <path
        d="M1046 708 C1080 716 1210 716 1268 706 L1296 680 L1302 694 C1296 724 1270 746 1230 750 L1112 750 C1080 744 1058 728 1046 708Z"
        fill="#6b3a1f"
        {...INK}
      />
      <path d="M1068 722 H1272" fill="none" stroke="var(--marigold)" strokeWidth={3} />
      <g fill="var(--marigold)">
        {[1092, 1124, 1156, 1188, 1220, 1250].map((x) => (
          <circle key={x} cx={x} cy={734} r={3} />
        ))}
      </g>
      {/* Mast, raked forward */}
      <path d="M1188 712 L1170 548" fill="none" {...INK} strokeWidth={5} />
      {/* Lateen sail hung from the yard */}
      <path d="M1074 612 L1262 486 L1246 700 C1180 690 1120 660 1074 612Z" fill="var(--rice)" {...INK} />
      <path d="M1124 648 L1252 560" fill="none" stroke="var(--chilli)" strokeWidth={14} strokeLinecap="butt" />
      <g fill="none" stroke="var(--ink)" strokeWidth={1.2} opacity={0.55}>
        <path d="M1110 588 L1238 690" />
        <path d="M1150 561 L1242 640" />
        <path d="M1192 533 L1246 586" />
      </g>
      {/* Yard */}
      <path d="M1060 622 L1276 476" fill="none" {...INK} strokeWidth={4} />
      {/* Pennant */}
      <path d="M1276 476 l26 -2 -20 12Z" fill="var(--chilli)" {...INK} strokeWidth={2} />
      {/* Sailor at the stern */}
      <g fill="var(--ink)">
        <circle cx={1262} cy={680} r={6} />
        <path d="M1255 704 l3 -18 h8 l3 18Z" />
      </g>
    </g>
  );
}
