declare global {
  interface Window {
    Usercentrics?: {
      getConsents: () => { marketing: boolean };
      onConsentChanged: (callback: () => void) => void;
    };
    gtag?: (...args: unknown[]) => void;
  }
}
