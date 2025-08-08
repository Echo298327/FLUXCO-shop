// React import
import React from "react";
// Components import
import { Button } from "./Button";
import { AccessoryCard } from "./AccessoryCard";
// Hooks import
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// Utils import
import { accessories } from "../utils/productData";


interface AcessoriesSectionProps {
  setShow404: (show: boolean) => void;
  handleWhatsAppContact: (name: string) => void;
}

export const AcessoriesSection: React.FC<AcessoriesSectionProps> = ({
  setShow404,
  handleWhatsAppContact,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="accessories" className="py-20 vintage-texture bg-gradient-to-b from-yellow-50/95 to-amber-100/90">
      <div className="h-[2px] bg-amber-800/20 max-w-7xl mx-auto mb-20" /> {/* Separator */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3
              className="text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t("accessories.title")}
            </h3>
            <p
              className="text-xl text-amber-700 max-w-2xl"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t("accessories.subtitle")}
            </p>
          </div>
          <div className="hidden md:block">
            <Button
              onClick={() => navigate("/accessories")}
              text={t("accessories.seeAll")}
              icon="fas fa-arrow-right"
              color="amber"
              size="md"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 space-x-6 hide-scrollbar">
            {accessories.map((accessory, index) => (
              <AccessoryCard
                key={index}
                accessory={accessory}
                handleWhatsAppContact={handleWhatsAppContact}
              />
            ))}
          </div>
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
              display: none;
              }
              .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
              }
           `}
          </style>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button
            onClick={() => navigate("/accessories")}
            text={t("accessories.seeAll")}
            icon="fas fa-arrow-right"
            color="amber"
            size="md"
          />
        </div>
      </div>
    </section>
  );
};
