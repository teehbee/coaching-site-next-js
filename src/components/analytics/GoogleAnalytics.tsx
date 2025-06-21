// "use client";

// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import * as ga from "@/lib/ga";

// export function GoogleAnalytics() {
//   const pathname = usePathname();
//   const previousPath = useRef<string>("");

//   // useEffect(() => {
//   //   const handle = requestAnimationFrame(() => {
//   //     if (pathname !== previousPath.current) {
//   //       previousPath.current = pathname;
//   //       ga.pageview(pathname);
//   //     }
//   //   });

//   //   return () => cancelAnimationFrame(handle);
//   // }, [pathname]);

//   useEffect(() => {
//     if (pathname !== previousPath.current) {
//       previousPath.current = pathname;
//       ga.pageview(pathname);
//     }
//   }, [pathname]);

//   return null;
// }

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as ga from "@/lib/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();

  console.log("usePathname:", pathname);

  useEffect(() => {
    console.log("usePathname in useEffect:", pathname);
    const url = window.location.pathname + window.location.search;
    console.log("GA sending pageview for url:", url);
    ga.pageview(url);
  }, [pathname]);

  return null;
}
