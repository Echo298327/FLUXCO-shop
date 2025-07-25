export const siteConfig = {
  domain: 'fluxco-dev.com',
  fullUrl: 'https://fluxco-dev.com',
  title: 'FLUX&CO',
  description: 'Classic Cycling Heritage',
  social: {
    github: 'https://github.com/Echo298327'
  }
} as const;

export type SiteConfig = typeof siteConfig; 