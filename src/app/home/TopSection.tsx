import Link from "next/link";

const HomepageTopSection: React.FC = () => {
  return (
    <section className="main-bg-color">
      <div className="container-fluid pos-relative pt-lg-45">
        <div className="row">
          <div className="col-10 col-sm-8 offset-1 offset-sm-2 col-md-4 offset-md-8 px-0">
            <img className="img-full" src="/assets/img/banner-portrait-1.png" alt="Bengt Johansson" />
          </div>
        </div>
        <div className="overlay-md pt-lg-45">
          <div className="container d-flex flex-column h-100">
            <div className="row align-items-center">
              <div className="col-12 col-sm-8 col-md-6 text-center text-sm-start py-30 pt-xl-75">
                <div>
                  <h1 className="fs-2-rem-lg-4rem pos-relative custom-border-bottom custom-border-bottom-25-percent-tc-sm-ts">Bengt Johansson</h1>
                </div>
                <div className="fs-1-5-rem-lg-2rem pb-30">Lederskapsutvikling & Coaching</div>
                <Link className="btn btn-primary align-self-center align-self-lg-start" href="/">
                  Kontakt meg i dag
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTopSection;
