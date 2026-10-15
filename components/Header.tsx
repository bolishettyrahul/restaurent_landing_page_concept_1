"use client";

import { useEffect, useState } from "react";
import { contact, brandName } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./Header.module.css";

const links = [
  { href: "#voyage", label: "The voyage" },
  { href: "#fares", label: "Prices" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "Bar" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label={`${brandName}, back to top`}>
          <Icon name="compass" />
          <span>{brandName}</span>
        </a>
        <nav aria-label="Sections" className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={contact.phoneHref} className={styles.call} aria-label={`Call ${contact.phoneDisplay}`}>
          <Icon name="phone" />
          <span>{contact.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
