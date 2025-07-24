// React imports
import React from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
// Types imports
import type { Product } from "../types/products";

interface ProductSpecificationsProps {
  product: Product;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="lg:w-1/2">
      <div className="bg-white/80 rounded-lg p-8 vintage-shadow h-full">
        <h3
          className="text-3xl font-bold text-amber-900 mb-8 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {t('productPage.specifications')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.details).map(([key, spec]) => (
            <div
              key={key}
              className="bg-amber-50/80 p-4 rounded-lg border border-amber-200"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {typeof spec.icon === 'string' ? (
                    <i className={`${spec.icon} text-2xl`}></i>
                  ) : (
                    <spec.icon className="w-10 h-10 text-amber-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className="text-sm text-amber-700 mb-1 leading-tight"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {t(`productPage.details.labels.${key}`) || spec.label}
                  </div>
                  <div
                    className="font-semibold text-amber-900"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {t(`productPage.details.values.${spec.value}`) || spec.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
