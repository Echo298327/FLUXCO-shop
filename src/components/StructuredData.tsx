import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';
import type { Product } from '../types';

interface StructuredDataProps {
  type: 'organization' | 'product';
  product?: Product;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, product }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.title,
    "url": siteConfig.fullUrl,
    "logo": `${siteConfig.fullUrl}/logo.webp`,
    "image": `${siteConfig.fullUrl}/logo.webp`,
    "description": siteConfig.description,
    "sameAs": [
      siteConfig.social.github
    ]
  };

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${siteConfig.fullUrl}${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.title
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "TWD",
      "availability": "https://schema.org/InStock"
    }
  } : null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(type === 'organization' ? organizationSchema : productSchema)}
      </script>
    </Helmet>
  );
}; 