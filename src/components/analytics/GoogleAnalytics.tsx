// Google analytics made to not run until cookie consent is given

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Usercentrics?: {
      getConsents: () => { marketing: boolean };
      onConsentChanged: (callback: () => void) => void;
    };
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    function checkConsent() {
      if (window.Usercentrics) {
        const consents = window.Usercentrics.getConsents();
        setConsentGiven(!!consents.marketing);
      }
    }

    checkConsent();

    if (window.Usercentrics) {
      window.Usercentrics.onConsentChanged(() => {
        checkConsent();
      });
    }
  }, []);

  useEffect(() => {
    if (!consentGiven) return;

    if (window.gtag) {
      const url = window.location.pathname + window.location.search;
      window.gtag("event", "page_view", {
        page_path: url,
      });
    }
  }, [pathname, consentGiven]);

  return null;
}

// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import * as ga from "@/lib/ga";

// export function GoogleAnalytics() {
//   const pathname = usePathname();

//   useEffect(() => {
//     const url = window.location.pathname + window.location.search;
//     // console.log("🔍 GA DEBUG – Pathname:", pathname);
//     // console.log("🔍 GA DEBUG – Full URL:", url);
//     // console.log("🔍 GA DEBUG – gtag available:", typeof window.gtag);

//     ga.pageview(url);
//   }, [pathname]);

//   return null;
// }
