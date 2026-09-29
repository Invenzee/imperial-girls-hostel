import CircleButton from "@/components/CircleButton";

const faqs = [
  {
    question: "Where is Imperial Girls Hostel located?",
    answer:
      "We are at Plot 254-D, Block 6, PECHS, Karachi, near Shahrah-e-Faisal, Tariq Road and Sindhi Muslim Society (SMCHS).",
  },
  {
    question: "Is this a private girls hostel in Karachi?",
    answer:
      "Yes. Imperial Girls Hostel is a private hostel for girls and women, with both private and shared rooms.",
  },
  {
    question: "Is it suitable for working women?",
    answer:
      "Yes. Our rooms, WiFi and 24-hour reception suit those who need a working women hostel in Karachi.",
  },
  {
    question: "Is there a girls hostel near Clifton, Tariq Road or Jinnah Hospital?",
    answer:
      "Our PECHS location is close to Tariq Road and Shahrah-e-Faisal, and Clifton and Jinnah Hospital are reachable by road.",
  },
  {
    question: "What facilities are included?",
    answer:
      "Free WiFi, breakfast, laundry, air conditioning, 24h reception and luggage storage.",
  },
  {
    question: "Can girls from other cities stay at your hostel?",
    answer:
      "Yes. We welcome girls and women from across Pakistan, including Lahore, Islamabad, Multan, Peshawar and Faisalabad.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the \u201CBook Your Stay\u201D button, email us, or call the number below.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqSection() {
  return (
    <section id="faq" className="relative bg-white text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="rounded-t-[32px] bg-primary pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div data-reveal="left">
              <h2 className="font-heading text-[clamp(2.5rem,7vw,5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">
                Frequently
                <br />
                asked questions
              </h2>

              <CircleButton
                href="#contact"
                variant="outline-light"
                className="mt-8 sm:mt-10"
              >
                Book your stay
              </CircleButton>
            </div>

            <div data-reveal="right" className="border-t border-white/15">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-white/15"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-xl lg:text-2xl">
                      {faq.question}
                    </h3>
                    <span
                      className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-white/40 transition-transform duration-300 group-open:rotate-45 sm:size-10"
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-3.5 bg-white" />
                      <span className="absolute h-3.5 w-px bg-white" />
                    </span>
                  </summary>

                  <p className="max-w-2xl pb-6 pr-12 font-sans text-sm leading-relaxed text-white/75 sm:pb-7 sm:text-[15px] sm:leading-[1.7]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
