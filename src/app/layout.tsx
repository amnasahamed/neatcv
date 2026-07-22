import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { faqs, siteConfig } from "@/lib/site";
import {
  createFaqJsonLd,
  organizationJsonLd,
  serviceJsonLd,
} from "@/lib/jsonld";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "NeatCV | ATS-friendly CVs and LinkedIn profiles",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "NeatCV | Make your experience impossible to overlook",
    description: siteConfig.description,
    url: "/",
    siteName: "NeatCV",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeatCV | ATS-friendly CVs and LinkedIn profiles",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const themeScript = `
  try {
    const stored = localStorage.getItem('neatcv-theme');
    document.documentElement.dataset.theme = stored === 'dark' ? 'dark' : 'light';
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    organizationJsonLd,
    serviceJsonLd,
    createFaqJsonLd(faqs),
  ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
