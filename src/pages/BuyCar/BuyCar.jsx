import React from 'react'
import YearDropdown from '../../Component/YearDropDown/YearDropDown';
import PriceDropdown from '../../Component/PriceDropdown/PriceDropdown';
import OtherSearchOption from '../../Component/otherSearchOption/otherSearchOption';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';

export default function BuyCar() {
    return (
        <div className='flex flex-col gap-4 pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            {/* top section for form */}
            <div className="">
                <h1>خيارات البحث</h1>
                <form action="" className='grid grid-cols-2 grid-rows-4 md:grid-rows-3 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-8 border border-gray-300 shadow rounded-2xl px-4 py-2'>
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>حالة السيارة</span>
                        <DropdownInput choose={"اختار الحالة "} options={["جديدة", "مستعملة", "معتمدة"]} dropdownHeight={10} />
                    </div>
                    {/* النوع */}
                    <div className='relative px-2 flex flex-col items-center justify-center md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>انواع مشهورة</span>
                        <DropdownInput choose={"اختار نوع"} dropdownHeight={48} options={["تويوتا", "هيونداي", "كيا", "مرسيدس", "بي إم دبليو", "أودي", "فولكس فاجن", "فورد", "شيفروليه", "نيسان", "رينو", "بيجو", "فيات", "هوندا", "مازدا", "ميتسوبيشي", "سوزوكي", "لكزس", "جيلي", "شيري"]} />
                    </div>
                    {/* شكل السيارة */}
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 md:after:bg-transparent lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <div className="relative cursor-pointer">
                            <span className="block text-sm font-bold text-gray-900 dark:text-white text-center">الشكل</span>
                            <DropdownInput choose={"اختار الشكل"} dropdownHeight={48} options={["سيدان", "هاتشباك", "دفع رباعي", "كوبيه", "مكشوفة", "بيك أب", "فان"]} />
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
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>نوع الوقود</span>
                        <DropdownInput choose={"نوع الوقوجد"} dropdownHeight={10} options={["بنزين", "ديزل", "هجينة", "كهربائية"]} />
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
            <div className="w-full grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">
                    <div className="p-2 border border-gray-300 rounded-2xl overflow-hidden">
                        {/* image */}
                        <div className="w-full md:w-72 overflow-hidden rounded-xl">
                            <img src="./totyta-car.png" alt="totyta-car" className='w-full object-contain' />
                        </div>

                        {/* content */}
                        <div className="flex flex-col gap-4">
                            {/* header */}
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <span>تويوتا فيلوز 1.5 لتر GLX 2024</span>
                                <span className='text-primaryColor'>2,300,00 ر.س</span>
                            </div>
                            <div className="border-b border-gray-300 pb-4">
                                <ul className='grid grid-cols-4 gap-4'>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />الرياض</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />0 كلم</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />2024</li>
                                    <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />بنزين</li>
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
                <div className="col-span-1 border">2</div>
            </div>
        </div>
    )
}
