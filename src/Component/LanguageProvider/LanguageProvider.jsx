import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n from "../../i18n";

const LangCtx = createContext(null);
export const useLocale = () => useContext(LangCtx);

const getDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

export default function LanguageProvider({ children }) {
    const [lang, setLang] = useState(localStorage.getItem("lang") || i18n.language || "en");

    useEffect(() => {
        const dir = getDir(lang);
        const html = document.documentElement;
        html.setAttribute("lang", lang);
        html.setAttribute("dir", dir);
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, dir: getDir(lang) }), [lang]);
    return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}
