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
                className={`absolute z-50 top-full translate-y-9 end-0 -translate-x-1/2 lg:-translate-x-0 ltr:translate-x-1/2 lg:ltr:-translate-x-0 w-xs md:w-lg bg-white customShadow_12 ${isFilterOpen ? "h-96" : "h-0"} rounded-lg transition-all duration-500 overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-2 gap-4 p-2">
                    {/* المسافة */}
                    <div className="">
                        <span>المسافة (كلم)</span>
                        <DropdownInput choose={"حدد المسافة"} dropdownHeight={48} options={[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000]} />
                    </div>

                    {/* المدينة */}
                    <div className="">
                        <span>المدينة</span>
                        <DropdownInput choose={"اختر مدينة"} dropdownHeight={48} options={["القاهرة", "الجيزة", "الإسكندرية", "القليوبية", "المنوفية", "الغربية", "الشرقية", "الدقهلية", "دمياط", "بورسعيد", "الإسماعيلية", "السويس", "كفر الشيخ", "البحيرة", "مطروح", "الفيوم", "بني سويف", "المنيا", "أسيوط", "الوادي الجديد", "البحر الأحمر", "سوهاج", "قنا", "الأقصر", "أسوان", "شمال سيناء", "جنوب سيناء"]} />
                    </div>
                    {/* نوع ناقل الحركة */}
                    <div className='relative md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span>نوع ناقل الحركة</span>
                        <DropdownInput choose={"نوع ناقل الحركة"} options={["اوتوماتيك", "عادى", "CVT"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
