// React import
import React, { useEffect } from "react";
// Components import
import { AccessoryCard } from "../components/AccessoryCard";
// Hooks import
import { useTranslation } from "react-i18next";
// Utils import
import { accessories } from "../utils/homeData";
// SEO Components
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";

const AccessoriesPage: React.FC = () => {
  const { t } = useTranslation();

  const handleWhatsAppContact = (name: string) => {
    const message = t("contact.lineMessages.withProduct", { productName: name });
    window.open(`https://line.me/R/oaMessage/@flux.tw/?${encodeURIComponent(message)}`);
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((accessory, index) => (
              <AccessoryCard
                key={index}
                accessory={accessory}
                handleWhatsAppContact={handleWhatsAppContact}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessoriesPage;