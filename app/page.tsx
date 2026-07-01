import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { Overview } from '@/components/sections/overview';
import { Features } from '@/components/sections/features';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { PricingPreview } from '@/components/sections/pricing-preview';
import { Faq } from '@/components/sections/faq';
import { CtaSection } from '@/components/site/cta-section';

export const metadata: Metadata = {
  title: 'Premium Digital Report PDFs | One-Time Payment | True Analyzers',
  description:
    'Professionally designed digital report PDFs — 5, 7, or 9 pages. One-time payment, no subscription. Sent to your email within 1–2 hours, editable, commercial-use licence. Trusted by 12,000+ professionals.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Premium Digital Report PDFs | One-Time Payment | True Analyzers',
    description:
      'Professionally designed digital report PDFs — 5, 7, or 9 pages. One-time payment, no subscription. Sent to your email within 1–2 hours, editable, commercial-use licence.',
    url: '/',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital report PDF design',
  provider: {
    '@type': 'Organization',
    name: 'True Analyzers',
    url: 'https://trueanalyzers.co.uk',
  },
  areaServed: 'Worldwide',
  description:
    'Premium digital report PDFs — 5, 7, or 9 pages, professionally designed for professionals. One-time payment, no subscription.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '30',
    highPrice: '50',
    offerCount: '3',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What exactly do I get when I buy a plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get your chosen digital report PDF — 5, 7, or 9 pages depending on the plan — in editable format, with a commercial-use licence. The report is sent to your email within 1–2 hours of purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Every plan is a one-time payment. You pay once, receive your report by email, and use it forever. There are no recurring fees, no auto-renewals, and no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between the three plans?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic (£30) is a 5-page digital report PDF. Standard (£40) is a 7-page report with advanced charts and data visuals. Premium (£50) is a 9-page report with executive summary, methodology, and lifetime updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a money-back guarantee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. If a report isn't right for you, email us within 30 days and we'll refund you in full — no awkward questions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these reports for client work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every plan includes a commercial-use licence, so you can use the report in your own business and for client deliverables. You may not resell or redistribute the report template itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast do I receive my report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your digital report PDF is sent to your email within 1–2 hours of purchase. You'll receive a secure download link — no waiting on designers, no approval step.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Overview />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <CtaSection />
    </>
  );
}
