// React import
import React, { useState } from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
// Components imports
import { Button } from "../components/Button";
import { ProductHeader } from "../components/ProductHeader";
import { ProductImage } from "../components/ProductImage";
import { ProductSpecifications } from "../components/ProductSpecifications";
import { EmailFormSection } from "../components/EmailFormSection";
import { SuccessModal } from "../components/SuccessModal";
// Data imports
import { products } from "../utils/homeData";

interface ProductPageProps {
  handleLineContact: (productName: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ handleLineContact }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const product = products.find(p => p.id === parseInt(id || '0'));
  console.log("product: ", product);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Product Not Found</h1>
          <Button text="Back to Home" onClick={() => navigate('/')} color="amber" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95">
      <div className="max-w-6xl mx-auto px-6 py-12">    
        {/* Product Header */}
        <ProductHeader name={product.name} description={product.description} />
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Product Image with Dimensions */}
          <ProductImage product={product} handleLineContact={handleLineContact} />
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