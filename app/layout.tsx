import type { Metadata, Viewport } from "next";
import { Mukta, Rozha_One } from "next/font/google";
import { brandName } from "@/content/site";
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

export const metadata: Metadata = {
  title: `${brandName} · All Aboard`,
  description:
    "A multi-cuisine buffet voyage with six live counters on the 5th floor of Sarath City Capital Mall, Kondapur, Hyderabad.",
};

export const viewport: Viewport = {
  themeColor: "#f2a51f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
