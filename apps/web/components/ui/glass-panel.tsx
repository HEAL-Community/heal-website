import type { HTMLAttributes, ReactNode } from "react";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "light" | "medium" | "dark" | "navy" | "navy-light";
  children: ReactNode;
  className?: string;
};

export function GlassPanel({
  variant = "medium",
  children,
  className = "",
  ...props
}: GlassPanelProps) {
  const variants = {
    light: "glass-light",
    medium: "glass-medium",
    dark: "glass-dark",
    navy: "glass-navy",
    "navy-light": "glass-navy-light",
  };

  return (
    <div
      className={`relative ${variants[variant]} rounded-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}