const TopBanner: React.FC = () => {
  return (
    <section className="p-0">
      <div className="container-fluid pos-relative p-0">
        <img className="img-cover h-60-md-80vh" src="/assets/img/placeholder/kenny-eliason-1-aA2Fadydc-unsplash.jpg" alt="placeholderbilde" />
        <div className="overlay-lg d-flex align-items-end justify-content-center">
          <div className="container">
            <div className="row px-15 px-lg-0">
              <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-8 offset-lg-2 dark-bg-color p-30 p-lg-45 mt--75 mb-lg-150 border-radius-5">
                <h1 className="fs-1-5-rem-lg-3rem pos-relative custom-border-bottom  custom-border-bottom-25-15-percent-ts mb-15">Coaching</h1>
                <div>Hos mig handlar coaching om att ge dig som ledare, medarbetare eller individ verktygen för att hitta dina egna svar och lösningar. Jag utgår från att du redan är expert på ditt eget liv och ditt eget ledarskap –min roll är att hjälpa dig att se det klarare.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
