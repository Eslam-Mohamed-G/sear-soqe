import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { contextData } from '../../Context/Context';
import Cookies from 'js-cookie';

export default function SideBar() {
    const { t } = useTranslation("navbar");
    const { handleStateOfSideBar, loginData, handleLogout, userLogedin } = useContext(contextData)
    const [open, setOpen] = useState(false);
    const handleStateOfDropDown = () => {
        setOpen(!open)
    }
    const cookieValue = Cookies.get("loginData");
    return (
        <div className={`flex flex-col w-full text-black gap-5 h-dvh pt-4 px-4 items-center transition-all ease-in-out duration-500`}>
            <span className='cursor-pointer w-full mb-8' onClick={handleStateOfSideBar}>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </span>
            <ul className='flex flex-col gap-10 border-b'>
                {/* link with shinytag */}
                <li onClick={handleStateOfSideBar} className='relative h-full text-center content-center group flex flex-row items-center gap-2'>
                    <NavLink to="/buyCar" className={({ isActive }) => `flex flex-row gap-2 w-full ${isActive ? "sidebarActiveClass" : ""}`}>
                        <div className="w-6 h-6">
                            <img src="/navbar-image/001-car.png" alt="car" className='w-full h-full object-center' />
                        </div>
                        {t("links.buyCar")}
                    </NavLink>
                    {/* add the style in app.css file for animation */}
                    <div className='absolute bottom-full end-2 backgroundLinearAnimation rounded flex items-center justify-center h-[15px]'>
                        <span className='block text-white font-bold text-[10px] px-1'>{t("links.shinytag")}</span>
                    </div>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>

                <li onClick={handleStateOfSideBar} className='relative h-full text-center content-center group flex flex-row items-center gap-2'>
                    <NavLink to="/sealcar" className={({ isActive }) => `flex flex-row gap-2 w-full ${isActive ? "sidebarActiveClass" : ""}`}>
                        <div className="w-6 h-6">
                            <img src="/navbar-image/002-car-key.png" alt="car-key" className='w-full h-full object-center' />
                        </div>
                        {t("links.seal")}
                    </NavLink>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>

                <li className='relative group h-full text-center content-center flex flex-row items-center gap-2'>
                    <div className="w-6 h-5">
                        <img src="/navbar-image/003-compass.png" alt="compass" className='w-full h-full object-center' />
                    </div>
                    <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.carGuide")}</Link>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>
                <li className='relative group h-full text-center content-center flex flex-row items-center gap-2'>
                    <div className="w-7 h-7">
                        <img src="/navbar-image/004-newspaper.png" alt="car" className='w-full h-full object-center' />
                    </div>
                    <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.carNews")}</Link>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>

                {/* link with drobdown */}
                <li className='relative h-full text-center content-center flex gap-4 cursor-pointer' onClick={handleStateOfDropDown}>
                    <span className={open ? "rotate-90 transition-all ease-in-out duration-300" : " transition-all ease-in-out duration-300"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.services.name")}</Link>
                    <div className={`absolute z-10 end-full top-0 flex flex-col justify-center w-44 overflow-hidden bg-white font-normal customShadow rounded-2xl transition-all ease-in-out duration-500 ${open ? "h-56" : "h-0"}`}>
                        <ul className='flex flex-col items-start'>
                            <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_report")}</li>
                            <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_review")}</li>
                            <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_export")}</li>
                            <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_insurance")}</li>
                            <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_checkup")}</li>
                        </ul>
                    </div>
                    {/* blue line  */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>
            </ul>
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
                {/* <CountryDrobDown /> */}
                {/* authentication button */}
                <div className="relative group h-full text-center content-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx={12} cy={10} r={4} /><circle cx={12} cy={12} r={10} /></svg>
                    <div className="absolute z-10 left-0 top-full translate-y-0.5 flex flex-col justify-center bg-white font-normal customShadow rounded-lg">
                        {!userLogedin ?
                            <ul className='flex flex-col items-start justify-center h-0 overflow-hidden group-hover:h-28 group-hover:z-20 transition-all ease-in-out duration-500'>
                                <li className='block w-28 text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <Link to="/register">
                                        {t("authentication.register")}
                                    </Link>
                                </li>
                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <Link to="/login">{t("authentication.login")}</Link>
                                </li>
                            </ul>
                            :
                            <ul className='flex flex-col items-start justify-center w-52 h-0 overflow-hidden group-hover:h-72 group-hover:z-20 transition-all ease-in-out duration-500'>
                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300 capitalize bg-backgroundLinear'>
                                    <Link to="/profile" className="flex flex-row gap-2 items-center">
                                        {/* عرض اول حرفين من كل كلمة موجودة في الاسم */}
                                        <span className='flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-black font-bold text-sm'>{loginData?.user?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
                                        <span className='flex'>{loginData?.user?.name}</span>
                                    </Link>
                                </li>

                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <Link to="/profile" className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-4 h-4 md:w-5 md:h-5">
                                                <img src="/profile/advertisements.png" alt="advertisements" className='w-full h-full object-center' />
                                            </div>
                                            <span className='mb-2'>إعلاناتي</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                                    </Link>
                                </li>

                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-4 h-4 md:w-5 md:h-5">
                                                <img src="/profile/solar_heart-outline.png" alt="solar_heart-outline" className='w-full h-full object-center' />
                                            </div>
                                            <span className='mb-1'>الإعلانات المفضلة</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                                    </Link>
                                </li>

                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-4 h-4 md:w-5 md:h-5">
                                                <img src="/profile/solar_bell-linear.png" alt="solar_bell-linear" className='w-full h-full object-center' />
                                            </div>
                                            <span className='mb-1'>إشعارات الاعلانات</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                                    </Link>
                                </li>

                                <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                    <button onClick={handleLogout}
                                        className="w-full flex flex-row items-center gap-2 cursor-pointer"
                                    >
                                        <div className="w-4 h-4 md:w-5 md:h-5 ltr:rotate-180">
                                            <img src="/profile/hugeicons_logout-03.png" alt="hugeicons_logout-03" className='w-full h-full object-center' />
                                        </div>
                                        <span className='mb-1'>{t("authentication.logout")}</span>
                                    </button>
                                </li>

                            </ul>}
                    </div>
                </div>
                <LanguageSwitcher />
            </div>
            {/* car sale button */}
            <div className="bg-backgroundLinear w-full h-fit px-3 py-2 text-center rounded-lg customShadow cursor-pointer capitalize"><Link to='#' className='text-white'>{t('buttonSales')}</Link></div>
        </div>
    )
}
