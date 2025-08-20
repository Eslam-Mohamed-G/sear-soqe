import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNavbar from "./locales/en/navbarTranslation.json";
import arNavbar from "./locales/ar/navbarTranslation.json";

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const browser = typeof navigator !== "undefined" ? navigator.language : "en";
const fallback = saved || (browser?.startsWith("ar") ? "ar" : "en");

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { navbar: enNavbar },
            ar: { navbar: arNavbar },
        },
        lng: fallback, // أول قيمة يعتمد عليها
        fallbackLng: "en",
        ns: ["navbar"],
        defaultNS: "navbar",
        interpolation: { escapeValue: false },
    });

export default i18n;
