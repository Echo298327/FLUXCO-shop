export const siteConfig = {
  domain: 'fluxcotw.com',
  fullUrl: 'https://fluxcotw.com',
  title: 'FLUX&CO',
  description: 'Experience the perfect blend of classic cycling heritage and modern innovation with FLUX&CO. Premium electric bicycles crafted for style, comfort, and performance.',
  social: {
    github: 'https://github.com/Echo298327'
  },
  defaultImage: {
    url: '/logo.webp',
    width: 1200,
    height: 630,
    alt: 'FLUX&CO - Classic Cycling Heritage'
  }
} as const;

export type SiteConfig = typeof siteConfig; 