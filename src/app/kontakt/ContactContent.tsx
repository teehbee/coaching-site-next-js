"use client";

import { useEffect } from "react";
import TopSectionWithButton from "./TopSectionWithButton";
import ContactForm from "./Form";
import TextBoxes from "./TextBoxes";
// import Script from "next/script";

export const ContactContent: React.FC = () => {
  // Add and remove recaptcha dynamic to make sure it does not run on other pages
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const scriptUrl = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    // Don't add script if it already exists
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      script.setAttribute("data-loaded-by", "ContactContent");
      document.body.appendChild(script);
    }

    // Cleanup – remove script when component dismounts
    return () => {
      const script = document.querySelector(`script[src="${scriptUrl}"]`);
      if (script && script.getAttribute("data-loaded-by") === "ContactContent") {
        script.remove();
      }

      // Remove badge if present
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) {
        badge.remove();
      }
    };
  }, []);

  return (
    <>
      {/* <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} /> */}
      <TopSectionWithButton />
      <TextBoxes />
      <ContactForm />
    </>
  );
};
