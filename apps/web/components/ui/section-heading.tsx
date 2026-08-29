import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start"} ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--heal-emerald)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display max-w-3xl text-balance text-3xl font-extrabold tracking-[var(--tracking-tight)] text-[var(--heal-text-primary)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="font-body max-w-2xl text-pretty text-base leading-7 text-[var(--heal-text-secondary)]">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}