import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "main" | "header" | "footer";
  width?: "default" | "narrow" | "wide";
};

const containerWidths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
};

export function Container({
  as: Element = "div",
  width = "default",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Element
      className={`mx-auto w-full px-6 sm:px-8 lg:px-10 ${containerWidths[width]} ${className}`}
      {...props}
    />
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start"}`}>
      {eyebrow ? (
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-heal-emerald">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.04em] text-heal-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-7 text-heal-slate">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "quiet";
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-heal-emerald text-white hover:bg-heal-navy",
    secondary: "border border-heal-navy text-heal-navy hover:bg-heal-navy hover:text-white",
    quiet: "text-heal-navy hover:text-heal-emerald",
  };

  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-3 text-sm font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
