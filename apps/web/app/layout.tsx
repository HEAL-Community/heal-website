import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healcommunity.net"),

  title: {
    default: "HEAL — Building Healthier Communities Through Communication",
    template: "%s | HEAL",
  },

  description:
    "HEAL advances healthcare communication through education, journalism, documentation, digital health, and innovation to build healthier communities.",

  applicationName: "HEAL",

  authors: [
    {
      name: "Healthcare Education and Awareness Lab",
      url: "https://healcommunity.net",
    },
  ],

  creator: "Healthcare Education and Awareness Lab",
  publisher: "Healthcare Education and Awareness Lab",

  keywords: [
    "HEAL",
    "Healthcare Education and Awareness Lab",
    "health communication",
    "health education",
    "public health",
    "health journalism",
    "digital health",
    "healthcare documentation",
    "health awareness",
    "health literacy",
    "community health",
    "healthcare innovation",
    "Nigeria",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://healcommunity.net/",
    siteName: "HEAL — Healthcare Education & Awareness Lab",
    title: "HEAL — Building Healthier Communities Through Communication",
    description:
      "Better communication saves lives. HEAL advances healthcare communication through education, journalism, documentation, and digital health.",
    locale: "en_NG",

    images: [
      {
        url: "https://healcommunity.net/heal-og-image.png",
        width: 1200,
        height: 630,
        alt: "HEAL — Building Healthier Communities Through Communication",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HEAL — Building Healthier Communities Through Communication",
    description:
      "Better communication saves lives. HEAL advances healthcare communication through education, journalism, documentation, and digital health.",
    images: ["https://healcommunity.net/heal-og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full bg-background antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
