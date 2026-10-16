"use client";

import { useRef } from "react";
import Image from "next/image";
import { ports } from "@/content/site";
import { useSail } from "./useSail";
import { Seal } from "./Seal";
import styles from "./Voyage.module.css";

export function Voyage() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const routeBase = useRef<SVGPathElement>(null);
  const routeDraw = useRef<SVGPathElement>(null);

  useSail(section, track, routeBase, routeDraw);

  return (
    <section id="voyage" ref={section} className={`${styles.voyage} on-dark`} aria-labelledby="voyage-title">
      <div ref={track} className={styles.track}>
        <svg className={styles.route} aria-hidden="true">
          <path ref={routeBase} className={styles.routeBase} />
          <path ref={routeDraw} className={styles.routeDraw} />
        </svg>

        <div className={styles.intro}>
          <h2 id="voyage-title">Seven ports. One line.</h2>
          <p className="lede">
            Every live counter is a port of call. Start at the biryani handis of Hyderabad, sail past the grill,
            the chaat carts and the wok fires, and finish where every child wants to end up: Dessert Island.
          </p>
          <p className={styles.hint}>Scroll to set sail</p>
        </div>

        <ol className={styles.ports}>
          {ports.map((p, i) => (
            <li key={p.id} className={styles.port} data-port>
              <figure className={styles.photo} data-photo>
                <div className={styles.frame}>
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 900px) 30vw, 90vw" />
                </div>
                <figcaption className="sample-tag">Sample photo</figcaption>
                {p.live ? <Seal className={styles.live} label="Live" emblem="flame" seed={i + 4} /> : null}
              </figure>
              <div className={styles.portText}>
                <Seal className={styles.stamp} label={String(i + 1)} seed={i + 1} data-stamp />
                <h3 data-rise>
                  <span className="visually-hidden">Port {i + 1}: </span>
                  {p.name}
                </h3>
                <p className={styles.cuisine} data-rise>
                  {p.cuisine}
                </p>
                <p data-rise>{p.line}</p>
                <ul className={styles.dishes} data-rise>
                  {p.dishes.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.outro}>
          <p className={styles.outroTitle}>Back in harbour, very full.</p>
          <p>One price takes you through every port.</p>
          <a href="#fares" className="btn btn-primary">
            See the prices
          </a>
        </div>
      </div>
    </section>
  );
}
