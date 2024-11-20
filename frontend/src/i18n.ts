import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend) // Using the HttpBackend to load translations
  .use(LanguageDetector) // Detects the user's language preference
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    debug: true, // Helps to debug and logs errors in the console
    lng: 'he', // Sets the default language to Hebrew
    fallbackLng: 'he', // Uses Hebrew if the current language translation is unavailable
    supportedLngs: ['en', 'am', 'he'], // Supported languages: English, Amharic, Hebrew
    returnObjects: true, // Enables returning objects in translations
    interpolation: {
      escapeValue: false, // React already handles escaping to prevent XSS
    },
    backend: {
      // Configuring the path to load the translation files
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
