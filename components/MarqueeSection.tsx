function MarqueeTrack({
  phrase,
  reverse,
}: {
  phrase: string;
  reverse?: boolean;
}) {
  const copies = [0, 1];
  const items = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div
      className={`flex w-max shrink-0 flex-nowrap items-center will-change-transform ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {copies.map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 flex-nowrap items-center"
          aria-hidden={copy === 1}
        >
          {items.map((i) => (
            <span key={`${copy}-${i}`} className="flex shrink-0 flex-nowrap items-center">
              <span className="font-heading whitespace-nowrap px-5 text-[clamp(1.75rem,4vw,3.25rem)] font-semibold uppercase leading-none tracking-[0.08em] text-transparent [-webkit-text-stroke:1.5px_#fff] sm:px-7 sm:[-webkit-text-stroke:2px_#fff]">
                {phrase}
              </span>
              <span
                className="mx-1 size-2.5 shrink-0 rounded-full border-[1.5px] border-white sm:mx-2 sm:size-3"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-24 sm:py-32"
      aria-label="Eat in, sleep in"
    >
      <div className="relative h-[220px] sm:h-[280px] lg:h-[180px]" aria-hidden="true">
        {/* Yellow — EAT IN, bottom-left to top-right */}
        <div
          className="absolute top-1/2 left-[-20%] z-10 flex h-[4.5rem] w-[140%] flex-nowrap items-center overflow-hidden bg-[#e8a317] sm:h-[5.5rem] lg:h-[5rem]"
          style={{ transform: "translateY(-18%) rotate(-11deg)" }}
        >
          <MarqueeTrack phrase="Eat in" reverse />
        </div>

        {/* Teal — SLEEP IN, top-left to bottom-right, on top */}
        <div
          className="absolute top-1/2 left-[-20%] z-20 flex h-[4.5rem] w-[140%] flex-nowrap items-center overflow-hidden bg-primary sm:h-[5.5rem] lg:h-[5rem]"
          style={{ transform: "translateY(-82%) rotate(8deg)" }}
        >
          <MarqueeTrack phrase="Sleep in" />
        </div>
      </div>
    </section>
  );
}
