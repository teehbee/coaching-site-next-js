import { PortableTextBlock } from "@portabletext/react";

export interface SanityTextBox {
  label?: string; // Hvis du skal bruke label eller ikon, ellers kan du fjerne
  icon?: React.ElementType;
  textContent: PortableTextBlock[];
}

export interface SanityTextBoxesSection {
  title?: string;
  boxes: SanityTextBox[];
}
