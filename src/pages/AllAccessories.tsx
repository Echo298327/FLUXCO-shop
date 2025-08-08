// React import
import React, { useEffect, useState } from "react";
// Components import
import { AccessoryCard } from "../components/AccessoryCard";
import { LableButton } from "../components/LableButton";
// Hooks import
import { useTranslation } from "react-i18next";
// Utils import
import { accessories } from "../utils/accessoriesData";
// SEO Components
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";

const AccessoriesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "performance",
    "safety", 
    "storage",
    "convenience",
    "electrical",
    "protection",
    "comfort"
  ];

  const filteredAccessories = selectedCategory === "all" 
    ? accessories 
    : accessories.filter(accessory => accessory.category === `accessories.categories.${selectedCategory}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title={t("accessories.title")}
        description={t("accessories.subtitle")}
      />
      <StructuredData type="organization" />
      <section className="pt-32 pb-20 vintage-texture bg-gradient-to-b from-yellow-50/95 to-amber-100/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1
              className="text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t("accessories.title")}
            </h1>
            <p
              className="text-xl text-amber-700 max-w-2xl"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t("accessories.subtitle")}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <LableButton
                  key={category}
                  category={category}
                  isSelected={selectedCategory === category}
                  onClick={setSelectedCategory}
                  text={t(`accessories.categories.${category}`)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccessories.map((accessory, index) => (
              <AccessoryCard
                key={index}
                accessory={accessory}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessoriesPage;