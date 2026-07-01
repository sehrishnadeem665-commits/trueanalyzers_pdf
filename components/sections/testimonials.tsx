import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

const testimonials = [
  {
    quote:
      'I needed a client proposal template fast. True Analyzers had three options that were better than anything I could have designed myself. Downloaded, branded, sent — all in under an hour.',
    name: 'Sarah Whitfield',
    role: 'Freelance consultant',
    initials: 'SW',
    rating: 5,
  },
  {
    quote:
      'The quarterly planner alone has paid for itself ten times over. My team finally has a consistent format for board updates, and it looks incredibly polished.',
    name: 'James Okafor',
    role: 'Operations director, Brightside',
    initials: 'JO',
    rating: 5,
  },
  {
    quote:
      'I was sceptical about paying for PDFs, but the quality is genuinely studio-grade. The finance workbook saved me a full weekend of formatting.',
    name: 'Mei Lin Chen',
    role: 'Founder, Lumen Labs',
    initials: 'ML',
    rating: 5,
  },
  {
    quote:
      'Beautiful templates, emailed to me within the hour, and the support team actually answered my email. This is how digital products should work.',
    name: 'Daniel Brooks',
    role: 'Accountant, Atlas Group',
    initials: 'DB',
    rating: 5,
  },
  {
    quote:
      'We bought the premium plan for our agency and rolled it out across 14 staff. Everyone uses it weekly. Best £50 we have spent this year.',
    name: 'Priya Nair',
    role: 'Creative lead, Foundry 9',
    initials: 'PN',
    rating: 5,
  },
  {
    quote:
      'The templates are clean, editable and genuinely useful. No fluff, no filler — just well-designed documents that make me look more professional.',
    name: 'Tom Halliday',
    role: 'Solo lawyer',
    initials: 'TH',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-brand-50/40">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by 12,000+ professionals worldwide</>}
          description="From solo founders to growing teams, here's what people say after switching to True Analyzers."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <Quote className="h-8 w-8 text-brand-200 transition-colors group-hover:text-brand-300" aria-hidden="true" />
                <div className="mt-3 flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-sm font-semibold text-white shadow-brand">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
