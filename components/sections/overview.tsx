import { FileText, Layers, Palette, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

const pillars = [
  {
    icon: FileText,
    title: 'Professionally designed',
    description:
      'Every document is crafted by senior designers with a sharp eye for typography, layout and hierarchy.',
  },
  {
    icon: Layers,
    title: 'Fully editable',
    description:
      'Open in any PDF editor, fill in your details, and ship. No locked-down, rigid templates.',
  },
  {
    icon: Palette,
    title: 'On-brand by default',
    description:
      'Clean, modern aesthetics that look like they came from a studio — not a free download bin.',
  },
  {
    icon: Mail,
    title: 'Delivered to your inbox',
    description:
      'Pay once and your report PDF arrives in your email within 1–2 hours. No waiting on designers, no back-and-forth revisions.',
  },
];

export function Overview() {
  return (
    <section className="container-page py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="What we do"
        title={<>Digital report PDFs that work as hard as you do</>}
        description="True Analyzers designs premium, ready-to-use digital report PDFs for professionals who care about presentation. Choose 5, 7, or 9 pages — every report is built to be useful, beautiful and instantly yours."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="group h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <p.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
