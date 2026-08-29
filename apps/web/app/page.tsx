import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/queries";
import { Hero } from "../components/ui/hero";
import { Card } from "../components/ui/card";
import { GlassPanel } from "../components/ui/glass-panel";
import { SectionHeading } from "../components/ui/section-heading";
import { SectionLayout } from "../components/ui/section-layout";
import { CTASection } from "../components/ui/cta-section";
import { ArticleCard } from "../components/ui/article-card";
import { AmbientBackground } from "../components/ui/ambient-background";

type Article = {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  contentType?: string;
  featured?: boolean;
};

const areasOfWork = [
  {
    title: "Health Education",
    description:
      "Making credible healthcare knowledge understandable, accessible, and useful.",
  },
  {
    title: "Health Journalism",
    description:
      "Responsible reporting and storytelling around healthcare, public health, research, and medicine.",
  },
  {
    title: "Healthcare Documentation",
    description:
      "Turning complex healthcare information into clear, structured, and useful resources.",
  },
  {
    title: "Public Health Communication",
    description:
      "Connecting evidence, health systems, and communities through purposeful communication.",
  },
  {
    title: "Digital Health",
    description:
      "Using technology to expand access to healthcare knowledge and information.",
  },
  {
    title: "Research Communication",
    description:
      "Making research and evidence more accessible beyond academic and professional spaces.",
  },
  {
    title: "One Health",
    description:
      "Exploring the interconnected health of people, animals, and the environment.",
  },
  {
    title: "Healthcare Innovation",
    description:
      "Developing responsible ideas, systems, and tools for better health communication.",
  },
];

