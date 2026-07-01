import Link from 'next/link';
import { ArrowRight, CreditCard } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { PricingCards } from '@/components/site/pricing-cards';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/ui/button';

export function PricingPreview() {
  return (
    <section id="pricing" className="scroll-mt-24 container-page py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Pricing"
        title={<>One-time payment. No subscription, ever.</>}
        description="Pick the report that fits your needs. Every plan is a single one-off payment — no recurring fees, no hidden charges, no subscription. Commercial-use licence and 30-day money-back guarantee included."
      />

      <div className="mt-14">
        <PricingCards />
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CreditCard className="h-4 w-4 text-brand-500" />
            Pay once, report sent to your email within 1–2 hours.
          </p>
          <Button asChild variant="outline" className="border-brand-200 bg-white text-brand-700 hover:bg-brand-50">
            <Link href="/pricing">
              Compare all features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
