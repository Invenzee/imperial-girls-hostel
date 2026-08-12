"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { getGsap } from "@/lib/gsap";

const slides = [
  {
    src: "/imperial-room-1.jpg",
    alt: "Shared triple room with wooden beds",
  },
  {
    src: "/imperial-room-2.jpg",
    alt: "Shared room with seating area",
  },
  {
    src: "/imperial-room-3.jpg",
    alt: "Triple sharing room with matching beds",
  },
  {
    src: "/imperial-bath-1.jpg",
    alt: "Clean hostel bathroom",
  },
  {
    src: "/imperial-bath-2.jpg",
    alt: "Bathroom with shower and sink",
  },
] as const;

export default function FeaturesGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const frame = frameRef.current;
    const track = trackRef.current;
    if (!root || !frame || !track) return;

    const { gsap, ScrollTrigger } = getGsap();

    const getTravel = () =>
      Math.max(0, track.scrollWidth - frame.clientWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: frame,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 2, getTravel())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    const images = Array.from(frame.querySelectorAll("img"));

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refresh, { once: true });
        img.addEventListener("error", refresh, { once: true });
      }
    });

    const raf = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="gallery"
      className="relative w-full bg-white"
      aria-label="Gallery"
    >
      <div
        ref={frameRef}
        className="relative h-svh w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex h-full w-max will-change-transform"
        >
          <div className="flex h-full w-screen shrink-0 flex-col bg-white md:flex-row">
            <div className="flex w-full shrink-0 flex-col justify-center px-5 py-8 sm:px-8 md:h-full md:w-[min(42%,32rem)] md:py-0 md:pr-10 md:pl-8 lg:pl-[max(2rem,calc((100vw-1240px)/2))]">
              <h2 className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
                Gallery
              </h2>

              <h3 className="font-heading mt-6 text-lg font-semibold uppercase tracking-[0.08em] text-primary sm:mt-8 sm:text-2xl lg:text-[1.75rem]">
                Shared Spaces
              </h3>

              <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-primary/55 sm:mt-5 sm:text-[15px] sm:leading-[1.7]">
                At our hostel you will easily find shared rooms and bathrooms
                made for everyday living.
              </p>
            </div>

            <div className="relative h-full min-w-0 flex-1">
              <Image
                src={slides[0].src}
                alt={slides[0].alt}
                fill
                sizes="60vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {slides.slice(1).map((slide) => (
            <div
              key={slide.src}
              className="relative h-full w-[min(85vw,900px)] shrink-0 md:w-[min(70vw,900px)]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="70vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
