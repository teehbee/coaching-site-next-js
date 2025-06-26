import type { Metadata } from "next";
import Script from "next/script";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import { getFontClasses } from "@/lib/fonts";

import { GoogleAnalytics } from "@next/third-parties/google";

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
    <html lang="en">
      <Script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js" strategy="beforeInteractive" />
      <body className={getFontClasses()}>
        <Script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="CWoF1AuWdmx_BX" async strategy="afterInteractive" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
