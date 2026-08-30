import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Healthcare Education, Awareness & Communication",
  description:
    "HEAL advances health education, journalism, healthcare documentation, digital health, research communication, and community engagement through purposeful communication.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Healthcare Education, Awareness & Communication",
    description:
      "HEAL advances health education, journalism, healthcare documentation, digital health, research communication, and community engagement through purposeful communication.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Education, Awareness & Communication",
    description:
      "HEAL advances health education, journalism, healthcare documentation, digital health, research communication, and community engagement through purposeful communication.",
  },
};

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
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-heal-border bg-heal-navy">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24 lg:py-28">
            <div>
              <p className="mb-8 text-base font-bold uppercase tracking-[0.2em] text-heal-gold sm:text-lg">
                Healthcare Education & Awareness Lab{" "}
                <span className="normal-case tracking-normal">(HEAL)</span>
              </p>

              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
                Better communication
                <br />
                <span className="text-heal-emerald">saves lives.</span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/35 pt-5 text-sm font-bold text-white">
                <span>Education</span>
                <span className="text-heal-emerald">/</span>
                <span>Journalism</span>
                <span className="text-heal-emerald">/</span>
                <span>Digital health</span>
                <span className="text-heal-emerald">/</span>
                <span>Community engagement</span>
              </div>
            </div>

            <div className="lg:pb-1">
              <div className="max-w-md border-l-2 border-heal-gold pl-7 lg:ml-auto">
                <p className="mb-6 text-base font-bold uppercase tracking-[0.2em] text-heal-gold sm:text-lg">
                  Community-as-a-Service{" "}
                  <span className="normal-case tracking-normal">(CaaS)</span>
                </p>

                <p className="text-base leading-7 text-white/90 sm:text-lg">
                  HEAL bridges the gap between credible healthcare knowledge
                  and the communities that need it through education,
                  journalism, documentation, communication, and technology.
                </p>

                <p className="mt-6 text-lg font-medium leading-8 text-white">
                  Building Healthier Communities Through Communication.
                </p>

                <Link
                  href="/articles"
                  className="group mt-8 inline-flex items-center border-b-2 border-heal-gold pb-1 text-sm font-bold transition-colors hover:text-white"
                  style={{ color: "var(--heal-gold)" }}
                >
                  Explore the Knowledge Hub
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections... */}
    </main>
  );
}
