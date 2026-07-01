import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { SiteJsonLd } from '@/components/site/json-ld';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://trueanalyzers.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'True Analyzers | Premium Digital Report PDFs, One-Time Payment',
    template: '%s | True Analyzers',
  },
  description:
    'True Analyzers crafts premium digital report PDFs — 5, 7, or 9 pages, professionally designed and sent to your email within 1–2 hours. One-time payment, no subscription. Trusted by 12,000+ professionals.',
  keywords: [
    'digital PDF documents',
    'analytic templates',
    'PDF templates',
    'planner downloads',
    'business templates',
    'printable workbooks',
    'professional PDF kits',
    'digital downloads UK',
  ],
  authors: [{ name: 'True Analyzers' }],
  creator: 'True Analyzers',
  publisher: 'True Analyzers',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'True Analyzers',
    title: 'True Analyzers | Premium Digital Report PDFs, One-Time Payment',
    description:
      'Professionally designed digital report PDFs — 5, 7, or 9 pages. One-time payment, no subscription. Sent to your email within 1–2 hours, editable, trusted by 12,000+ professionals.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'True Analyzers — Premium Digital Report PDFs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Analyzers | Premium Digital Report PDFs',
    description:
      'Professionally designed digital report PDFs — 5, 7, or 9 pages. One-time payment, no subscription. Sent to your email within 1–2 hours, editable, trusted by 12,000+ professionals.',
    images: ['/og-image.svg'],
    creator: '@trueanalyzers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
};

export const viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <SiteJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
