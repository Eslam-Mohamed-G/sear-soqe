import React from 'react'
import YearDropdown from '../../Component/YearDropDown/YearDropDown';
import PriceDropdown from '../../Component/PriceDropdown/PriceDropdown';
import OtherSearchOption from '../../Component/otherSearchOption/otherSearchOption';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';
import { useTranslation } from 'react-i18next';
import { brandName, carConditions, carTypes, fuelTypes } from '../../data/BuyCarData';

export default function BuyCar() {
    const { t } = useTranslation("buyCarPage"); // hook للترجمة

    return (
        <div className='flex flex-col gap-4 pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            {/* top section for form */}
            <div className="">
                <h1>خيارات البحث</h1>
                <form action="" className='grid grid-cols-2 grid-rows-4 md:grid-rows-3 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-8 border border-gray-300 shadow rounded-2xl px-4 py-2 capitalize'>
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>{t("carConditions.name")}</span>
                        <DropdownInput placeholder={t("carConditions.placeholder")} options={carConditions} dropdownHeight={"h-32"} dataName={"carConditions"} fileTranslate={"buyCarPage"} />
                    </div>
                    {/* النوع */}
                    <div className='relative px-2 flex flex-col items-center justify-center md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>{t("popularBrands.name")}</span>
                        <DropdownInput placeholder={t("popularBrands.placeholder")} dropdownHeight={"h-48"} options={brandName} dataName={"popularBrands"} fileTranslate={"buyCarPage"} />
                    </div>
                    {/* شكل السيارة */}
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 md:after:bg-transparent lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <div className="relative cursor-pointer">
                            <span className="block text-sm font-bold text-gray-900 dark:text-white text-center">{t("carTypes.name")}</span>
                            <DropdownInput placeholder={t("carTypes.placeholder")} dropdownHeight={"h-48"} options={carTypes} dataName={"carTypes"} fileTranslate={"buyCarPage"} />
                        </div>
                    </div>

                    {/* السعر */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 md:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <PriceDropdown />
                    </div>

                    {/* السنة */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <YearDropdown />
                    </div>

                    {/* الوقود */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>{t("fuelTypes.name")}</span>
                        <DropdownInput placeholder={t("fuelTypes.placeholder")} options={fuelTypes} dropdownHeight={"h-40"} dataName={"fuelTypes"} fileTranslate={"buyCarPage"} />
                    </div>

                    {/* فلترة */}
                    <div className="relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300">
                        <OtherSearchOption />
                    </div>

                    {/* زرار البحث */}
                    <div className="relative flex flex-col items-center justify-center px-2">
                        <button type='submit' className='w-full bg-backgroundLinear h-fit px-3 py-2 rounded-lg customShadow cursor-pointer capitalize'>بحث</button>
                    </div>
                </form>
            </div>

            {/* content section to show search result */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-4">
                <div className="col-span-3 grid gap-4 pb-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 border border-gray-300 rounded-2xl hover:bg-gray-100 overflow-hidden transition-colors ease-in-out duration-500">
                        {/* image */}
                        <div className="relative">
                            <div className="w-full md:w-72 lg:w-96 overflow-hidden rounded-xl">
                                <img src="./totyta-car.png" alt="totyta-car" className='w-full object-contain' />
                            </div>
                            <span className='absolute top-2 end-2 bg-white rounded-full p-1 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            </span>
                        </div>

                        {/* content */}
                        <div className="flex flex-col justify-between gap-4">
                            {/* header */}
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-gray-300 pb-4">
                                    <ul className='grid grid-cols-4 gap-4'>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>الرياض</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>0 كلم</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>2024</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>بنزين</span></li>
                                    </ul>
                                </div>

                                {/* buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    <button className='bg-white border border-primaryColor rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span className='text-primaryColor'>رسالة</span>
                                    </button>
                                    <button className='bg-primaryColor text-white rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span>اتصل</span>
                                    </button>
                                    <button className='bg-[#25D367] rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <img src="./ic_round-whatsapp.png" alt="ic_round-whatsapp" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 border border-gray-300 rounded-2xl hover:bg-gray-100 overflow-hidden transition-colors ease-in-out duration-500">
                        {/* image */}
                        <div className="relative">
                            <div className="w-full md:w-72 lg:w-96 overflow-hidden rounded-xl">
                                <img src="./image.png" alt="totyta-car" className='w-full object-contain' />
                            </div>
                            <span className='absolute top-2 end-2 bg-white rounded-full p-1 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            </span>
                        </div>

                        {/* content */}
                        <div className="flex flex-col justify-between gap-4">
                            {/* header */}
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-gray-300 pb-4">
                                    <ul className='grid grid-cols-4 gap-4'>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>الرياض</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>0 كلم</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>2024</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>بنزين</span></li>
                                    </ul>
                                </div>

                                {/* buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    <button className='bg-white border border-primaryColor rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span className='text-primaryColor'>رسالة</span>
                                    </button>
                                    <button className='bg-primaryColor text-white rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span>اتصل</span>
                                    </button>
                                    <button className='bg-[#25D367] rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <img src="./ic_round-whatsapp.png" alt="ic_round-whatsapp" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 border border-gray-300 rounded-2xl hover:bg-gray-100 overflow-hidden transition-colors ease-in-out duration-500">
                        {/* image */}
                        <div className="relative">
                            <div className="w-full md:w-72 lg:w-96 overflow-hidden rounded-xl">
                                <img src="./x5_1226132099hbu.png" alt="totyta-car" className='w-full object-contain' />
                            </div>
                            <span className='absolute top-2 end-2 bg-white rounded-full p-1 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            </span>
                        </div>

                        {/* content */}
                        <div className="flex flex-col justify-between gap-4">
                            {/* header */}
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-gray-300 pb-4">
                                    <ul className='grid grid-cols-4 gap-4'>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>الرياض</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>0 كلم</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>2024</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>بنزين</span></li>
                                    </ul>
                                </div>

                                {/* buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    <button className='bg-white border border-primaryColor rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span className='text-primaryColor'>رسالة</span>
                                    </button>
                                    <button className='bg-primaryColor text-white rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span>اتصل</span>
                                    </button>
                                    <button className='bg-[#25D367] rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <img src="./ic_round-whatsapp.png" alt="ic_round-whatsapp" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 border border-gray-300 rounded-2xl hover:bg-gray-100 overflow-hidden transition-colors ease-in-out duration-500">
                        {/* image */}
                        <div className="relative">
                            <div className="w-full md:w-72 lg:w-96 overflow-hidden rounded-xl">
                                <img src="./tyota2-car.png" alt="totyta-car" className='w-full object-contain' />
                            </div>
                            <span className='absolute top-2 end-2 bg-white rounded-full p-1 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            </span>
                        </div>

                        {/* content */}
                        <div className="flex flex-col justify-between gap-4">
                            {/* header */}
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-gray-300 pb-4">
                                    <ul className='grid grid-cols-4 gap-4'>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>الرياض</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>0 كلم</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>2024</span></li>
                                        <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-3 h-3 sm:w-4 sm:h-4" /><span className='text-[10px] sm:text-sm font-bold sm:font-normal'>بنزين</span></li>
                                    </ul>
                                </div>

                                {/* buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    <button className='bg-white border border-primaryColor rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span className='text-primaryColor'>رسالة</span>
                                    </button>
                                    <button className='bg-primaryColor text-white rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <span>اتصل</span>
                                    </button>
                                    <button className='bg-[#25D367] rounded-lg flex items-center justify-center py-1 cursor-pointer'>
                                        <img src="./ic_round-whatsapp.png" alt="ic_round-whatsapp" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الاعلان */}
                <div className="col-span-1 relative">
                    <div className="sticky top-20 flex flex-col justify-center items-center gap-4 py-4 border border-gray-300 rounded-2xl">
                        <div className="w-40">
                            <img src='/avatar.png' alt="group logo sear el soqe" className='w-full object-center' />
                        </div>
                        <div className="bg-backgroundLinear font-extrabold text-xl rounded-lg px-4 py-2 cursor-pointer">
                            أضف اعلانك هنا
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
