import { resumeData as data } from "../../data/text";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="white-bg-color pb-45 pb-lg-90">
      <div className="container">
        <div className="row ">
          <div className="col-3 offset-2 offset-lg-3 timeline-col pos-relative">
            <h2 className="dark-font mb-30">Erfaring</h2>
          </div>
        </div>

        {data.map((item, index) => (
          <div key={index} className="row dark-font mh-100px">
            <div className="col-3 col-lg-2 offset-2 offset-lg-3 timeline-col pos-relative pb-15 pb-lg-30">
              <div className="timeline-marker" />
              <div>{item.dateFrom}</div>
              <div>{item.dateTo}</div>
            </div>
            <div className="col-6 pb-15 pb-lg-30">
              <div className="fw-500 pb-5">{item.companyName}</div>
              <div className="pb-5">{item.position}</div>
              <div className="fs-0-75-rem-lg-0-875rem pb-5">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
