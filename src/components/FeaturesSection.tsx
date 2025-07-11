// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import type { Feature } from "../types";
import { FeatureCard } from "./FeatureCard";

interface FeaturesSectionProps {
    features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const { t } = useTranslation();
  return (
    <section
      id="services"
      className="py-20 vintage-texture bg-gradient-to-b from-amber-100/90 to-amber-50/90"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3
            className="text-5xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t('features.title')}
          </h3>
          <p
            className="text-xl text-amber-700 max-w-3xl mx-auto"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};