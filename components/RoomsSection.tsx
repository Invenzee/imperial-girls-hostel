"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CircleButton from "@/components/CircleButton";

const GAP = 32;

const rooms = [
  {
    sleeps: "Sleeps 3",
    title: "Studio",
    image: "/imperial-room-1.jpg",
    description:
      "Located at Imperial Girls Hostel, these rooms are approximately 20m2 and include a king size bed, sofa bed, fully equipped kitchenette, bathroom with shower, window, air conditioning, TV and free WiFi.",
  },
  {
    sleeps: "Sleeps 2",
    title: "Double Room",
    image: "/imperial-room-2.jpg",
    description:
      "Located at Imperial Girls Hostel, these rooms are approximately 11m2 and include a queen size bed, bathroom with shower, window, air conditioning, carpeted floors, TV and free WiFi.",
  },
  {
    sleeps: "Sleeps 2",
    title: "Twin Room 1",
    image: "/imperial-room-3.jpg",
    description:
      "Located at Imperial Girls Hostel, these rooms are approximately 11m2 and include a queen size bed, bathroom with shower, window, air conditioning, carpeted floors, TV and free WiFi.",
  },
  {
    sleeps: "Sleeps 2",
    title: "Twin Room 2",
    image: "/imperial-room-1.jpg",
    description:
      "A bright twin with workspace, air conditioning, TV and free WiFi — made for a quiet stay in PECHS, Karachi.",
  },
  {
    sleeps: "Sleeps 2",
    title: "Private Double",
    image: "/imperial-room-2.jpg",
    description:
      "A compact private double with a desk, warm lighting and all the essentials for a comfortable night in Karachi.",
  },
  {
    sleeps: "Sleeps 4",
    title: "Family Room",
    image: "/imperial-room-3.jpg",
    description:
      "A larger shared room for friends, with air conditioning, TV and free WiFi in the heart of PECHS, Karachi.",
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

export default function RoomsSection() {
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
        Math.min(current, Math.max(0, rooms.length - nextVisible)),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, rooms.length - visible);
  const go = (dir: -1 | 1) => {
    setIndex((current) => Math.min(maxIndex, Math.max(0, current + dir)));
  };

  return (
    <section id="rooms" className="relative bg-primary text-primary">
      <div className="rounded-t-[32px] bg-white pb-24 pt-4 sm:pb-32 sm:pt-6">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div data-reveal="up" className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
            <div className="relative">
              <h2 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
                Rooms &amp; Dorms
              </h2>

              <div className="relative mt-5 inline-flex sm:mt-6">
                <CircleButton href="#contact" variant="solid" className="py-3 sm:py-3.5">
                  Book now
                </CircleButton>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                className="flex size-11 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous rooms"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index >= maxIndex}
                className="flex size-11 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next rooms"
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
              {rooms.map((room) => (
                <article
                  key={room.title}
                  className="flex shrink-0 flex-col"
                  style={{ width: cardWidth || undefined }}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                    <Image
                      src={room.image}
                      alt={`${room.title} interior`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className="font-heading mt-5 text-2xl font-semibold uppercase tracking-[0.04em] text-primary sm:mt-6 sm:text-3xl">
                    {room.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-relaxed text-primary/55 sm:text-[15px] sm:leading-[1.7]">
                    {room.description}
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
