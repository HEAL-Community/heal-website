type AmbientBackgroundProps = {
  variant?: "navy" | "emerald" | "gold" | "subtle" | "complex";
  className?: string;
  children?: React.ReactNode;
};

export function AmbientBackground({
  variant = "subtle",
  className = "",
  children,
}: AmbientBackgroundProps) {
  const variants = {
    navy: "ambient-navy",
    emerald: "ambient-emerald",
    gold: "ambient-gold",
    subtle: "ambient-subtle",
    complex: `
      relative overflow-hidden
      bg-[var(--heal-bg-primary)]
    `,
  };

  if (variant === "complex") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,31,58,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,143,107,0.02),transparent_50%)]" />
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(0,143,107,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(201,164,76,0.05),transparent_60%)] blur-2xl" />
        {children}
      </div>
    );
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}