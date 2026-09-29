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

    if (window.matchMedia("(max-width: 767px)").matches) {
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
    <div
      ref={rootRef}
      className="relative w-full bg-white md:h-[280vh] md:bg-primary"
    >
      <div
        ref={stageRef}
        className="flex w-full flex-col bg-white md:sticky md:top-0 md:h-svh md:overflow-hidden"
      >
        <div
          ref={heroContentRef}
          className="relative z-40 mx-auto flex w-full max-w-[1240px] shrink-0 flex-col items-center px-5 pt-[5.25rem] pb-5 will-change-transform md:absolute md:inset-x-0 md:top-[10rem] md:px-8 md:pt-0 md:pb-0"
        >
          <p className="max-w-[20rem] text-center font-sans text-[10px] font-normal uppercase leading-relaxed tracking-[0.3em] text-primary sm:max-w-none sm:text-sm sm:tracking-[0.35em] lg:text-lg lg:tracking-[0.2em]">
            Safe &amp; comfortable girls hostel in PECHS, Karachi
          </p>

          <h1 className="font-heading mt-1.5 text-center text-[clamp(2.25rem,11vw,8.5rem)] font-medium leading-[0.88] tracking-[0.02em] text-transparent uppercase sm:mt-3 [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
            <span className="block">Girls Hostel</span>
            <span className="block">in Karachi</span>
          </h1>

          <CircleButton href="#contact" variant="solid" className="mt-4 sm:mt-8">
            Book your stay
          </CircleButton>
        </div>

        <div className="relative z-20 px-4 pb-10 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:px-0 md:pb-0">
          <div
            ref={imageWrapRef}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.5rem] md:mt-32 md:aspect-auto md:max-w-none lg:mt-52"
          >
            <Image
              src="/imperial-room-1.jpg"
              alt="Imperial Girls Hostel"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1240px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <p className="mx-auto max-w-md px-5 pb-12 text-center font-sans text-sm leading-relaxed text-primary/70 md:hidden">
          We offer private and shared rooms for girls and women who want a
          quiet, comfortable stay in Karachi. Whether you are a student, a
          working woman, or visiting the city, Imperial Girls Hostel is a nearby
          girls hostel in PECHS with everything you need close by.
        </p>

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 z-30 hidden items-center justify-center px-6 opacity-0 md:flex sm:px-10"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div
              className="mb-8 h-px w-10 bg-white sm:mb-10 sm:w-12"
              aria-hidden="true"
            />
            <p className="font-sans text-base leading-relaxed text-white sm:text-lg sm:leading-[1.7] md:text-xl lg:text-[1.35rem] lg:leading-[1.75]">
              We offer private and shared rooms for girls and women who want a
              quiet, comfortable stay in Karachi. Whether you are a student, a
              working woman, or visiting the city, Imperial Girls Hostel is a
              nearby girls hostel in PECHS with everything you need close by.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
