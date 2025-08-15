// React imports
import React, { useState } from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';

interface ColorSelectorProps {
  colors: string[];
  onColorChange?: (color: string) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  onColorChange,
}) => {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  const getColorHex = (colorName: string): string => {
    switch (colorName.toLowerCase()) {
      case 'black': return '#000000';
      case 'white': return '#FFFFFF';
      case 'gray':
      case 'grey': return '#666666';
      case 'orange': return '#CD853F';
      case 'brown': return '#8B6F47';
      case 'green': return '#8FBC8F';
      default: return '#CCCCCC';
    }
  };

  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 px-4">
      <h4 
        className="text-lg font-semibold text-amber-900 mb-4 text-center"
        style={{ fontFamily: "Crimson Text, serif" }}
      >
        {t('productPage.selectColor', 'Select Color')}
      </h4>
      <div className="flex flex-wrap justify-center gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorSelect(color)}
                         className={`
               relative w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer
               ${selectedColor === color 
                 ? 'border-3 border-amber-600 scale-110' 
                 : 'border-2 border-amber-200 hover:border-amber-400'
               }
             `}
            style={{
              backgroundColor: getColorHex(color)
            }}
            title={color}
            aria-label={`Select ${color} color`}
          >
            {selectedColor === color && (
              <div className="absolute inset-0 flex items-center justify-center">
                <i className={`fas fa-check text-sm ${
                  color.toLowerCase() === 'white' || color.toLowerCase() === 'orange' 
                    ? 'text-amber-800' 
                    : 'text-white'
                }`}></i>
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="text-center mt-3">
        <span 
          className="text-sm text-amber-700 font-medium"
          style={{ fontFamily: "Crimson Text, serif" }}
        >
          {selectedColor}
        </span>
      </div>
    </div>
  );
};
