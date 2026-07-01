const logos = [
  'Northwind Co.',
  'Brightside',
  'Lumen Labs',
  'Atlas Group',
  'Veridian',
  'Foundry 9',
  'Maple & Co.',
];

export function TrustBar() {
  return (
    <section className="border-y border-brand-100 bg-white/60 py-8" aria-label="Trusted by leading companies">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams at
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display text-lg font-semibold text-foreground/40 transition-colors hover:text-brand-600"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
