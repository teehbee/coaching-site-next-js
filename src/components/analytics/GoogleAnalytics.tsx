"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string>("");

  // useEffect(() => {
  //   const handle = requestAnimationFrame(() => {
  //     if (pathname !== previousPath.current) {
  //       previousPath.current = pathname;
  //       ga.pageview(pathname);
  //     }
  //   });

  //   return () => cancelAnimationFrame(handle);
  // }, [pathname]);

  useEffect(() => {
    if (pathname !== previousPath.current) {
      previousPath.current = pathname;
      ga.pageview(pathname);
    }
  }, [pathname]);

  return null;
}
