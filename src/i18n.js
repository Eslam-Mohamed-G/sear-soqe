import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHomePage from "./locales/en/HomePageTranslation.json";
import enNavbar from "./locales/en/navbarTranslation.json";
import arNavbar from "./locales/ar/navbarTranslation.json";
import arHomePage from "./locales/ar/HomePageTranslation.json";
import arBuyCar from "./locales/ar/BuyCarPageTranslation.json";
import enBuyCar from "./locales/en/BuyCarPageTranslation.json";
import arRegister from "./locales/ar/registerPage.json";
import enRegister from "./locales/en/registerPage.json";

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const browser = typeof navigator !== "undefined" ? navigator.language : "en";
const fallback = saved || (browser?.startsWith("ar") ? "ar" : "en");

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { navbar: enNavbar, homePage: enHomePage, buyCarPage: enBuyCar, registerPage: enRegister},
            ar: { navbar: arNavbar, homePage: arHomePage, buyCarPage: arBuyCar, registerPage: arRegister },
        },
        lng: fallback, // أول قيمة يعتمد عليها
        fallbackLng: "en",
        ns: ["navbar", "homePage", "buyCarPage", "registerPage"],
        defaultNS: "navbar",
        interpolation: { escapeValue: false },
    });

export default i18n;
