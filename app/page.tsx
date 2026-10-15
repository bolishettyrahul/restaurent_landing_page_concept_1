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

export default function Home() {
  return (
    <>
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
