"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fares, brandName } from "@/content/site";
import { HarbourScene } from "./HarbourScene";
import { BoardingPass } from "./BoardingPass";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

// Scroll depth per scene layer: [y travel in px, extra x travel]
const depths: Record<string, [number, number]> = {
  sky: [0, 0],
  sun: [-140, 0],
  birds: [-90, -60],
  towers: [40, 0],
  city: [70, 0],
  sea: [90, 0],
  route: [90, 0],
  boat: [110, 220],
  front: [160, 0],
};

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const lowestFare = Math.min(...fares.map((f) => f.price));

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.from("[data-reveal]", {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.08,
          delay: 0.1,
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: reduce ? false : 0.6 },
      });
      if (reduce) return;

      for (const [layer, [y, x]] of Object.entries(depths)) {
        tl.to(el.querySelector(`[data-layer="${layer}"]`), { y, x }, 0);
      }
      tl.to(el.querySelector('[data-layer="route"]'), { strokeDashoffset: -420 }, 0)
        .to(`.${styles.copy}`, { y: -120, opacity: 0.2 }, 0);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={`${styles.hero} on-dark`} aria-labelledby="hero-title">
      <div className={styles.scene}>
        <HarbourScene />
      </div>

      <div className={`container ${styles.copy}`}>
        <p className={styles.quote} data-reveal>
          “Set sail from Hyderabad. Seven ports, one table, and nowhere you’d rather be.”
        </p>
        <h1 id="hero-title" className={styles.title} data-reveal>
          All Aboard.
        </h1>
        <p className={styles.sub} data-reveal>
          {brandName}: a buffet voyage on the 5th floor of Sarath City Capital Mall, from ₹{lowestFare},
          lunch and dinner.
        </p>
        <div className={styles.actions} data-reveal>
          <a href="#book" className="btn btn-primary">
            Book a table
          </a>
          <a href="#voyage" className="btn btn-ghost">
            See the voyage
          </a>
        </div>
      </div>

      <div className={`container ${styles.dock}`}>
        <BoardingPass />
      </div>
    </section>
  );
}
