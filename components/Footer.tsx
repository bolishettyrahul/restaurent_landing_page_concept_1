import { contact, photoCredits, whatsappLink, brandName } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`${styles.footer} on-dark`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.sign}>
          <p className={styles.wordmark}>
            <Icon name="compass" /> {brandName}
          </p>
          <p>A feast of flavours, crafted to perfection.</p>
        </div>
        <ul className={styles.links}>
          <li>
            <a href={contact.phoneHref}><Icon name="phone" /> {contact.phoneDisplay}</a>
          </li>
          <li>
            <a href={whatsappLink(`Hi ${brandName}!`)} target="_blank" rel="noopener">
              <Icon name="whatsapp" /> WhatsApp us
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}><Icon name="mail" /> {contact.email}</a>
          </li>
        </ul>
        <address className={styles.address}>
          {contact.addressLines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </address>
      </div>
      <div className={`container ${styles.small}`}>
        <p>© 2026 {brandName}. Preview build: prices, dishes, timings and food photographs are samples, to be replaced with the restaurant’s own.</p>
        <details>
          <summary>Photo credits</summary>
          <p>Demo photography from Wikimedia Commons: {photoCredits.join("; ")}.</p>
        </details>
      </div>
    </footer>
  );
}
