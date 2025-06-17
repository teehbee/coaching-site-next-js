export type ContactTextBoxesData = {
  icon?: React.ElementType;
  label?: string;
  textContent: string;
};

export type ContactTextBoxesSection = {
  title?: string;
  boxes: ContactTextBoxesData[];
};

export const contactTextBoxesData: ContactTextBoxesSection = {
  title: "Hvordan gå frem?:",
  boxes: [
    {
      label: "Steg 1",
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      label: "Steg 2",
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      label: "Steg 3",
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
    {
      label: "Steg 4",
      textContent: "En förmåga att se helheten –och samtidigt möta individen precis där den är",
    },
  ],
};
