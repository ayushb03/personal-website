import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "../components/nav";
import Footer from "../components/footer";
import { PersonStructuredData, WebsiteStructuredData } from "../components/structured-data";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ayush Bodade | Portfolio",
    template: "%s | Ayush Bodade",
  },
  description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
  keywords: ["AI", "RL", "Multi-agent systems", "Machine Learning", "Ayush Bodade", "Portfolio", "Software Engineer", "Developer", "Full Stack", "Next.js", "React", "TypeScript", "Artificial Intelligence", "Research", "人工智能", "机器学习", "深度学习", "软件工程师", "开发者", "Intelligence Artificielle", "Maschinelles Lernen", "Aprendizaje Automático", "Intelligenza Artificiale"],
  authors: [{ name: "Ayush Bodade", url: baseUrl }],
  creator: "Ayush Bodade",
  publisher: "Ayush Bodade",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Ayush Bodade | AI Engineer and Researcher",
    description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
    url: baseUrl,
    siteName: "Ayush Bodade Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ayush Bodade - AI Engineer and Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Bodade | AI Engineer and Researcher",
    description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@ayushbodade",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': `${baseUrl}/en`,
      'zh-CN': `${baseUrl}/zh-cn`,
      'fr': `${baseUrl}/fr`,
      'de': `${baseUrl}/de`,
      'es': `${baseUrl}/es`,
      'it': `${baseUrl}/it`,
    },
  },
  applicationName: "Ayush Bodade Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  other: {
    "baidu-site-verification": "ADD_YOUR_BAIDU_VERIFICATION_CODE_HERE",
    "sogou_site_verification": "ADD_YOUR_SOGOU_VERIFICATION_CODE_HERE",
    "360-site-verification": "ADD_YOUR_360_VERIFICATION_CODE_HERE",
    "shenma-site-verification": "ADD_YOUR_SHENMA_VERIFICATION_CODE_HERE",
    "mobile-agent": "format=html5; url=" + baseUrl,
    "google-site-verification": "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    "msvalidate.01": "ADD_YOUR_BING_VERIFICATION_CODE_HERE",
    "yandex-verification": "ADD_YOUR_YANDEX_VERIFICATION_CODE_HERE",
    "gdpr-compliance": "true",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Cache-Control" content="max-age=86400" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="geo.region" content="US, EU, CN" />
        <meta name="geo.placename" content="Global" />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="zh-cn" href={`${baseUrl}/zh-cn`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="it" href={`${baseUrl}/it`} />
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className="antialiased max-w-2xl mx-auto px-6 md:px-8 mt-8">
        <main className="min-w-0 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
