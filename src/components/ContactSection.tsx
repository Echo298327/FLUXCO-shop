// React import
import React from "react";
import { useTranslation } from 'react-i18next';

interface ContactSectionProps {
  handleWhatsAppContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  handleWhatsAppContact,
}) => {
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
          <button
            onClick={() => handleWhatsAppContact()}
            className="!rounded-button whitespace-nowrap cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 vintage-shadow"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            <i className="fab fa-whatsapp mr-3 text-xl"></i>
            {t('contact.whatsappButton')}
          </button>
          <div
            className="text-amber-200"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            <p className="text-lg">
              <i className="fas fa-phone mr-2"></i>
              {t('contact.phone')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
