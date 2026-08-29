import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "solid" | "elevated" | "glass" | "navy" | "featured";
  children: ReactNode;
  className?: string;
};

export function Card({
  variant = "solid",
  children,
  className = "",
  ...props
}: CardProps) {
  const variants = {
    solid: `
      bg-[var(--card-bg)]
      border border-[var(--card-border)]
      rounded-[var(--card-radius)]
      shadow-[var(--card-shadow)]
    `,
    elevated: `
      bg-[var(--card-elevated-bg)]
      border border-[var(--card-border)]
      rounded-[var(--card-radius)]
      shadow-[var(--card-elevated-shadow)]
      hover:shadow-[var(--card-elevated-hover-shadow)]
      hover:-translate-y-0.5
      transition-all
      duration-[var(--duration-fast)]
      ease-[var(--ease-out)]
    `,
    glass: `
      bg-[var(--card-glass-bg)]
      backdrop-blur-[var(--card-glass-backdrop)]
      -webkit-backdrop-blur-[var(--card-glass-backdrop)]
      border border-[var(--card-glass-border)]
      rounded-[var(--card-radius)]
      shadow-[var(--card-glass-shadow)]
      hover:-translate-y-0.5
      transition-all
      duration-[var(--duration-fast)]
      ease-[var(--ease-out)]
    `,
    navy: `
      bg-[var(--card-navy-bg)]
      text-[var(--card-navy-text)]
      border border-[var(--card-navy-border)]
      rounded-[var(--card-radius)]
      shadow-[var(--shadow-lg)]
    `,
    featured: `
      bg-[var(--card-elevated-bg)]
      border-2 border-[var(--heal-emerald)]
      rounded-[var(--card-radius)]
      shadow-[var(--shadow-emerald-md)]
      hover:shadow-[var(--shadow-xl)]
      hover:-translate-y-1
      transition-all
      duration-[var(--duration-normal)]
      ease-[var(--ease-out)]
    `,
  };

  return (
    <div
      className={`relative ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}