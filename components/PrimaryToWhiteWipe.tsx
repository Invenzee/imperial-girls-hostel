"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

const PRIMARY = "#093a39";

export default function PrimaryToWhiteWipe() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { gsap, ScrollTrigger } = getGsap();
    const body = document.body;

    // Keep body primary so rounded white sheet corners reveal green
    const ctx = gsap.context(() => {
      gsap.set(body, { backgroundColor: PRIMARY });
    }, root);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative h-[30vh] w-full bg-primary"
      aria-hidden="true"
    />
  );
}
