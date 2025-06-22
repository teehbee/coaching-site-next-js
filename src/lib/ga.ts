// Google analytics Script ready for use

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
};
