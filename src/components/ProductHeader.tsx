// React imports
import React from "react";

interface ProductHeaderProps {
  name: string;
  description: string;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  name,
  description,
}) => {
  return (
    <div className="text-center mb-12">
      <h1
        className="text-5xl font-bold text-amber-900 mb-4"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {name}
      </h1>
      <p
        className="text-xl text-amber-700 max-w-2xl mx-auto"
        style={{ fontFamily: "Crimson Text, serif" }}
      >
        {description}
      </p>
    </div>
  );
};
