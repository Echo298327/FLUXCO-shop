// React import
import React, { useState } from "react";
// Components import
import { ProductCard } from "./ProductCard";
// Hooks import
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Types import
import type { Product } from "../types";

interface ProductsSectionProps {
    products: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // State for selected product
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    const handleProductClick = (productId: number) => {
      navigate(`product/${productId}`);
    }
    return (
        <section
        id="products"
        className="py-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3
              className="text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('products.title')}
            </h3>
            <p
              className="text-xl text-amber-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('products.subtitle')}
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleProductClick={handleProductClick}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={false}
              initialSlide={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              speed={300}
              className="py-8"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    product={product}
                    handleProductClick={handleProductClick}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
};