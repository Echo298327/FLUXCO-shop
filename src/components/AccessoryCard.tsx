// React import
import React from "react";
// Components import
import { Button } from "./Button";
// Hooks import
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// Types import
import type { Accessory } from "../types";

interface AccessoryCardProps {
  accessory: Accessory;
  handleWhatsAppContact: (name: string) => void;
}

export const AccessoryCard: React.FC<AccessoryCardProps> = ({
  accessory,
  handleWhatsAppContact,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    const accessoryName = t(accessory.name).toLowerCase().replace(/\s+/g, '-');
    navigate(`/accessory/${encodeURIComponent(accessoryName)}`);
  };

  return (
    <div 
      className="min-w-[300px] md:min-w-[400px] group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-[200px] md:h-[250px] overflow-hidden rounded-lg vintage-shadow bg-yellow-50/95">
        <img
          src={accessory.image}
          alt={t(accessory.name)}
          className="w-full h-full object-cover sepia-filter group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4
              className="text-xl font-bold text-stone-100 mb-2 drop-shadow-md"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              {t(accessory.name)}
            </h4>
            <div className="flex justify-between items-center">
              <p
                className="text-lg text-stone-200 drop-shadow-md"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {accessory.price}
              </p>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                text={t("products.moreDetails")}
                icon="fas fa-info-circle"
                color="amber"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};