/* eslint-disable @next/next/no-img-element -- template markup and CSS size these as plain <img> */

import Link from "next/link";
import { CONTACT } from "@/lib/site";

const FEATURES = [
  {
    icon: "/images/icon/Development.png",
    alt: "Product Function Optimization",
    title: "Product Function Optimization",
    text: "We offer products with optimized quality and a more premium",
  },
  {
    icon: "/images/icon/Location.png",
    alt: "German Engineering",
    title: "Engineering Workshop",
    text: "We develop and manufacture our products in Bandung, Indonesia.",
  },
  {
    icon: "/images/icon/Guarentee.png",
    alt: "Risk-free order",
    title: "Guarantee",
    text: "We offer 1-day replacement guarantee.",
  },
  {
    icon: "/images/icon/Shipment.png",
    alt: "Free Shipping",
    title: "Shipment Route",
    text: "Shipping to All of Indonesia. For overseas shipping, please contact us first.",
    // The shipment icon is taller and sat closer to its title.
    height: 50,
    imgClass: "me-3 mb-1",
  },
];

const SOCIALS = [
  { href: CONTACT.gmailComposeUrl, label: "Email", icon: "gmail" },
  { href: CONTACT.whatsappUrl, label: "WhatsApp", icon: "whatsapp" },
  { href: CONTACT.instagramUrl, label: "Instagram", icon: "instagram" },
  { href: CONTACT.youtubeUrl, label: "YouTube", icon: "youtube" },
];

const menuBar = (width: number) => (
  <span
    style={{
      display: "block",
      height: 6,
      width,
      background: "#fff",
      borderRadius: 3,
    }}
  ></span>
);

/** layouts/footer.blade.php, minus the mobile menu (see MobileNav). */
export default function SiteFooter() {
  return (
    <>
      <div className="footer-upper py-4" style={{ backgroundColor: "rgb(241,241,241)" }}>
        <div className="container">
          <div className="row justify-content-center align-items-start text-center text-md-start">
            {FEATURES.map((f) => (
              <div key={f.title} className="col-6 col-md-6 col-lg-3 mb-3 mb-md-0 text-start">
                <img
                  loading="lazy"
                  src={f.icon}
                  alt={f.alt}
                  width={40}
                  height={f.height ?? 40}
                  className={f.imgClass ?? "me-3 mb-3"}
                />
                <div>
                  <div className="fw-bold lh-sm mb-3" style={{ fontSize: "1.125rem", color: "#111" }}>
                    {f.title}
                  </div>
                  <div className="text-muted mb-3 lh-sm" style={{ fontSize: "0.95rem" }}>
                    {f.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="text-light py-4" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <div className="row align-items-center">
            <p className="col-12 col-md-4 mb-3 text-center text-md-start text-body-secondary fw-semibold">
              © 2025 Khayou Official
            </p>

            <Link
              href="/"
              className="col-6 col-md-4 d-flex align-items-end align-items-md-center justify-content-start justify-content-md-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              aria-label="Khayou home"
            >
              <img loading="lazy" src="/images/Logo/footer-logo.png" alt="Logo" width={50} />
            </Link>

            <ul className="nav col-6 col-md-4 justify-content-end mb-3 justify-content-md-end">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link px-2 text-light text-body-secondary fw-bold text-decoration-none"
                  aria-label="Menu"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      gap: 6,
                      alignItems: "flex-end",
                    }}
                  >
                    {menuBar(75)}
                    {menuBar(50)}
                    {menuBar(25)}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-start mt-3 mt-md-0">
              <p className="mb-0" style={{ fontSize: "0.85rem", letterSpacing: 0.14, fontWeight: 600 }}>
                Handcrafted workspace essentials. Where function meets minimal design.
              </p>
              <ul className="list-unstyled d-flex gap-3 my-4">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light d-flex align-items-center text-decoration-none"
                      aria-label={s.label}
                    >
                      <img
                        loading="lazy"
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${s.icon}.svg`}
                        alt={s.label}
                        style={{ width: 24, height: "auto", filter: "invert(1) brightness(2)" }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-md-6 text-md-end text-start mt-3 mt-md-0">
              <div className="d-inline-block">
                <div className="fw-semibold mb-1" style={{ fontSize: "0.85rem", letterSpacing: 0.14, fontWeight: 500 }}>
                  Available on Tokopedia
                </div>
                <a
                  href={CONTACT.tokopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center text-decoration-none"
                >
                  <img loading="lazy" src="/images/Logo/logo-tokped.png" width={50} alt="logo tokopedia" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
