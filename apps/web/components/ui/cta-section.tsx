import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  cta: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "gold";
  };
  variant?: "navy" | "white" | "glass";
  className?: string;
};

export function CTASection({
  title,
  description,
  cta,
  variant = "navy",
  className = "",
}: CTASectionProps) {
  const variants = {
    navy: "bg-[var(--heal-navy)] text-white",
    white: "bg-[var(--heal-bg-primary)] text-[var(--heal-text-primary)]",
    glass: "bg-[var(--glass-navy)] text-white border border-[rgba(255,255,255,0.1)]",
  };

  return (
    <section className={`${variants[variant]} border-t border-[var(--heal-border-subtle)] ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--heal-gold)] mb-6">
            Take Action
          </p>
          
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          
          {description && (
            <p className="font-body mt-6 max-w-2xl text-lg leading-8 text-[var(--heal-text-secondary)] sm:text-slate-200">
              {description}
            </p>
          )}
          
          <Link
            href={cta.href}
            className={`
              mt-10 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all
              duration-[var(--duration-fast)] ease-[var(--ease-out)]
              hover:-translate-y-0.5
              focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--heal-gold)]
              ${
                cta.variant === "gold"
                  ? "bg-[var(--btn-gold-bg)] text-[var(--btn-gold-text)] shadow-[var(--btn-gold-shadow)] hover:bg-[var(--btn-gold-bg-hover)]"
                  : cta.variant === "secondary"
                  ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--heal-navy)]"
                  : "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-[var(--btn-primary-shadow)] hover:bg-[var(--btn-primary-bg-hover)]"
              }
            `}
          >
            {cta.text}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}