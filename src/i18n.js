import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHomePage from "./locales/en/HomePageTranslation.json";
import enNavbar from "./locales/en/navbarTranslation.json";
import arNavbar from "./locales/ar/navbarTranslation.json";
import arHomePage from "./locales/ar/HomePageTranslation.json";

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const browser = typeof navigator !== "undefined" ? navigator.language : "en";
const fallback = saved || (browser?.startsWith("ar") ? "ar" : "en");

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { navbar: enNavbar, homePage: enHomePage },
            ar: { navbar: arNavbar, homePage: arHomePage },
        },
        lng: fallback, // أول قيمة يعتمد عليها
        fallbackLng: "en",
        ns: ["navbar", "homePage"],
        defaultNS: "navbar",
        interpolation: { escapeValue: false },
    });

export default i18n;
