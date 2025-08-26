import React, { useState } from 'react'
import bgImg from '../../assets/image.png';
import avatar from '../../assets/avatar.png'
import DropdownInput from '../../Component/InputDropDown/InputDropDown';
import CarBrands from '../../Component/CarBrands/CarBrands';
import CarShape from '../../Component/CarShape/CarShape';
import { Link } from 'react-router-dom';

export default function BuyCar() {
    const [activeTab, setActiveTab] = useState("shape");
    return (
        <div className='flex flex-col gap-10 pt-20 '>
            {/* top section */}
            <div className="px-4 sm:px-8 3xl:px-10 2xl:px-24">
                <div className="bg-cover bg-center rounded-xl overflow-hidden px-2 md:px-4 py-4" style={{ backgroundImage: `url(${bgImg})` }}>
                    <p className='text-white mb-2 md:mb-4 text-sm md:text-lg'>ابحث عن السيارات المستعملة عبر فئات منتقاه بعناية</p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:h-[400px]">
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
                                <button type="submit" className="text-white bg-backgroundLinear cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-720">بحث</button>
                            </form>
                        </div>
                        <div className="w-full md:w-3/4 h-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                            {/* header */}
                            <div className="text-[10px] sm:text-sm font-bold">
                                <ul className='flex flex-row flex-wrap justify-between border-b border-gray-200'>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "shape" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("shape")}
                                    >
                                        شكل السيارة
                                    </li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "brand" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("brand")}
                                    >
                                        الماركة
                                    </li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "fuel" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("fuel")}>الوقود المستخدم</li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "year" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("year")}>السنة</li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "city" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
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

            {/* مكان للاعلان عن السيارت */}
            <div className="bg-[#F4F4F4] w-full py-8 relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
                {/* بيع */}
                <div className="flex flex-col justify-center items-center gap-4 order-2 md:order-1">
                    <h1 className="font-extrabold text-2xl">بيع</h1>
                    <div className="w-44">
                        <img src={avatar} alt="group logo sear el soqe" className='w-full object-center' />
                    </div>
                    <div className="bg-backgroundLinear font-extrabold text-xl rounded-lg px-4 py-2 cursor-pointer">
                        أضف اعلانك هنا
                    </div>
                </div>

                {/* النص في النص */}
                <div className="text-center bg-white rounded-2xl px-12 py-8 order-1 md:order-2">
                    <h1 className="font-extrabold text-3xl mb-4">أفضل الأسعار</h1>
                    <p>أضف إعلانك وابدأ في كسب المال</p>
                </div>

                {/* اشتري */}
                <div className="flex flex-col justify-center items-center gap-4 order-3 md:order-3">
                    <h1 className="font-extrabold text-2xl">اشتري</h1>
                    <div className="w-44">
                        <img src={avatar} alt="group logo sear el soqe" className='w-full object-center' />
                    </div>
                    <div className="bg-backgroundLinear font-extrabold text-xl rounded-lg px-4 py-2 cursor-pointer">
                        اشتري الأن
                    </div>
                </div>
            </div>


            {/* السيارات الاكثر شهرة */}
            <div className="px-4 sm:px-8 3xl:px-10 2xl:px-20 flex flex-col gap-4">
                {/* header */}
                <div className="flex flex-row flex-wrap 2xl:px-4 justify-between">
                    <div className="">
                        <h1 className='text-lg md:text-2xl font-bold'>السيارات الاكثر شهرة</h1>
                        <span className='text-[#8D8D8D] text-sm'>السيارات الاكتر شهرة على تطبيقنا والاكثر طلبآ</span>
                    </div>
                    <Link to='#' className='text-[#2670DE] flex flex-row items-center gap-2 font-bold text-sm'>
                        <span>استعرض الكل</span>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left">
                                <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* content */}
                <div className="flex flex-row flex-wrap justify-center gap-4 mb-4">

                    <div className="flex flex-col gap-4 w-fit rounded-xl p-4 customShadow cursor-pointer group">
                        {/* img */}
                        <div className="relative">
                            <div className="w-2xs md:w-72 overflow-hidden rounded-xl">
                                <img src="./totyta-car.png" alt="totyta-car" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                            </div>
                            <span className='absolute bottom-2 start-2 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5'>Mar 06,2025</span>
                        </div>
                        {/* img-information */}
                        <div className="flex flex-col gap-4">
                            {/* header */}
                            <div className="flex flex-col gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="">
                                <ul className='grid grid-cols-2 gap-4'>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />الرياض</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />0 كلم</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />2024</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />بنزين</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-fit rounded-xl p-4 customShadow cursor-pointer group">
                        {/* img */}
                        <div className="relative ">
                            <div className="w-2xs md:w-72 overflow-hidden rounded-xl">
                                <img src="./tyota2-car.png" alt="tyota2-car" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                            </div>
                            <span className='absolute bottom-2 start-2 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5'>Mar 06,2025</span>
                        </div>
                        {/* img-information */}
                        <div className="flex flex-col gap-4">
                            {/* header */}
                            <div className="flex flex-col gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="pb-4">
                                <ul className='grid grid-cols-2 gap-4'>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />الرياض</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />0 كلم</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />2024</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />بنزين</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-fit rounded-xl p-4 customShadow cursor-pointer group">
                        {/* img */}
                        <div className="relative ">
                            <div className="w-2xs md:w-72 overflow-hidden rounded-xl">
                                <img src="./totyta-car.png" alt="totyta-car" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                            </div>
                            <span className='absolute bottom-2 start-2 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5'>Mar 06,2025</span>
                        </div>
                        {/* img-information */}
                        <div className="flex flex-col gap-4">
                            {/* header */}
                            <div className="flex flex-col gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="">
                                <ul className='grid grid-cols-2 gap-4'>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />الرياض</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />0 كلم</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />2024</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />بنزين</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-fit rounded-xl p-4 customShadow cursor-pointer group">
                        {/* img */}
                        <div className="relative ">
                            <div className="w-2xs md:w-72 overflow-hidden rounded-xl">
                                <img src="./tyota2-car.png" alt="tyota2-car" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                            </div>
                            <span className='absolute bottom-2 start-2 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5'>Mar 06,2025</span>
                        </div>
                        {/* img-information */}
                        <div className="flex flex-col gap-4">
                            {/* header */}
                            <div className="flex flex-col gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="pb-4">
                                <ul className='grid grid-cols-2 gap-4'>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />الرياض</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />0 كلم</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />2024</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />بنزين</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
