import type { Metadata } from "next";
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
      <body className={getFontClasses()}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
