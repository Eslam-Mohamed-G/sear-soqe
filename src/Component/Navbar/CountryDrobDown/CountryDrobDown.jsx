import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function CountryDropDown() {
    const { t } = useTranslation("navbar");

    const [countryKey, setCountryKey] = useState(() => {
        return localStorage.getItem("countryKey") || "default";
    });

    const countries = [
        { key: "uae", label: t("countries.uae") },
        { key: "egypt", label: t("countries.egypt") },
        { key: "saudi", label: t("countries.saudi") },
        { key: "qatar", label: t("countries.qatar") },
        { key: "oman", label: t("countries.oman") },
        { key: "kuwait", label: t("countries.kuwait") },
        { key: "bahrain", label: t("countries.bahrain") },
    ];

    useEffect(() => {
        if (countryKey && countryKey !== "default") {
            localStorage.setItem("countryKey", countryKey);
        }
    }, [countryKey]);

    return (
        <div className="relative flex cursor-pointer group h-full text-black">
            <a href="#" className="px-2 py-1 text-black">
                {countryKey === "default" ? "Country" : t(`countries.${countryKey}`)}
            </a>

            <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col justify-center h-0 overflow-hidden group-hover:h-[265px] bg-white font-normal shadow-lg rounded-2xl transition-all ease-in-out duration-500">
                {countries
                    .filter((c) => c.key !== countryKey)
                    .map((c) => (
                        <span
                            key={c.key}
                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                            onClick={() => setCountryKey(c.key)}
                        >
                            {c.label}
                        </span>
                    ))}
            </div>
        </div>
    );
}
