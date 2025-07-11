// React import
import React, { useState } from "react";
import type { Product } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface ProductsSectionProps {
    products: Product[];
    handleWhatsAppContact: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products, handleWhatsAppContact }) => {
    // State for selected product
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

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
              Curated Collection
            </h3>
            <p
              className="text-xl text-amber-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Each piece in our collection has been carefully selected and
              restored to showcase the finest examples of vintage cycling
              craftsmanship.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="vintage-texture bg-white/90 rounded-lg overflow-hidden vintage-shadow hover:scale-105 transition-all duration-300 cursor-pointer distressed-border"
                onClick={() =>
                  setSelectedProduct(
                    selectedProduct === product.id ? null : product.id,
                  )
                }
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover sepia-filter hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-2xl font-bold text-amber-900 mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-amber-700 mb-4 leading-relaxed"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {product.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppContact(product.name);
                    }}
                    className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="py-8"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    className="vintage-texture bg-white/90 rounded-lg overflow-hidden vintage-shadow distressed-border"
                    onClick={() =>
                      setSelectedProduct(
                        selectedProduct === product.id ? null : product.id,
                      )
                    }
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover sepia-filter hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4
                        className="text-2xl font-bold text-amber-900 mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {product.name}
                      </h4>
                      <p
                        className="text-amber-700 mb-4 leading-relaxed"
                        style={{ fontFamily: "Crimson Text, serif" }}
                      >
                        {product.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppContact(product.name);
                        }}
                        className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300"
                        style={{ fontFamily: "Crimson Text, serif" }}
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
};