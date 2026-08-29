import type { ReactNode } from "react";
import Link from "next/link";

type HeroProps = {
  variant?: "primary" | "standard" | "featured" | "minimal";
  eyebrow?: string;
  headline: string;
  supportingText?: string;
  cta?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "gold";
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  background?: "navy" | "white" | "subtle" | "ambient";
  className?: string;
  children?: ReactNode;
};

export function Hero({
  variant = "standard",
  eyebrow,
  headline,
  supportingText,
  cta,
  secondaryAction,
  background = "white",
  className = "",
  children,
}: HeroProps) {
  const backgrounds = {
    navy: "bg-[var(--heal-navy)] text-white",
    white: "bg-[var(--heal-bg-primary)] text-[var(--heal-text-primary)]",
    subtle: "bg-[var(--heal-bg-secondary)] text-[var(--heal-text-primary)]",
    ambient: "bg-[var(--gradient-ambient-navy)] text-white relative overflow-hidden",
  };

  const layouts = {
    primary: `
      relative isolate overflow-hidden
      min-h-[70vh]
      flex items-center
      border-b border-[var(--heal-border-subtle)]
    `,
    standard: `
      border-b border-[var(--heal-border-subtle)]
      py-20 sm:py-24 lg:py-28
    `,
    featured: `
      relative overflow-hidden
      border-b border-[var(--heal-border-subtle)]
      py-20 sm:py-24 lg:py-28
    `,
    minimal: `
      py-16 sm:py-20 lg:py-24
    `,
  };

  return (
    <section className={`${backgrounds[background]} ${layouts[variant]} ${className}`}>
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--heal-navy)] via-[var(--heal-navy-light)] to-[var(--heal-navy)] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,143,107,0.15),transparent_50%)]" />
        </>
      )}
      
      {variant === "featured" && (
        <>
          <div className="absolute inset-0 texture-grid opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(0,143,107,0.1),transparent_70%)] blur-3xl" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className={`${variant === "primary" ? "lg:col-span-8" : variant === "standard" ? "lg:col-span-8" : "lg:col-span-12"}`}>
            {eyebrow && (
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--heal-emerald)] mb-6">
                {eyebrow}
              </p>
            )}
            
            <h1 className="font-display max-w-5xl text-5xl font-extrabold leading-[0.96] tracking-[var(--tracking-tighter)] sm:text-6xl lg:text-7xl xl:text-[88px]">
              {headline}
            </h1>
            
            {supportingText && (
              <p className="font-body mt-6 max-w-2xl text-lg leading-8 text-[var(--heal-text-secondary)] sm:text-xl">
                {supportingText}
              </p>
            )}
            
            {(cta || secondaryAction) && (
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {cta && (
                  <Link
                    href={cta.href}
                    className={`
                      inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all
                      duration-[var(--duration-fast)] ease-[var(--ease-out)]
                      hover:-translate-y-0.5
                      focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--heal-gold)]
                      ${
                        cta.variant === "gold"
                          ? "bg-[var(--btn-gold-bg)] text-[var(--btn-gold-text)] shadow-[var(--btn-gold-shadow)] hover:bg-[var(--btn-gold-bg-hover)]"
                          : cta.variant === "secondary"
                          ? "bg-transparent border-2 border-[var(--heal-text-primary)] text-[var(--heal-text-primary)] hover:bg-[var(--heal-text-primary)] hover:text-white"
                          : "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-[var(--btn-primary-shadow)] hover:bg-[var(--btn-primary-bg-hover)]"
                      }
                    `}
                  >
                    {cta.text}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                )}
                
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="text-sm font-bold hover:text-[var(--heal-emerald)] transition-colors duration-[var(--duration-fast)]"
                  >
                    {secondaryAction.text}
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {variant === "primary" && (
            <div className="lg:col-span-4 lg:pb-1">
              <div className="glass-medium p-6 sm:p-8 max-w-md lg:ml-auto border-l-2 border-l-[var(--heal-emerald)]">
                <p className="font-body text-base leading-7 text-[var(--heal-text-secondary)] sm:text-lg">
                  HEAL bridges the gap between credible healthcare knowledge
                  and the communities that need it through education,
                  journalism, documentation, communication, and technology.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {children}
    </section>
  );
}