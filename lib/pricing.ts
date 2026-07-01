export type Plan = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  pages: number;
  tagline: string;
  description: string;
  features: string[];
  excluded?: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
};

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '£30',
    priceValue: 30,
    pages: 5,
    tagline: '5-page digital report',
    description: 'A concise, professionally designed 5-page digital report PDF — perfect for quick insights and summaries.',
    features: [
      '5-page digital report PDF',
      'Professional layout & typography',
      'Editable text fields',
      'Commercial-use licence',
      'Sent to your email within 1–2 hours',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '£40',
    priceValue: 40,
    pages: 7,
    tagline: '7-page digital report',
    description: 'Our most popular report — 7 pages with deeper analysis, charts and actionable recommendations.',
    features: [
      '7-page digital report PDF',
      'Advanced charts & data visuals',
      'Editable text fields',
      'Commercial-use licence',
      'Sent to your email within 1–2 hours',
      'Priority email support',
      'Quarterly content updates',
    ],
    highlighted: true,
    badge: 'Most popular',
    cta: 'Get Started',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£50',
    priceValue: 50,
    pages: 9,
    tagline: '9-page digital report',
    description: 'The complete 9-page report with full analysis, executive summary, methodology and appendix.',
    features: [
      '9-page digital report PDF',
      'Executive summary & methodology',
      'Advanced charts & data visuals',
      'Editable text fields',
      'Commercial-use licence',
      'Sent to your email within 1–2 hours',
      'Same-day priority support',
      'Lifetime free updates',
    ],
    cta: 'Get Premium',
  },
];

export const comparisonRows: { label: string; basic: string | boolean; standard: string | boolean; premium: string | boolean }[] = [
  { label: 'Report length', basic: '5 pages', standard: '7 pages', premium: '9 pages' },
  { label: 'Professional layout & typography', basic: true, standard: true, premium: true },
  { label: 'Editable text fields', basic: true, standard: true, premium: true },
  { label: 'Advanced charts & data visuals', basic: false, standard: true, premium: true },
  { label: 'Executive summary', basic: false, standard: false, premium: true },
  { label: 'Methodology section', basic: false, standard: false, premium: true },
  { label: 'Commercial-use licence', basic: true, standard: true, premium: true },
  { label: 'Sent to your email within 1–2 hours', basic: true, standard: true, premium: true },
  { label: 'Email support', basic: 'Standard', standard: 'Priority', premium: 'Same-day' },
  { label: 'Quarterly content updates', basic: false, standard: true, premium: true },
  { label: 'Lifetime free updates', basic: false, standard: false, premium: true },
  { label: 'Money-back guarantee', basic: '30 days', standard: '30 days', premium: '30 days' },
];
