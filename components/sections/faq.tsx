import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

const faqs = [
  {
    q: 'What exactly do I get when I buy a plan?',
    a: 'You get your chosen digital report PDF — 5, 7, or 9 pages depending on the plan — in editable format, with a commercial-use licence. The report is sent to your email within 1–2 hours of purchase.',
  },
  {
    q: 'Is this a subscription?',
    a: 'No. Every plan is a one-time payment. You pay once, receive your report by email, and use it forever. There are no recurring fees, no auto-renewals, and no hidden charges — ever.',
  },
  {
    q: 'What\'s the difference between the three plans?',
    a: 'Basic (£30) is a 5-page digital report PDF. Standard (£40) is a 7-page report with advanced charts and data visuals. Premium (£50) is a 9-page report with executive summary, methodology, and lifetime updates. You can see a full comparison on our Pricing page.',
  },
  {
    q: 'Can I edit the PDF after downloading?',
    a: 'Yes. Every report is built with editable text fields, layered content and replaceable placeholders. You can open it in Adobe Acrobat, Foxit, Preview, or any modern PDF editor and customise text, colours and data freely.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Absolutely. If a report isn\'t right for you, email us within 30 days and we\'ll refund you in full — no awkward questions. We\'d rather you be happy than hold on to your money.',
  },
  {
    q: 'Can I use these reports for client work?',
    a: 'Yes. Every plan includes a commercial-use licence, so you can use the report in your own business and for client deliverables. You may not resell or redistribute the report template itself.',
  },
  {
    q: 'How fast do I receive my report?',
    a: 'Your digital report PDF is sent to your email within 1–2 hours of purchase. You\'ll receive a secure download link — no waiting on designers, no approval step.',
  },
  {
    q: 'What if I need help or have a question?',
    a: 'Email us at info@trueanalyzers.com and a real person will reply within one business day. Premium plan customers get priority support with a same-day response target.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Answers to the questions we hear most</>}
          description="Everything you need to know about buying, downloading and using our digital report PDFs."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-brand-100 bg-white px-5 shadow-soft data-[state=open]:border-brand-200"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
