// React import
import React from "react";

interface SpeedProps {
  className?: string;
}

export const Speed: React.FC<SpeedProps> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="400 200 600 500"
      className={className}
    >
      <defs>
        <clipPath id="515503ea36">
          <path d="M 419.015625 188.804688 L 1021.265625 188.804688 L 1021.265625 468.554688 L 419.015625 468.554688 Z M 419.015625 188.804688 " />
        </clipPath>
      </defs>
      <g id="37efaadf63">
        <g clip-rule="nonzero" clip-path="url(#515503ea36)">
          <path
            style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
            d="M 674.773438 328.679688 L 532.867188 468.453125 L 419.015625 468.453125 L 560.917969 328.679688 L 419.015625 188.90625 L 532.867188 188.90625 Z M 706.121094 188.90625 L 592.273438 188.90625 L 734.171875 328.679688 L 592.273438 468.453125 L 706.121094 468.453125 L 848.023438 328.679688 Z M 879.378906 188.90625 L 765.519531 188.90625 L 907.421875 328.679688 L 765.519531 468.453125 L 879.371094 468.453125 L 1021.273438 328.679688 Z M 879.378906 188.90625 "
          />
        </g>
      </g>
    </svg>
  );
};
