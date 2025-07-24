import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../types/products';

interface StructuredDataProps {
  type: 'business' | 'product';
  product?: Product;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, product }) => {
  const { t } = useTranslation();

  const getBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FLUX & CO",
    "description": t('footer.description'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zhongzheng District",
      "addressRegion": "Taipei",
      "addressCountry": "TW",
      "streetAddress": t('footer.address')
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0320",
      "longitude": "121.5654"
    },
    "telephone": "0983-362-103",
    "openingHours": "Mo-Sa 12:00-20:00",
    "url": "https://echo298327.github.io/CyclingShop/",
    "logo": "https://echo298327.github.io/CyclingShop/logo.webp",
    "image": "https://echo298327.github.io/CyclingShop/logo.webp",
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.0320",
        "longitude": "121.5654"
      },
      "geoRadius": "10000"
    },
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "TWD"
  });

  const getProductSchema = () => {
    if (!product) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": t(`products.items.${product.id}.name`),
      "description": t(`products.items.${product.id}.description`),
      "image": `https://echo298327.github.io/CyclingShop${product.image}`,
      "brand": {
        "@type": "Brand",
        "name": "FLUX & CO"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "FLUX & CO"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "TWD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "FLUX & CO"
        }
      },
      "category": "Electric Bicycle",
      "productID": product.id.toString(),
      "sku": `FLUX-${product.id}`,
      "additionalProperty": Object.entries(product.details).map(([key, spec]) => ({
        "@type": "PropertyValue",
        "name": t(`productPage.details.labels.${key}`) || spec.label,
        "value": spec.value
      }))
    };
  };

  const schema = type === 'business' ? getBusinessSchema() : getProductSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}; 