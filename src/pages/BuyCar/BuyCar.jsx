import React, { useState } from 'react'
import bgImg from '../../assets/image.png';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';
import CarBrands from '../../Component/CarBrands/CarBrands';
import CarShape from '../../Component/CarShape/CarShape';

export default function BuyCar() {
    const [activeTab, setActiveTab] = useState("shape");
    return (
        <div className='pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            {/* top section */}
            <div className="w-full bg-cover bg-center rounded-xl overflow-hidden px-4 py-4" style={{ backgroundImage: `url(${bgImg})` }}>
                <p className='text-white mb-2 md:mb-4 text-sm md:text-lg'>ابحث عن السيارات المستعملة عبر فئات منتقاه بعناية</p>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center h-[400px]">
                    <div className="md:w-1/4 rounded-xl border h-full border-gray-200 bg-white px-2 md:px-4 py-3">
                        <p className='mb-2 md:mb-4 font-bold'>سيارات للبيع</p>
                        <form action="" className='flex flex-col gap-2 md:gap-4'>
                            {/* car model */}
                            <div className="flex flex-row md:flex-col gap-2 md:gap-4">
                                <DropdownInput choose={"النوع"} />
                                <DropdownInput choose={"الماركة"} />
                                <DropdownInput choose={"الفئة"} />
                                <DropdownInput choose={"السنة"} />
                            </div>
                            <button type="submit" className="text-white bg-backgroundLinear cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">بحث</button>
                        </form>
                    </div>
                    <div className="w-full md:w-3/4 h-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                        {/* header */}
                        <div className="">
                            <ul className='flex flex-row flex-wrap justify-between border-b border-gray-200'>
                                <li className={`cursor-pointer px-3 py-2 ${activeTab === "shape" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                    onClick={() => setActiveTab("shape")}
                                >
                                    شكل السيارة
                                </li>
                                <li className={`cursor-pointer px-3 py-2 ${activeTab === "brand" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                    onClick={() => setActiveTab("brand")}
                                >
                                    الماركة
                                </li>
                                <li className={`cursor-pointer px-3 py-2 ${activeTab === "fuel" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                    onClick={() => setActiveTab("fuel")}>الوقود المستخدم</li>
                                <li className={`cursor-pointer px-3 py-2 ${activeTab === "year" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                    onClick={() => setActiveTab("year")}>السنة</li>
                                <li className={`cursor-pointer px-3 py-2 ${activeTab === "city" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                    onClick={() => setActiveTab("city")}>المدينة</li>
                            </ul>
                        </div>

                        {/* content */}
                        <div className="">
                            {/* محتوي تاب بتاعت شكل السيارة */}
                            {activeTab === "shape" && <CarShape />}

                            {/* محتوي التاب بتاعت الماركة */}
                            {activeTab === "brand" && <CarBrands />}

                            {/* محتوي التاب بتاعت نوع الوقود */}
                            {activeTab === "fuel" &&
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>بنزين</span>
                                            <img src="./fuel/gasoline.png" alt="gasoline car" />
                                        </div>
                                    </div>
                                    {/* div2 */}
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>هجينة</span>
                                            <img src="./fuel/hybrid.png" alt="Hybrid car" />
                                        </div>
                                    </div>
                                    {/* div3 */}
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>ديزل</span>
                                            <img src="./fuel/diesel.png" alt="diesel car" />
                                        </div>
                                    </div>
                                    {/* div4 */}
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>كهربائية</span>
                                            <img src="./fuel/electic.png" alt="electic car" />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* محتوي التاب بتاعت الماركة */}
                            {activeTab === "year" &&
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2025</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2024</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2023</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2022</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2021</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>2020</span>
                                            <img src="./fuel/calendar.png" alt="calendar year" />
                                        </div>
                                    </div>
                                </div>
                            }
                            {activeTab === "city" &&
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>القاهرة</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>المنصورة</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>الجيزة</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>الاسكندرية</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>طنطا</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>الزقازيق</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>الشرقية</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>دمياط</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                                        <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                                            <span className='text-[11px] md:text-sm font-bold w-full'>المنوفية</span>
                                            <img src="./fuel/skyscraper.png" alt="skyscraper city" />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
