// Google analytics made to not run until cookie consent is given

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    Usercentrics?: {
      getConsents: () => { marketing: boolean };
      onConsentChanged: (callback: () => void) => void;
    };
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [consentGiven, setConsentGiven] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Hent samtykke
  useEffect(() => {
    function checkConsent() {
      const consents = window?.Usercentrics?.getConsents?.();
      console.debug("[UC] Consents object:", consents);
      const allowed = !!consents?.marketing;
      console.debug("[UC] Marketing consent given:", allowed);
      setConsentGiven(allowed);
    }

    checkConsent();
    window?.Usercentrics?.onConsentChanged?.(() => {
      console.debug("[UC] Consent changed – rechecking...");
      checkConsent();
    });
  }, []);

  // 2. Last GA-script ved samtykke
  useEffect(() => {
    if (!consentGiven || scriptLoaded) return;

    console.debug("[GA] Consent granted – injecting GA script...");

    const script = document.createElement("script");
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    if (!GA_ID) {
      console.warn("[GA] NEXT_PUBLIC_GA_ID is missing!");
      return;
    }

    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    script.onload = () => {
      console.debug("[GA] GA script loaded.");

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }

      window.gtag = gtag;
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, {
        anonymize_ip: true,
        send_page_view: false,
      });

      setScriptLoaded(true);
    };

    script.onerror = () => {
      console.error("[GA] Failed to load GA script.");
    };

    document.head.appendChild(script);
  }, [consentGiven, scriptLoaded]);

  // 3. Send page_view ved rutenavigasjon
  useEffect(() => {
    if (!consentGiven || !scriptLoaded) return;

    const url = window.location.pathname + window.location.search;
    console.debug("[GA] Sending page_view for:", url);

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: url,
      });
    } else {
      console.warn("[GA] gtag is not defined yet.");
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
