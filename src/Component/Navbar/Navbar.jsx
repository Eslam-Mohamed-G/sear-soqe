import React, { useContext, useEffect, useState } from 'react'
import avatar from '../../assets/avatar.png'
import CountryDrobDown from './CountryDrobDown/CountryDrobDown'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import NewLinkDrobDown from '../NewLinkDrobDown/NewLinkDrobDown'
import Cookies from 'js-cookie';
import { contextData } from '../../Context/Context';

export default function Navbar() {
    const { t } = useTranslation("navbar");

    const { handleStateOfSideBar, handleLogout, loginData, userLogedin } = useContext(contextData);

    return (
        <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b shadow h-[74px] content-center border-gray-200'>
            <div className='flex flex-row flex-wrap items-center justify-between px-4 sm:px-8 3xl:px-10 2xl:px-24 font-bold relative'>
                {/* avatar && logo */}
                <div className="flex items-center gap-10">
                    <Link to="/" className='flex justify-center items-center'>
                        <div className="w-16 h-14">
                            <img src={avatar} alt="avatar-logo-sear-soqe" className='w-full h-full object-center' />
                        </div>
                    </Link>

                    <div className="hidden xl:flex items-center justify-center gap-10">
                        {/* <CountryDrobDown /> */}
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* links */}
                <div className="flex flex-row items-center gap-5">
                    <div className="flex text-black h-[72px] gap-5 items-center">
                        <ul className='hidden lg:flex flex-row content-center h-full'>
                            {/* link with shinytag */}
                            <li className='relative h-full text-center content-center px-5 group flex flex-row items-center'>
                                <NavLink
                                    to="/buycar"
                                    className={({ isActive }) => `flex gap-2 h-full w-full text-center items-center ${isActive ? "activeClass" : ""}`}
                                >
                                    <div className="w-8 h-8">
                                        <img src="./navbar-image/001-car.png" alt="car" className='w-full h-full object-center' />
                                    </div>
                                    {t("links.buyCar")}
                                </NavLink>
                                {/* add the style in app.css file for animation */}
                                <div className='absolute top-3 end-2 backgroundLinearAnimation rounded flex items-center justify-center h-[15px]'>
                                    <span className='block text-white font-bold text-[10px] px-1'>{t("links.shinytag")}</span>
                                </div>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-backgroundLinear rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            <li className='relative h-full text-center content-center px-5 group flex flex-row items-center gap-2'>
                                <NavLink to="/sealcar" className={({ isActive }) => `flex gap-2 h-full w-full text-center items-center ${isActive ? "activeClass" : ""}`}>
                                    <div className="w-8 h-8">
                                        <img src="./navbar-image/002-car-key.png" alt="car-key" className='w-full h-full object-center' />
                                    </div>
                                    {t("links.seal")}
                                </NavLink>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-backgroundLinear rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            <li className='relative group h-full text-center content-center px-5 flex flex-row items-center gap-2'>
                                <NavLink to="/carGuide" className={({ isActive }) => `flex gap-2 h-full w-full text-center items-center ${isActive ? "activeClass" : ""}`}>
                                    <div className="w-7 h-6">
                                        <img src="./navbar-image/003-compass.png" alt="compass" className='w-full h-full object-center' />
                                    </div>
                                    {t("links.carGuide")}
                                </NavLink>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-backgroundLinear rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>
                            <li className='relative group h-full text-center content-center px-5 flex flex-row items-center gap-2'>
                                <NavLink to="/carNews" className={({ isActive }) => `flex gap-2 h-full w-full text-center items-center ${isActive ? "activeClass" : ""}`}>
                                    <div className="w-8 h-8">
                                        <img src="./navbar-image/004-newspaper.png" alt="car" className='w-full h-full object-center' />
                                    </div>
                                    {t("links.carNews")}
                                </NavLink>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-backgroundLinear rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            {/* link with drobdown */}
                            <li className='relative group h-full text-center content-center px-5'>
                                <NavLink to="services" className={({ isActive }) => `flex gap-2 h-full w-full text-center items-center ${isActive ? "activeClass" : ""}`}>
                                    {t("links.services.name")}
                                </NavLink>
                                <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full translate-y-0.5 flex flex-col justify-center h-0 w-44 overflow-hidden group-hover:h-56 group-hover:z-20 bg-white font-normal customShadow rounded-2xl transition-all ease-in-out duration-500">
                                    <ul className='flex flex-col items-start'>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_report")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_review")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_export")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_insurance")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.services.links.car_checkup")}</li>
                                    </ul>
                                </div>
                                {/* blue line  */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-backgroundLinear rounded-t-2xl hidden group-hover:block transition-colors ease-in-out duration-500" />
                            </li>
                        </ul>
                        {/* car sale button */}
                        <div className="bg-backgroundLinear h-fit px-3 py-2 rounded-lg customShadow cursor-pointer capitalize"><Link to='/sealcar' className='text-white'>{t('buttonSales')}</Link></div>

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
                                            <div className="flex flex-row gap-2 items-center">
                                                {/* عرض اول حرفين من كل كلمة موجودة في الاسم */}
                                                <span className='flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-black font-bold text-sm'>{loginData?.user?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
                                                <span className='flex'>{loginData?.user?.name}</span>
                                            </div>
                                        </li>

                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
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

                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
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

                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
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
                                        
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>
                                            <button onClick={handleLogout}
                                                className="w-full flex flex-row items-center gap-2 cursor-pointer"
                                            >
                                                <div className="w-4 h-4 md:w-5 md:h-5 ltr:rotate-180">
                                                    <img src="./profile/hugeicons_logout-03.png" alt="hugeicons_logout-03" className='w-full h-full object-center' />
                                                </div>
                                                <span className='mb-1'>{t("authentication.logout")}</span>
                                            </button>
                                        </li>

                                    </ul>}
                            </div>
                        </div>
                    </div>
                    {/* button for handle nav */}
                    <div className="cursor-pointer block lg:hidden" onClick={handleStateOfSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-left-icon lucide-align-left"><path d="M15 12H3" /><path d="M17 18H3" /><path d="M21 6H3" /></svg>
                    </div>
                </div>
            </div>

        </nav>
    )
}
