import React from 'react'
import bgImg from '../../assets/image.png';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';
import CarBrands from '../../Component/CarBrands/CarBrands';
import CarShape from '../../Component/CarShape/CarShape';

export default function BuyCar() {
    return (
        <div className='pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24'>
            {/* top section */}
            <div className="w-full bg-cover bg-center rounded-xl overflow-hidden px-4 py-4" style={{ backgroundImage: `url(${bgImg})` }}>
                <p className='text-white mb-2 md:mb-4 text-sm md:text-lg'>ابحث عن السيارات المستعملة عبر فئات منتقاه بعناية</p>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center border-1">
                    <div className="md:w-1/4 rounded-xl border border-gray-200 bg-white px-2 md:px-4 py-3">
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
                            <ul className='flex flex-row flex-wrap justify-between border-b border-gray-400'>
                                <li className='cursor-pointer'>شكل السيارة</li>
                                <li className='cursor-pointer'>الماركة</li>
                                <li className='cursor-pointer'>الوقود المستخدم</li>
                                <li className='cursor-pointer'>السنة</li>
                                <li className='cursor-pointer'>المدينة</li>
                            </ul>
                        </div>

                        {/* content */}
                        <div className="">
                            {/* محتوي تاب بتاعت شكل السيارة */}
                            <div className="w-full hidden">
                                <CarShape/>
                            </div>

                            {/* محتوي التاب بتاعت الماركة */}
                            <div className="w-full">
                                <CarBrands/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
