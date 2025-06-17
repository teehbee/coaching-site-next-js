import { CheckedSymbol } from "../../assets/icon";

export type AboutTextBox = {
  icon?: React.ElementType;
  label?: string;
  textContent: string;
};

export type AboutTextBoxesSection = {
  title?: string;
  boxes: AboutTextBox[];
};

export const aboutTextBoxesData: AboutTextBoxesSection = {
  title: "Bengt kännetecknas av:",
  boxes: [
    {
      icon: CheckedSymbol,
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      icon: CheckedSymbol,
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      icon: CheckedSymbol,
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      icon: CheckedSymbol,
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
  ],
};
