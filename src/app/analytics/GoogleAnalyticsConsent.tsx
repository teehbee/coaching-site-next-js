"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    UC_UI?: {
      onConsentStatusChange: (callback: () => void) => void;
      getServicesBaseInfo: () => {
        categorySlug: string;
        consent: { status: boolean };
      }[];
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

export default function GoogleAnalyticsConsent() {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      const consented = window.UC_UI?.getServicesBaseInfo().some((service) => service.categorySlug === "marketing" && service.consent.status === true);

      if (consented) {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = (...args: unknown[]) => {
            if (Array.isArray(window.dataLayer)) {
              window.dataLayer.push(...(args as object[]));
            }
          };

          window.gtag("js", new Date());
          console.log("[GA] Initialiserer gtag med ID:", process.env.NEXT_PUBLIC_GA_ID);
          window.gtag("config", process.env.NEXT_PUBLIC_GA_ID);
        };
      } else {
        console.log("[GA] Samtykke ikke gitt – Analytics lastes ikke.");
      }
    };

    if (typeof window !== "undefined" && window.UC_UI?.onConsentStatusChange) {
      window.UC_UI.onConsentStatusChange(loadGoogleAnalytics);
    }
  }, []);

  return null;
}
