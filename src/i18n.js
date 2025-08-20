import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNavbar from "./locales/en/navbarTranslation.json";
import arNavbar from "./locales/ar/navbarTranslation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { navbar: enNavbar },
            ar: { navbar: arNavbar },
        },
        lng: "ar",          // اللغة الافتراضية
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
