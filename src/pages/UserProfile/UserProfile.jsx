import React, { useContext } from 'react'
import { contextData } from '../../Context/Context';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function UserProfile() {
    const { t } = useTranslation("navbar");
    const { handleStateOfSideBar, handleLogout, loginData, userLogedin } = useContext(contextData);
    return (
        <div className='w-full mx-auto bg-white p-6 md:p-8 rounded-xl customShadow mt-3 md:mt-5'>
            <div className="">
                <h1 className='text-2xl md:text-4xl font-bold capitalize'>profile</h1>
                <ul className='flex flex-col gap-4 items-start justify-center w-52 h-72 overflow-hidden transition-all ease-in-out duration-500'>
                    {/* <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300 capitalize bg-backgroundLinear'>
                        <div className="flex flex-row gap-2 items-center">
                            <span className='flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-black font-bold text-sm'>{loginData?.user?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
                            <span className='flex'>{loginData?.user?.name}</span>
                        </div>
                    </li> */}

                    <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                        <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="w-4 h-4 md:w-5 md:h-5">
                                    <img src="./profile/advertisements.png" alt="advertisements" className='w-full h-full object-center' />
                                </div>
                                <span className='mb-2'>إعلاناتي</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                        </Link>
                    </li>

                    <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                        <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="w-4 h-4 md:w-5 md:h-5">
                                    <img src="./profile/solar_heart-outline.png" alt="solar_heart-outline" className='w-full h-full object-center' />
                                </div>
                                <span className='mb-1'>الإعلانات المفضلة</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                        </Link>
                    </li>

                    <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                        <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="w-4 h-4 md:w-5 md:h-5">
                                    <img src="./profile/solar_bell-linear.png" alt="solar_bell-linear" className='w-full h-full object-center' />
                                </div>
                                <span className='mb-1'>إشعارات الاعلانات</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                        </Link>
                    </li>

                    <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                        <button onClick={handleLogout}
                            className="w-full flex flex-row items-center gap-2 cursor-pointer"
                        >
                            <div className="w-4 h-4 md:w-5 md:h-5 ltr:rotate-180">
                                <img src="./profile/hugeicons_logout-03.png" alt="hugeicons_logout-03" className='w-full h-full object-center' />
                            </div>
                            <span className='mb-1'>{t("authentication.logout")}</span>
                        </button>
                    </li>

                </ul>
            </div>

        </div>
    )
}
