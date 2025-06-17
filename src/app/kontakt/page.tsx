import TopSectionWithButton from "./TopSectionWithButton";
import TextBoxes from "../../components/reusable/TextBoxes";
import ContactForm from "./Form";

import { contactTextBoxesData } from "../../data/text";

const Contact: React.FC = () => {
  return (
    <>
      <TopSectionWithButton />;
      <TextBoxes data={contactTextBoxesData} />
      <ContactForm />
    </>
  );
};

export default Contact;
