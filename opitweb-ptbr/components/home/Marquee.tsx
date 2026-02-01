import { useEffect, useRef } from "react";
import gsap from "gsap";

const keywords = [
  "Marketing Digital",
  "Automação",
  "Desenvolvimento Web",
  "Inteligência Artificial",
  "E-commerce",
  "Estratégia SEO",
  "Branding"
];

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.offsetWidth / 2;

    gsap.to(content, {
      x: -contentWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(content);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex overflow-x-hidden bg-background py-12 border-y border-purple-500/20"
    >
      <div
        ref={contentRef}
        className="flex whitespace-nowrap"
      >
        {/* Conteúdo duplicado para loop infinito */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {keywords.map((word, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white/90">
                  {word}
                </span>
                {/* Círculo decorativo entre palavras */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-mid to-purple-light shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
