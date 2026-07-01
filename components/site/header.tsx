'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-brand-100 bg-white/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-white/40 backdrop-blur-md'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="True Analyzers home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand transition-transform duration-300 group-hover:scale-105">
            <BarChart3 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              True
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
              Analyzers
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-brand-700'
                    : 'text-foreground/70 hover:text-foreground'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700"
          >
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-brand-50 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="container-page relative z-50 flex flex-col gap-1 border-t border-brand-100 bg-white py-4 shadow-soft"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-foreground/80 hover:bg-brand-50 hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              asChild
              className="mt-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700"
            >
              <Link href="/pricing">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
