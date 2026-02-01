import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { Palette, Share2, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites modernos, responsivos e otimizados que capturam a essência da sua marca e transformam visitantes em clientes.",
    features: [
      "Design responsivo para todos os dispositivos",
      "Otimização de velocidade e desempenho",
      "Integração com CMS e plataformas",
      "Animações e efeitos interativos",
      "Manutenção e suporte contínuo",
    ],
    color: "from-purple-mid to-purple-light",
    gradient: "purple",
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description:
      "Estratégias de conteúdo e gestão de redes que conectam com o seu público, geram engajamento e construem comunidade.",
    features: [
      "Estratégia de conteúdo personalizada",
      "Design de posts e stories",
      "Gestão de comunidade",
      "Análise e relatórios mensais",
      "Campanhas publicitárias",
    ],
    color: "from-purple-light to-peach",
    gradient: "mixed",
  },
  {
    icon: TrendingUp,
    title: "SEO & UX",
    description:
      "Otimização para motores de busca e experiência do usuário que melhora sua visibilidade e converte tráfego em resultados.",
    features: [
      "Auditoria SEO completa",
      "Otimização on-page e off-page",
      "Pesquisa de keywords",
      "Melhoria da experiência do usuário",
      "Análise de concorrência",
    ],
    color: "from-peach to-coral",
    gradient: "warm",
  },
];

const whyChooseUs = [
  {
    title: "Experiência Comprovada",
    description: "Mais de 5 anos transformando negócios digitalmente",
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais certificados em cada área",
  },
  {
    title: "Resultados Mensuráveis",
    description: "KPIs claros e relatórios transparentes",
  },
  {
    title: "Suporte Contínuo",
    description: "Acompanhamento em cada etapa do projeto",
  },
];

export default function Servicios() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <ParallaxSection
          speed={0.3}
          className="absolute top-20 right-10 w-72 h-72 bg-purple-mid/20 rounded-full blur-3xl"
        />
        <ParallaxSection
          speed={0.4}
          direction="down"
          className="absolute bottom-0 left-10 w-80 h-80 bg-peach/15 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Nossos{" "}
              <span className="text-gradient-accent">Serviços</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Soluções digitais completas para impulsionar o seu negócio. 
              De desenvolvimento web a estratégias de marketing que geram resultados.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contacto"
                    className="btn-gradient px-6 py-3 rounded-full text-sm font-medium text-white inline-flex items-center gap-2 group"
                  >
                    Solicitar Orçamento
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Visual Card */}
                <div
                  className={`card-glow rounded-3xl p-8 aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="text-center">
                    <div
                      className={`w-32 h-32 rounded-full bg-gradient-to-br ${service.color} mx-auto mb-6 flex items-center justify-center glow-purple`}
                    >
                      <service.icon size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-dark/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Por que{" "}
              <span className="text-gradient-accent">nos escolher</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nos diferenciamos pelo nosso compromisso com a excelência e 
              resultados tangíveis para o seu negócio.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="card-glow rounded-2xl p-6 text-center"
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
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
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Conte-nos sobre o seu projeto e prepararemos uma proposta personalizada.
            </p>
            <Link
              to="/contacto"
              className="btn-gradient px-8 py-4 rounded-full text-base font-medium text-white inline-flex items-center gap-2 group"
            >
              Falar Agora
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
