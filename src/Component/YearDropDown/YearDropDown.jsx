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
        <div ref={dropdownRef} className="relative cursor-pointer w-full sm:w-[217px] lg:w-full mx-auto" onClick={handleYearState}>
            <h1 className="font-bold text-sm text-center">
                السنة
            </h1>

            <div
                className={`absolute z-50 end-1/2 -translate-x-1/2 ltr:translate-x-1/2 top-full translate-y-5 bg-white customShadow_12 ${isYearOpen ? "h-12" : "h-0"} flex justify-center items-center rounded-lg transition-all duration-500 overflow-hidden`}
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
                <div className="relative">
                    <p className="text-sm text-gray-700 border border-gray-400 rounded-lg px-2 py-1.5 cursor-pointer">
                        {fromYear && `${fromYear}`} {toYear && `- ${toYear}`}
                    </p>
                    <span className={`absolute end-2 top-1/2 -translate-y-1/2 ${isYearOpen ? "rotate-90 transition-all ease-in-out duration-300" : "rotate-270 transition-all ease-in-out duration-300"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                </div>
            )}
        </div>
    );
}
