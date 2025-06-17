import Image from "next/image";

function AlternateImageTextTiles() {
  const alternateSections = Array.from({ length: 3 });

  const textContent = 'Coaching hos mig är inte terapi, inte rådgivning och definitivt ingen föreläsning där du får höra att du bara ska "tänka positivt". Istället är jag din Mentala Personliga Tränare (MPT) –en sparringpartner som hjälpdig att definiera vad du vill, vad du behöver och hur du tar dig dit. Vi skalar bort bruset och fokuserar på dina mål, dina styrkor och konkreta steg framåt.';

  return (
    <section className="main-bg-color alternate-flex-order-lg">
      <div className="container">
        {alternateSections.map((_, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="row px-15 px-lg-0 pb-30 pb-lg-90 d-flex align-items-stretch">
              <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-6 p-0">
                <Image width={660} height={440} className={`img-cover w-100 h-100 border-radius-top-5 ${isEven ? "border-radius-lg-5-right" : "border-radius-lg-5-left"}`} src="/assets/img/placeholder/sincerely-media-dGxOgeXAXm8-unsplash.jpg" alt="Placeholderbilde" />
              </div>

              <div className={`col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-6 d-flex flex-column justify-content-center alt-bg-color p-30 p-lg-75 border-radius-bottom-5 ${isEven ? "border-radius-lg-5-left" : "border-radius-lg-5-right"}`}>
                <h2 className="fs-1-5-rem-lg-2rem mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">Underoverskrift</h2>
                <div>{textContent}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AlternateImageTextTiles;
