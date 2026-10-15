"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fares, kidsFare, manifest, whatsappLink, brandName } from "@/content/site";
import { Icon } from "@/components/Icon";
import styles from "./Fares.module.css";

gsap.registerPlugin(ScrollTrigger);

const inr = new Intl.NumberFormat("en-IN");

export function Fares() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(`.${styles.ticket}`, {
        y: 140,
        rotate: (i) => (i % 2 ? 7 : -7),
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 25%", scrub: 0.6 },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="fares" ref={root} className={styles.fares} aria-labelledby="fares-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="fares-title">One fare. Every port.</h2>
          <p className="lede">
            Same price at lunch and dinner, all seven days. Pick your voyage, and the whole route is yours.
          </p>
        </div>

        <div className={styles.tickets}>
          {fares.map((f) => (
            <article key={f.id} className={styles.ticket} aria-labelledby={`fare-${f.id}`}>
              <header className={styles.ticketHead}>
                <span className={`diet diet-${f.diet}`} role="img" aria-label={f.diet === "veg" ? "Vegetarian" : "Non-vegetarian"} />
                <h3 id={`fare-${f.id}`}>{f.name}</h3>
              </header>
              <p className={styles.price}>
                <span className={styles.rupee}>₹</span>
                {inr.format(f.price)}
                <span className={styles.per}>per adult</span>
              </p>
              <p className={styles.note}>{f.note}</p>
              <ul className={styles.includes}>
                {f.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className={`btn btn-primary ${styles.cta}`}
                href={whatsappLink(`Hi ${brandName}! I'd like to book the ${f.name}.`)}
                target="_blank"
                rel="noopener"
              >
                <Icon name="whatsapp" />
                Book the {f.name}
              </a>
            </article>
          ))}
        </div>

        <p className={styles.kids}>
          Children {kidsFare.ages}: <strong>₹{kidsFare.price}</strong>. Bar drinks are charged separately.
        </p>

        <ul className={styles.manifest} aria-label={`${brandName} in numbers`}>
          {manifest.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong> {m.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
