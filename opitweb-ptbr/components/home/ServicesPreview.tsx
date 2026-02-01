import { Link } from "react-router-dom";
import { Palette, Share2, TrendingUp, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../animations/AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites modernos, responsivos e otimizados que capturam a essência da sua marca.",
    color: "from-purple-mid to-purple-light",
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description:
      "Estratégias de conteúdo e gestão de redes que conectam com o seu público e geram engajamento.",
    color: "from-purple-light to-peach",
  },
  {
    icon: TrendingUp,
    title: "SEO & UX",
    description:
      "Otimização para motores de busca e experiência do usuário que transforma visitantes em clientes.",
    color: "from-peach to-coral",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-gradient-accent">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções digitais integrais para levar o seu negócio ao próximo nível
          </p>
        </AnimatedSection>

        <AnimatedSection stagger={0.15} className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-glow rounded-2xl p-8 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
              >
                Saiba mais
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
