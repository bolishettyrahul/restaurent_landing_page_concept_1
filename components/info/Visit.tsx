import { contact, faqs, timings } from "@/content/site";
import { Icon } from "@/components/Icon";
import { AreaChart } from "./AreaChart";
import styles from "./Sections.module.css";

export function Visit() {
  return (
    <section id="visit" className={styles.visit} aria-labelledby="visit-title">
      <div className={`container ${styles.visitGrid}`}>
        <div className={styles.visitText}>
          <h2 id="visit-title">Find the harbour</h2>
          <p className="lede">5th floor of Sarath City Capital Mall, on the Gachibowli–Miyapur Road in Kondapur.</p>

          <dl className={styles.facts}>
            <div>
              <dt><Icon name="pin" /> Address</dt>
              <dd>
                {contact.addressLines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt><Icon name="clock" /> Hours, all 7 days</dt>
              <dd>
                {timings.map((t) => (
                  <span key={t.session}>
                    {t.session}: {t.hours}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt><Icon name="car" /> Parking</dt>
              <dd>Mall parking on the lower levels, then lifts straight to the 5th floor.</dd>
            </div>
          </dl>

          <div className={styles.visitActions}>
            <a className="btn btn-primary" href={contact.mapsHref} target="_blank" rel="noopener">
              <Icon name="pin" /> Open in Google Maps
            </a>
            <a className="btn btn-ghost" href={contact.phoneHref}>
              <Icon name="phone" /> {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <AreaChart />
      </div>

      <div className={`container ${styles.faq}`}>
        <h2>Before you board</h2>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
