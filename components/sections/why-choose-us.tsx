import { Award, Users, Headphones, RefreshCw } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

const reasons = [
  {
    icon: Award,
    title: 'Designed by senior professionals',
    description:
      'Our team has shipped documents for FTSE 100 brands, startups and solo founders. You get that same craft, every time.',
  },
  {
    icon: Users,
    title: 'A library that grows with you',
    description:
      'New templates added every month. Buy a plan once and your library keeps expanding — no extra fees, ever.',
  },
  {
    icon: Headphones,
    title: 'Real humans, real support',
    description:
      'Questions? Email us and a real person replies within one business day. No bots, no ticket queues.',
  },
  {
    icon: RefreshCw,
    title: '30-day money-back guarantee',
    description:
      'If a template isn\'t right for you, we refund you in full. No forms, no friction, no awkward questions.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="container-page py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title={<>The studio advantage, without the studio price</>}
            description="We built True Analyzers so professionals could stop fighting with blank pages and start shipping documents that look intentional. Here's what makes us different."
          />
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">12,000+ customers</span>
              <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">4.9/5 average rating</span>
              <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">180+ templates</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <article className="group h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <r.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
