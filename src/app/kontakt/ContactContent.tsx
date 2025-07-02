"use client";

import TopSectionWithButton from "./TopSectionWithButton";
import ContactForm from "./Form";
import TextBoxes from "./TextBoxes";
import Script from "next/script";

export const ContactContent: React.FC = () => {
  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
      <TopSectionWithButton />
      <TextBoxes />
      <ContactForm />
    </>
  );
};
