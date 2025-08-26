import React, { useEffect, useRef, useState } from 'react'
import DropdownInput from '../InputDropDown/InputDropDown';

export default function OtherSearchOption() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [distance, setDistance] = useState("");
    const dropdownRef = useRef(null);

    const handleFilterState = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    // إغلاق عند الضغط خارج العنصر
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={dropdownRef} className='flex items-center justify-center relative w-full cursor-pointer' onClick={handleFilterState}>
            <h1 className="font-bold text-sm flex flex-row items-center justify-center gap-4">
                <span>المزيد</span>
                <span className={isFilterOpen ? "rotate-90 transition-all ease-in-out duration-300" : "rotate-270 transition-all ease-in-out duration-300"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </span>
            </h1>

            <div
                className={`absolute top-full translate-y-5 end-0 -translate-x-4 w-2xl bg-white customShadow_12 ${isFilterOpen ? "h-96" : "h-0"} rounded-lg transition-all duration-500 overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-2 p-2">
                    {/* المسافة */}
                    <div className="">
                        <span>المسافة (كلم)</span>
                        <select
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 cursor-pointer"
                        >
                            <option value="">0</option>
                            {[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000].map(
                                (distance) => (
                                    <option key={distance} value={distance}>
                                        {distance}
                                    </option>
                                )
                            )}
                        </select>
                        {distance && (<p>{distance && `${distance}`}</p>)}
                    </div>
                    <div className="border">
                        <span>المدينة</span>
                        <DropdownInput choose={"اختر مدينة"} options={["القاهرة","الجيزة","الإسكندرية","القليوبية","المنوفية","الغربية","الشرقية","الدقهلية","دمياط","بورسعيد","الإسماعيلية","السويس","كفر الشيخ","البحيرة","مطروح","الفيوم","بني سويف","المنيا","أسيوط","الوادي الجديد","البحر الأحمر","سوهاج","قنا","الأقصر","أسوان","شمال سيناء","جنوب سيناء"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
