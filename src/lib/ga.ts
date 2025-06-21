export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Page view
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  if (typeof window.gtag !== "function") {
    console.log("window.gtag is not a function yet");
    return;
  }
  console.log("Tracking pageview for:", url);
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Event logging
// export const event = ({ action, category, label, value }: { action: string; category: string; label?: string; value?: number }) => {
//   if (!GA_TRACKING_ID) return;

//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };
