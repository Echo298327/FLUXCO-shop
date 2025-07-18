// React imports
import React from "react";
// Types imports
import type { Product } from "../types/products";
// Components imports
import { Button } from "./Button";

interface ProductImageProps {
  product: Product;
  handleLineContact: (productName: string) => void;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  handleLineContact,
}) => {
  return (
    <div className="lg:w-1/2">
      <div className="bg-white/80 rounded-lg p-8 vintage-shadow">
        <div className="relative p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg sepia-filter"
          />

          {/* Dimension Annotations */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              車高 {product.vehicleSeatHeight}CM
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              座高 {product.vehicleHeight}CM
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
            <div className="text-amber-800 font-semibold whitespace-nowrap text-sm bg-white/80 px-2 py-1 rounded">
              車長 {product.vehicleLength}CM
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
            text="Contact for Purchase"
            icon="fab fa-line"
            onClick={() => handleLineContact(product.name)}
            color="green"
            title="Contact us via Line"
          />
        </div>
      </div>
    </div>
  );
};
