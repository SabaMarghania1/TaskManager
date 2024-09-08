import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          myDay: "My Day",
          important: "Important",
          dashboard: "Dashboard",
        },
      },
      ka: {
        translation: {
          myDay: "ჩემი დავალებები",
          important: "რჩეული",
          dashboard: "ანალიზი",
        },
      },
    },
  });

export default i18n;
