import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healcommunity.net"),

  title: {
    default: "HEAL Community",
    template: "%s | HEAL",
  },

  description:
    "HEAL advances healthcare communication through education, journalism, documentation, digital health, and innovation.",

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
      "Better communication saves lives. HEAL advances healthcare education, journalism, documentation, and digital health.",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: "HEAL — Building Healthier Communities Through Communication",
    description:
      "Better communication saves lives. HEAL advances healthcare education, journalism, documentation, and digital health.",
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
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
