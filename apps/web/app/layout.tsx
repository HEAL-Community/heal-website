import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healcommunity.net"),

  title: {
    default: "HEAL Community",
    template: "%s | HEAL Community",
  },

  description:
    "Healthcare Education & Awareness Lab — building healthier communities through communication.",

  applicationName: "HEAL Community",

  authors: [
    {
      name: "Healthcare Education & Awareness Lab",
      url: "https://healcommunity.net",
    },
  ],

  creator: "Healthcare Education & Awareness Lab",
  publisher: "Healthcare Education & Awareness Lab",

  keywords: [
    "HEAL Community",
    "Healthcare Education & Awareness Lab",
    "health education",
    "health awareness",
    "health journalism",
    "healthcare documentation",
    "digital health",
    "public health communication",
    "community engagement",
    "healthcare innovation",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://healcommunity.net",
    siteName: "HEAL Community",
    title: "HEAL Community",
    description:
      "Healthcare Education & Awareness Lab — building healthier communities through communication.",
  },

  twitter: {
    card: "summary_large_image",
    title: "HEAL Community",
    description:
      "Healthcare Education & Awareness Lab — building healthier communities through communication.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
