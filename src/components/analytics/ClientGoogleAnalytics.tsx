"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function ClientGoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const url = window.location.pathname + window.location.search;

    // 🔍 Debug-logging
    console.log("🔍 GA DEBUG – Pathname:", pathname);
    console.log("🔍 GA DEBUG – Full URL:", url);
    console.log("🔍 GA DEBUG – gtag available:", typeof window.gtag);

    ga.pageview(url);
  }, [pathname]);

  return null;
}
