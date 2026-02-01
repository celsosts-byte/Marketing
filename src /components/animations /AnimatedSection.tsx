import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  stagger = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getAnimation = () => {
      switch (animation) {
        case "fadeUp":
          return { y: 50, opacity: 0 };
        case "fadeIn":
          return { opacity: 0 };
        case "slideLeft":
          return { x: -100, opacity: 0 };
        case "slideRight":
          return { x: 100, opacity: 0 };
        case "scale":
          return { scale: 0.8, opacity: 0 };
        default:
          return { y: 50, opacity: 0 };
      }
    };

    const children = stagger > 0 ? element.children : element;

    gsap.fromTo(
      children,
      getAnimation(),
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
