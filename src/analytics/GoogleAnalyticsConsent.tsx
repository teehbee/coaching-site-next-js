"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    UC_UI?: {
      onConsentStatusChange: (callback: () => void) => void;
      getServicesBaseInfo: () => {
        templateId: string;
        categorySlug: string;
        consent: { status: boolean };
      }[];
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function GoogleAnalyticsConsent() {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      const services = window.UC_UI?.getServicesBaseInfo() ?? [];

      console.log("[UC_UI] Tilgjengelige tjenester:", services);

      const consented = services.some((service) => service.templateId === "HkocEodjb7" && service.consent.status === true);

      console.log("[GA] Har bruker godtatt GA:", consented);

      if (consented) {
        console.log("[GA] Bruker har gitt samtykke – laster GA");

        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          console.log("[GA] gtag.js er lastet inn");

          window.dataLayer = window.dataLayer || [];
          window.gtag = function (...args: unknown[]) {
            (window.dataLayer as unknown[]).push(...args);
          };

          window.gtag("js", new Date());
          console.log("[GA] Initialiserer gtag med ID:", process.env.NEXT_PUBLIC_GA_ID);
          window.gtag("config", process.env.NEXT_PUBLIC_GA_ID);
        };
      } else {
        console.log("[GA] Ikke samtykke – GA blir ikke lastet");
      }
    };

    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        if (window.UC_UI?.onConsentStatusChange) {
          console.log("[UC_UI] Listener registrert via polling");
          window.UC_UI.onConsentStatusChange(loadGoogleAnalytics);
          clearInterval(interval);
        } else {
          console.log("[UC_UI] Venter på CMP...");
        }
      }, 200);
    }
  }, []);

  return null;
}
