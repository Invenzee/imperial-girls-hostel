import Image from "next/image";
import CircleButton from "@/components/CircleButton";

const idealFor = [
  "Working women looking for a reliable working women hostel in Karachi",
  "Students who need a quiet space to study",
  "Visitors from Lahore, Islamabad, Multan, Peshawar and other cities",
  "Patients' families and attendants visiting Karachi for medical appointments",
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary text-white">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-6 pt-16 sm:px-8 sm:pb-8 sm:pt-20">
        {/* Top landscape image + neighbourhood intro */}
        <div className="mb-12 grid items-center gap-10 sm:mb-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div
            data-reveal="clip"
            className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:max-w-2xl"
          >
            <Image
              src="/imperial-room-2.jpg"
              alt="Shared room at Imperial Girls Hostel in PECHS, Karachi"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div data-reveal="right" className="max-w-lg">
            <h3 className="font-heading text-2xl font-semibold uppercase leading-[1.1] tracking-[0.04em] sm:text-3xl lg:text-[2rem]">
              A women&apos;s hostel in the heart of Karachi
            </h3>

            <p className="mt-5 font-sans text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base sm:leading-[1.75]">
              PECHS is one of Karachi&apos;s best-connected neighbourhoods,
              bordered by Shahrah-e-Faisal and Shahrah-e-Quaideen. Living here
              puts you close to Tariq Road, Sindhi Muslim Society (SMCHS), and
              the city&apos;s main routes.
            </p>

            <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              Our hostel for girls is a good fit for
            </p>

            <ul className="mt-4 space-y-3">
              {idealFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-sans text-sm leading-relaxed text-white/90 sm:text-[15px]"
                >
                  <span
                    className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-white/70"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* A home for girls + tall image */}
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div data-reveal="left" className="max-w-lg pb-2">
            <h2 className="font-heading text-2xl font-semibold uppercase leading-[1.1] tracking-[0.04em] sm:text-3xl lg:text-[2rem]">
              A home for girls
              <br />
              in PECHS, Karachi
            </h2>

            <p className="mt-6 font-sans text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-base sm:leading-[1.75]">
              Imperial Girls Hostel is a private girls hostel in Karachi,
              located at Plot 254-D, Block 6, PECHS. It is a clean, comfortable
              place for girls and women who want a hostel that feels like home.
              Our goal is to keep hearing guests say, &ldquo;This was the best
              hostel experience of my life!&rdquo;
            </p>

            <CircleButton
              href="#contact"
              variant="outline-light"
              className="mt-8 sm:mt-10"
            >
              Book your stay
            </CircleButton>
          </div>

          <div
            data-reveal="right"
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:mx-0 lg:max-h-[520px] lg:max-w-none lg:aspect-auto lg:h-[min(55vh,520px)] lg:justify-self-end"
          >
            <Image
              src="/imperial-room-3.jpg"
              alt="Triple sharing room at Imperial Girls Hostel"
              fill
              sizes="(max-width: 1024px) 28rem, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
