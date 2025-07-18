import React from "react";

interface ProductButtonProps {
    text: string;
    icon: string;
    onClick: (e: React.MouseEvent) => void;
    className?: string;
}

export const ProductButton: React.FC<ProductButtonProps> = ({
    text,
    icon,
    onClick,
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300 mt-auto ${className}`}
            style={{ fontFamily: "Crimson Text, serif" }}
        >
            <i className={`${icon} mr-2`}></i>
            {text}
        </button>
    );
}; 