

export interface AppDef {
  name: string;
  slug: string;
  oneLiner: string;
  features: string[];
  icon: string;
  theme: 'orange' | 'blue' | 'green' | 'purple';
  ctaType: 'demo' | 'visit' | 'download';
  links: {
    web?: string;
    appStore?: string;
    playStore?: string;
    chromeStore?: string;
  };
  description: string;
}

export const APPS: AppDef[] = [
  {
    name: 'Crew Roster',
    slug: 'crew-roster',
    oneLiner: 'Digital timesheet for your crew - sorted.',
    features: ['Roster scheduling', 'GPS clock-in/out', 'Award compliance'],
    icon: '⏱',
    theme: 'orange',
    ctaType: 'demo',
    links: {
      web: 'https://roster.crewcircle.co',
    },
    description:
      'Your digital timesheet - drag-drop rostering, GPS clock-in, and award compliance. Built for tradies and cafés that want job-site ready tools.',
  },
  {
    name: 'Smart GL',
    slug: 'smart-gl',
    oneLiner: 'Shoebox accounting? Sorted.',
    features: ['AI categorisation', 'GST/BAS reports', 'Ledger tracking'],
    icon: '📎',
    theme: 'blue',
    ctaType: 'visit',
    links: {
      web: 'https://smartgl.crewcircle.co',
    },
    description:
      'Stuff receipts in, AI sorts the books. GST, BAS, and profit insights - no shoebox needed. Built for tradies who\'d rather be on the tools.',
  },
  {
    name: 'Card Snap',
    slug: 'card-snap',
    oneLiner: 'Snap biz cards on site - sorted.',
    features: ['ML Kit OCR', 'Contact save', 'Card history'],
    icon: '📷',
    theme: 'green',
    ctaType: 'download',
    links: {
      appStore: '#ios',
      playStore: '#android',
    },
    description:
      'Point, shoot, done. Snap a biz card at the job site - straight to contacts. No typing, no fuss. Perfect for tradies on the go.',
  },
  {
    name: 'XeroAssist',
    slug: 'xero-assist',
    oneLiner: 'Your Xero spanner - sorted.',
    features: ['ABN validation', 'BAS tracker', 'ATO rates'],
    icon: '🔧',
    theme: 'purple',
    ctaType: 'download',
    links: {
      chromeStore: '#chrome',
    },
    description:
      'Your Xero spanner: validates ABNs, tracks BAS dues, and flips between tenants. Built for bookkeepers who want Xero without the headache.',
  },
];


export const DEMO_CONFIG = {
  heading: 'Try Crew Roster Demo',
  subheading: 'Explore all features with a pre-configured demo for',
  orgName: 'Syd Plumbing Bros',
  orgLocation: 'Parramatta, Sydney',
  users: [
    { role: 'Owner', name: 'Mick O\'Brien', color: 'orange' },
    { role: 'Foreman', name: 'Jake Thompson', color: 'blue' },
    { role: 'Apprentice', name: 'Sarah Chen', color: 'green' },
    { role: 'Apprentice', name: 'Emma Wilson', color: 'purple' },
  ],
  note: 'Part of the CrewCircle suite - high-viz tools for Aussie tradies.',
};


export const NAV_ITEMS = [
  { label: 'Our Apps', href: '/#apps', hasDropdown: true },
  { label: 'Blog', href: '/blog', hasDropdown: false },
];

export const FOOTER_LINKS = {
  brand: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/crewcircle' },
  ],
  apps: [
    { label: 'Crew Roster', href: '/roster' },
    { label: 'Smart GL', href: '/smartgl' },
    { label: 'Card Snap', href: '/card-snap' },
    { label: 'XeroAssist', href: '/xero-assist' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Documentation', href: '/docs' },
  ],
};


export const AUSSIE_TERMS = {
  tagline: "Tools that sort your biz - no dramas.",
  subtitle: "High-viz tools for tradies, cafes, shops & healthcare teams.",
  cta: "Ready to sort your biz?",
  exploreBtn: "Grab the Tools",
  viewAllBtn: "View All Tools",
  getStartedBtn: "Get Started",
};
