import type { Metadata } from "next";
import { DEFAULT_OPEN_GRAPH } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...DEFAULT_OPEN_GRAPH, url: "/" },
};

// Placeholder until the landing page is ported (step 4).
export default function HomePage() {
  return (
    <section className="py-5">
      <div className="container text-center py-5">
        <h2 className="wow fadeInUp" data-wow-delay="100ms">
          Khayou
        </h2>
        <p className="wow fadeInUp" data-wow-delay="300ms">
          Halaman ini sedang dimigrasi ke Next.js.
        </p>
      </div>
    </section>
  );
}
