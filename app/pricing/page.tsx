import type { Metadata } from 'next';
import { Check, X, ShieldCheck, RefreshCw, Star, CreditCard, Mail } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaSection } from '@/components/site/cta-section';
import { PricingCards } from '@/components/site/pricing-cards';
import { comparisonRows, plans } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Pricing | One-Time Payment Digital Report PDFs from £30 | True Analyzers',
  description:
    'One-time payment, no subscription. Three digital report PDF plans: Basic 5 pages £30, Standard 7 pages £40, Premium 9 pages £50. Sent to your email within 1–2 hours, commercial-use licence, 30-day money-back guarantee.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | One-Time Payment Digital Report PDFs from £30 | True Analyzers',
    description:
      'One-time payment, no subscription. Three digital report PDF plans: Basic 5 pages £30, Standard 7 pages £40, Premium 9 pages £50. Sent to your email within 1–2 hours, 30-day guarantee.',
    url: '/pricing',
  },
};

const guarantees = [
  { icon: CreditCard, title: 'One-time payment', description: 'Pay once, own it forever. No subscription, no recurring fees.' },
  { icon: Mail, title: 'Emailed within 1–2 hours', description: 'Your report PDF is sent to your email within 1–2 hours of purchase.' },
  { icon: ShieldCheck, title: '30-day guarantee', description: 'Not right for you? Full refund, no questions asked.' },
  { icon: RefreshCw, title: 'Lifetime updates', description: 'Premium plan includes every future update, free.' },
];

function renderCell(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: plans.map((plan, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: `True Analyzers ${plan.name} Plan — ${plan.pages}-page Digital Report PDF`,
      description: plan.description,
      brand: { '@type': 'Brand', name: 'True Analyzers' },
      offers: {
        '@type': 'Offer',
        price: plan.priceValue,
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: 'https://trueanalyzers.co.uk/pricing',
      },
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <PageHero
        eyebrow="Pricing"
        title={<>One-time payment. No subscription, ever.</>}
        description="Three digital report PDFs, one simple payment each. Pick the page count that fits your needs — 5, 7, or 9 pages. No recurring fees, no hidden charges. Every plan includes a commercial-use licence, email delivery within 1–2 hours, and a 30-day money-back guarantee."
      />

      {/* Guarantees strip */}
      <section className="border-b border-brand-100 bg-white/60">
        <div className="container-page py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <g.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{g.title}</p>
                    <p className="text-xs text-muted-foreground">{g.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container-page py-16 sm:py-20 lg:py-24">
        <PricingCards />
      </section>

      {/* Comparison table */}
      <section className="bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Compare plans"
            title={<>Every feature, side by side</>}
            description="A full breakdown of what's included in each digital report PDF, so you can choose with confidence."
          />

          <Reveal>
            <div className="mt-12 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className="border-b border-brand-100 bg-brand-50/40">
                      <th scope="col" className="p-5 text-left text-sm font-semibold text-foreground">
                        Features
                      </th>
                      {plans.map((plan) => (
                        <th
                          key={plan.id}
                          scope="col"
                          className="p-5 text-center align-top"
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-display text-lg font-bold text-foreground">{plan.name}</span>
                            <span className="font-display text-2xl font-bold text-gradient-brand">{plan.price}</span>
                            <span className="text-xs font-medium text-muted-foreground">{plan.pages} pages</span>
                            {plan.badge && (
                              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                                <Star className="h-2.5 w-2.5 fill-white" />
                                {plan.badge}
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/20'}
                      >
                        <th scope="row" className="p-5 text-left text-sm font-medium text-foreground">
                          {row.label}
                        </th>
                        <td className="p-5 text-center">{renderCell(row.basic)}</td>
                        <td className="p-5 text-center">{renderCell(row.standard)}</td>
                        <td className="p-5 text-center">{renderCell(row.premium)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              All prices are in GBP, one-time payment with a commercial-use licence. Your report is sent to your email within 1–2 hours. Need a custom report?{' '}
              <a href="/contact" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
                Get in touch
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Still deciding which report is right for you?"
        description="Tell us what you're analysing and we'll recommend the best page count. No sales pressure — just honest advice from a real person."
        primaryLabel="Get Started Today"
        primaryHref="/contact"
        secondaryLabel="Read the FAQ"
        secondaryHref="/#faq"
      />
    </>
  );
}
