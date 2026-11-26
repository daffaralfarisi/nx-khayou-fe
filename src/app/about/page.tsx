/* eslint-disable @next/next/no-img-element -- template markup sizes these as plain <img> */

import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import ScrollToContactLink from "@/components/about/ScrollToContactLink";
import WhatsAppContactForm from "@/components/about/WhatsAppContactForm";
import PageHeader from "@/components/PageHeader";
import PageStyle from "@/components/PageStyle";
import { DEFAULT_OPEN_GRAPH, DEFAULT_SHARE_IMAGE } from "@/lib/site";
import aboutCss from "@/styles/pages/about";

// The founder photo was never added to the Laravel site either (it showed
// a broken image). Drop it at this path and the page picks it up on the
// next build; until then the Khayou emblem stands in.
const FOUNDER_PHOTO = "/images/team/founder-khayou.jpg";
const hasFounderPhoto = existsSync(path.join(process.cwd(), "public", FOUNDER_PHOTO));

const TITLE = "Founder Khayou - Muhammad Rizki Khaira";
const DESCRIPTION =
  "Pelajari lebih lanjut tentang Khayou, penyedia meja kerja dan setup meja kerja berkualitas. Temukan visi, misi, dan nilai-nilai kami di sini.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["tentang Khayou", "profil perusahaan", "visi misi Khayou", "meja kerja", "setup meja kerja"],
  alternates: { canonical: "/about" },
  openGraph: {
    ...DEFAULT_OPEN_GRAPH,
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    images: hasFounderPhoto ? FOUNDER_PHOTO : DEFAULT_SHARE_IMAGE,
  },
};

const VALUES = [
  {
    icon: "fa-lightbulb",
    title: "Innovation",
    text: "We constantly push the boundaries of workspace design, incorporating cutting-edge materials and forward-thinking concepts to create products that anticipate future needs.",
  },
  {
    icon: "fa-leaf",
    title: "Sustainability",
    text: "Environmental responsibility is at the core of our design philosophy. We use sustainably sourced materials.",
  },
  {
    icon: "fa-gem",
    title: "Quality",
    text: "Every Khayou product is built to last, using premium materials and precise manufacturing processes that ensure durability and long-term satisfaction.",
  },
];

/** pages/about/index.blade.php */
export default function AboutPage() {
  return (
    <>
      <PageStyle css={aboutCss} />

      <PageHeader image="/images/backgrounds/aboutbanner.webp">
        {/* Was a hidden <h1> placed inside <head>. */}
        <h1 className="visually-hidden">{TITLE}</h1>
      </PageHeader>

      {/* Founder introduction */}
      <section className="about-section" id="founder-intro">
        <div className="container">
          <h2 className="section-title">About Khayou</h2>

          <div className="story-grid" style={{ alignItems: "center" }}>
            <div className="story-image" style={{ maxWidth: 440, margin: "auto" }}>
              {hasFounderPhoto ? (
                <img src={FOUNDER_PHOTO} alt="Muhammad Rizki Khaira - Founder & Owner" />
              ) : (
                <img src="/images/Logo/footer-logo.png" alt="Khayou" loading="lazy" />
              )}
            </div>

            <div className="story-content">
              <h3>Muhammad Rizki Khaira</h3>
              <p className="team-role" style={{ color: "#de9c43", fontWeight: 600, marginTop: 6 }}>
                Founder &amp; Owner
              </p>

              <p>
                Rizki is a Product Design graduate (Class of 2019) who has now founded and developed a
                furniture business under the brand Khayou. Established in 2025, Khayou carries a simple
                vision: to create workspace setup solutions that are functional, beautiful, and durable.
                With approximately five years of experience working in the hospitality industry as a
                Field QC and Manufacturing QA, he leads a team that prioritizes quality, sustainability,
                and user experience in every product.
              </p>

              <blockquote
                style={{
                  marginTop: 18,
                  fontStyle: "italic",
                  color: "#374151",
                  borderLeft: "4px solid #de9c43",
                  paddingLeft: 16,
                }}
              >
                &quot;Where design meets function, life gets easier.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-grid">
            <div className="story-content">
              <h3>Founded on Innovation</h3>
              <p>
                Khayou was born from a simple observation: in this era of rapid technological
                advancement, we realized that professionals are spending more time at their desks than
                ever before, yet their workspace layouts remain static and uninspiring. What began as a
                passionate project to create the perfect deskshelf has now evolved into a comprehensive
                ecosystem of workspace solutions, each crafted with meticulous attention to detail and
                user experience.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/backgrounds/ls1.webp" alt="Khayou founding story" loading="lazy" />
            </div>
          </div>

          <div className="story-grid">
            <div className="story-image">
              <img src="/images/backgrounds/ls2.webp" alt="Modern workspace setup" loading="lazy" />
            </div>
            <div className="story-content">
              <h3>Designing for Life</h3>
              <p>
                We believe that your workspace should adapt to your life, not the other way around.
                Every Khayou product is designed with modularity and flexibility in mind, allowing you to
                create a setup that truly works for you.
              </p>
              <p>
                From our signature Setup Cockpit series to our innovative cable management solutions,
                each product undergoes rigorous testing and refinement to ensure it meets our exacting
                standards for quality and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="about-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">
                  <i className={`fas ${v.icon}`} aria-hidden="true"></i>
                </div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Workspace?</h2>
            <p className="cta-text">
              Experience the elegance of thoughtful design that transforms work into something more
              meaningful.
            </p>
            <div className="cta-buttons">
              <Link href="/shop/khayou-set-bundle" className="btn-primary-custom">
                Shop Now
              </Link>
              <ScrollToContactLink className="btn-outline-custom js-scroll-to-contact">
                Get in Touch
              </ScrollToContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact (opens WhatsApp) */}
      <section className="contact pb-5" id="contact" style={{ padding: "60px 0", background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto",
              color: "#6b7280",
              fontSize: "1.1rem",
              marginBottom: 40,
            }}
          >
            Have questions or need assistance? Our team is here to help you create the perfect
            workspace setup. Reach out to us anytime!
          </p>
          <WhatsAppContactForm />
        </div>
      </section>
    </>
  );
}
