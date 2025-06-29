import type { Metadata } from "next";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import { getFontClasses } from "@/lib/fonts";
// import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Bengt Johansson",
    template: "%s | Bengt Johansson",
  },
  description: "Offisiell nettside for Bengt Johansson – coaching og utvikling.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={getFontClasses()}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
