"use client";

import { useScrolledPast } from "@/hooks/useScrolledPast";
import MainMenu from "./MainMenu";

/**
 * Copy of the main menu that slides in once the page scrolls past 130px
 * (the `.stricked-menu` scroll handler in onpoint.js). The Blade pages each
 * included this div; here the layout renders it for every page.
 */
export default function StickyHeader() {
  const fixed = useScrolledPast(130);

  return (
    <div
      className={`stricky-header stricked-menu main-menu${fixed ? " stricky-fixed" : ""}`}
    >
      <div className="sticky-header__content">
        <MainMenu />
      </div>
    </div>
  );
}
