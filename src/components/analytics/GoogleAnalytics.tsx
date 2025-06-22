// Google analytics made to not run until cookie consent is given

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Sjekk om bruker har gitt samtykke
  useEffect(() => {
    function checkConsent() {
      if (window.Usercentrics) {
        const consents = window.Usercentrics.getConsents();
        const marketingConsent = consents.marketing;
        setConsentGiven(marketingConsent);
      }
    }

    checkConsent();

    window.Usercentrics?.onConsentChanged(() => {
      checkConsent();
    });
  }, []);

  // 2. Last Google Analytics skript når samtykke gis
  useEffect(() => {
    if (!consentGiven || scriptLoaded) return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];

      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }

      window.gtag = gtag;
      window.gtag("js", new Date());
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        anonymize_ip: true,
        send_page_view: false,
      });

      setScriptLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [consentGiven, scriptLoaded]);

  // 3. Send page_view ved rutenavigasjon
  useEffect(() => {
    if (!consentGiven || !scriptLoaded) return;

    if (window.gtag) {
      const url = window.location.pathname + window.location.search;
      window.gtag("event", "page_view", {
        page_path: url,
      });
    }
  }, [pathname, consentGiven, scriptLoaded]);

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
