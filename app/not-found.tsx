import Link from 'next/link';
import { Home, ArrowRight, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" aria-hidden="true" />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand">
          <FileQuestion className="h-8 w-8" strokeWidth={2} />
        </span>
        <p className="mt-8 font-display text-7xl font-bold text-gradient-brand sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
          We couldn't find that page
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you're looking for may have moved or never existed. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-brand-200 bg-white text-brand-700 hover:bg-brand-50">
            <Link href="/pricing">
              View pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
