import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      fr: { translation: translations.fr },
      ar: { translation: translations.ar }
    },
    lng: 'ar',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

// Set initial direction
document.documentElement.dir = 'rtl';
document.documentElement.lang = 'ar';

export default i18n;