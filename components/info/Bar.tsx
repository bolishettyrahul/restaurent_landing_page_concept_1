import Image from "next/image";
import { whatsappLink, brandName } from "@/content/site";
import styles from "./Sections.module.css";

export function Bar() {
  return (
    <section id="bar" className={`${styles.bar} on-dark`} aria-labelledby="bar-title">
      <div className={`container ${styles.barGrid}`}>
        <figure className={styles.barPhoto}>
          <Image src="/images/demo/cocktail.webp" alt="A red cocktail with an orange twist on the bar counter" fill sizes="(min-width: 900px) 45vw, 90vw" />
          <figcaption className="sample-tag">Sample photo</figcaption>
        </figure>
        <div className={styles.barText}>
          <h2 id="bar-title">The bar on deck</h2>
          <p className="lede">
            Cocktails, chilled beer and mocktails poured to go with the buffet. Something cold for the biryani, something
            sweet for the dessert island.
          </p>
          <p>Bar drinks are priced separately from the buffet fare. Alcohol is served to guests aged 21 and over, with valid ID.</p>
          <a
            className="btn btn-primary"
            href={whatsappLink(`Hi ${brandName}! Could you share the bar menu?`)}
            target="_blank"
            rel="noopener"
          >
            Ask for the bar menu
          </a>
        </div>
      </div>
    </section>
  );
}
