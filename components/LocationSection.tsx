const areas = [
  {
    title: "Girls Hostel near Shahrah-e-Faisal",
    description:
      "PECHS borders Shahrah-e-Faisal, one of Karachi's main roads. If you are looking for a girls hostel in Karachi on Shahrah-e-Faisal, our hostel is right next to it, with easy access to offices, transport and daily needs.",
  },
  {
    title: "Girls Hostel near Tariq Road",
    description:
      "Tariq Road, known for shopping and dining, is part of the PECHS area. Guests can reach it quickly for shopping, food and errands.",
  },
  {
    title: "Girls Hostel in PECHS and near SMCHS",
    description:
      "We are in PECHS, and Sindhi Muslim Society (SMCHS) is just next door. It is a well-established residential area with shops, cafés and services close by.",
  },
  {
    title: "Girls Hostel near Jinnah Hospital",
    description:
      "Visiting Jinnah Hospital for treatment or to accompany a family member? Our women's hostel offers a quiet, comfortable place to stay, reachable by road from PECHS.",
  },
  {
    title: "Girls Hostel near Clifton",
    description:
      "Many of our guests work or study in Clifton and prefer to stay in a well-connected area like PECHS. Clifton is reachable by road through Shahrah-e-Faisal.",
  },
  {
    title: "Looking for a girls hostel near you?",
    description:
      "Search for \u201Cgirls hostel near me\u201D or \u201Cwomen's hostel near me\u201D from anywhere around PECHS, Shahrah-e-Faisal, Tariq Road or SMCHS, and Imperial Girls Hostel is here for you. We welcome guests from all over Pakistan, whether you need a short stay or a longer one.",
  },
] as const;

export default function LocationSection() {
  return (
    <section id="location" className="relative bg-primary text-primary">
      <div className="rounded-t-[32px] bg-white pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div data-reveal="up" className="mb-12 max-w-3xl sm:mb-16">
            <h2 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
              Our Location
              <span className="mt-3 block text-xl font-semibold leading-tight tracking-[0.04em] text-primary [-webkit-text-stroke:0] sm:mt-4 sm:text-2xl lg:text-3xl">
                Girls hostel in PECHS, Karachi
              </span>
            </h2>

            <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-primary/55 sm:mt-6 sm:text-[15px] sm:leading-[1.7]">
              Imperial Girls Hostel is at Plot 254-D, Block 6, PECHS, Karachi.
              If you search for a girls hostel near you in Karachi, our location
              gives you easy access to some of the city&apos;s busiest areas.
            </p>
          </div>

          <div
            data-reveal-stagger="items"
            className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14"
          >
            {areas.map((area, i) => (
              <article
                key={area.title}
                className="flex flex-col border-t border-primary/15 pt-6"
              >
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/45">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading mt-3 text-xl font-semibold uppercase leading-tight tracking-[0.04em] text-primary sm:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-relaxed text-primary/55 sm:text-[15px] sm:leading-[1.7]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
