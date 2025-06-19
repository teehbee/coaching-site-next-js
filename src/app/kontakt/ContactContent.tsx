"use client";

import TopSectionWithButton from "./TopSectionWithButton";
import ContactForm from "./Form";
import TextBoxes from "./TextBoxes";

export const ContactContent: React.FC = () => {
  return (
    <>
      <TopSectionWithButton />
      <TextBoxes />
      <ContactForm />
    </>
  );
};
