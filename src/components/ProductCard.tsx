import React from "react";
import { useTranslation } from 'react-i18next';
import type { Product } from "../types";
import { ProductButton } from "./ProductButton";

interface ProductCardProps {
    product: Product;
    handleProductClick: (productName: string) => void;
    selectedProduct: number | null;
    setSelectedProduct: (id: number | null) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    handleProductClick,
    selectedProduct,
    setSelectedProduct,
}) => {
    const { t } = useTranslation();

    return (
        <div
            className="vintage-texture bg-white/90 rounded-lg overflow-hidden vintage-shadow hover:scale-105 transition-all duration-300 cursor-pointer distressed-border flex flex-col h-full"
            onClick={() =>
                setSelectedProduct(
                    selectedProduct === product.id ? null : product.id,
                )
            }
        >
            <div className="h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={t(`products.items.${product.id}.name`)}
                    className="w-full h-full object-cover sepia-filter hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h4
                    className="text-2xl font-bold text-amber-900 mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    {t(`products.items.${product.id}.name`)}
                </h4>
                <p
                    className="text-amber-700 mb-4 leading-relaxed flex-1"
                    style={{ fontFamily: "Crimson Text, serif" }}
                >
                    {t(`products.items.${product.id}.description`)}
                </p>
                <ProductButton
                    text={t('products.inquireNow')}
                    icon="fab fa-line"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(t(`products.items.${product.id}.name`));
                    }}
                />
            </div>
        </div>
    );
}; 