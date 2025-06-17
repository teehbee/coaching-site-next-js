function BannerLeftContent() {
  return (
    <section>
      <div className="container-fluid pos-relative px-0">
        <img className="img-cover img-350h-600" src="/assets/img/hytte-panorama.jpg" alt="Sjøen" />
        <div className="overlay d-flex align-items-end align-items-md-center justify-content-center">
          <div className="container">
            <div className="row px-15 mb-30 mb-lg-0">
              <div className="col-12 col-md-8 col-lg-6 dark-bg-color p-30 p-lg-45 border-radius-5">
                <h2 className="mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">Katalyserance coaching</h2>
                <div>Det är inte rådgivning –det är en process som väcker mod, klarhet och riktning.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerLeftContent;
