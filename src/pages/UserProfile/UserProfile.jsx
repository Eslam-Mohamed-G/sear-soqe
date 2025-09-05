import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function UserProfile() {
    const { t } = useTranslation("navbar");
    const [userData, setUserData] = useState();
    
    return (
        <div className="bg-white p-3 md:p-4 lg:p-8 rounded-xl customShadow mt-3 md:mt-5">
            {/* header */}
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full border-b border-gray-300">
                <h1 className='flex gap-2 text-2xl md:text-4xl font-bold capitalize'>
                    <span className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full text-black font-bold text-sm'>{userData?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
                    <span className='flex'>{userData?.name}</span>
                </h1>

                <div className="flex flex-row gap-2 text-[10px] md:text-sm font-bold">
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-[#4044C9]"><path d="M11.5 15H7a4 4 0 0 0-4 4v2" /><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><circle cx={10} cy={7} r={4} /></svg>
                        <span className=''>تعديل الملف الشخصي </span>
                    </button>
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-[#4044C9]"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg>
                        <span>تغيير كلمة المرور </span>
                    </button>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-10 bg-white'>
                <div className="border">
                    <ul className='flex flex-row md:flex-col sm:gap-2 md:gap-5 items-start justify-center md:w-56 transition-all ease-in-out duration-500'>
                        <li className='block w-56 md:w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/advertisements.png" alt="advertisements" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-2'>إعلاناتي</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/solar_heart-outline.png" alt="solar_heart-outline" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-1'>الإعلانات المفضلة</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/solar_bell-linear.png" alt="solar_bell-linear" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-1'>إشعارات الاعلانات</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        {/* <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <button onClick={handleLogout}
                                className="w-full flex flex-row items-center gap-2 cursor-pointer"
                            >
                                <div className="w-4 h-4 md:w-5 md:h-5 ltr:rotate-180">
                                    <img src="./profile/hugeicons_logout-03.png" alt="hugeicons_logout-03" className='w-full h-full object-center' />
                                </div>
                                <span className='mb-1'>{t("authentication.logout")}</span>
                            </button>
                        </li> */}
                    </ul>
                </div>

                {/* content of tabs */}
                <div className="w-full border">
                    aga
                </div>
            </div>
        </div>
    )
}
