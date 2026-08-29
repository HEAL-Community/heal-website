import Link from "next/link";

type ArticleCardProps = {
  article: {
    _id: string;
    slug: string;
    title: string;
    excerpt?: string;
    contentType?: string;
    featuredImage?: any;
  };
  variant?: "solid" | "elevated" | "glass" | "featured";
  className?: string;
};

export function ArticleCard({
  article,
  variant = "elevated",
  className = "",
}: ArticleCardProps) {
  const variants = {
    solid: "bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)] shadow-[var(--card-shadow)]",
    elevated: "bg-[var(--card-elevated-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)] shadow-[var(--card-elevated-shadow)] hover:shadow-[var(--card-elevated-hover-shadow)] hover:-translate-y-0.5 transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
    glass: "bg-[var(--card-glass-bg)] backdrop-blur-[var(--card-glass-backdrop)] -webkit-backdrop-blur-[var(--card-glass-backdrop)] border border-[var(--card-glass-border)] rounded-[var(--card-radius)] shadow-[var(--card-glass-shadow)] hover:-translate-y-0.5 transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
    featured: "bg-[var(--card-elevated-bg)] border-2 border-[var(--heal-emerald)] rounded-[var(--card-radius)] shadow-[var(--shadow-emerald-md)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
  };

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`group block ${variants[variant]} ${className}`}
    >
      <div className="p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--heal-gold)] mb-3">
          {article.contentType || "Publication"}
        </p>
        
        <h3 className="font-display text-xl font-extrabold leading-snug text-[var(--heal-text-primary)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--heal-emerald)] sm:text-2xl">
          {article.title}
        </h3>
        
        {article.excerpt && (
          <p className="font-body mt-3 text-sm leading-6 text-[var(--heal-text-secondary)] line-clamp-3">
            {article.excerpt}
          </p>
        )}
        
        <span className="font-body mt-4 inline-block text-sm font-bold text-[var(--heal-text-secondary)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--heal-emerald)]">
          Read →
        </span>
      </div>
    </Link>
  );
}