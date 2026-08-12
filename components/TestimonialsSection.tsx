"use client";

import { useEffect, useRef, useState } from "react";
import CircleButton from "@/components/CircleButton";

const GAP = 32;

const testimonials = [
  {
    quote:
      "The cleanest hostel we have stayed in. Quiet rooms, friendly staff, and the perfect base for exploring Portimão and the beaches.",
    name: "Emma R.",
    place: "London, UK",
  },
  {
    quote:
      "Felt like home from the first night. Great kitchen, fast WiFi, and we met so many people in the shared spaces. Already planning to come back.",
    name: "Lucas M.",
    place: "Berlin, Germany",
  },
  {
    quote:
      "Spotless rooms, a proper breakfast, and staff who actually care. Best hostel experience we have had in the Algarve.",
    name: "Sofia P.",
    place: "Lisbon, Portugal",
  },
  {
    quote:
      "Ideal for a few quiet days or a fun weekend. The twin room was comfortable, and downtown is right outside the door.",
    name: "Noah K.",
    place: "Amsterdam, Netherlands",
  },
  {
    quote:
      "Warm welcome, helpful local tips, and everything you need on site. We felt looked after without it ever feeling crowded.",
    name: "Mia L.",
    place: "Dublin, Ireland",
  },
  {
    quote:
      "Simple, comfortable, and in a brilliant location. The common lounge made it easy to unwind after a day in the sun.",
    name: "Jonas H.",
    place: "Stockholm, Sweden",
  },
] as const;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={dir === "left" ? "M9 2L4 7L9 12" : "M5 2L10 7L5 12"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.clientWidth;
      const nextVisible = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
      const nextCardWidth = (width - GAP * (nextVisible - 1)) / nextVisible;
      setVisible(nextVisible);
      setCardWidth(nextCardWidth);
      setIndex((current) =>
        Math.min(current, Math.max(0, testimonials.length - nextVisible)),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visible);
  const go = (dir: -1 | 1) => {
    setIndex((current) => Math.min(maxIndex, Math.max(0, current + dir)));
  };

  return (
    <section id="testimonials" className="relative bg-white text-white">
      <div className="rounded-t-[32px] bg-primary pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div data-reveal="up" className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
            <div className="relative">
              <h2 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">
                Guests
              </h2>

              <div className="relative mt-5 inline-flex sm:mt-6">
                <CircleButton
                  href="#contact"
                  variant="outline-light"
                  className="py-3 sm:py-3.5"
                >
                  Book now
                </CircleButton>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                className="flex size-11 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous testimonials"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index >= maxIndex}
                className="flex size-11 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next testimonials"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>

          <div ref={viewportRef} data-reveal="up" className="overflow-hidden">
            <div
              className="flex will-change-transform"
              style={{
                gap: GAP,
                transform: `translateX(-${index * (cardWidth + GAP)}px)`,
                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="flex shrink-0 flex-col rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:rounded-[1.75rem] sm:p-8"
                  style={{ width: cardWidth || undefined }}
                >
                  <p className="font-heading text-5xl font-medium leading-none text-white/35">
                    “
                  </p>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/90 sm:text-[15px] sm:leading-[1.7]">
                    {item.quote}
                  </p>

                  <h3 className="font-heading mt-8 text-xl font-semibold uppercase tracking-[0.04em] text-white sm:mt-10 sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-white/50 sm:text-[13px]">
                    {item.place}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
