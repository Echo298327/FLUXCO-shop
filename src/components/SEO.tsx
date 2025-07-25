import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogImage = `${siteConfig.fullUrl}/logo.webp`,
  ogUrl = siteConfig.fullUrl,
  canonicalUrl = siteConfig.fullUrl,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}; 