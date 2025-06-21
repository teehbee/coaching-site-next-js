"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function ClientGoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    console.log("GA sending pageview for url:", url);
    ga.pageview(url);
  }, [pathname]);

  return null;
}
