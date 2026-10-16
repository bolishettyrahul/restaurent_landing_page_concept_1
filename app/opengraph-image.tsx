import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brandName, contact, fares } from "@/content/site";

export const alt = `${brandName}: unlimited buffet in ${contact.locality}, ${contact.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Built from content/site.ts, so each prospect's share card updates with the data.
export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/demo/og-biryani.jpg"));
  const lowest = Math.min(...fares.map((f) => f.price));

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f2a51f", color: "#2b1b10" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 600, padding: "0 64px" }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#083f45" }}>{brandName}</div>
          <div style={{ marginTop: 24, fontSize: 92, lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 700 }}>
            {`Buffet from ₹${lowest}`}
          </div>
          <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.3 }}>
            {`Unlimited, with live counters. ${contact.locality}, ${contact.city}.`}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
        <img src={`data:image/jpeg;base64,${photo.toString("base64")}`} width={600} height={630} alt="" />
      </div>
    ),
    size,
  );
}
