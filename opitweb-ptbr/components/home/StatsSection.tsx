import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSection } from "../animations/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Projetos Concluídos" },
  { value: 100, suffix: "+", label: "Especialistas" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 5, suffix: " anos", label: "De Experiência" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: value,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].val));
            },
          }
        );
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-dark/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
