// React import
import React from "react";
import type { Feature } from "../types";


interface FeaturesSectionProps {
    features: Feature[];
}


export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
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
            Our Expertise
          </h3>
          <p
            className="text-xl text-amber-700 max-w-3xl mx-auto"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Decades of experience in vintage bicycle restoration and authentic
            parts sourcing ensure every piece meets the highest standards of
            quality and authenticity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center vintage-texture bg-white/80 p-8 rounded-lg vintage-shadow hover:bg-white/90 transition-all duration-300 distressed-border"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 text-white rounded-full mb-6 vintage-shadow">
                <i className={`${feature.icon} text-3xl`}></i>
              </div>
              <h4
                className="text-2xl font-bold text-amber-900 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {feature.title}
              </h4>
              <p
                className="text-amber-700 leading-relaxed"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};