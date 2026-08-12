"use client";

import { useEffect } from "react";
import { getGsap } from "@/lib/gsap";

function visibleState() {
  return {
    autoAlpha: 1,
    x: 0,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
  };
}

export default function ScrollAnimations() {
  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onNavClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      );
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();

      if (reduced) {
        target.scrollIntoView();
        history.pushState(null, "", href);
        return;
      }

      gsap.to(window, {
        duration: 1.2,
        ease: "power3.inOut",
        scrollTo: { y: target, autoKill: true },
        onComplete: () => history.pushState(null, "", href),
      });
    };

    document.addEventListener("click", onNavClick);

    if (reduced) {
      return () => document.removeEventListener("click", onNavClick);
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.closest("#gallery")) return;

        const type = el.dataset.reveal ?? "up";
        const from: gsap.TweenVars = { autoAlpha: 0 };
        const to: gsap.TweenVars = {
          autoAlpha: 1,
          duration: 1.15,
          ease: "power3.out",
          overwrite: "auto",
        };

        if (type === "up") {
          from.y = 80;
          to.y = 0;
        }
        if (type === "left") {
          from.x = -70;
          to.x = 0;
        }
        if (type === "right") {
          from.x = 70;
          to.x = 0;
        }
        if (type === "scale") {
          from.scale = 0.88;
          from.y = 40;
          to.scale = 1;
          to.y = 0;
        }
        if (type === "clip") {
          from.clipPath = "inset(18% 18% 18% 18% round 32px)";
          from.scale = 1.12;
          to.clipPath = "inset(0% 0% 0% 0% round 0px)";
          to.scale = 1;
          to.duration = 1.35;
          to.ease = "power4.out";
        }

        gsap.set(el, from);

        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => gsap.to(el, to),
          onRefresh: (self) => {
            if (self.scroll() >= self.start) {
              gsap.set(el, visibleState());
            }
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        if (group.closest("#gallery")) return;
        const items = group.querySelectorAll<HTMLElement>(":scope > *");
        gsap.set(items, { y: 64, autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: group,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(items, {
              y: 0,
              autoAlpha: 1,
              duration: 0.95,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: "auto",
            });
          },
          onRefresh: (self) => {
            if (self.scroll() >= self.start) {
              gsap.set(items, visibleState());
            }
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    const raf = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      document.removeEventListener("click", onNavClick);
      window.removeEventListener("load", refresh);
      window.cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return null;
}
