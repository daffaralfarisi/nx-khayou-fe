import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/PageHeader";
import PageStyle from "@/components/PageStyle";
import { CONTACT, DEFAULT_OPEN_GRAPH } from "@/lib/site";
import contactCss from "@/styles/pages/contact";

export const metadata: Metadata = {
  title: "Contact | Khayou",
  alternates: { canonical: "/contact" },
  openGraph: { ...DEFAULT_OPEN_GRAPH, title: "Contact | Khayou", url: "/contact" },
};

// The Blade page still carried the template's placeholder details (a
// San Francisco showroom, a +1 phone number, hello@khayou.com, "#" social
// links). The cards use Khayou's real contacts from the rest of the site;
// the office hours, showroom map and FAQ (30-day returns, 25 countries,
// 2-year warranty...) are left out until there is real text for them.
const CARDS = [
  {
    icon: "fas fa-envelope",
    title: "Email Us",
    text: "Get in touch via email for any inquiries or support needs.",
    href: `mailto:${CONTACT.email}`,
    label: CONTACT.email,
  },
  {
    icon: "fab fa-whatsapp",
    title: "Chat on WhatsApp",
    text: "Speak directly with our team on WhatsApp.",
    href: CONTACT.whatsappUrl,
    label: "+62 821-2108-0408",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Our Workshop",
    text: "We develop and manufacture our products in Bandung, Indonesia.",
  },
  {
    icon: "fas fa-store",
    title: "Shop on Tokopedia",
    text: "All of our products are available on our Tokopedia store.",
    href: CONTACT.tokopediaUrl,
    label: "Khayou on Tokopedia",
  },
];

const SOCIALS = [
  { href: CONTACT.instagramUrl, title: "Instagram", icon: "fab fa-instagram" },
  { href: CONTACT.youtubeUrl, title: "YouTube", icon: "fab fa-youtube" },
];

/** pages/contact/index.blade.php */
export default function ContactPage() {
  return (
    <>
      <PageStyle css={contactCss} />

      <PageHeader image="/images/backgrounds/ls2.webp">
        <h2>Contact</h2>
        <div className="thm-breadcrumb__box">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="icon-angle-left"></span>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </PageHeader>

      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have questions about our products or need personalized workspace advice? We&apos;re here to
            help you create the perfect setup.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div className="contact-info-section">
              <div className="contact-cards">
                {CARDS.map((card) => (
                  <div key={card.title} className="contact-card">
                    <div className="contact-icon">
                      <i className={card.icon} aria-hidden="true"></i>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    {card.href && (
                      <a
                        href={card.href}
                        className="contact-link"
                        {...(card.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {card.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      className="social-link"
                      title={s.title}
                      aria-label={s.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={s.icon} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
