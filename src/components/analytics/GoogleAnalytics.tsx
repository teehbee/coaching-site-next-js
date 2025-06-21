"use client";

// Google analytics script for page views with a simple debouce to avoid double page reports

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname !== previousPath.current) {
      previousPath.current = pathname;
      ga.pageview(pathname);
    }
  }, [pathname]);

  return null;
}
