import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/hero/Hero";
import { Voyage } from "@/components/voyage/Voyage";
import { Fares } from "@/components/fares/Fares";
import { Spread } from "@/components/info/Spread";
import { Bar } from "@/components/info/Bar";
import { Occasions } from "@/components/info/Occasions";
import { Visit } from "@/components/info/Visit";
import { Footer } from "@/components/Footer";
import { MobileDock } from "@/components/MobileDock";
import { brandName, contact, cuisines, fares, siteUrl, timings } from "@/content/site";

const prices = fares.map((f) => f.price);

// Restaurant structured data, generated from the content file. Never add
// aggregateRating: there are no real reviews to back it.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: brandName,
  url: siteUrl,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  servesCuisine: cuisines,
  priceRange: `₹${Math.min(...prices)}–₹${Math.max(...prices)}`,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLines[0],
    addressLocality: contact.locality,
    addressRegion: contact.region,
    addressCountry: "IN",
  },
  openingHoursSpecification: timings.map((t) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: t.opens,
    closes: t.closes,
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SmoothScroll />
      <Header />
      <main id="top">
        <Hero />
        <Voyage />
        <Fares />
        <Spread />
        <Bar />
        <Occasions />
        <Visit />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
