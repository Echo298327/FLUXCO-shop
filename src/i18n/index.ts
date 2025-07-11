import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import zh from './locales/zh.json';
import en from './locales/en.json';

const resources = {
  zh: {
    translation: zh
  },
  en: {
    translation: en
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // Default language is Chinese
    fallbackLng: 'zh', // Fallback to Chinese if translation missing
    debug: false,
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    }
  });

export default i18n; 