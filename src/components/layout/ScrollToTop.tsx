"use client";

import { useScrolledPast } from "@/hooks/useScrolledPast";

/** Back-to-top button, shown after 100px of scroll (was onpoint.js). */
export default function ScrollToTop() {
  const visible = useScrolledPast(100);

  return (
    <a
      href="#"
      className={`scroll-to-target scroll-to-top${visible ? " is-visible" : ""}`}
      aria-label="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </a>
  );
}
