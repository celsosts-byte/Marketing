import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Settings, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  FileCode2,
  Workflow
} from "lucide-react";

import { Layout } from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function AutomacaoPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((elem: any) => {
        gsap.fromTo(elem, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            }
          }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <main ref={mainRef} className="bg-background min-h-screen pt-28">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
          
          <div className="reveal">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Crie, automatize e <br />
              <span className="text-gradient-accent">gestore seus processos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Assuma o controle total da sua operação. Transforme fluxos de trabalho complexos 
              em processos simples, rápidos e livres de erros humanos.
            </p>
            <a href="https://wa.me/seunumerowhatsapp" className="btn-gradient px-10 py-5 rounded-full text-white font-bold text-lg inline-flex items-center gap-2 group">
              Quero experimentar agora!
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Recursos Detalhados */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Controle e Padronização</h2>
              <p className="text-muted-foreground text-lg">Dê visibilidade total aos fluxos e responsabilidades claras aos times.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="reveal group p-8 rounded-3xl bg-card/50 border border-border hover:bg-secondary/30 transition-all">
                <Workflow className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold mb-4 text-white">Solicitações Dinâmicas</h4>
                <p className="text-muted-foreground">
                  Atribuição inteligente de tarefas baseada em regras de negócio e disponibilidade do time.
                </p>
              </div>

              <div className="reveal group p-8 rounded-3xl bg-card/50 border border-border hover:bg-secondary/30 transition-all">
                <ShieldCheck className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold mb-4 text-white">Transições Condicionais</h4>
                <p className="text-muted-foreground">
                  O sistema decide o próximo passo com base em critérios definidos, garantindo a governança.
                </p>
              </div>

              <div className="reveal group p-8 rounded-3xl bg-card/50 border border-border hover:bg-secondary/30 transition-all">
                <FileCode2 className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold mb-4 text-white">Documentos Automáticos</h4>
                <p className="text-muted-foreground">
                  Geração automática de contratos, relatórios e documentos a partir dos dados do fluxo de trabalho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas de Impacto */}
        <section className="py-24 border-y border-border/50 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="reveal p-10 rounded-[40px] bg-card border border-border shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <Zap size={32} />
                  </div>
                  <span className="text-7xl font-bold text-primary">60%</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Redução de Horas</h3>
                <p className="text-muted-foreground text-lg">
                  Libere o seu time de tarefas repetitivas. Nossas automações reduzem drasticamente 
                  o tempo dedicado a processos manuais nos departamentos.
                </p>
              </div>

              <div className="reveal p-10 rounded-[40px] bg-card border border-border shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500">
                    <Settings size={32} />
                  </div>
                  <span className="text-7xl font-bold text-purple-500">90%</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Menos Esforço de Gestão</h3>
                <p className="text-muted-foreground text-lg">
                  Elimine a microgestão. Com processos padronizados, a necessidade de 
                  coordenação manual diminui drasticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container mx-auto px-6 py-20 reveal">
          <div className="p-12 md:p-20 rounded-[50px] bg-gradient-to-br from-primary to-purple-mid text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Pronto para escalar o seu negócio?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                Transforme a rotina do seu time com as mesmas tecnologias utilizadas por empresas que processam milhões de usuários.
              </p>
              <a href="/contacto" className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block shadow-2xl">
                Falar com um Especialista
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
