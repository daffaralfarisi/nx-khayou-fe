"use client";

import { useEffect } from "react";

/**
 * Stand-in for WOW.js: elements with class "wow" plus an animate.css class
 * (e.g. `className="wow fadeInLeft" data-wow-delay="300ms"`) stay hidden
 * until they scroll into view, then play that animation once. Supports
 * data-wow-duration, data-wow-delay and data-wow-iteration like WOW.js.
 * New content (client navigation) is picked up through a MutationObserver,
 * as WOW's `live: true` did.
 */
export default function WowAnimations() {
  useEffect(() => {
    // Leave everything visible and still for users who ask for less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        reveal(entry.target as HTMLElement);
      }
    });

    const register = (box: HTMLElement) => {
      if (box.dataset.wowState) return;
      box.dataset.wowState = "pending";
      // The animate.css class sets animation-name; hold it until revealed.
      box.dataset.wowAnimation = getComputedStyle(box).animationName;
      box.style.visibility = "hidden";
      box.style.animationName = "none";
      io.observe(box);
    };

    const scan = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.classList.contains("wow")) register(root);
      root.querySelectorAll<HTMLElement>(".wow").forEach(register);
    };

    scan(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}

function reveal(box: HTMLElement) {
  const { wowDuration, wowDelay, wowIteration, wowAnimation } = box.dataset;
  if (wowDuration) box.style.animationDuration = wowDuration;
  if (wowDelay) box.style.animationDelay = wowDelay;
  if (wowIteration) box.style.animationIterationCount = wowIteration;
  box.style.animationName = wowAnimation ?? "";
  box.style.visibility = "visible";
  box.classList.add("animated");
  box.dataset.wowState = "done";
}
