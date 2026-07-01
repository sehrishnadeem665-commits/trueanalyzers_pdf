import Link from 'next/link';
import { ArrowRight, Mail, Star, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-200/50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

      <div className="container-page relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-brand-500" />
              Trusted by 12,000+ professionals worldwide
            </div>

            <h1 className="animate-fade-up delay-100 mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Premium digital <span className="text-gradient-brand">report PDFs</span> for professionals
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Professionally designed 5, 7, and 9-page digital report PDFs —
              sent to your email within 1–2 hours, fully editable, and built to impress. One-time payment, no subscription.
            </p>

            <div className="animate-fade-up delay-300 mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700"
              >
                <Link href="/pricing">
                  Browse Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-200 bg-white text-foreground hover:bg-brand-50 hover:text-brand-700">
                <Link href="/about">
                  See How It Works
                </Link>
              </Button>
            </div>

            <dl className="animate-fade-up delay-400 mt-10 grid grid-cols-3 gap-4 border-t border-brand-100 pt-6">
              <Stat value="12,000+" label="Happy customers" />
              <Stat value="4.9/5" label="Average rating" />
              <Stat value="3 plans" label="From £30 one-time" />
            </dl>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="animate-fade-in relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-100 to-brand-200/60 shadow-brand" aria-hidden="true" />
        <div className="absolute inset-3 rounded-2xl bg-white shadow-card-hover">
          <div className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-brand-200" />
                <span className="h-3 w-3 rounded-full bg-brand-300" />
                <span className="h-3 w-3 rounded-full bg-brand-400" />
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                Analytics Report
              </span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
              <div className="h-3 w-1/2 rounded-full bg-foreground/10" />
            </div>
            <div className="mt-6 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md ${
                    [3, 8, 12, 17, 22].includes(i)
                      ? 'bg-brand-500'
                      : [0, 6, 14, 19, 25].includes(i)
                      ? 'bg-brand-200'
                      : 'bg-brand-50'
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="h-2.5 w-full rounded-full bg-foreground/5" />
              <div className="h-2.5 w-5/6 rounded-full bg-foreground/5" />
              <div className="h-2.5 w-3/4 rounded-full bg-foreground/5" />
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-brand-100 pt-4">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="text-xs font-semibold text-brand-700">True Analyzers</span>
            </div>
          </div>
        </div>

        <div className="animate-float absolute -left-4 top-12 hidden rounded-2xl border border-brand-100 bg-white p-3 shadow-card-hover sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-foreground">Sent to your email</p>
              <p className="text-[10px] text-muted-foreground">Within 1–2 hours</p>
            </div>
          </div>
        </div>

        <div className="animate-float absolute -right-4 bottom-16 hidden rounded-2xl border border-brand-100 bg-white p-3 shadow-card-hover sm:block" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-foreground">Secure checkout</p>
              <p className="text-[10px] text-muted-foreground">SSL protected</p>
            </div>
          </div>
        </div>

        <div className="animate-float absolute -top-3 right-10 hidden rounded-2xl border border-brand-100 bg-white p-3 shadow-card-hover lg:block" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-foreground">Fully editable</p>
              <p className="text-[10px] text-muted-foreground">Customise freely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
