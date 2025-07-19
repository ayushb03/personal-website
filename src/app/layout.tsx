import "./globals.css";
import type { Metadata } from "next";
import { Geist as GeistSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "../components/nav";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Bodade - AI Engineer & Researcher",
  description: "Ayush Bodade is an AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
  keywords: ["AI", "Machine Learning", "Ayush Bodade", "Portfolio", "Software Engineer"],
  authors: [{ name: "Ayush Bodade" }],
  creator: "Ayush Bodade",
  openGraph: {
    title: "Ayush Bodade - AI Engineer and Researcher",
    description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Bodade - AI Engineer and Researcher",
    description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black bg-white dark:text-white dark:bg-black ${geistSans.variable}`}
    >
      <body className="antialiased max-w-4xl mx-auto px-4 py-8">
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
