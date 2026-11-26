import type { ReactNode } from "react";

/** The banner strip at the top of the shop, about and contact pages. */
export default function PageHeader({
  image,
  children,
}: {
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-header">
      <div className="page-header__bg" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="container">
        <div className="page-header__inner">{children}</div>
      </div>
    </section>
  );
}
