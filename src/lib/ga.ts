export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Page view (bruker 'event' istedenfor 'config' etter første last)
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
};
