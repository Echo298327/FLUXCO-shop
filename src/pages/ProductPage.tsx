// React import
import React, { useState, useEffect } from "react";
// Hooks imports
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Components imports
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ProductHeader } from "../components/ProductHeader";
import { ProductImage } from "../components/ProductImage";
import { ProductSpecifications } from "../components/ProductSpecifications";
import { EmailFormSection } from "../components/EmailFormSection";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorModal } from "../components/ErrorModal";
import { NotFound } from "../pages/404";
// Utils imports
import { products } from "../utils/homeData";
import { siteConfig } from "../config/site";

interface ProductPageProps {
}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <NotFound />;
  }

  // Get motor power for SEO
  const motorValue = product.details?.motor?.value || product.details?.topSpeed?.value || '250W';

  return (
    <div className="min-h-screen pt-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95">
      <SEO 
        title={t('seo.product.title', { 
          productName: t(`products.items.${product.id}.name`) 
        })}
        description={t('seo.product.description', { 
          productDescription: t(`products.items.${product.id}.description`),
          motor: motorValue
        })}
        ogImage={`${siteConfig.fullUrl}${product.image}`}
        ogUrl={`${siteConfig.fullUrl}/product/${product.id}`}
        canonicalUrl={`${siteConfig.fullUrl}/product/${product.id}`}
      />
      <StructuredData type="product" product={product} />
      <div className="max-w-6xl mx-auto px-6 py-12">    
        {/* Product Header */}
        <ProductHeader product={product} />
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Product Image with Dimensions */}
          <ProductImage product={product} />
          {/* Product Specifications */}
          <ProductSpecifications product={product} />
        </div>
      </div>
        {/* Contact Form Section */}
        <EmailFormSection setShowSuccess={setShowSuccess} setShowError={setShowError} product={product} />
        
        {/* Success Modal */}
        {showSuccess && (
            <SuccessModal />
        )}
        
        {/* Error Modal */}
        {showError && (
            <ErrorModal 
                onClose={() => setShowError(false)}
                onRetry={() => {
                    setShowError(false);
                }}
            />
        )}
        <style>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
    </div>
  );
};

export default ProductPage;