export default async function Home() {
  const articles = (await getArticles()) as Article[];

  const featuredArticles = articles.filter((article) => article.featured);
  const latestArticles = articles.slice(0, 4);
  const leadArticle = featuredArticles[0];

  return (
    <main>
      {/* ============================================
          HERO - Immersive + Cinematic + Editorial
          ============================================ */}
      <Hero
        variant="primary"
        background="navy"
        eyebrow="Healthcare Education & Awareness Lab"
        headline={
          <>
            Better communication
            <br />
            <span className="text-[var(--heal-emerald)]">saves lives.</span>
          </>
        }
        supportingText="HEAL bridges the gap between credible healthcare knowledge and the communities that need it through education, journalism, documentation, communication, and technology."
        cta={{
          text: "Explore the Knowledge Hub",
          href: "/articles",
          variant: "gold",
        }}
      />

      {/* ============================================
          CONVICTION - Editorial + Glassmorphism
          ============================================ */}
      <section className="bg-[var(--heal-bg-secondary)] border-b border-[var(--heal-border-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionLayout variant="asymmetric">
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Our conviction"
                title="Healthcare knowledge should reach the people who need it."
                align="left"
              />
            </div>
            
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="glass-light p-8 rounded-xl border-l-4 border-l-[var(--heal-emerald)]">
                <p className="font-body text-lg leading-8 text-[var(--heal-text-secondary)]">
                  Information should not remain confined to institutions,
                  professionals, or academic literature. HEAL works to move
                  credible knowledge from evidence to communication, from
                  communication to community, and from community to action.
                </p>
              </div>
            </div>
          </SectionLayout>
        </div>
      </section>

      {/* ============================================
          PURPOSE - Card Grid + Hover Effects
          ============================================ */}
      <section className="bg-[var(--heal-bg-primary)] border-y border-[var(--heal-border-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Three pillars of impact"
            description="Everything we do is grounded in these core principles."
            align="center"
          />
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Educate.",
                description: "Make healthcare knowledge understandable, accessible, and useful.",
              },
              {
                title: "Inform.",
                description: "Communicate responsibly through journalism, awareness, and public health communication.",
              },
              {
                title: "Innovate.",
                description: "Use technology and purposeful creativity to expand how healthcare knowledge reaches people.",
              },
            ].map((purpose, index) => (
              <Card key={purpose.title} variant="elevated" className="p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--heal-gold)] mb-4">
                  0{index + 1}
                </p>
                <h3 className="font-display text-3xl font-extrabold text-[var(--heal-text-primary)]">
                  {purpose.title}
                </h3>
                <p className="font-body mt-4 leading-7 text-[var(--heal-text-secondary)]">
                  {purpose.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE DO - Sophisticated Grid + Glass Cards
          ============================================ */}
      <AmbientBackground variant="complex">
        <section className="bg-[var(--heal-bg-primary)] border-b border-[var(--heal-border-subtle)]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <SectionHeading
              eyebrow="What we do"
              title="Where healthcare meets communication"
              description="HEAL works across disciplines to make healthcare knowledge more accessible, useful, and actionable."
              align="left"
            />

            <div className="mt-16 grid border-t border-[var(--heal-border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
              {areasOfWork.map((area) => (
                <div
                  key={area.title}
                  className="border-b border-[var(--heal-border-subtle)] py-8 sm:px-8 lg:px-6 group"
                >
                  <h3 className="font-display text-xl font-extrabold text-[var(--heal-text-primary)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--heal-emerald)]">
                    {area.title}
                  </h3>
                  <p className="font-body mt-3 text-sm leading-6 text-[var(--heal-text-secondary)]">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AmbientBackground>

      {/* ============================================
          KNOWLEDGE HUB - Featured + Glass Cards
          ============================================ */}
      <section className="bg-[var(--heal-bg-secondary)] border-y border-[var(--heal-border-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionHeading
                eyebrow="Knowledge"
                title="Knowledge worth sharing"
                description="Evidence, insight, and stories from the intersection of healthcare, communication, technology, and community."
                align="left"
              />
            </div>

            <Link
              href="/articles"
              className="font-body text-sm font-bold text-[var(--heal-text-primary)] transition-colors hover:text-[var(--heal-emerald)]"
            >
              Explore all publications →
            </Link>
          </div>

          {leadArticle ? (
            <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
              <ArticleCard article={leadArticle} variant="featured" className="border-t-2 border-[var(--heal-navy)] pt-7" />

              <div className="space-y-8">
                {latestArticles.slice(0, 3).map((article) => (
                  <ArticleCard key={article._id} article={article} variant="elevated" className="border-t border-[var(--heal-border-subtle)] pt-5" />
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 border-t border-[var(--heal-border-subtle)] pt-7">
              <p className="font-body text-lg text-[var(--heal-text-secondary)]">
                Publications from the HEAL Knowledge Hub will appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          APPROACH - Navy + Animated Flow
          ============================================ */}
      <section className="bg-[var(--heal-navy)] text-white border-b border-[var(--heal-border-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionLayout variant="asymmetric">
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="The HEAL approach"
                title="From evidence to action"
                align="left"
              />
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="font-body mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                We believe communication is part of the healthcare
                infrastructure. Our work connects evidence with people,
                knowledge with understanding, and understanding with action.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-bold sm:text-xl">
                <span>Evidence</span>
                <span className="text-[var(--heal-emerald)]">→</span>
                <span>Communication</span>
                <span className="text-[var(--heal-emerald)]">→</span>
                <span>Community</span>
                <span className="text-[var(--heal-emerald)]">→</span>
                <span>Action</span>
              </div>
            </div>
          </SectionLayout>
        </div>
      </section>

      {/* ============================================
          JOURNEY - Navy + Gold Timeline + Ambient
          ============================================ */}
      <AmbientBackground variant="navy">
        <section className="bg-[var(--heal-navy)] text-white border-b border-[var(--heal-border-subtle)]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <SectionLayout variant="asymmetric">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="Our journey"
                  title="From Sokoto, forward"
                  align="left"
                />
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="grid gap-10 sm:grid-cols-3">
                  {[
                    {
                      year: "2025",
                      description: "HEAL is founded on the conviction that better communication saves lives.",
                    },
                    {
                      year: "2026",
                      description: "Sokoto Studio marks the beginning of its operational phase.",
                    },
                    {
                      year: "Beyond",
                      description: "Building responsibly across Nigeria and, ultimately, Africa.",
                    },
                  ].map((milestone) => (
                    <div key={milestone.year} className="glass-navy-light p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
                      <p className="font-display text-4xl font-extrabold text-[var(--heal-gold)]">
                        {milestone.year}
                      </p>
                      <p className="font-body mt-3 text-sm leading-6 text-slate-200">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="font-body mt-12 inline-block text-sm font-bold text-white transition-colors hover:text-[var(--heal-gold)]"
                >
                  Read the HEAL story →
                </Link>
              </div>
            </SectionLayout>
          </div>
        </section>
      </AmbientBackground>

      {/* ============================================
          CLOSING - Clean + Editorial + Strong CTA
          ============================================ */}
      <CTASection
        title="Building healthier communities through communication"
        description="Better health communication requires people and institutions willing to build it together."
        cta={{
          text: "Get involved with HEAL",
          href: "/get-involved",
          variant: "primary",
        }}
        variant="white"
      />
    </main>
  );
}