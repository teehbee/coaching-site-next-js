import type { Metadata } from "next";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import { getFontClasses } from "@/lib/fonts";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <Script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js" strategy="beforeInteractive" />
        <Script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="CWoF1AuWdmx_BX" async strategy="beforeInteractive" />
      </head>
      <body className={getFontClasses()}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
