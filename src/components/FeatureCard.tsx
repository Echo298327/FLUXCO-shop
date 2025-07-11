import React from "react";
import { useTranslation } from 'react-i18next';
import type { Feature } from "../types";

interface FeatureCardProps {
    feature: Feature;
    index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    const { t } = useTranslation();

    return (
        <div className="text-center vintage-texture bg-white/80 p-8 rounded-lg vintage-shadow hover:bg-white/90 transition-all duration-300 distressed-border">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 text-white rounded-full mb-6 vintage-shadow">
                <i className={`${feature.icon} text-3xl`}></i>
            </div>
            <h4
                className="text-2xl font-bold text-amber-900 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
            >
                {t(`features.items.${index + 1}.title`)}
            </h4>
            <p
                className="text-amber-700 leading-relaxed"
                style={{ fontFamily: "Crimson Text, serif" }}
            >
                {t(`features.items.${index + 1}.description`)}
            </p>
        </div>
    );
}; 