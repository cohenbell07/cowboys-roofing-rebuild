"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Force scroll to top on route change unless the URL has a hash anchor.
 * Next.js does this by default, but iOS Safari + sticky header sometimes
 * preserves position — this guarantees the new page starts from the top.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
