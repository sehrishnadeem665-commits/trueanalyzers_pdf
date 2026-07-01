import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Heart, ShieldCheck, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaSection } from '@/components/site/cta-section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About True Analyzers | Our Mission, Vision & Process',
  description:
    'True Analyzers designs premium digital PDF documents and analytic templates for professionals. Learn about our mission, our vision, why customers trust us, and the process behind every template we craft.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About True Analyzers | Our Mission, Vision & Process',
    description:
      'True Analyzers designs premium digital PDF documents and analytic templates for professionals. Learn about our mission, our vision, why customers trust us, and the process behind every template we craft.',
    url: '/about',
  },
};

const values = [
  {
    icon: Heart,
    title: 'Craft over volume',
    description: 'We would rather ship 180 excellent templates than 1,800 mediocre ones. Every document is reviewed by a senior designer before it goes live.',
  },
  {
    icon: ShieldCheck,
    title: 'Honesty by default',
    description: 'Clear pricing, real support, no hidden fees. If something isn\'t right for you, we\'ll tell you — and refund you if needed.',
  },
  {
    icon: Users,
    title: 'Built for real people',
    description: 'Our templates are tested with freelancers, founders and teams before release. If it doesn\'t work in the real world, it doesn\'t ship.',
  },
  {
    icon: Sparkles,
    title: 'Always improving',
    description: 'We update templates based on customer feedback and refresh the library every quarter. Buy once, get better forever.',
  },
];

const trustPoints = [
  { stat: '12,000+', label: 'Customers worldwide' },
  { stat: '4.9/5', label: 'Average customer rating' },
  { stat: '180+', label: 'Templates in the library' },
  { stat: '30-day', label: 'Money-back guarantee' },
];

const processSteps = [
  {
    number: '01',
    title: 'Research & brief',
    description: 'We start with real-world use cases — what professionals actually need to fill in, send and sign. Every template begins with a clear brief.',
  },
  {
    number: '02',
    title: 'Design & typography',
    description: 'Senior designers build the layout in studio-grade tools, with deliberate hierarchy, spacing and typography that reads beautifully on screen and paper.',
  },
  {
    number: '03',
    title: 'Engineer for editing',
    description: 'We convert designs into editable PDFs with form fields, accessible tagging and replaceable placeholders — so you can make them yours in minutes.',
  },
  {
    number: '04',
    title: 'Test & release',
    description: 'Each file is tested across devices, PDF readers and screen sizes. Only then does it join the library, with lifetime updates guaranteed.',
  },
];

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About True Analyzers',
  description:
    'True Analyzers designs premium digital PDF documents and analytic templates for professionals. Learn about our mission, our vision, why customers trust us, and the process behind every template we craft.',
  mainEntity: {
    '@type': 'Organization',
    name: 'True Analyzers',
    foundingDate: '2021',
    foundingLocation: 'London, United Kingdom',
    slogan: 'Premium digital PDF documents and analytic templates, crafted for professionals.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <PageHero
        eyebrow="About us"
        title={<>We make documents that make you look good</>}
        description="True Analyzers is a small, senior team of designers and document engineers on a mission to replace ugly, time-wasting PDFs with templates that are genuinely useful and beautiful to use."
      />

      {/* Company introduction */}
      <section className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-4">
                  {trustPoints.map((t) => (
                    <div key={t.label} className="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-soft">
                      <p className="font-display text-3xl font-bold text-gradient-brand">{t.stat}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-200/40 blur-2xl" aria-hidden="true" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={<>Founded in 2021, built on a simple frustration</>}
              description="Our founder spent a week formatting a client proposal in a word processor and thought: there has to be a better way. So we built one."
            />
            <Reveal delay={200}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  True Analyzers started in a small London studio in 2021. We had spent years designing
                  documents for agencies, banks and startups — and watched the same problem repeat itself:
                  smart people wasting hours fighting with blank pages and broken templates.
                </p>
                <p>
                  So we set out to build a library of premium, editable PDF documents that professionals
                  could pick up, brand and ship in minutes. No design skills required, no expensive
                  agency fees, no compromise on quality.
                </p>
                <p>
                  Today, more than 12,000 professionals worldwide use our templates to run their
                  businesses, plan their weeks and present their work. We are still a small team —
                  and we like it that way.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section id="mission" className="scroll-mt-24 bg-gradient-to-b from-brand-50/50 via-white to-white">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                    <Target className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Our mission</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    To give every professional access to studio-grade documents without the studio
                    price tag. We believe great design should be a utility — something you can pick
                    up, use and trust — not a luxury reserved for big budgets.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                    <Eye className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Our vision</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    A world where no one wastes an evening formatting a document. Where every
                    proposal, planner and report starts from a beautiful, editable foundation —
                    and where the tools we use to run our work feel as considered as the work itself.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Values */}
          <div className="mt-16">
            <SectionHeading
              eyebrow="Our values"
              title={<>What we believe in</>}
              description="Four principles that shape every template we design and every decision we make."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <article className="group h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <v.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why customers trust us */}
      <section className="container-page py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Why customers trust us"
          title={<>A studio you can actually rely on</>}
          description="We have earned the trust of 12,000+ professionals by doing the boring things right — every single time."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Award,
              title: 'A track record that speaks for itself',
              description: 'A 4.9/5 average rating across 12,000+ customers. We publish every review, good or bad, and act on what we hear.',
            },
            {
              icon: ShieldCheck,
              title: 'A real guarantee, not a marketing line',
              description: '30-day, no-questions-asked refunds. If a template doesn\'t work for you, we\'d rather give your money back than argue.',
            },
            {
              icon: Users,
              title: 'Support from real humans',
              description: 'No bots, no ticket queues. Email us and a real person replies within one business day — usually much faster.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our process */}
      <section id="process" className="scroll-mt-24 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Our process"
            title={<>How every True Analyzers template is made</>}
            description="A repeatable, four-step process that turns a real-world need into a polished, editable document you can actually use."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <article className="group relative h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="font-display text-4xl font-bold text-brand-200 transition-colors group-hover:text-brand-300">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700">
                <Link href="/pricing">
                  See what we can do for you
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Want to see the documents we make?"
        description="Browse the full library across our three plans. One-time pricing, report sent to your email within 1–2 hours, 30-day money-back guarantee."
        primaryLabel="View Pricing Plans"
        primaryHref="/pricing"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
    </>
  );
}
