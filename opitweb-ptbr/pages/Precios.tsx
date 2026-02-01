import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "499",
    description: "Perfeito para negócios que estão iniciando sua presença digital",
    features: [
      "Desenvolvimento web de até 5 páginas",
      "Design responsivo",
      "Otimização SEO básica",
      "Formulário de contato",
      "1 mês de suporte",
    ],
    notIncluded: [
      "Gestão de redes sociais",
      "Blog integrado",
      "Análise avançada",
    ],
    popular: false,
  },
  {
    name: "Médio",
    price: "999",
    description: "Ideal para empresas que buscam crescer digitalmente",
    features: [
      "Desenvolvimento web de até 15 páginas",
      "Design responsivo premium",
      "Otimização SEO completa",
      "Blog integrado",
      "Gestão de 2 redes sociais",
      "3 meses de suporte",
      "Análise mensal",
    ],
    notIncluded: ["Campanhas publicitárias"],
    popular: true,
  },
  {
    name: "Completo",
    price: "1999",
    description: "Solução integral para máximo impacto digital",
    features: [
      "Desenvolvimento web ilimitado",
      "Design responsivo premium",
      "SEO avançado e estratégico",
      "Blog e sistema de conteúdos",
      "Gestão de todas as redes sociais",
      "Campanhas publicitárias",
      "12 meses de suporte",
      "Análise e relatórios semanais",
      "Consultoria estratégica",
    ],
    notIncluded: [],
    popular: false,
  },
];

const faqs = [
  {
    question: "O que inclui o suporte?",
    answer:
      "O suporte inclui correção de erros, pequenos ajustes de conteúdo, atualizações de segurança e assistência técnica por email e telefone.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim, você pode atualizar seu plano a qualquer momento. Vamos ajudá-lo a fazer a migração sem interrupções.",
  },
  {
    question: "Quanto tempo leva para desenvolver meu projeto?",
    answer:
      "O tempo varia conforme o plano: Básico (2-3 semanas), Médio (4-6 semanas), Completo (8-12 semanas).",
  },
  {
    question: "Há custos adicionais?",
    answer:
      "O preço inclui tudo que está listado. Você só pagaria a mais se solicitar funcionalidades fora do escopo acordado.",
  },
];

export default function Precios() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <ParallaxSection
          speed={0.3}
          className="absolute top-10 left-20 w-80 h-80 bg-purple-mid/20 rounded-full blur-3xl"
        />
        <ParallaxSection
          speed={0.5}
          direction="down"
          className="absolute bottom-0 right-10 w-72 h-72 bg-peach/15 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Planos e{" "}
              <span className="text-gradient-accent">Preços</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Soluções transparentes para cada etapa do seu negócio. 
              Sem custos ocultos, com resultados garantidos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection stagger={0.15} className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-3xl p-8 transition-all duration-300",
                  plan.popular
                    ? "card-glow border-primary/50 scale-105 z-10"
                    : "card-glow"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-mid to-purple-light rounded-full text-xs font-medium text-white flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Mais Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                      R${plan.price}
                    </span>
                    <span className="text-muted-foreground">/projeto</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground line-through opacity-50"
                    >
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">✕</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className={cn(
                    "w-full py-3 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 group transition-all",
                    plan.popular
                      ? "btn-gradient text-white"
                      : "border border-border hover:bg-secondary/50 text-foreground"
                  )}
                >
                  Escolher Plano
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-dark/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Perguntas{" "}
              <span className="text-gradient-accent">Frequentes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tiramos suas dúvidas sobre nossos planos e serviços.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger={0.1} className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card-glow rounded-2xl p-6"
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="card-glow rounded-3xl p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Precisa de algo personalizado?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Se você tem requisitos específicos, entre em contato para criamos um plano 
              sob medida das suas necessidades.
            </p>
            <Link
              to="/contacto"
              className="btn-gradient px-8 py-4 rounded-full text-base font-medium text-white inline-flex items-center gap-2 group"
            >
              Solicitar Orçamento
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
