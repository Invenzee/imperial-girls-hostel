import Image from "next/image";
import CircleButton from "@/components/CircleButton";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary text-white">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-6 pt-16 sm:px-8 sm:pb-8 sm:pt-20">
        {/* Top landscape image */}
        <div
          data-reveal="clip"
          className="relative mb-12 aspect-[16/10] w-full max-w-xl overflow-hidden rounded-[1.75rem] sm:mb-14 sm:rounded-[2rem] lg:max-w-2xl"
        >
          <Image
            src="/imperial-room-2.jpg"
            alt="Shared hostel room with seating area"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Suited for everyone + tall image */}
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div data-reveal="left" className="max-w-lg pb-2">
            <h2 className="font-heading text-4xl font-medium uppercase leading-[1.05] tracking-[0.04em] sm:text-5xl lg:text-[3.5rem]">
              A home
              <br />
              for girls
            </h2>

            <p className="mt-6 font-sans text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-base sm:leading-[1.75]">
              Imperial Girls Hostel is located in PECHS, Karachi and is ideal
              for those looking for a clean and comfortable place. Our goal is
              to keep on hearing clients saying this was the best hostel
              experience of their lives!
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
