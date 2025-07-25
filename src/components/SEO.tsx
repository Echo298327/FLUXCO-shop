import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogImage = `${siteConfig.fullUrl}${siteConfig.defaultImage.url}`,
  ogUrl = siteConfig.fullUrl,
  canonicalUrl = siteConfig.fullUrl,
  imageWidth = siteConfig.defaultImage.width,
  imageHeight = siteConfig.defaultImage.height,
  imageAlt = siteConfig.defaultImage.alt,
}) => {
  const fullTitle = `${title} | ${siteConfig.title}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}; 