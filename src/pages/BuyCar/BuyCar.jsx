import React from 'react'
import YearDropdown from '../../Component/YearDropDown/YearDropDown';
import PriceDropdown from '../../Component/PriceDropdown/PriceDropdown';
import OtherSearchOption from '../../Component/otherSearchOption/otherSearchOption';

export default function BuyCar() {
    return (
        <div className='pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            <div className="">
                <h1>خيارات البحث</h1>
                <form action="" className='grid grid-cols-2 grid-rows-4 md:grid-rows-3 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-8 border border-gray-300 shadow rounded-2xl px-4 py-2'>
                    <div className='relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <label htmlFor="type-car" className="block mb-1 text-sm font-bold text-black dark:text-white">حالة السيارة</label>
                        <select id="type-car" className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option>جديدة</option>
                            <option>مستعملة</option>
                            <option>معتمدة</option>
                        </select>
                    </div>
                    {/* النوع */}
                    <div className='relative flex flex-col items-center justify-center md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <label htmlFor="type-car" className="block mb-1 text-sm font-bold text-gray-900 dark:text-white">انواع مشهورة</label>
                        <select id="type-car" className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option className='text-black'>انواع مشهورة</option>
                            <option>تويوتا</option>
                            <option>هيونداي</option>
                            <option>كيا</option>
                            <option>شفرولية</option>
                            <option>نسان</option>
                            <option>فيات</option>
                            <option>دايو</option>
                            <option>بي ام دبليو</option>
                            <option>ام جي</option>
                        </select>
                    </div>
                    {/* شكل السيارة */}
                    <div className='relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <div className="border relative cursor-pointer">
                            <span className="block mb-1 text-sm font-bold text-gray-900 dark:text-white">الشكل</span>
                        </div>
                    </div>
                    {/* نوع ناقل الحركة */}
                    <div className='relative flex flex-col items-center justify-center md:after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2'>
                        <label htmlFor="type-car" className="block mb-1 text-sm font-bold text-gray-900 dark:text-white">نوع ناقل الحركة</label>
                        <select id="type-car" className="bg-gray-50 w-fit border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option className='text-black'>نوع ناقل الحركة</option>
                            <option>اوتوماتيك</option>
                            <option>عادى</option>
                            <option>CVT</option>
                        </select>
                    </div>

                    {/* السنة */}
                    <div className="relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <YearDropdown />
                    </div>

                    {/* السعر */}
                    <div className="relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 lg:after:bg-gray-300 border-b-2 border-gray-300 lg:border-b-0 py-2">
                        <PriceDropdown/>
                    </div>

                    {/* فلترة */}
                    <div className="relative flex flex-col items-center justify-center after:absolute after:top-0 after:end-0 after:h-full after:w-0.5 after:bg-gray-300 lg:after:bg-transparent">
                        <OtherSearchOption/>
                    </div>
                </form>
            </div>
        </div>
    )
}
