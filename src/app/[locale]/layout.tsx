import { Metadata } from "next";
import { Geist as GeistSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "../../components/nav";
import { locales, type Locale, localeNames, localeFlags } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Script from "next/script";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `Ayush Bodade | ${localeNames[locale]}`,
      template: `%s | Ayush Bodade`,
    },
    description: `Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.`,
    keywords: ["AI", "Machine Learning", "Ayush Bodade", "Portfolio", "Software Engineer", "Research"],
    authors: [{ name: "Ayush Bodade" }],
    creator: "Ayush Bodade",
    publisher: "Ayush Bodade",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: `Ayush Bodade - AI Engineer and Researcher`,
      description: `Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.`,
      url: `${baseUrl}/${locale}`,
      siteName: "Ayush Bodade Portfolio",
      locale: locale === 'zh-cn' ? 'zh_CN' : locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Ayush Bodade - AI Engineer and Researcher`,
      description: `Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.`,
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
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'zh-cn': `${baseUrl}/zh-cn`,
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
      "mobile-agent": "format=html5; url=" + baseUrl,
      "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "yandex-verification": "YOUR_YANDEX_VERIFICATION_CODE",
      "baidu-site-verification": "YOUR_BAIDU_VERIFICATION_CODE",
      "sogou_site_verification": "YOUR_SOGOU_VERIFICATION_CODE",
      "360-site-verification": "YOUR_360_VERIFICATION_CODE",
      "shenma-site-verification": "YOUR_SHENMA_VERIFICATION_CODE",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`text-black bg-white dark:text-white dark:bg-black ${geistSans.variable}`}
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
        <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/en`} />
        <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/en`} />
        <link rel="alternate" hrefLang="zh-cn" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/zh-cn`} />
        <link rel="alternate" hrefLang="fr" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/fr`} />
        <link rel="alternate" hrefLang="de" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/de`} />
        <link rel="alternate" hrefLang="es" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/es`} />
        <link rel="alternate" hrefLang="it" href={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/it`} />
      </head>
      <body className="antialiased max-w-4xl mx-auto px-4 py-8">
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
} 