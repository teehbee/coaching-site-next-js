"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    ga.pageview(pathname);
  }, [pathname]);

  return null;
}
