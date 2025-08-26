import { useState, useRef, useEffect } from "react";

export default function YearDropdown() {
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [fromYear, setFromYear] = useState("اختار سنة");
    const [toYear, setToYear] = useState("");
    const dropdownRef = useRef(null);

    const handleYearState = () => {
        setIsYearOpen(!isYearOpen);
    };

    // إغلاق عند الضغط خارج العنصر
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsYearOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative cursor-pointer text-center" onClick={handleYearState}>
            <h1 className="font-bold text-sm">
                السنة
            </h1>

            <div
                className={`absolute end-1/2 -translate-x-1/2 top-full translate-y-5 bg-white customShadow_12 ${isYearOpen ? "h-12" : "h-0"} flex justify-center items-center rounded-lg transition-all duration-500 overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-row gap-2 p-2">
                {/* From Year */}
                <select
                    value={fromYear}
                    onChange={(e) => setFromYear(e.target.value)}
                    className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 cursor-pointer"
                >
                    <option value="">من</option>
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015].map(
                        (year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        )
                    )}
                </select>

                <span className="flex items-center justify-center text-center w-7">إلى</span>

                {/* To Year */}
                <select
                    value={toYear}
                    onChange={(e) => setToYear(e.target.value)}
                    className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 cursor-pointer"
                >
                    <option value="">إلى</option>
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015].map(
                        (year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        )
                    )}
                </select>
                </div>

            </div>

            {/* عرض القيمة المختارة */}
            {(fromYear || toYear) && (
                <p className="text-sm mt-2 text-gray-700">
                    {fromYear && `${fromYear}`} {toYear && `- ${toYear}`}
                </p>
            )}
        </div>
    );
}
