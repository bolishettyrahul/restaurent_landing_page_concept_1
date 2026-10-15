import Image from "next/image";
import { occasions, whatsappLink, brandName } from "@/content/site";
import styles from "./Sections.module.css";

export function Occasions() {
  return (
    <section id="occasions" className={styles.occasions} aria-labelledby="occasions-title">
      <div className={`container ${styles.occGrid}`}>
        <div className={styles.occHead}>
          <h2 id="occasions-title">Bring the whole crew</h2>
          <p className="lede">
            Birthdays, team lunches from the IT corridor, or Sunday with three generations at one long table.
          </p>
          <figure className={styles.occPhoto}>
            <Image src="/images/demo/jamun.webp" alt="Two gulab jamun in syrup with a spoon" fill sizes="(min-width: 900px) 35vw, 90vw" />
            <figcaption className="sample-tag">Sample photo</figcaption>
          </figure>
        </div>
        <ul className={styles.occList}>
          {occasions.map((o) => (
            <li key={o.name}>
              <h3>{o.name}</h3>
              <p>{o.line}</p>
              <a
                href={whatsappLink(`Hi ${brandName}! I'm planning a ${o.name.toLowerCase().replace(/s$/, "")} with you.`)}
                target="_blank"
                rel="noopener"
              >
                Plan it on WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
