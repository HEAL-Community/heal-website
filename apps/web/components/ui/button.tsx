import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-[var(--btn-primary-bg)]
      text-[var(--btn-primary-text)]
      shadow-[var(--btn-primary-shadow)]
      hover:bg-[var(--btn-primary-bg-hover)]
      active:scale-95
    `,
    secondary: `
      bg-[var(--btn-secondary-bg)]
      text-[var(--btn-secondary-text)]
      border-[var(--btn-secondary-border)]
      border-2
      hover:bg-[var(--btn-secondary-hover-bg)]
      hover:text-[var(--btn-secondary-hover-text)]
      active:scale-95
    `,
    ghost: `
      bg-[var(--btn-ghost-bg)]
      text-[var(--btn-ghost-text)]
      hover:bg-[var(--btn-ghost-hover-bg)]
      active:scale-95
    `,
    gold: `
      bg-[var(--btn-gold-bg)]
      text-[var(--btn-gold-text)]
      shadow-[var(--btn-gold-shadow)]
      hover:bg-[var(--btn-gold-bg-hover)]
      active:scale-95
    `,
  };

  const sizes = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-5 text-sm",
    large: "py-4 px-6 text-base",
  };

  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        min-h-11
        rounded-lg
        font-bold
        transition-all
        duration-[var(--duration-fast)]
        ease-[var(--ease-out)]
        focus-visible:outline-2
        focus-visible:outline-offset-3
        focus-visible:outline-[var(--heal-gold)]
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}