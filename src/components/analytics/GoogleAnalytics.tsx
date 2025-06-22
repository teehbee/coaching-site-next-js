// Google analytics component taken out of page component due to need to run client side. Is imported into client-layout.tsx, then into layout.tsx

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    // console.log("🔍 GA DEBUG – Pathname:", pathname);
    // console.log("🔍 GA DEBUG – Full URL:", url);
    // console.log("🔍 GA DEBUG – gtag available:", typeof window.gtag);

    ga.pageview(url);
  }, [pathname]);

  return null;
}
