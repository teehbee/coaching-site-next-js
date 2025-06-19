import TopSectionWithButton from "./TopSectionWithButton";
import ContactForm from "./Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt for mer informasjon om coaching og tjenester.",
  keywords: ["coaching", "kontakt", "psykolog", "rådgivning"],
  openGraph: {
    title: "Kontakt oss – Bengt Johansson",
    description: "Vi hjelper deg gjerne. Kontakt oss i dag.",
    url: "https://mittdomene.no/kontakt",
    siteName: "Bengt Johansson",
    images: [
      {
        url: "https://mittdomene.no/images/og-kontakt.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt oss-bilde",
      },
    ],
    locale: "no_NO",
    type: "website",
  },
};

const Contact: React.FC = () => {
  return (
    <>
      <TopSectionWithButton />
      <ContactForm />
    </>
  );
};

export default Contact;
