import { brandName, contact } from "@/content/site";
import styles from "./Sections.module.css";

// Hand-drawn voyage-chart of the neighbourhood. Schematic, not to scale.
export function AreaChart() {
  return (
    <figure className={styles.chart}>
      <svg viewBox="0 0 480 520" role="img" aria-labelledby="chart-title">
        {/* One string: mixed text + expression children in an SVG title break hydration */}
        <title id="chart-title">
          {`Schematic map: ${brandName} is inside ${contact.venue} on the Gachibowli–Miyapur Road, with Miyapur to the north and Gachibowli and HITEC City to the south.`}
        </title>
        <rect width="480" height="520" rx="14" fill="var(--peacock)" />
        <g stroke="var(--peacock-light)" strokeWidth="1" opacity="0.6">
          {[80, 160, 240, 320, 400].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="520" />
          ))}
          {[80, 160, 240, 320, 400, 480].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} />
          ))}
        </g>
        <path d="M250 -10 C 230 140, 270 300, 230 530" stroke="var(--rice)" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M250 -10 C 230 140, 270 300, 230 530" stroke="var(--peacock)" strokeWidth="2" strokeDasharray="10 10" fill="none" />
        <path d="M-10 360 C 120 340, 200 380, 490 330" stroke="var(--rice)" strokeWidth="10" fill="none" opacity="0.7" />
        <rect x="270" y="210" width="130" height="90" rx="8" fill="var(--marigold)" />
        <circle cx="335" cy="255" r="18" fill="var(--chilli)" />
        <circle cx="335" cy="255" r="7" fill="var(--rice)" />
        <g fill="var(--rice)" fontFamily="var(--font-text-stack)" fontWeight="700" fontSize="15">
          <text x="276" y="196">{contact.venue}</text>
          <text x="276" y="322" fontWeight="500" fontSize="14">{`5th floor · ${brandName}`}</text>
          <text x="60" y="50" fontSize="16">Miyapur</text>
          <text x="40" y="478" fontSize="16">Gachibowli · HITEC City</text>
          <text x="30" y="326" fontWeight="500" fontSize="13">Kondapur</text>
          <text transform="translate(212 170) rotate(-86)" fontWeight="500" fontSize="13">Gachibowli–Miyapur Rd</text>
        </g>
        <g stroke="var(--rice)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 60 V 30 M32 38 l8 -8 8 8" />
          <path d="M28 450 v 30 M20 472 l8 8 8 -8" />
        </g>
        <g transform="translate(420 60)" fill="none" stroke="var(--marigold)" strokeWidth="2">
          <circle r="26" />
          <path d="M0 -20 L6 0 L0 20 L-6 0Z" fill="var(--marigold)" />
          <text y="-32" textAnchor="middle" fill="var(--marigold)" stroke="none" fontSize="13" fontWeight="700">N</text>
        </g>
      </svg>
      <figcaption>Schematic, not to scale.</figcaption>
    </figure>
  );
}
