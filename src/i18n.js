import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './public/locales/en/translation.json';
import translationFR from './public/locales/fr/translation.json';
// the translations


//https://react.i18next.com/legacy-v9/step-by-step-guide

//https://dev.to/ksushiva/how-to-translate-your-react-js-app-with-i18next-12mn  --dangerous

const resources = {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  };
  
  const fallbackLng = ['en']; 
  const availableLanguages = ['en', 'fr'];

  i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next  
  .init({
    resources,
    lng: "en",
    fallbackLng, // use en if detected lng is not available
    debug: true,
    whitelist: availableLanguages,

   // keySeparator: false, // we use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;