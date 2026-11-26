"use client";

/* eslint-disable @next/next/no-img-element -- template markup and CSS size these as plain <img> */

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SHOP_LINKS } from "@/lib/site";
import { buttonProps, useMobileNav } from "./MobileNavContext";

/**
 * Inner markup of `nav.main-menu` (layouts/menu.blade.php). Rendered twice:
 * in the page header and inside the sticky header, which onpoint.js used to
 * fill by copying this markup.
 */
export default function MainMenu() {
  const pathname = usePathname();
  const { toggle } = useMobileNav();

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop");
  const [featured, ...shopLinks] = SHOP_LINKS;

  const onToggle = (e: MouseEvent) => {
    e.preventDefault();
    toggle();
  };

  return (
    <div className="main-menu__wrapper">
      <div className="container">
        <div
          className="main-menu__wrapper-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Menu list (left) */}
          <div className="main-menu__main-menu-box" style={{ flex: 1 }}>
            <a
              href="#"
              className="mobile-nav__toggler d-none d-md-block d-lg-none"
              role="button"
              aria-label="Open menu"
              onClick={onToggle}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <ul
              className="main-menu__list"
              style={{
                display: "flex",
                gap: 30,
                alignItems: "center",
                margin: 0,
                justifyContent: "center",
              }}
            >
              {/* onpoint.js marked the first item current on the home page */}
              <li className={isHome ? "current" : undefined}>
                <Link href="/">
                  <img src="/images/Logo/main-logo-1.png" alt="Khayou Logo" />
                </Link>
              </li>
              <li className={isHome ? "current" : undefined}>
                <Link className="text-capitalize fs-6" href="/">
                  Home
                </Link>
              </li>
              <li
                className={`menu-dropdown${isShop ? " current" : ""}`}
                style={{ position: "relative" }}
              >
                <Link aria-haspopup="true" href={featured.href}>
                  Shop{" "}
                  <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>▾</span>
                </Link>

                <ul
                  className="submenu shadow-lg"
                  role="menu"
                  aria-label="Khayou Setup submenu"
                >
                  <li>
                    <div
                      className="submenu-vertical"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 240,
                      }}
                    >
                      <Link
                        href={featured.href}
                        className={`featured${pathname === featured.href ? " current" : ""}`}
                      >
                        <div className="featured-inner">
                          {/* Hidden until hover: still loads up front, but at
                              low priority (React skips its preload hint). */}
                          <img
                            className="mb-3"
                            fetchPriority="low"
                            src="/images/backgrounds/ls2.webp"
                            alt="Khayou Set Desk Featured"
                          />
                        </div>
                        <div className="featured-text">{featured.label}</div>
                      </Link>

                      {shopLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={pathname === item.href ? "current" : undefined}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              </li>
              <li className={pathname === "/about" ? "current" : undefined}>
                <Link className="text-capitalize fs-6" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-capitalize fs-6" href="/about#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo + "Menu" toggler (right, below lg) */}
          <div
            className="main-menu__logo d-lg-none"
            style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
          >
            <a
              href="#"
              className="mobile-nav__toggler"
              role="button"
              aria-label="Open menu"
              onClick={onToggle}
            >
              <img src="/images/Logo/main-logo-1.png" alt="Khayou Logo" />
            </a>
            <span
              className="d-block d-md-none mobile-nav__toggler"
              style={{
                fontFamily: "var(--onpoint-font)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#000",
                marginLeft: "0.5rem",
              }}
              {...buttonProps(toggle)}
            >
              Menu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
