// React import
import React from "react";
import { useTranslation } from 'react-i18next';

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <footer className="vintage-texture bg-amber-900/95 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <i className="fas fa-bicycle text-3xl text-amber-300"></i>
              <h4
                className="text-2xl font-bold text-amber-100"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {t('footer.companyName')}
              </h4>
            </div>
            <p
              className="text-amber-300 mb-4"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('footer.description')}
            </p>
            <div className="text-amber-300">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=中正區金門街7之4號"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-100 transition-colors cursor-pointer"
              >
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span style={{ fontFamily: "Crimson Text, serif" }}>
                  {t('footer.address')}
                </span>
              </a>
            </div>
          </div>
          <div>
            <h5
              className="text-xl font-bold text-amber-100 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('footer.businessHours')}
            </h5>
            <div
              className="text-amber-300"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <p>{t('footer.hours.schedule')}</p>
            </div>
          </div>
          <div>
            <h5
              className="text-xl font-bold text-amber-100 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('footer.followUs')}
            </h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/fluxtaipei?igsh=MXkyNnA4cncwbmtrcQ%3D%3D&utm_source=qr"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p
            className="text-amber-400"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
