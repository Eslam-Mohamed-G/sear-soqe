import React from 'react'
import YearDropdown from '../../Component/YearDropDown/YearDropDown';
import PriceDropdown from '../../Component/PriceDropdown/PriceDropdown';
import OtherSearchOption from '../../Component/otherSearchOption/otherSearchOption';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';

export default function BuyCar() {
    return (
        <div className='pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            <div className="">
                <h1>خيارات البحث</h1>
                <form action="" className='grid grid-cols-2 grid-rows-4 md:grid-rows-3 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-8 border border-gray-300 shadow rounded-2xl px-4 py-2'>
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>حالة السيارة</span>
                        <DropdownInput choose={"اختار الحالة "} options={["جديدة", "مستعملة", "معتمدة"]} dropdownHeight={10}/>
                    </div>
                    {/* النوع */}
                    <div className='relative px-2 flex flex-col items-center justify-center md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>انواع مشهورة</span>
                        <DropdownInput choose={"اختار نوع"} dropdownHeight={48} options={["تويوتا", "هيونداي", "كيا", "مرسيدس", "بي إم دبليو","أودي", "فولكس فاجن", "فورد", "شيفروليه", "نيسان","رينو", "بيجو", "فيات", "هوندا", "مازدا","ميتسوبيشي", "سوزوكي", "لكزس", "جيلي", "شيري"]}/>
                    </div>
                    {/* شكل السيارة */}
                    <div className='relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 md:after:bg-transparent lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <div className="relative cursor-pointer">
                            <span className="block text-sm font-bold text-gray-900 dark:text-white text-center">الشكل</span>
                            <DropdownInput choose={"اختار الشكل"} dropdownHeight={48} options={["سيدان", "هاتشباك", "دفع رباعي", "كوبيه", "مكشوفة", "بيك أب", "فان"]}/>
                        </div>
                    </div>

                    {/* السعر */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 md:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <PriceDropdown/>
                    </div>

                    {/* السنة */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <YearDropdown />
                    </div>

                    {/* الوقود */}
                    <div className="relative px-2 flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <span className='block text-sm font-bold text-gray-900 dark:text-white'>نوع الوقود</span>
                        <DropdownInput choose={"نوع الوقوجد"} dropdownHeight={10} options={["بنزين", "ديزل", "هجينة", "كهربائية"]}/>
                    </div>

                    {/* فلترة */}
                    <div className="relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300">
                        <OtherSearchOption/>
                    </div>

                    {/* زرار البحث */}
                    <button>بحث</button>
                </form>
            </div>
        </div>
    )
}
