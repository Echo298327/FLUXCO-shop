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
    fallbackLng: 'zh', // Fallback to Chinese if no saved preference
    debug: false,
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng: string) => {
        // Ensure we only use supported languages
        return ['zh', 'en'].includes(lng) ? lng : 'zh';
      }
    },
    
    // Supported languages
    supportedLngs: ['zh', 'en'],
    
    // Don't load a language if it's not in the supportedLngs
    load: 'languageOnly',
    
    // Initialize with saved language from localStorage or fallback
    initImmediate: false
  });

export default i18n; 