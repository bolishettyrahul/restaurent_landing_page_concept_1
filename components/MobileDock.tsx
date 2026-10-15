import { contact, whatsappLink, brandName } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./MobileDock.module.css";

// Thumb-reach actions on phones: call, WhatsApp, book.
export function MobileDock() {
  return (
    <nav className={styles.dock} aria-label="Quick actions">
      <a href={contact.phoneHref}>
        <Icon name="phone" /> Call
      </a>
      <a href={whatsappLink(`Hi ${brandName}!`)} target="_blank" rel="noopener">
        <Icon name="whatsapp" /> WhatsApp
      </a>
      <a href="#book" className={styles.book}>
        Book a table
      </a>
    </nav>
  );
}
