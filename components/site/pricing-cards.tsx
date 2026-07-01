import Link from 'next/link';
import { Check, X, ArrowRight, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';
import { plans, type Plan } from '@/lib/pricing';

function renderCell(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    ) : (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn('grid gap-6', compact ? 'lg:grid-cols-3' : 'lg:grid-cols-3')}>
      {plans.map((plan, i) => (
        <Reveal key={plan.id} delay={i * 100}>
          <PricingCard plan={plan} />
        </Reveal>
      ))}
    </div>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1',
        plan.highlighted
          ? 'border-brand-300 shadow-brand ring-1 ring-brand-200'
          : 'border-brand-100 shadow-soft hover:shadow-card-hover'
      )}
    >
      {plan.badge && (
        <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-brand">
          {plan.badge}
        </span>
      )}

      <div>
        <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
      </div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
        One-time payment
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

      <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-600 shadow-soft">
          <FileText className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-foreground">{plan.pages} pages</p>
          <p className="text-xs text-muted-foreground">Digital report PDF</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Mail className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">Sent to your email</p>
          <p className="text-xs text-muted-foreground">Delivered within 1–2 hours</p>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className={cn(
          'mt-6 w-full',
          plan.highlighted
            ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700'
            : 'bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50'
        )}
      >
        <Link href="/contact">
          {plan.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <ul className="mt-7 space-y-3 border-t border-brand-100 pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-foreground/80">{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
