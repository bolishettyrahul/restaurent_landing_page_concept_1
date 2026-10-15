"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { fares, whatsappLink, brandName } from "@/content/site";
import { Icon } from "@/components/Icon";
import styles from "./BoardingPass.module.css";

const MAX_GUESTS = 60;

function today() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export function BoardingPass() {
  const [date, setDate] = useState("");
  const [session, setSession] = useState("Dinner");
  const [guests, setGuests] = useState(4);
  const [fare, setFare] = useState(fares[1].name);
  const [error, setError] = useState("");
  const dateInput = useRef<HTMLInputElement>(null);

  // Set on the client only: the prerendered page must not bake in a build-time date.
  useEffect(() => {
    if (dateInput.current) dateInput.current.min = today();
  }, []);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!date) {
      setError("Pick a date for your voyage.");
      return;
    }
    if (date < today()) {
      setError("That date has already sailed. Pick today or later.");
      return;
    }
    setError("");
    const pretty = new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    const msg = `Hi ${brandName}! I'd like to book a table.\nDate: ${pretty}\nSession: ${session}\nGuests: ${guests}\nFare: ${fare}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  }

  return (
    <form id="book" className={styles.pass} onSubmit={submit} noValidate aria-label="Book a table">
      <div className={styles.stub} aria-hidden="true">
        <span className={styles.route}>
          HYD <Icon name="arrow" /> {brandName}
        </span>
      </div>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span>Date</span>
          <input
            type="date"
            value={date}
            ref={dateInput}
            onChange={(e) => setDate(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "pass-error" : undefined}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Session</span>
          <select value={session} onChange={(e) => setSession(e.target.value)}>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </label>

        <div className={styles.field} role="group" aria-labelledby="guests-label">
          <span id="guests-label">Guests</span>
          <div className={styles.stepper}>
            <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))} disabled={guests <= 1} aria-label="Fewer guests">
              <Icon name="minus" />
            </button>
            <output aria-live="polite">{guests}</output>
            <button type="button" onClick={() => setGuests((g) => Math.min(MAX_GUESTS, g + 1))} disabled={guests >= MAX_GUESTS} aria-label="More guests">
              <Icon name="plus" />
            </button>
          </div>
        </div>

        <label className={styles.field}>
          <span>Fare</span>
          <select value={fare} onChange={(e) => setFare(e.target.value)}>
            {fares.map((f) => (
              <option key={f.id}>{f.name}</option>
            ))}
          </select>
        </label>

        <button type="submit" className={`btn btn-primary ${styles.submit}`}>
          <Icon name="whatsapp" />
          Reserve on WhatsApp
        </button>
      </div>

      <p id="pass-error" className={styles.error} role="alert">
        {error}
      </p>
    </form>
  );
}
