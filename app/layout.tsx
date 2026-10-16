import type { Metadata, Viewport } from "next";
import { Mukta, Rozha_One } from "next/font/google";
import { brandName, contact, fares, siteUrl, CONCEPT_MODE } from "@/content/site";
import "./globals.css";

const display = Rozha_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const text = Mukta({
  variable: "--font-text",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const [veg, nonVeg] = fares.map((f) => f.price);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${CONCEPT_MODE ? "Concept · " : ""}${brandName} | Buffet in ${contact.locality} from ₹${veg}`,
  description: `Unlimited multi-cuisine buffet with live counters in ${contact.locality}, ${contact.city}. Veg ₹${veg}, non-veg ₹${nonVeg}. Lunch and dinner, all 7 days. Book on WhatsApp.`,
  alternates: { canonical: "/" },
  robots: CONCEPT_MODE ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: { type: "website", locale: "en_IN", siteName: brandName, url: "/" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f2a51f",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
