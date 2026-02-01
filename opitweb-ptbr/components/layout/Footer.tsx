import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@opitweb.com.br", label: "Email" },
];

const footerLinks = {
  navegacion: [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicios" },
    { label: "Automação", href: "/automatizacion" },
    { label: "Preços", href: "/precios" },
    { label: "Contato", href: "/contacto" },
  ],
  servicios: [
    { label: "Desenvolvimento Web", href: "/servicios" },
    { label: "Automação de Processos", href: "/automatizacion" },
    { label: "Redes Sociais", href: "/servicios" },
    { label: "SEO & UX", href: "/servicios" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/logoopitweb1.png" 
                alt="Opitweb Digital"
                className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Transformamos ideias em experiências digitais extraordinárias. Especialistas em desenvolvimento web, automação de processos e estratégias que impulsionam o seu negócio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Opitweb Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
