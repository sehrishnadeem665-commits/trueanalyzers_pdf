import Link from 'next/link';
import { BarChart3, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const productLinks = [
  { href: '/pricing', label: 'Pricing Plans' },
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#faq', label: 'FAQ' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/about#mission', label: 'Mission & Vision' },
  { href: '/about#process', label: 'Our Process' },
  { href: '/contact', label: 'Contact' },
];

const supportLinks = [
  { href: '/contact', label: 'Help Centre' },
  { href: '/contact', label: 'Get Support' },
  { href: '/pricing', label: 'Buy a Plan' },
  { href: '/#faq', label: 'Common Questions' },
];

const socials = [
  { href: 'https://twitter.com/trueanalyzers', label: 'Twitter', icon: Twitter },
  { href: 'https://www.linkedin.com/company/trueanalyzers', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/trueanalyzers', label: 'Instagram', icon: Instagram },
  { href: 'https://www.facebook.com/trueanalyzers', label: 'Facebook', icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-brand-100 bg-gradient-to-b from-white to-brand-50/60">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-200/30 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="True Analyzers home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
                <BarChart3 className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-foreground">True</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">Analyzers</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium digital PDF documents and analytic templates crafted for professionals.
              Beautifully designed, sent to your email within 1–2 hours, and trusted by 12,000+ customers worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Support" links={supportLinks} />
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-brand-100 pt-8 md:grid-cols-2">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:info@trueanalyzers.com" className="flex items-center gap-2 transition-colors hover:text-brand-600">
              <Mail className="h-4 w-4 text-brand-500" />
              info@trueanalyzers.com
            </a>
            <a href="tel:+442079460321" className="flex items-center gap-2 transition-colors hover:text-brand-600">
              <Phone className="h-4 w-4 text-brand-500" />
              +44 75 5597 9712
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-500" />
              London, United Kingdom
            </span>
          </div>
          <p className="text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} True Analyzers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-brand-600">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
