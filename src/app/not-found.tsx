import Link from "next/link";
import PageStyle from "@/components/PageStyle";
import notFoundCss from "@/styles/pages/not-found";

/** Any unknown URL, including unknown product slugs (pages/error404.blade.php). */
export default function NotFound() {
  return (
    <>
      <PageStyle css={notFoundCss} />
      <section className="error-404">
        <h1>404</h1>
        <p>Oops! Something is wrong.</p>
        <Link className="button" href="/">
          <i className="icon-home" aria-hidden="true"></i> Go back in initial page, is better.
        </Link>
      </section>
    </>
  );
}
