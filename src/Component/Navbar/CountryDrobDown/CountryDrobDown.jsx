import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
        <div className="relative flex cursor-pointer group text-black h-[72px]">
            <Link to="#" className="h-full content-center">
                {countryKey === "default" ? "Country" : t(`countries.${countryKey}`)}
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-0.5 flex flex-col justify-center h-0 w-32 overflow-hidden group-hover:h-[265px] bg-white font-normal customShadow rounded-2xl transition-all ease-in-out duration-500">
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
