import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHomePage from "./locales/en/HomePageTranslation.json";
import enNavbar from "./locales/en/navbarTranslation.json";
import arNavbar from "./locales/ar/navbarTranslation.json";
import arHomePage from "./locales/ar/HomePageTranslation.json";
import arBuyCar from "./locales/ar/BuyCarPageTranslation.json";
import enBuyCar from "./locales/en/BuyCarPageTranslation.json";
import arRegister from "./locales/ar/authentication.json";
import enRegister from "./locales/en/authentication.json";
import arSealCar from "./locales/ar/sealCarPage.json";
import enSealCar from "./locales/en/sealCarPage.json";

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const browser = typeof navigator !== "undefined" ? navigator.language : "en";
const fallback = saved || (browser?.startsWith("ar") ? "ar" : "en");

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { navbar: enNavbar, homePage: enHomePage, buyCarPage: enBuyCar, authentication: enRegister, sealCarPage: enSealCar },
            ar: { navbar: arNavbar, homePage: arHomePage, buyCarPage: arBuyCar, authentication: arRegister, sealCarPage: arSealCar },
        },
        lng: fallback, // أول قيمة يعتمد عليها
        fallbackLng: "en",
        ns: ["navbar", "homePage", "buyCarPage", "authentication", "sealCarPage"],
        defaultNS: "navbar",
        interpolation: { escapeValue: false },
        returnObjects: true,
    });

export default i18n;
