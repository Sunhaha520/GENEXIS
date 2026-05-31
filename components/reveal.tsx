"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 秒，同屏多个元素错开 */
  delay?: number;
  /** 仅首屏标题等：进入页面即淡入 */
  eager?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-done");
      return;
    }

    const show = () => {
      if (el.classList.contains("reveal-done")) return;
      el.style.setProperty("--reveal-delay", `${delay}s`);
      el.classList.remove("reveal-pending");
      el.classList.add("reveal-done");
    };

    if (eager) {
      el.classList.add("reveal-pending");
      requestAnimationFrame(() => requestAnimationFrame(show));
      return;
    }

    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.9;

    if (belowFold) {
      el.classList.add("reveal-pending");
    } else {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, eager]);

  return (
    <div ref={ref} className={["reveal", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
