"use client";

import { useState, type ReactNode } from "react";

type Tab = "desc" | "specs";

/**
 * Description / Specs pills (were Bootstrap data-bs-toggle="pill").
 * Bootstrap shows the new pane first and adds `show` a frame later so it
 * fades in; this does the same with the classes Bootstrap's CSS expects.
 */
export default function ProductTabs({
  description,
  specs,
}: {
  description: ReactNode;
  specs: ReactNode;
}) {
  const [active, setActive] = useState<Tab>("desc");
  const [shown, setShown] = useState<Tab>("desc");

  const select = (tab: Tab) => {
    if (tab === active) return;
    setActive(tab);
    requestAnimationFrame(() => requestAnimationFrame(() => setShown(tab)));
  };

  const tabButton = (tab: Tab, label: string) => (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link rounded-pill${active === tab ? " active" : ""}`}
        id={`tab-${tab}`}
        type="button"
        role="tab"
        aria-controls={`pane-${tab}`}
        aria-selected={active === tab}
        onClick={() => select(tab)}
      >
        {label}
      </button>
    </li>
  );

  const paneClass = (tab: Tab) =>
    `tab-pane fade${active === tab ? " active" : ""}${active === tab && shown === tab ? " show" : ""}`;

  return (
    <section style={{ background: "#f8f9fa", padding: "20px 0" }}>
      <div className="row mb-4">
        <div className="col-12">
          <ul
            id="nav-bottom-detail-product"
            className="nav nav-pills justify-content-around shadow-sm w-100 w-md-50 mx-auto rounded-pill p-2"
            style={{ maxWidth: 300, background: "#fff" }}
            role="tablist"
          >
            {tabButton("desc", "Description")}
            {tabButton("specs", "Specs")}
          </ul>
        </div>
      </div>

      <div className="row mt-5" style={{ maxWidth: 1200, margin: "auto" }}>
        <div className="tab-content" id="detailProductTabContent">
          <div className={paneClass("desc")} id="pane-desc" role="tabpanel" aria-labelledby="tab-desc">
            {description}
          </div>
          <div className={paneClass("specs")} id="pane-specs" role="tabpanel" aria-labelledby="tab-specs">
            {specs}
          </div>
        </div>
      </div>
    </section>
  );
}
