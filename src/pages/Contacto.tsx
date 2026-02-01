import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@opitweb.com.br",
    href: "mailto:contato@opitweb.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 11 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "#",
  },
];

export default function Contacto() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato com você em breve.",
    });

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <ParallaxSection
          speed={0.3}
          className="absolute top-20 right-20 w-72 h-72 bg-purple-mid/20 rounded-full blur-3xl"
        />
        <ParallaxSection
          speed={0.4}
          direction="down"
          className="absolute bottom-0 left-20 w-80 h-80 bg-peach/15 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-accent">Fale com Nós</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Você tem um projeto em mente? Estamos prontos para ouvir 
              e ajudá-lo a torná-lo realidade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <AnimatedSection animation="slideRight">
              <div className="card-glow rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-mid to-purple-light flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-glow rounded-3xl p-8">
                <h3 className="text-lg font-display font-semibold mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda - Sexta</span>
                    <span className="text-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="text-foreground">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="text-foreground">Fechado</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slideLeft">
              <form
                onSubmit={handleSubmit}
                className="card-glow rounded-3xl p-8"
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  Envie uma Mensagem
                </h2>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefone (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                      placeholder="+55 11 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                      placeholder="Conte-nos sobre o seu projeto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient py-4 rounded-xl text-base font-medium text-white inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
