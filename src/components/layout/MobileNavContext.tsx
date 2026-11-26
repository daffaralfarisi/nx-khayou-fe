"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type MobileNavState = {
  open: boolean;
  toggle: () => void;
  close: () => void;
};

const MobileNavContext = createContext<MobileNavState | null>(null);

/**
 * Open/closed state of the mobile menu, shared by the togglers in the main
 * header, the sticky header copy and the drawer itself (replaces the
 * `.mobile-nav__toggler` handler in onpoint.js).
 */
export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    // The template CSS stops page scroll with body.locked.
    document.body.classList.add("locked");
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("locked");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const value = useMemo(() => ({ open, toggle, close }), [open, toggle, close]);
  return <MobileNavContext value={value}>{children}</MobileNavContext>;
}

export function useMobileNav() {
  const ctx = useContext(MobileNavContext);
  if (!ctx) throw new Error("useMobileNav must be used inside MobileNavProvider");
  return ctx;
}

/** Props that make a non-button element (span, div) act as a button. */
export function buttonProps(onActivate: () => void) {
  return {
    role: "button",
    tabIndex: 0,
    onClick: onActivate,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onActivate();
      }
    },
  } as const;
}
