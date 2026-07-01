export function SiteJsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'True Analyzers',
    url: 'https://trueanalyzers.co.uk',
    logo: 'https://trueanalyzers.co.uk/icon.svg',
    description:
      'Premium digital report PDFs — 5, 7, or 9 pages, professionally designed for professionals. One-time payment, no subscription. Sent to your email within 1–2 hours.',
    email: 'info@trueanalyzers.com',
    telephone: '+44-20-7946-0321',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '71-75 Shelton Street, Covent Garden',
      addressLocality: 'London',
      postalCode: 'WC2H 9JQ',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://twitter.com/trueanalyzers',
      'https://www.linkedin.com/company/trueanalyzers',
      'https://www.instagram.com/trueanalyzers',
      'https://www.facebook.com/trueanalyzers',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'True Analyzers',
    url: 'https://trueanalyzers.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://trueanalyzers.co.uk/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
