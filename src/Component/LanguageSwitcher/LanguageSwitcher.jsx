import React from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../LanguageProvider/LanguageProvider";

export default function LanguageSwitcher() {
    const { t } = useTranslation("navbar");
    const { lang, setLang } = useLocale();

    const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

    return (
        <button onClick={toggleLang} className="">
            {lang === "ar" ? t("LanguageSwitcher.english") : t("LanguageSwitcher.arabic")}
        </button>
    );
}

