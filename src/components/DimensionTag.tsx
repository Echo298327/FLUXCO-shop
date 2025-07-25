import React from 'react';

interface DimensionTagProps {
  label: string;
  value: number;
  unit?: string;
  position: 'left' | 'right' | 'bottom';
  isVisible: boolean;
}

export const DimensionTag: React.FC<DimensionTagProps> = ({
  label,
  value,
  unit = 'CM',
  position,
  isVisible
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4';
      case 'right':
        return 'absolute right-0 top-1/2 -translate-y-1/2 translate-x-4';
      case 'bottom':
        return 'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4';
      default:
        return '';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`${getPositionClasses()} transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="text-amber-800 font-semibold whitespace-nowrap text-xs sm:text-sm bg-white/90 px-2 py-1 rounded shadow-md border border-amber-200">
        <span className="block text-[10px] sm:text-xs text-amber-600 uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm sm:text-base font-bold">
          {value}{unit}
        </span>
      </div>
    </div>
  );
}; 