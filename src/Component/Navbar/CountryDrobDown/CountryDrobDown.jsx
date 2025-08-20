import React, { useState } from 'react';

export default function CountryDrobDown() {
    const [country, setCountry] = useState("Country");
    return (
        <div className="relative flex cursor-pointer group h-full border-1">
            <a href="#" className="px-2 py-1">{country}</a>

            <div className="absolute left-1/2 -translate-x-1/2 top-full h-0 overflow-hidden group-hover:h-64 group-hover:py-2 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-500">
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("Egypt")}
                >
                    مصر
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("USA")}
                >
                    السعودية
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("USA")}
                >
                    قطر
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("USA")}
                >
                    عمان
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("USA")}
                >
                    الكويت
                </span>
                <span
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300"
                    onClick={() => setCountry("USA")}
                >
                    البحرين
                </span>
            </div>
        </div>

    )
}
