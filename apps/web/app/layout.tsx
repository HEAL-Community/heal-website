import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import StructuredData from "./structured-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healcommunity.net"),
  title: {
    default: "HEAL Community",
    template: "%s | HEAL Community",
  },
  description:
    "HEAL Community — Healthcare Education & Awareness Lab advancing health education, health journalism, healthcare documentation, digital health, and community engagement.",
  applicationName: "HEAL Community",
  category: "healthcare",
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
    "HEAL Community Nigeria",
    "HEAL Nigeria",
    "Healthcare Education & Awareness Lab",
    "healthcare education",
    "health education Nigeria",
    "health awareness Nigeria",
    "health journalism Nigeria",
    "healthcare documentation",
    "digital health Nigeria",
    "public health communication",
    "community health education",
    "health communication",
    "healthcare innovation",
    "community engagement",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
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
      "HEAL Community — Healthcare Education & Awareness Lab advancing health education, health journalism, healthcare documentation, digital health, and community engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEAL Community",
    description:
      "HEAL Community — Healthcare Education & Awareness Lab advancing health education, health journalism, healthcare documentation, digital health, and community engagement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function () {
  try {
    var storedTheme = localStorage.getItem("heal-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var shouldUseDark =
      storedTheme === "dark" ||
      (storedTheme !== "light" && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
  } catch (error) {
    // Ignore theme initialization errors.
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className={`${manrope.variable} antialiased`}>
        <StructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}