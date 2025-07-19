// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "./Button";

interface ContactSectionProps {
}

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="py-20 vintage-texture bg-gradient-to-b from-amber-800/90 to-amber-900/90"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3
          className="text-5xl font-bold text-amber-50 mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {t('contact.title')}
        </h3>
        <p
          className="text-xl text-amber-200 mb-8 leading-relaxed"
          style={{ fontFamily: "Crimson Text, serif" }}
        >
          {t('contact.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            text={t('contact.lineButton')}
            icon="fab fa-line"
            onClick={() => {
              const message = t('contact.lineMessages.general');
              const lineUrl = `https://line.me/R/ti/p/584464896?text=${encodeURIComponent(message)}`;
              window.open(lineUrl, "_blank");
            }}
            color="green"
            title={t('contact.lineButton')}
          />
          <div
            className="text-amber-200"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            <a 
              href="tel:0983362103"
              className="text-lg hover:text-amber-100 transition-colors cursor-pointer block"
            >
              <i className="fas fa-phone mr-2"></i>
              {t('contact.phone')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
