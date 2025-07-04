"use client";

import { useContactForm } from "@/utils";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    isSending,
    formSent,
    onSubmit,
  } = useContactForm();

  return (
    <section id="contact-form" className="dark-bg-color pb-45 pb-lg-90">
      <div className="container">
        <div className="row align-items-stretch px-15 px-lg-0">
          <div className="col-12 col-lg-6 offset-lg-1 alt-bg-color border-radius-5 border-radius-lg-5-left p-30">
            <h2 className="pos-relative custom-border-bottom custom-border-bottom-25-percent-ts mb-15">Kontakt meg i dag</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-lg-6 pb-15">
                  <label className="pb-5" htmlFor="name">
                    Name
                  </label>
                  <div className="input-wrapper">
                    <input type="text" id="name" {...register("name")} onChange={() => clearErrors("name")} />
                    <div className="input-bookmark"></div>
                    {errors.name && <p className="fs-0-75-rem-lg-0-875rem">{errors.name.message}</p>}
                  </div>
                </div>
                <div className="col-12 col-lg-6 pb-15">
                  <label className="pb-5" htmlFor="email">
                    E-postadresse
                  </label>
                  <div className="input-wrapper">
                    <input type="email" id="email" {...register("email")} onChange={() => clearErrors("email")} />
                    <div className="input-bookmark"></div>
                  </div>
                  {errors.email && <p className="fs-0-75-rem-lg-0-875rem">{errors.email.message}</p>}
                </div>
                <div className="col-12 pb-15">
                  <label className="pb-5" htmlFor="message">
                    Melding
                  </label>
                  <div className="input-wrapper">
                    <textarea id="message" {...register("message")} onChange={() => clearErrors("message")} />
                    <div className="input-bookmark"></div>
                  </div>
                  {errors.message && <p className="fs-0-75-rem-lg-0-875rem">{errors.message.message}</p>}
                </div>
              </div>
              <div>Genom att skicka in godkänner du vår behandling av personuppgifter</div>
              <div className="py-15">
                <button type="submit" className="btn btn-primary" aria-label="Send contact message">
                  {isSending ? "Sender..." : "Send"}
                </button>
                {formSent === "success" && <div className="contact-success-message">Meldingen ble sendt. Du hører fra meg snart!</div>}
                {formSent === "error" && <div className="contact-error-message">Noe gikk galt. Prøv igjen senere.</div>}
              </div>
              <div className="fs-0-75-rem-lg-0-875rem">
                Felt merket <span className="info-bookmark"></span> er påkrevd
              </div>
            </form>
          </div>
          <div className="d-none d-lg-flex col-lg-4 alt-bg-color border-radius-lg-5-right p-30 align-items-center">
            <div>
              <img className="img-full" src="/assets/icons/letter_svg.svg" alt="konvolutt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
