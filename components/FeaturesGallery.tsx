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

function MobileGallery() {
  return (
    <div className="bg-white px-5 pb-16 pt-10 md:hidden">
      <h2 className="font-heading text-[clamp(2.5rem,12vw,4rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39]">
        Gallery
      </h2>
      <h3 className="font-heading mt-5 text-lg font-semibold uppercase tracking-[0.08em] text-primary">
        Shared Spaces
      </h3>
      <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-primary/55">
        At our hostel you will easily find shared rooms and bathrooms made for
        everyday living.
      </p>

      <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((slide) => (
          <div
            key={slide.src}
            className="relative aspect-[4/5] w-[85%] shrink-0 snap-center overflow-hidden rounded-[1.5rem]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="85vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopGallery() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;

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
    <div ref={rootRef} className="relative hidden w-full bg-white md:block">
      <div
        ref={frameRef}
        className="relative h-svh w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex h-full w-max will-change-transform"
        >
          <div className="flex h-full w-screen shrink-0 bg-white">
            <div className="flex h-full w-[min(42%,32rem)] shrink-0 flex-col justify-center pr-10 pl-8 lg:pl-[max(2rem,calc((100vw-1240px)/2))]">
              <h2 className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:2px_#093a39]">
                Gallery
              </h2>

              <h3 className="font-heading mt-8 text-2xl font-semibold uppercase tracking-[0.08em] text-primary lg:text-[1.75rem]">
                Shared Spaces
              </h3>

              <p className="mt-5 max-w-sm font-sans text-[15px] leading-[1.7] text-primary/55">
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
              className="relative h-full w-[min(70vw,900px)] shrink-0"
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
    </div>
  );
}

export default function FeaturesGallery() {
  return (
    <section id="gallery" className="relative w-full bg-white" aria-label="Gallery">
      <MobileGallery />
      <DesktopGallery />
    </section>
  );
}
