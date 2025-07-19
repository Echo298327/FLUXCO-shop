import React from "react";

interface ButtonProps {
    text: string;
    icon?: string;
    onClick: (e: React.MouseEvent) => void;
    color?: 'amber' | 'green' | 'blue' | 'red' | 'light-amber';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    title?: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    onClick,
    color = 'amber',
    size = 'lg',
    className = "",
    title,
}) => {
    const getColorClasses = (color: string) => {
        const colorMap = {
            amber: 'bg-amber-600 hover:bg-amber-700 text-white',
            green: 'bg-green-600 hover:bg-green-700 text-white',
            blue: 'bg-blue-600 hover:bg-blue-700 text-white',
            red: 'bg-red-600 hover:bg-red-700 text-white',
            'light-amber': 'bg-amber-100 hover:bg-amber-200 text-amber-800',
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.amber;
    };

    const getSizeClasses = (size: string) => {
        const sizeMap = {
            sm: 'px-3 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };
        return sizeMap[size as keyof typeof sizeMap] || sizeMap.lg;
    };

    const getIconSize = (size: string) => {
        return size === 'sm' ? 'text-sm' : 'text-xl';
    };

    const getIconSpacing = (size: string) => {
        return size === 'sm' ? 'mr-2' : 'mr-3';
    };

    return (
        <button
            onClick={onClick}
            className={`!rounded-button whitespace-nowrap cursor-pointer font-semibold transition-all duration-300 ${getSizeClasses(size)} ${getColorClasses(color)} ${size === 'lg' ? 'vintage-shadow' : ''} ${className}`}
            style={{ fontFamily: "Crimson Text, serif" }}
            title={title}
        >
            {icon && <i className={`${icon} ${getIconSpacing(size)} ${getIconSize(size)}`}></i>}
            {text}
        </button>
    );
}; 