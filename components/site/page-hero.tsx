import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-brand-100', className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
