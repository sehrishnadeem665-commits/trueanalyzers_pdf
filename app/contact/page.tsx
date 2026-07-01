import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageSquare, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { ContactForm } from '@/components/site/contact-form';

export const metadata: Metadata = {
  title: 'Contact True Analyzers | Support, Sales & Custom Enquiries',
  description:
    'Get in touch with True Analyzers. Email info@trueanalyzers.com, call +44 75 5597 9712, or send a message through our contact form. Real humans, real replies, within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact True Analyzers | Support, Sales & Custom Enquiries',
    description:
      'Get in touch with True Analyzers. Email, phone, or send a message through our contact form. Real humans, real replies, within one business day.',
    url: '/contact',
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'info@trueanalyzers.com',
    href: 'mailto:info@trueanalyzers.com',
    description: 'For support, sales and custom enquiries.',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+44 75 5597 9712',
    href: 'tel:+442079460321',
    description: 'Mon–Fri, 9am–5pm UK time.',
  },

];

const socials = [
  { href: 'https://twitter.com/trueanalyzers', label: 'Twitter', icon: Twitter },
  { href: 'https://www.linkedin.com/company/trueanalyzers', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/trueanalyzers', label: 'Instagram', icon: Instagram },
  { href: 'https://www.facebook.com/trueanalyzers', label: 'Facebook', icon: Facebook },
];

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact True Analyzers',
  description:
    'Get in touch with True Analyzers for support, sales and custom document design enquiries.',
  mainEntity: {
    '@type': 'Organization',
    name: 'True Analyzers',
    email: 'info@trueanalyzers.com',
    telephone: '+44-20-7946-0321',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@trueanalyzers.com',
      telephone: '+44-20-7946-0321',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '71-75 Shelton Street, Covent Garden',
      addressLocality: 'London',
      postalCode: 'WC2H 9JQ',
      addressCountry: 'GB',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about what you need</>}
        description="Whether you're choosing a plan, need help with a template, or want a custom document built to your brand — we'd love to hear from you. A real person reads and replies to every message."
      />

      <section className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact details + map */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-4">
                {contactDetails.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <c.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-foreground">
                        {c.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Clock className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Response time</p>
                  <p className="text-sm text-muted-foreground">
                    We reply to every message within one business day — usually much faster.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="True Analyzers location on Google Maps"
                    src="https://www.google.com/maps?q=Covent+Garden+London+WC2H+9JQ&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Covent Garden, London, United Kingdom
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Follow us
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 bg-white text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                  <MessageSquare className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">Send us a message</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill in the form and we'll get back to you by email.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
