import "./globals.css";
import type { Metadata } from "next";
import { Geist as GeistSans } from "next/font/google";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Bodade - AI Engineer & Researcher",
  description: "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
