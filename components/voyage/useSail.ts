"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { routeThrough } from "./route";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP =
  "(min-width: 900px) and (prefers-reduced-motion: no-preference)";

// Desktop: pin the voyage, sail the track sideways, and draw the route as it goes.
export function useSail(
  section: RefObject<HTMLElement | null>,
  track: RefObject<HTMLDivElement | null>,
  routeBase: RefObject<SVGPathElement | null>,
  routeDraw: RefObject<SVGPathElement | null>,
) {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const sec = section.current!;
      const tr = track.current!;
      const distance = () => tr.scrollWidth - window.innerWidth;

      const buildRoute = () => {
        const origin = tr.getBoundingClientRect();
        const points = [
          ...tr.querySelectorAll<HTMLElement>("[data-stamp]"),
        ].map((s) => {
          const r = s.getBoundingClientRect();
          return {
            x: r.left - origin.left + r.width / 2,
            y: r.top - origin.top + r.height / 2,
          };
        });
        const d = routeThrough([
          { x: 0, y: points[0].y + 80 },
          ...points,
          { x: tr.scrollWidth, y: points.at(-1)!.y - 60 },
        ]);
        routeBase.current!.setAttribute("d", d);
        routeDraw.current!.setAttribute("d", d);
        const len = routeDraw.current!.getTotalLength();
        gsap.set(routeDraw.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        return len;
      };
      let length = buildRoute();

      const sail = gsap.to(tr, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            gsap.set(tr, { x: 0 });
            length = buildRoute();
          },
          onUpdate: (self) =>
            gsap.set(routeDraw.current, {
              strokeDashoffset: length * (1 - self.progress),
            }),
        },
      });

      tr.querySelectorAll<HTMLElement>("[data-port]").forEach((port) => {
        gsap.from(port.querySelectorAll("[data-rise]"), {
          y: 60,
          opacity: 0,
          stagger: 0.06,
          ease: "expo.out",
          scrollTrigger: {
            trigger: port,
            containerAnimation: sail,
            start: "left 85%",
            end: "left 45%",
            scrub: 0.4,
          },
        });
        gsap.fromTo(
          port.querySelector("[data-photo] img"),
          { scale: 1.18 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: port,
              containerAnimation: sail,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, [section, track, routeBase, routeDraw]);
}
