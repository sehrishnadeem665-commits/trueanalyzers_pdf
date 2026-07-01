import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';

type CtaSectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  title = 'Ready to ship reports that actually get read?',
  description = 'Join 12,000+ professionals who get premium digital report PDFs from True Analyzers. One-time payment, report sent to your email within 1–2 hours, beautifully designed and ready to use.',
  primaryLabel = 'Get Started Today',
  primaryHref = '/pricing',
  secondaryLabel = 'Talk to Us',
  secondaryHref = '/contact',
}: CtaSectionProps) {
  return (
    <section className="container-page py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-14 shadow-brand sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Start Today
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-700 shadow-lg hover:bg-brand-50"
              >
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
