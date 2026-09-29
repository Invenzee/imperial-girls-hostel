const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-4 py-3.5 font-sans text-sm text-primary outline-none transition-colors placeholder:text-primary/35 focus:border-primary sm:px-5 sm:py-4";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-primary text-primary">
      <div className="rounded-t-[32px] bg-white pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div data-reveal="left">
              <h2 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
                Contact
                <span className="mt-3 block text-xl font-semibold leading-tight tracking-[0.04em] text-primary [-webkit-text-stroke:0] sm:mt-4 sm:text-2xl lg:text-3xl">
                  Imperial Girls Hostel
                </span>
              </h2>

              <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-primary/55 sm:mt-8 sm:text-[15px] sm:leading-[1.7]">
                Questions about rooms, dates or your stay? Write to us. We are
                happy to help you plan your stay at our girls hostel in PECHS,
                Karachi.
              </p>

              <dl className="mt-10 space-y-6 sm:mt-12">
                <div>
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                    Address
                  </dt>
                  <dd className="mt-2 font-heading text-xl font-semibold uppercase tracking-[0.04em] text-primary sm:text-2xl">
                    254-D Block 6 PECHS
                    <br />
                    Karachi
                  </dd>
                </div>

                <div>
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href="mailto:Imperialgirlshostel@gmail.com"
                      className="font-heading break-all text-lg font-semibold tracking-[0.02em] text-primary transition-opacity hover:opacity-60 sm:break-normal sm:text-2xl"
                    >
                      Imperialgirlshostel@gmail.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href="tel:+923302085223"
                      className="font-heading text-xl font-semibold uppercase tracking-[0.04em] text-primary transition-opacity hover:opacity-60 sm:text-2xl"
                    >
                      0330 208 5223
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <form
              data-reveal="right"
              className="flex flex-col gap-4 sm:gap-5"
              action="#"
              method="post"
            >
              <label className="block">
                <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className={`${fieldClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="btn-circle-hover mt-2 inline-flex w-fit items-center justify-center rounded-full border border-primary bg-primary px-8 py-3.5 font-sans text-xs font-medium tracking-[0.18em] text-white uppercase [--btn-circle:#fff] [--btn-text-hover:#000] sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                <span className="btn-circle-hover__label">Send message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
