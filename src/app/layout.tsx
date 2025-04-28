import './globals.css'
import type { Metadata } from 'next'
import { Geist as GeistSans, Geist_Mono as GeistMono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '../components/nav'
import Footer from '../components/footer'

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ayush Bodade | Portfolio',
    template: '%s | Ayush Bodade',
  },
  description: 'Ayush Bodade - Future and Beyond',
  openGraph: {
    title: 'Ayush Bodade',
    description: 'Ayush Bodade - Future and Beyond',
    url: baseUrl,
    siteName: 'Ayush Bodade Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-auto px-6 md:px-8 mt-8">
        <main className="min-w-0 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
