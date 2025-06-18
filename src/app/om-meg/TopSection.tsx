import Image from "next/image";

const TopSection: React.FC = () => {
  return (
    <section className="pos-relative pb-45 pb-lg-90 main-bg-color">
      <div className="container">
        <div className="row align-items-center flex-sm-row-reverse justify-content-center text-center text-md-start">
          <div className="col-12 col-md-5 z-index-md-100 mb-30 mb-lg-0">
            <Image priority width={520} height={740} className="img-cover mw-md-400px border-radius-5" src="/assets/img/kontor-portrett.jpg" alt="Bengt Johansson" />
          </div>
          <div className="col-12 col-md-7 z-index-md-100 pr-md-30 pr-lg-60 mt-xl--75">
            <div className="mb-30">
              <h1 className="fs-2-rem-lg-4rem mb-30 pos-relative custom-border-bottom custom-border-bottom-25-percent-tc-lg-te">Hvem er Bengt?</h1>
              <div className="fw-500 pb-15">Bengt Johansson har en gedigen bakgrund som ledare, tidigare befäl till sjöss och idag verksam som chef inom teknisk förvaltning.</div>
              <div className="pb-15">Med ett naturligt lugn, tydlighet och en närvaro som inger förtroende, har Bengt under många år stöttat medarbetare, kollegor och ledare genom förändringar, vardagsutmaningar och utveckling.</div>
              <div>Med erfarenhet från både tuffa miljöer till havs och komplexa organisationer på land, vet han vad som krävs för att leda –både sig själv och andra.</div>
            </div>
            <div className="">
              <a className="btn btn-primary" href="#resume">
                Mine erfaringer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block overlay-md">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-3 offset-md-9 h-100 alt-bg-color"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
