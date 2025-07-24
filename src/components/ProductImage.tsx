// React imports
import React, { useState } from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
// Types imports
import type { Product } from "../types/products";
// Components imports
import { Button } from "./Button";
import { DimensionTag } from "./DimensionTag";

interface ProductImageProps {
  product: Product;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  const [showDimensions, setShowDimensions] = useState(false);
  
  return (
    <div className="lg:w-1/2">
      <div className="bg-white/80 rounded-lg p-8 vintage-shadow">
        <div className="relative p-8">
          <img
            src={product.dimensionsImage || product.image}
            alt={`Product dimensions and specifications diagram for ${t(`products.items.${product.id}.name`)}`}
            className="w-full rounded-lg sepia-filter"
          />

          {/* Dimensions Toggle Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setShowDimensions(!showDimensions)}
              className="flex items-center gap-2 bg-amber-600/90 hover:bg-amber-700/90 text-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium backdrop-blur-sm"
              title={showDimensions ? t('productPage.hideDimensions') : t('productPage.showDimensions')}
            >
              <i className={`${showDimensions ? "fas fa-eye-slash" : "fas fa-ruler"} text-sm`}></i>
              <span className="hidden sm:inline">
                {showDimensions ? t('productPage.hideDimensions') : t('productPage.showDimensions')}
              </span>
            </button>
          </div>

          {/* Dimension Annotations */}
          <DimensionTag
            label={t('productPage.dimensions.vehicleHeight')}
            value={product.vehicleSeatHeight}
            position="left"
            isVisible={showDimensions}
          />
          
          <DimensionTag
            label={t('productPage.dimensions.seatHeight')}
            value={product.vehicleHeight}
            position="right"
            isVisible={showDimensions}
          />
          
          <DimensionTag
            label={t('productPage.dimensions.vehicleLength')}
            value={product.vehicleLength}
            position="bottom"
            isVisible={showDimensions}
          />
        </div>

        {/* Price and Contact */}
        <div className="mt-8 text-center">
          <div
            className="text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {product.price.toLocaleString()}NTD
          </div>
          <Button
            text={t('productPage.contactButton')}
            icon="fab fa-line"
            onClick={() => {
              const message = t('contact.lineMessages.withProduct', { productName: product.name });
              const lineUrl = `https://line.me/R/ti/p/584464896?text=${encodeURIComponent(message)}`;
              window.open(lineUrl, "_blank");
            }}
            color="green"
            title={t('productPage.contactButtonTitle')}
          />
        </div>
      </div>
    </div>
  );
};
