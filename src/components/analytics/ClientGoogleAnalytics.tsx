"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function ClientGoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    console.log("🔍 GA DEBUG – Pathname:", pathname);
    console.log("🔍 GA DEBUG – Full URL:", url);
    ga.pageview(url);
  }, [pathname]);

  return null;
}
