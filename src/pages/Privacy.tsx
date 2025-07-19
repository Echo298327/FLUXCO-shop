// React imports
import React from "react";
// Components imports
import { Button } from "../components/Button";
// Hooks import
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Privacy: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-25">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <i className="fas fa-shield-alt text-6xl text-amber-800"></i>
          </div>
          <h1
            className="text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t('privacy.title')}
          </h1>
          <p
            className="text-amber-700 text-lg"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            {t('privacy.lastUpdated', { date: 'July 2025' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/90 rounded-lg vintage-shadow p-8 mb-8">
          {/* Information We Collect */}
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('privacy.introduction.title')}
            </h2>
            <p
              className="text-amber-800 text-lg leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('privacy.introduction.content')}
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('privacy.usage.title')}
            </h2>
            <p
              className="text-amber-800 text-lg leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('privacy.usage.content')}
            </p>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('privacy.sharing.title')}
            </h2>
            <p
              className="text-amber-800 text-lg leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('privacy.sharing.content')}
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('privacy.retention.title')}
            </h2>
            <p
              className="text-amber-800 text-lg leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('privacy.retention.content')}
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('privacy.contact.title')}
            </h2>
            <p
              className="text-amber-800 text-lg leading-relaxed mb-4"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('privacy.contact.content')}
            </p>
            <div
              className="text-amber-800 text-lg"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <p className="mb-2">
                <i className="fas fa-phone mr-2"></i>
                {t('privacy.contact.phone')}
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                {t('privacy.contact.address')}
              </p>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            className="!rounded-button whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 vintage-shadow"
            text={t('privacy.backButton')}
            color="amber"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy; 