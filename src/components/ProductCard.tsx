import React from "react";
import { useTranslation } from 'react-i18next';
import type { Product } from "../types";

interface ProductCardProps {
    product: Product;
    handleWhatsAppContact: (productName: string) => void;
    selectedProduct: number | null;
    setSelectedProduct: (id: number | null) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    handleWhatsAppContact,
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
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppContact(t(`products.items.${product.id}.name`));
                    }}
                    className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300 mt-auto"
                    style={{ fontFamily: "Crimson Text, serif" }}
                >
                    <i className="fab fa-whatsapp mr-2"></i>
                    {t('products.inquireNow')}
                </button>
            </div>
        </div>
    );
}; 