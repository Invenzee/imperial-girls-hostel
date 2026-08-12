"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CircleButton from "@/components/CircleButton";
import { getGsap } from "@/lib/gsap";

const END_W = 1240;
const END_H = 700;
const PRIMARY = "#093a39";
const WHITE = "#ffffff";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const imageWrap = imageWrapRef.current;
    const intro = introRef.current;
    const heroContent = heroContentRef.current;

    if (!root || !stage || !imageWrap || !intro || !heroContent) {
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();
    const body = document.body;

    const getEndWidth = () => Math.min(END_W, window.innerWidth - 32);
    const getEndHeight = () => {
      const scale = getEndWidth() / END_W;
      return Math.min(END_H * scale, window.innerHeight * 0.75);
    };
    const getStartWidth = () => getEndWidth() * 0.8;
    const getStartHeight = () => getEndHeight() * 0.8;
    const getBottomY = () => (window.innerHeight - getStartHeight()) / 2;

    const ctx = gsap.context(() => {
      gsap.set(imageWrap, {
        width: getStartWidth(),
        height: getStartHeight(),
        y: getBottomY(),
        borderRadius: "1.5rem",
        opacity: 1,
      });
      gsap.set([stage, body], { backgroundColor: WHITE });
      gsap.set(intro, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        imageWrap,
        {
          width: () => getEndWidth(),
          height: () => getEndHeight(),
          y: 0,
          borderRadius: "1.25rem",
          ease: "none",
          duration: 1,
          marginTop: "0%",
        },
        0,
      );

      tl.to(
        heroContent,
        {
          y: () => -window.innerHeight * 0.85,
          opacity: 0,
          ease: "none",
          duration: 0.9,
        },
        0,
      );

      tl.to(
        [stage, body],
        {
          backgroundColor: PRIMARY,
          ease: "none",
          duration: 0.85,
        },
        1.05,
      );

      tl.to(
        imageWrap,
        {
          y: () => -window.innerHeight,
          ease: "none",
          duration: 0.55,
        },
        1.55,
      );

      tl.to(
        intro,
        {
          opacity: 1,
          ease: "none",
          duration: 0.4,
        },
        1.75,
      );
    }, root);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      gsap.set(body, { backgroundColor: WHITE });
    };
  }, []);

  return (
    <div ref={rootRef} className="relative h-[280vh] w-full bg-primary">
      <div
        ref={stageRef}
        className="sticky top-0 h-svh w-full overflow-hidden bg-white"
      >
        <div
          ref={heroContentRef}
          className="absolute inset-x-0 top-[6.5rem] z-40 mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 will-change-transform sm:top-[10rem] sm:px-8"
        >
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.35em] text-primary sm:text-lg sm:tracking-[0.4em]">
            Feeling at home
          </p>

          <h1 className="font-heading mt-2 text-center text-[clamp(2.75rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[0.02em] text-transparent uppercase sm:mt-3 [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
            <span className="block">Sharing</span>
            <span className="block">Experiences</span>
          </h1>

          <CircleButton href="#contact" variant="solid" className="mt-6 sm:mt-8">
            Book your stay
          </CircleButton>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div
            ref={imageWrapRef}
            className="relative mt-16 overflow-hidden will-change-transform sm:mt-32 lg:mt-52"
            style={{ width: END_W * 0.8, height: END_H * 0.8 }}
          >
            <Image
              src="/imperial-room-1.jpg"
              alt="Imperial Girls Hostel"
              fill
              priority
              sizes="1240px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 opacity-0 sm:px-10"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div
              className="mb-8 h-px w-10 bg-white sm:mb-10 sm:w-12"
              aria-hidden="true"
            />
            <p className="font-sans text-base leading-relaxed text-white sm:text-lg sm:leading-[1.7] md:text-xl lg:text-[1.35rem] lg:leading-[1.75]">
              We provide private and shared rooms for those who
              <br className="hidden sm:block" />{" "}
              want to spend some quiet or fun days in Karachi.
              <br className="hidden sm:block" /> Always with the company of the
              sun!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
