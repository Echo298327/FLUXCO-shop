// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/logo.webp";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const handleLogoClick = () => {
    navigate('');
  };

  const handleNavClick = (sectionId: string) => {
    // If we're already on the home page
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 vintage-texture bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img src={logo} alt="FLUX&CO Logo" className="h-12 w-auto mr-4" />
            <div>
              <h1
                className="text-2xl font-bold text-amber-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                FLUX&CO
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
              <button
                onClick={() => handleNavClick('home')}
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.home')}
              </button>
              <button
                onClick={() => handleNavClick('products')}
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.products')}
              </button>
              <button
                onClick={() => handleNavClick('accessories')}
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('accessories.title')}
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.services')}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t('header.nav.contact')}
              </button>
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
