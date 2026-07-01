import { Check, FileCheck2, Sparkles, RefreshCw, Lock, Smartphone, CreditCard } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

const features = [
  {
    icon: FileCheck2,
    title: 'Professionally designed reports',
    description: 'Every report is crafted by senior designers with a sharp eye for typography, layout and data hierarchy — 5, 7, or 9 pages of polished content.',
  },
  {
    icon: Sparkles,
    title: 'Fully editable',
    description: 'Open in any PDF editor, drop in your data, and ship. Editable text fields, replaceable charts, no locked-down rigid templates.',
  },
  {
    icon: CreditCard,
    title: 'One-time payment',
    description: 'Pay once and own your report forever. No subscription, no recurring fees, no auto-renewals — just a single upfront payment.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime updates on Premium',
    description: 'Buy the Premium plan once and get every future update to your report at no extra cost.',
  },
  {
    icon: Lock,
    title: 'Secure, private checkout',
    description: 'Stripe-encrypted payments and email delivery within 1–2 hours. Your details never leave a protected, PCI-compliant pipeline.',
  },
  {
    icon: Smartphone,
    title: 'Works on any device',
    description: 'Read, fill and share on desktop, tablet or phone. Every PDF is tested across screen sizes and readers.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Key features"
          title={<>Everything you need to ship polished reports, fast</>}
          description="Each digital report PDF is engineered for real-world use — editable, accessible, and built to a standard your clients will notice."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/40" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                    <f.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {[
              'Sent to your email within 1–2 hours',
              'One-time payment, no subscription',
              'Commercial-use licence',
              '30-day money-back guarantee',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
