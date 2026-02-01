import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        orbitRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.5"
      );

      gsap.to(".orbiting-wrapper", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbiting-icon", {
        rotation: -360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".stats-card", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 md:pt-16"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-6">
              <Sparkles size={14} className="text-primary" />
              Agência de Marketing Digital
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6"
            >
              Criamos{" "}
              <span className="text-gradient-accent">experiências</span>{" "}
              digitais únicas
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Transformamos a sua visão em realidade digital. Desenvolvimento web, redes 
              sociais e estratégias SEO que impulsionam o seu negócio.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                to="/contacto"
                className="btn-gradient px-10 py-5 rounded-full text-lg font-medium text-white inline-flex items-center justify-center gap-2 group shadow-xl"
              >
                Começar Agora
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/servicios"
                className="px-10 py-5 rounded-full text-lg font-medium text-foreground border border-border hover:bg-secondary/50 transition-colors inline-flex items-center justify-center"
              >
                Ver Serviços
              </Link>
            </div>
          </div>

          {/* Orbit Animation */}
          <div ref={orbitRef} className="relative hidden lg:flex items-center justify-center h-[600px]">
            <div className="relative w-[500px] h-[500px]">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-purple-mid to-purple-light glow-purple flex items-center justify-center z-20 shadow-[0_0_60px_rgba(147,51,234,0.4)]">
                <span className="text-5xl font-display font-bold text-white">20k+</span>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-border/30" />
              <div className="absolute inset-14 rounded-full border border-border/20" />
              <div className="absolute inset-28 rounded-full border border-border/10" />

              {/* Orbiting Elements */}
              {[
                { icon: "🎨", deg: 0 },
                { icon: "📱", deg: 72 },
                { icon: "🚀", deg: 144 },
                { icon: "💡", deg: 216 },
                { icon: "📈", deg: 288 }
              ].map((item, i) => (
                <div
                  key={i}
                  className="orbiting-wrapper absolute inset-0"
                  style={{ transform: `rotate(${item.deg}deg)` }}
                >
                  <div
                    className="orbiting-icon w-16 h-16 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card border border-border flex items-center justify-center shadow-2xl text-3xl"
                    style={{ top: '0%' }}
                  >
                    {item.icon}
                  </div>
                </div>
              ))}

              {/* Stats Card */}
              <div className="stats-card absolute -bottom-6 -right-10 bg-card/90 border border-border backdrop-blur-xl rounded-3xl p-8 shadow-2xl z-30 min-w-[200px]">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Especialistas</p>
                <p className="text-5xl font-bold text-foreground">100+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
