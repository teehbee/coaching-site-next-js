export type FrontpageBlockData = {
  headline: string;
  textContent: string;
  linkText: string;
  linkDestination: string;
  image: string;
};

const frontpageAlternatingBlocksData: FrontpageBlockData[] = [
  {
    headline: "Overskrift",
    textContent: "Praesent nibh odio, scelerisque interdum nisi semper, imperdiet pharetra odio. Duis iaculis neque sed pharetra sodales.",
    linkText: "Coaching",
    linkDestination: "/coaching",
    image: "/assets/img/actionbilde1.jpg",
  },
  {
    headline: "Overskrift",
    textContent: "Praesent nibh odio, scelerisque interdum nisi semper, imperdiet pharetra odio. Duis iaculis neque sed pharetra sodales.",
    linkText: "Coaching",
    linkDestination: "/coaching",
    image: "/assets/img/actionbildce2.jpg",
  },
  {
    headline: "Overskrift",
    textContent: "Praesent nibh odio, scelerisque interdum nisi semper, imperdiet pharetra odio. Duis iaculis neque sed pharetra sodales.",
    linkText: "Coaching",
    linkDestination: "/coaching",
    image: "/assets/img/actionbilde1.jpg",
  },
];

export default frontpageAlternatingBlocksData;
