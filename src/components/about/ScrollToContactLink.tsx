"use client";

import type { ReactNode } from "react";

/**
 * "Get in Touch": smooth-scrolls to #contact, stopping below the sticky
 * header (was inline script in about/index.blade.php).
 */
export default function ScrollToContactLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#contact"
      className={className}
      onClick={(e) => {
        const target = document.querySelector("#contact");
        if (!target) return;
        e.preventDefault();

        const header =
          document.querySelector<HTMLElement>(".stricky-header") ??
          document.querySelector<HTMLElement>(".main-menu") ??
          document.querySelector<HTMLElement>("header");
        const headerHeight = header ? header.offsetHeight : 80;
        const extraOffset = 12; // so the heading isn't flush against the header

        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}
