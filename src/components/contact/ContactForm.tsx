"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

const SUBJECTS = [
  ["product-inquiry", "Product Inquiry"],
  ["technical-support", "Technical Support"],
  ["order-status", "Order Status"],
  ["custom-solution", "Custom Solution"],
  ["partnership", "Partnership"],
  ["media-press", "Media & Press"],
  ["other", "Other"],
] as const;

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Contact page form. The Laravel version only pretended to send (a random
 * success/error after 2 s); like the About page form it now opens WhatsApp
 * with the message filled in. Required fields use the browser's own
 * validation, and the border colours on focus/blur are kept from the old
 * inline script.
 */
export default function ContactForm() {
  const [borders, setBorders] = useState<Record<string, string>>({});

  // Focus events bubble up to the form from whichever field fired them.
  const fieldOf = (e: FocusEvent<HTMLFormElement>): Control | null => {
    const el: EventTarget = e.target;
    const isField =
      el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement;
    return isField && el.name ? el : null;
  };

  const onFocus = (e: FocusEvent<HTMLFormElement>) => {
    const el = fieldOf(e);
    if (el) setBorders((b) => ({ ...b, [el.name]: "#667eea" }));
  };

  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const el = fieldOf(e);
    if (!el) return;
    const empty = el.required && !el.value.trim();
    setBorders((b) => ({ ...b, [el.name]: empty ? "#ef4444" : "#e5e7eb" }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = SUBJECTS.find(([value]) => value === get("subject"))?.[1] ?? get("subject");

    openWhatsApp([
      "Halo Khayou,",
      "",
      "Nama: " + get("name"),
      "Email: " + get("email"),
      ...(get("company") ? ["Perusahaan: " + get("company")] : []),
      "Topik: " + subject,
      "",
      "Pesan:",
      get("message"),
    ]);
  };

  const border = (name: string) => (borders[name] ? { borderColor: borders[name] } : undefined);

  return (
    <form id="contactForm" onSubmit={onSubmit} onFocus={onFocus} onBlur={onBlur}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name *</label>
        <input type="text" id="name" name="name" className="form-control" placeholder="Your full name" required style={border("name")} />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address *</label>
        <input type="email" id="email" name="email" className="form-control" placeholder="your.email@example.com" required style={border("email")} />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject *</label>
        {/* Was restyled by the nice-select jQuery plugin; Bootstrap's form-select now. */}
        <select id="subject" name="subject" className="form-control form-select" required defaultValue="" style={border("subject")}>
          <option value="">Select a topic</option>
          {SUBJECTS.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="company" className="form-label">Company (Optional)</label>
        <input type="text" id="company" name="company" className="form-control" placeholder="Your company name" style={border("company")} />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea id="message" name="message" className="form-control form-textarea" placeholder="Tell us how we can help you..." required style={border("message")}></textarea>
      </div>

      <button type="submit" className="btn-submit" id="submitBtn">
        <span className="btn-text">
          <i className="fab fa-whatsapp me-2" aria-hidden="true"></i>Send via WhatsApp
        </span>
      </button>
    </form>
  );
}
