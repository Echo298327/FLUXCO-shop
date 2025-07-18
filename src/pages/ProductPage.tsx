// React import
import React, { useState, useEffect } from "react";
// Hooks imports
import { useParams } from 'react-router-dom';
// Components imports
import { ProductHeader } from "../components/ProductHeader";
import { ProductImage } from "../components/ProductImage";
import { ProductSpecifications } from "../components/ProductSpecifications";
import { EmailFormSection } from "../components/EmailFormSection";
import { SuccessModal } from "../components/SuccessModal";
import { NotFound } from "../pages/404";
// Data imports
import { products } from "../utils/homeData";

interface ProductPageProps {
  handleLineContact?: (productName: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ handleLineContact }) => {
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95">
      <div className="max-w-6xl mx-auto px-6 py-12">    
        {/* Product Header */}
        <ProductHeader product={product} />
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Product Image with Dimensions */}
          <ProductImage product={product} handleLineContact={handleLineContact || (() => {})} />
          {/* Product Specifications */}
          <ProductSpecifications product={product} />
        </div>
      </div>
        {/* Contact Form Section */}
        <EmailFormSection setShowSuccess={setShowSuccess} />
        {/* Success Modal */}
        {showSuccess && (
            <SuccessModal />
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