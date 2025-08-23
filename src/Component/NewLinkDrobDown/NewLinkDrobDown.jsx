import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

export default function NewLinkDrobDown() {
    return (
        <div className="rounded-2xl w-4xl flex">
            {/* div for tabs */}
            <div className="bg-[#F4F5F7] flex flex-col justify-between w-1/4 h-[480px] py-4">
                <ul className='bg-transparent ps-3'>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>تصفح دليل السيارات الجديدة</li>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>ابحث عن سيارة جديدة</li>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>قارن بين السيارات الجديدة</li>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>أسعار السيارات</li>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>سيارات جديدة شهيرة</li>
                    <li className='py-4 ps-3 text-start rounded-s-xl hover:bg-white hover:text-primaryColor text-sm font-semibold transition-colors ease-in-out duration-500 cursor-pointer'>قاموس السيارات</li>
                    <li className='border-1'><Icon icon="simple-icons:toyota" width="32" height="32" /></li>
                </ul>

                <Link to="#" className='text-primaryColor font-bold underline text-start ps-6 pb-4'>هل تريد بيع سيارتك؟</Link>
            </div>

            {/* div for content of right tabs */}
            <div className="w-3/4 flex flex-row">
                <div className='1/2 p-4'>
                    <p className='text-[#B4BAC5] text-sm'>قم بالبحث عن السيارات حسب شكل السيارة</p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        {/* div1 */}
                        <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>سيدان</span>
                                <img src="./car shape/sedan.png" alt="sedan car" />
                            </div>
                        </div>
                        {/* div2 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full text-start'>هاتشباك</span>
                                <img src="./car shape/hatcback.png" alt="hatchback car" />
                            </div>
                        </div>
                        {/* div3 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>مكشوفة</span>
                                <img src="./car shape/convertible.png" alt="convertible car" />
                            </div>
                        </div>
                        {/* div4 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>فان</span>
                                <img src="./car shape/van.png" alt="van car" />
                            </div>
                        </div>
                        {/* div5 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>دفع رباعي</span>
                                <img src="./car shape/suv.png" alt="suv car" />
                            </div>
                        </div>
                        {/* div6 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>كوبيه</span>
                                <img src="./car shape/coupe.png" alt="coupe car" />
                            </div>
                        </div>
                        {/* div7 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full flex flex-col items-end justify-between text-start p-1.5">
                                <span className='text-[11px] font-bold w-full'>بيك أب</span>
                                <img src="./car shape/pickup.png" alt="pickup car" />
                            </div>
                        </div>
                        {/* div8 */}
                        <div className="overflow-hidden customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                            <div className="w-full p-1 flex flex-col items-end justify-between text-start">
                                <span className='text-[11px] font-bold w-full'>واجن</span>
                                <img src="./car shape/wagon.png" alt="wagon car" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    div
                </div>
            </div>
        </div>
    )
}
