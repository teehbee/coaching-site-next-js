// Import of google fonts > import into layout.tsx

import { Playfair_Display, Open_Sans } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export function getFontClasses() {
  return `${playfairDisplay.variable} ${openSans.variable}`;
}
