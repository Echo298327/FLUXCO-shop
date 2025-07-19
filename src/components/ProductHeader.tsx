// React imports
import React from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
// Types imports
import type { Product } from "../types/products";

interface ProductHeaderProps {
  product: Product;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  return (
    <div className="text-center mb-12">
      <h1
        className="text-5xl font-bold text-amber-900 mb-4"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {t(`products.items.${product.id}.name`)}
      </h1>
      <p
        className="text-xl text-amber-700 max-w-2xl mx-auto"
        style={{ fontFamily: "Crimson Text, serif" }}
      >
        {t(`products.items.${product.id}.description`)}
      </p>
    </div>
  );
};
