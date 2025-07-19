// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.webp";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 vintage-texture bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="FLUX & CO Logo" 
              className="h-12 w-auto cursor-pointer"
              onClick={handleLogoClick}
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
            <Button
              text={i18n.language === 'zh' ? 'EN' : '中文'}
              icon="fas fa-globe"
              onClick={toggleLanguage}
              color="light-amber"
              size="sm"
              title={t('common.language')}
              className="flex items-center space-x-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
