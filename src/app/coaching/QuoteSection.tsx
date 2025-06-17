import { QuoteIcon } from "../../assets/icon";

function QuoteSection() {
  return (
    <section className="main-bg-color pb-45 pb-lg-90">
      <div className="container pg-lg-90">
        <div className="row mx-15">
          <div className="col-12 col-lg-8 offset-lg-2 border-full border-radius-5 text-center p-30">
            <QuoteIcon className={"accent-fill"} />
            <div className="py-30 px-lg-30">Katalyserande coaching handlar om att frigöra kraft och skapa rörelse. Det är en metod som hjälper individen att snabbt komma åt det som är viktigt –för att sedan ta tydliga steg framåt. Coachningen utgår från klientens egna resurser, med fullt fokus på insikt, ansvar och handling.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
