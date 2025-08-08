import React from "react";

interface LableButtonProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
  text: string;
}

export const LableButton: React.FC<LableButtonProps> = ({
  category,
  isSelected,
  onClick,
  text,
}) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold cursor-pointer ${
        isSelected
          ? "bg-amber-800 text-amber-100 shadow-lg"
          : "bg-amber-100 text-amber-800 hover:bg-amber-200"
      }`}
      style={{ fontFamily: "Crimson Text, serif" }}
    >
      {text}
    </button>
  );
};
