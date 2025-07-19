// React imports
import React from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
// Types imports
import type { Product } from "../types/products";
// Components imports
import { Button } from "./Button";

interface ProductImageProps {
  product: Product;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="lg:w-1/2">
      <div className="bg-white/80 rounded-lg p-8 vintage-shadow">
        <div className="relative p-8">
          <img
            src={product.dimensionsImage || product.image}
            alt={`${t(`products.items.${product.id}.name`)} - ${t(`products.items.${product.id}.description`)} with dimensions and specifications`}
            className="w-full rounded-lg sepia-filter"
          />

          {/* Dimension Annotations */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              {t('productPage.dimensions.vehicleHeight')} {product.vehicleSeatHeight}CM
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              {t('productPage.dimensions.seatHeight')} {product.vehicleHeight}CM
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              {t('productPage.dimensions.vehicleLength')} {product.vehicleLength}CM
            </div>
          </div>
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
