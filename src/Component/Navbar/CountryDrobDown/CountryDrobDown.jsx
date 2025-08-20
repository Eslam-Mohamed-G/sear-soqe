import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function CountryDrobDown() {
    const { t } = useTranslation("navbar");
    const [country, setCountry] = useState("Country");
    return (
        <div className="relative flex cursor-pointer group h-full text-black">
            <a href="#" className="px-2 py-1 text-black">{country}</a>

            <div className="absolute left-1/2 -translate-x-1/2 top-full h-0 overflow-hidden group-hover:h-64 group-hover:py-2 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-500">
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.egypt"))}
                >
                    {t("countries.egypt")}
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.saudi"))}
                >
                    {t("countries.saudi")}
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.qatar"))}
                >
                    {t("countries.qatar")}
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.oman"))}
                >
                    {t("countries.oman")}
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.kuwait"))}
                >
                    {t("countries.kuwait")}
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry(t("countries.bahrain"))}
                >
                    {t("countries.bahrain")}
                </span>
            </div>
        </div>

    )
}
