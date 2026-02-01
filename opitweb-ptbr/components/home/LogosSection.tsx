import { AnimatedSection } from "../animations/AnimatedSection";

const logos = [
  "Google",
  "Meta",
  "Shopify",
  "Stripe",
  "Notion",
  "Figma",
  "Slack",
  "Vercel",
];

export function LogosSection() {
  return (
    <section className="py-16 border-y border-border/30">
      <AnimatedSection animation="fadeIn" className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trabalhamos com as melhores ferramentas e plataformas
        </p>
      </AnimatedSection>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-12"
            >
              <span className="text-xl md:text-2xl font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
