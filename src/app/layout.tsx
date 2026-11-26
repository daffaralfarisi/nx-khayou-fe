import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import MobileNav from "@/components/layout/MobileNav";
import { MobileNavProvider } from "@/components/layout/MobileNavContext";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import WowAnimations from "@/components/WowAnimations";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OPEN_GRAPH,
  DEFAULT_SHARE_IMAGE,
  DEFAULT_SHORT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
});

// The OnPoint template CSS, served as-is from public/ so its relative url()s
// keep working. Order matches layouts/header.blade.php; stylesheets of the
// jQuery plugins that were dropped are left out (see MIGRATION.md).
const STYLESHEETS = [
  "/vendors/bootstrap/css/bootstrap.min.css",
  "/vendors/animate/animate.min.css",
  "/vendors/animate/custom-animate.css",
  "/vendors/fontawesome/css/all.min.css",
  "/vendors/onpoint-icons/style.css",
  "/css/detail.css",
  "/css/onpoint.css",
  "/css/onpoint-responsive.css",
  "/css/card.css",
  "/css/testimonial.css",
  "/css/site.css",
];

// Site-wide defaults (the home page values from header.blade.php). Pages set
// their own canonical URL; a canonical here would leak to every page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  icons: { icon: "/images/Logo/main-logo-1.png" },
  openGraph: DEFAULT_OPEN_GRAPH,
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_SHORT_DESCRIPTION,
    images: DEFAULT_SHARE_IMAGE,
  },
  other: { copyright: SITE_NAME, language: "EN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // onpoint.css sets `scroll-behavior: smooth` on <html>; this tells Next
    // to jump (not glide) to the top when changing pages, like a full load.
    <html lang="en" className={plusJakartaSans.variable} data-scroll-behavior="smooth">
      <head>
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <MobileNavProvider>
          <ScrollToTop />
          <div className="page-wrapper">
            <SiteHeader />
            <StickyHeader />
            {children}
          </div>
          <SiteFooter />
          <MobileNav />
        </MobileNavProvider>
        <WowAnimations />
      </body>
    </html>
  );
}
