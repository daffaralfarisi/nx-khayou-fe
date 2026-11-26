/**
 * Page-specific CSS that the Blade views kept in inline <style> blocks.
 *
 * A plain <style> (no `precedence`) is rendered where it stands, so like
 * the original it comes after the template stylesheets in <head>, and it is
 * removed when the page unmounts instead of leaking into the next page.
 * The CSS strings live in src/styles/pages/.
 */
export default function PageStyle({ css }: { css: string }) {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
