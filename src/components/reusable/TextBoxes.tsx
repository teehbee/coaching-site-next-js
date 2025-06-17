import type { ContactTextBoxesSection } from "../../data/text/contactTextBoxes";

interface TextBoxesProps {
  data: ContactTextBoxesSection;
}

const TextBoxes: React.FC<TextBoxesProps> = ({ data }) => {
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        {data.title && (
          <div className="text-center pb-45">
            <h2 className="pos-relative pb-10 custom-border-bottom-25-15-percent-tc">{data.title}</h2>
          </div>
        )}

        <div className="row">
          {data.boxes.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-30 d-flex mh-150px">
              <div className="border-full border-radius-5 text-center p-15">
                <div className="pb-15">{item.icon ? <item.icon /> : item.label ? <span>{item.label}</span> : null}</div>
                <div className="pb-15">{item.textContent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextBoxes;
