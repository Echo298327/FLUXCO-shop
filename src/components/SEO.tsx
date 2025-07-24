import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonicalUrl
}) => {
  useEffect(() => {
    const createdElements: HTMLElement[] = [];
    let originalTitle: string | null = null;

    // Helper function to safely create or update meta tag
    const createOrUpdateMetaTag = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        document.head.appendChild(element);
        createdElements.push(element);
      } else {
        // Update existing element
        Object.entries(attributes).forEach(([key, value]) => {
          if (key !== 'name' && key !== 'property') {
            element.setAttribute(key, value);
          }
        });
      }
      return element;
    };

    // Helper function to safely create or update link tag
    const createOrUpdateLinkTag = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector(selector) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        document.head.appendChild(element);
        createdElements.push(element);
      } else {
        // Update existing element
        Object.entries(attributes).forEach(([key, value]) => {
          if (key !== 'rel') {
            element.setAttribute(key, value);
          }
        });
      }
      return element;
    };

    // Update title only if it's different from current title
    if (title && document.title !== title) {
      originalTitle = document.title;
      document.title = title;
    }

    // Update or create meta description
    if (description) {
      createOrUpdateMetaTag('meta[name="description"]', {
        name: 'description',
        content: description
      });
    }

    // Open Graph tags
    if (ogTitle) {
      createOrUpdateMetaTag('meta[property="og:title"]', {
        property: 'og:title',
        content: ogTitle
      });
    }

    if (ogDescription) {
      createOrUpdateMetaTag('meta[property="og:description"]', {
        property: 'og:description',
        content: ogDescription
      });
    }

    if (ogImage) {
      createOrUpdateMetaTag('meta[property="og:image"]', {
        property: 'og:image',
        content: ogImage
      });
    }

    if (ogUrl) {
      createOrUpdateMetaTag('meta[property="og:url"]', {
        property: 'og:url',
        content: ogUrl
      });
    }

    // Canonical URL
    if (canonicalUrl) {
      createOrUpdateLinkTag('link[rel="canonical"]', {
        rel: 'canonical',
        href: canonicalUrl
      });
    }

    // Add og:type
    createOrUpdateMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website'
    });

    // Add Twitter Card
    createOrUpdateMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    // Cleanup function
    return () => {
      // Remove elements that were created by this component
      createdElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      
      // Restore original title if it was actually changed
      if (originalTitle !== null) {
        document.title = originalTitle;
      }
    };
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, canonicalUrl]);

  return null; // This component doesn't render anything
}; 