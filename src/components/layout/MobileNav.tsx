"use client";

/* eslint-disable @next/next/no-img-element -- template markup and CSS size these as plain <img> */

import { useState } from "react";
import Link from "next/link";
import { CONTACT, SHOP_LINKS } from "@/lib/site";
import { buttonProps, useMobileNav } from "./MobileNavContext";

const linkClass = "fw-bold text-dark text-decoration-none d-block py-2";

/** Slide-in mobile menu (bottom of layouts/footer.blade.php). */
export default function MobileNav() {
  const { open, close } = useMobileNav();
  // Was a Bootstrap collapse (data-bs-toggle); Bootstrap's CSS still hides
  // .collapse until .show is added.
  const [shopOpen, setShopOpen] = useState(false);

  // Links navigate client-side, so the drawer has to close itself.
  const closeAll = () => {
    close();
    setShopOpen(false);
  };

  return (
    <div className={`mobile-nav__wrapper${open ? " expanded" : ""}`}>
      <div className="mobile-nav__overlay mobile-nav__toggler" onClick={closeAll}></div>
      <span
        className="mobile-nav__close mobile-nav__toggler shadow-sm"
        aria-label="Close menu"
        {...buttonProps(closeAll)}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <div className="mobile-nav__content">
        <div className="logo-box d-flex align-items-center justify-content-center">
          <Link
            href="/"
            aria-label="logo image"
            className="d-flex align-items-center text-decoration-none"
            onClick={closeAll}
          >
            <img loading="lazy" src="/images/Logo/main-logo-1.png" width={50} alt="Khayou Logo" />
            <span className="ms-2 fw-bold" style={{ fontSize: "1.125rem", color: "#111" }}>
              Khayou
            </span>
          </Link>
        </div>

        <ul className="mobile-nav__contact list-unstyled mt-3">
          <li className="my-4 justify-content-center">
            <Link href="/" className={linkClass} onClick={closeAll}>
              Home
            </Link>
          </li>
          <li className="my-4 justify-content-center">
            <a
              className={`${linkClass} d-flex justify-content-between align-items-center`}
              href="#mobileShopSubmenu"
              role="button"
              aria-expanded={shopOpen}
              aria-controls="mobileShopSubmenu"
              onClick={(e) => {
                e.preventDefault();
                setShopOpen((o) => !o);
              }}
            >
              Shop
            </a>
          </li>
          {/* The Blade markup nested this <ul> straight inside the <ul>, which
              React rejects; the wrapper <li> is display:block so the
              layout is unchanged. */}
          <li className="d-block">
            <ul
              className={`list-unstyled ms-3 collapse mt-2${shopOpen ? " show" : ""}`}
              style={{ background: "#000", borderRadius: 10 }}
              id="mobileShopSubmenu"
            >
              {SHOP_LINKS.map((item, i) => (
                <li
                  key={item.href}
                  className={`justify-content-center${i === 0 ? " pt-2" : ""}${
                    i === SHOP_LINKS.length - 1 ? " pb-2" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className="text-light text-decoration-none d-block py-2"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="my-4 justify-content-center">
            <Link href="/about" className={linkClass} onClick={closeAll}>
              About
            </Link>
          </li>
          <li className="my-4 justify-content-center">
            <Link href="/about#contact" className={linkClass} onClick={closeAll}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-nav__top pb-5" style={{ flexFlow: "column" }}>
          <p className="fs-6" style={{ color: "black", fontWeight: 400 }}>
            © Khayou Official All right reserved
          </p>
          <div className="d-flex gap-3 justify-content-center align-items-end mt-3">
            <a target="_blank" rel="noopener noreferrer" href={`${CONTACT.tokopediaUrl}/`}>
              <img loading="lazy" src="/images/icon/tokopedia.svg" width={35} alt="Tokopedia" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`${CONTACT.instagramUrl}/`}>
              <img loading="lazy" src="/images/icon/insta-icon-bw.png" width={35} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
