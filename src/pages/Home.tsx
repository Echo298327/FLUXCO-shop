// React import
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// Components import
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/productsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ContactSection } from "../components/ContactSection";
// Utils import
import { products, features } from "../utils/homeData";
// Translation hook
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    
    useEffect(() => {
      // Handle both initial load and navigation from other pages
      const handleScroll = () => {
        const state = location.state as { scrollTo?: string } | null;
        if (state?.scrollTo) {
          const element = document.getElementById(state.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Clear the state after scrolling
            window.history.replaceState({}, document.title);
          }
        } else {
          // Default behavior - scroll to top
          window.scrollTo(0, 0);
        }
      };

      // Small delay to ensure DOM is ready
      setTimeout(handleScroll, 100);
    }, [location]);
    
  return (
    <div>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        ogTitle={t('seo.home.title')}
        ogDescription={t('seo.home.description')}
        ogImage="https://echo298327.github.io/CyclingShop/logo.webp"
        ogUrl="https://echo298327.github.io/CyclingShop/"
        canonicalUrl="https://echo298327.github.io/CyclingShop/"
      />
      <StructuredData type="business" />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Product Showcase */}
      <ProductsSection
        products={products}
      />
      {/* Features Section */}
      <FeaturesSection features={features} />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
export default Home;
