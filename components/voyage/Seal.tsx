// Wax seal: irregular puddled rim, darker pooled edge, raised inner ring,
// pressed numeral or emblem, one soft highlight.

function puddle(cx: number, cy: number, r: number, seed: number) {
  const n = 48;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    // Deterministic wobble: a few low-frequency waves, phase-shifted per seal.
    const wobble =
      Math.sin(a * 3 + seed) * 1.8 + Math.sin(a * 5 + seed * 2.1) * 1.1 + Math.sin(a * 11 + seed * 0.7) * 0.6;
    const rr = r + wobble;
    return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
  });
  // Smooth closed curve through the points (quadratic midpoints).
  let d = "";
  pts.forEach(([x, y], i) => {
    const [nx, ny] = pts[(i + 1) % n];
    const mx = ((x + nx) / 2).toFixed(2);
    const my = ((y + ny) / 2).toFixed(2);
    d += i === 0 ? `M${mx} ${my}` : ` Q${x.toFixed(2)} ${y.toFixed(2)} ${mx} ${my}`;
  });
  const [x0, y0] = pts[0];
  const [x1, y1] = pts[1];
  return `${d} Q${x0.toFixed(2)} ${y0.toFixed(2)} ${((x0 + x1) / 2).toFixed(2)} ${((y0 + y1) / 2).toFixed(2)}Z`;
}

const FLAME =
  "M30 18c3 5 8 8 8 14a8 8 0 0 1-16 0c0-3 1.5-5 3-6.5 0 2.5 1 4 2.5 4.5-1-4 .5-8 2.5-12Z";

type SealProps = {
  label: string;
  emblem?: "flame";
  seed?: number;
  className?: string;
  "data-stamp"?: boolean;
};

export function Seal({ label, emblem, seed = 1, className, ...rest }: SealProps) {
  const id = `seal-${seed}-${emblem ?? "n"}`;
  return (
    <span className={className} aria-hidden="true" {...rest}>
      <svg viewBox="0 0 60 60">
        <defs>
          <radialGradient id={id} cx="40%" cy="35%" r="70%">
            <stop offset="0" stopColor="#d9482a" />
            <stop offset="0.7" stopColor="var(--chilli)" />
            <stop offset="1" stopColor="#7d1f0e" />
          </radialGradient>
        </defs>
        <path d={puddle(30, 30, 26, seed)} fill="#7d1f0e" transform="translate(0.8 1.4)" />
        <path d={puddle(30, 30, 26, seed)} fill={`url(#${id})`} />
        <circle cx="30" cy="30" r="18.5" fill="none" stroke="#7d1f0e" strokeWidth="2.4" />
        <circle cx="29.4" cy="29.3" r="18.5" fill="none" stroke="#f07a5a" strokeWidth="0.9" opacity="0.7" />
        {emblem === "flame" ? <path d={FLAME} fill="#7d1f0e" transform="translate(0 -3)" /> : null}
        <ellipse cx="21" cy="17" rx="5" ry="2.4" fill="#fff" opacity="0.28" transform="rotate(-30 21 17)" />
      </svg>
      <span>{label}</span>
    </span>
  );
}
