import React from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../providers/LanguageProvider";

export default function LanguageSwitcher() {
    const { t } = useTranslation();
    const { lang, setLang } = useLocale();

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm opacity-70">{t("language")}:</span>
            <button
                className={`px-3 py-1 rounded ${lang === "ar" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
                onClick={() => setLang("ar")}
            >
                {t("arabic")}
            </button>
            <button
                className={`px-3 py-1 rounded ${lang === "en" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
                onClick={() => setLang("en")}
            >
                {t("english")}
            </button>
        </div>
    );
}
