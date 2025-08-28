import React, { useState } from 'react'
import bgImg from '../../assets/image.png';
import avatar from '../../assets/avatar.png'
import DropdownInput from '../../Component/InputDropDown/InputDropDown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContentOfTabsOfHomePage from '../../Component/ContentOfTabsOfHomePage/ContentOfTabsOfHomePage';
import { brandName, brands, carShapes, cities, fuels, shapesName, years } from '../../data/HomePage';

export default function HomePage() {
    const { t } = useTranslation("homePage"); // hook للترجمة
    const [activeTab, setActiveTab] = useState("shape");
    return (
        <div className='flex flex-col gap-10 pt-20'>
            {/* top section */}
            <div className="px-4 sm:px-8 3xl:px-10 2xl:px-24">
                <div className="bg-cover bg-center rounded-xl overflow-hidden px-2 md:px-4 py-4" style={{ backgroundImage: `url(${bgImg})` }}>
                    <p className='text-white mb-2 md:mb-4 text-sm md:text-lg'>{t('header')}</p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:h-[400px]">
                        <div className="md:w-1/4 rounded-xl border h-full border-gray-200 bg-white px-2 md:px-4 py-3 capitalize">
                            <p className='mb-2 md:mb-4 font-bold'>{t("sealsCar.name")}</p>
                            <form action="" className='flex flex-col gap-2 md:gap-4'>
                                {/* car model */}
                                <div className="flex flex-row md:flex-col gap-2 md:gap-4">
                                    <DropdownInput placeholder={t("sealsCar.brands.name")} dropdownHeight={"h-48"} options={brandName} dataName={"brands"} fileTranslate={"homePage"} />
                                    <DropdownInput placeholder={t("sealsCar.shapesName.name")} dropdownHeight={"h-48"} options={shapesName} dataName={"sealsCar.shapesName"} fileTranslate={"homePage"} />
                                    <DropdownInput placeholder={t("sealsCar.years.name")} dropdownHeight={"h-40"} options={years} dataName={"years"} fileTranslate={"homePage"} />
                                </div>
                                <button type="submit" className="text-white bg-backgroundLinear cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-720">{t("sealsCar.button")}</button>
                            </form>
                        </div>
                        <div className="w-full md:w-3/4 h-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                            {/* header */}
                            <div className="text-[10px] sm:text-sm font-bold">
                                <ul className='flex flex-row flex-wrap justify-between border-b border-gray-200 capitalize'>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "shape" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("shape")}
                                    >
                                        {t(`carShapes.name`)}
                                    </li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "brand" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("brand")}
                                    >
                                        {t(`brands.name`)}
                                    </li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "fuel" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("fuel")}>{t(`fuels.name`)}</li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "year" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("year")}>{t(`years.name`)}</li>
                                    <li className={`cursor-pointer px-0.5 md:px-3 py-2 ${activeTab === "city" ? "border-b-2 border-primaryColor font-bold text-primaryColor" : ""}`}
                                        onClick={() => setActiveTab("city")}>{t(`cities.name`)}</li>
                                </ul>
                            </div>

                            {/* content */}
                            <div className="">
                                {/* محتوي تاب بتاعت شكل السيارة */}
                                {activeTab === "shape" && <ContentOfTabsOfHomePage colNumber={2} dataName={"carShapes"} data={carShapes} responsiveImg={false} />}

                                {/* محتوي التاب بتاعت الماركة */}
                                {activeTab === "brand" && <ContentOfTabsOfHomePage colNumber={4} dataName={"brands"} data={brands} responsiveImg={true} />}

                                {/* محتوي التاب بتاعت نوع الوقود */}
                                {activeTab === "fuel" && <ContentOfTabsOfHomePage colNumber={2} dataName={"fuels"} data={fuels} responsiveImg={false} />}

                                {/* محتوي التاب بتاعت السنة */}
                                {activeTab === "year" && <ContentOfTabsOfHomePage colNumber={3} dataName={"years"} data={years} responsiveImg={false} />}

                                {/* محتوي التاب بتاعت المدينة */}
                                {activeTab === "city" && <ContentOfTabsOfHomePage colNumber={3} dataName={"cities"} data={cities} responsiveImg={true} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* مكان للاعلان عن السيارت */}
            <div className="bg-[#F4F4F4] w-full py-8 relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
                {/* بيع */}
                <div className="flex flex-col justify-center items-center gap-4 order-2 md:order-1">
                    <h1 className="font-extrabold text-2xl">{t("advertisementlocation.seal.name")}</h1>
                    <div className="w-44">
                        <img src={avatar} alt="group logo sear el soqe" className='w-full object-center' />
                    </div>
                    <div className="bg-backgroundLinear font-extrabold text-xl rounded-lg px-4 py-2 cursor-pointer">
                        {t("advertisementlocation.seal.sentence")}
                    </div>
                </div>

                {/* النص في النص */}
                <div className="text-center bg-white rounded-2xl px-12 py-8 order-1 md:order-2">
                    <h1 className="font-extrabold text-3xl mb-4">{t("advertisementlocation.words.name")}</h1>
                    <p>{t("advertisementlocation.words.sentence")}</p>
                </div>

                {/* اشتري */}
                <div className="flex flex-col justify-center items-center gap-4 order-3 md:order-3">
                    <h1 className="font-extrabold text-2xl">{t("advertisementlocation.buy.name")}</h1>
                    <div className="w-44">
                        <img src={avatar} alt="group logo sear el soqe" className='w-full object-center' />
                    </div>
                    <div className="bg-backgroundLinear font-extrabold text-xl rounded-lg px-4 py-2 cursor-pointer">
                        {t("advertisementlocation.buy.sentence")}
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
