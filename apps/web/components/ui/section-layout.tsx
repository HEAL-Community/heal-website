import type { HTMLAttributes, ReactNode } from "react";

type SectionLayoutProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "asymmetric" | "centered" | "split" | "grid" | "editorial";
  children: ReactNode;
  className?: string;
};

export function SectionLayout({
  variant = "asymmetric",
  children,
  className = "",
  ...props
}: SectionLayoutProps) {
  const variants = {
    asymmetric: "grid grid-cols-12 gap-12 lg:gap-16",
    centered: "max-w-3xl mx-auto text-center",
    split: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
    editorial: "max-w-2xl mx-auto",
  };

  return (
    <div className={`relative ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}