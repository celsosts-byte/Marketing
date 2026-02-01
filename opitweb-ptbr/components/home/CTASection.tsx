import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { ParallaxSection } from "../animations/ParallaxSection";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxSection speed={0.3} className="absolute top-0 right-0 w-72 h-72 bg-purple-mid/20 rounded-full blur-3xl" />
      <ParallaxSection speed={0.5} direction="down" className="absolute bottom-0 left-0 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="scale" className="card-glow rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Pronto para transformar sua{" "}
            <span className="text-gradient-accent">presença digital</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Vamos conversar sobre o seu próximo projeto. Nossa equipe está pronta para 
            ajudá-lo a alcançar os seus objetivos digitais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-gradient px-8 py-4 rounded-full text-base font-medium text-white inline-flex items-center justify-center gap-2 group"
            >
              Falar Agora
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/precios"
              className="px-8 py-4 rounded-full text-base font-medium text-foreground border border-border hover:bg-secondary/50 transition-colors inline-flex items-center justify-center"
            >
              Ver Preços
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
