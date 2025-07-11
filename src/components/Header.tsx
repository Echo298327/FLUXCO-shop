// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.png";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 vintage-texture bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="FLUX & CO Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 
                className="text-3xl font-bold text-amber-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {t('header.companyName')}
              </h1>
              <p 
                className="text-sm text-amber-700"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.tagline')}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.home')}
              </a>
              <a
                href="#products"
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.products')}
              </a>
              <a
                href="#services"
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.services')}
              </a>
              <a
                href="#contact"
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.contact')}
              </a>
            </nav>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 bg-amber-100 hover:bg-amber-200 rounded-md transition-colors text-amber-800 cursor-pointer"
              style={{ fontFamily: "Crimson Text, serif" }}
              title={t('common.language')}
            >
              <i className="fas fa-globe text-sm"></i>
              <span className="text-sm font-semibold">
                {i18n.language === 'zh' ? 'EN' : '中文'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
