import { useState, useRef, useEffect } from "react";

export default function PriceDropdown() {
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [fromPrice, setFromPrice] = useState("اختار سعر");
    const [toPrice, setToPrice] = useState("");
    const dropdownRef = useRef(null);

    const handleYearState = () => {
        setIsPriceOpen(!isPriceOpen);
    };

    // إغلاق عند الضغط خارج العنصر
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsPriceOpen(false);
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
                السعر
            </h1>

            <div
                className={`absolute z-50 top-full -end-4 sm:end-1/2 sm:-translate-x-1/2 ltr:translate-x-1/2 translate-y-5 bg-white customShadow_12 ${isPriceOpen ? "h-12" : "h-0"} rounded-lg transition-all duration-500 overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-row gap-2 p-2">
                    {/* From Price */}
                    <select
                        value={fromPrice}
                        onChange={(e) => setFromPrice(e.target.value)}
                        className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 cursor-pointer"
                    >
                        <option value="">من</option>
                        {[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000].map(
                            (Price) => (
                                <option key={Price} value={Price}>
                                    {Price}
                                </option>
                            )
                        )}
                    </select>

                    <span className="flex items-center justify-center text-center w-7">الي</span>

                    {/* To Price */}
                    <select
                        value={toPrice}
                        onChange={(e) => setToPrice(e.target.value)}
                        className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 cursor-pointer"
                    >
                        <option value="">إلى</option>
                        {[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000].map(
                            (Price) => (
                                <option key={Price} value={Price}>
                                    {Price}
                                </option>
                            )
                        )}
                    </select>
                </div>

            </div>

            {/* عرض القيمة المختارة */}
            {(fromPrice || toPrice) && (
                <div className="relative">
                    <p className="text-sm text-gray-700 border border-gray-400 rounded-lg px-2 py-1.5 cursor-pointer">
                        {fromPrice && `${fromPrice}`} {toPrice && `- ${toPrice}`}
                    </p>
                    <span className={`absolute end-2 top-1/2 -translate-y-1/2 ${isPriceOpen ? "rotate-90 transition-all ease-in-out duration-300" : "rotate-270 transition-all ease-in-out duration-300"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                </div>
            )}
        </div>
    );
}
