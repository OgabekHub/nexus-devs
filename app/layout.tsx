import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = "https://nexusdevs.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Og'abek Olimjonov — Frontend & AI Builder",
    template: "%s | Nexus Devs",
  },
  description:
    "Frontend dasturchi va AI builder, O'zbekistondan. React, Next.js, Python va AI agentlar bilan real loyihalar quraman.",
  keywords: [
    "Frontend Developer",
    "AI Builder",
    "React",
    "Next.js",
    "Python",
    "O'zbekiston",
    "Uzbekistan developer",
    "Telegram bot",
    "Og'abek Olimjonov",
  ],
  authors: [{ name: "Og'abek Olimjonov", url: siteUrl }],
  creator: "Og'abek Olimjonov",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: siteUrl,
    siteName: "Nexus Devs",
    title: "Og'abek Olimjonov — Frontend & AI Builder",
    description:
      "Frontend dasturchi va AI builder, O'zbekistondan. React, Next.js, Python va AI agentlar bilan real loyihalar quraman.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexus Devs — Og'abek Olimjonov portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Og'abek Olimjonov — Frontend & AI Builder",
    description:
      "Frontend dasturchi va AI builder, O'zbekistondan. React, Next.js, Python va AI agentlar bilan real loyihalar quraman.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Og'abek Olimjonov",
  url: siteUrl,
  sameAs: [
    "https://github.com/OgabekHub",
    "https://www.linkedin.com/in/og-abek-olimjonov-2a52b3364/",
    "https://t.me/olimjonov_ogabek",
  ],
  jobTitle: "Frontend Developer & AI Builder",
  worksFor: {
    "@type": "Organization",
    name: "Nexus Devs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
