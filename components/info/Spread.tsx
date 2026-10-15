"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { spread } from "@/content/site";
import styles from "./Spread.module.css";

export function Spread() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent) {
    const last = spread.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const course = spread[active];

  return (
    <section id="menu" className={styles.spread} aria-labelledby="menu-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 id="menu-title">What’s on the table</h2>
          <p className="lede">
            A taste of today’s spread. Dishes rotate with the season, and Hyderabad’s favourites never leave.
          </p>
          <p className={styles.legend}>
            <span><span className="diet diet-veg" aria-hidden="true" /> Vegetarian</span>
            <span><span className="diet diet-nonveg" aria-hidden="true" /> Non-vegetarian</span>
          </p>
          <figure className={styles.photo}>
            <Image src="/images/demo/paneer.webp" alt="Paneer tikka with three dipping sauces" fill sizes="(min-width: 900px) 40vw, 90vw" />
            <figcaption className="sample-tag">Sample photo</figcaption>
          </figure>
        </div>

        <div>
          <div role="tablist" aria-label="Courses" className={styles.tabs} onKeyDown={onKey}>
            {spread.map((c, i) => (
              <button
                key={c.course}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === active}
                aria-controls="course-panel"
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                onClick={() => setActive(i)}
              >
                {c.course}
              </button>
            ))}
          </div>

          <ul id="course-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className={styles.items} key={course.course}>
            {course.items.map((item) => (
              <li key={item.name}>
                <span className={`diet diet-${item.diet}`} role="img" aria-label={item.diet === "veg" ? "Vegetarian" : "Non-vegetarian"} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
