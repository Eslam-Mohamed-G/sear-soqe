import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import CountryDrobDown from '../Navbar/CountryDrobDown/CountryDrobDown'

export default function SideBar() {
    const { t } = useTranslation("navbar");
    const [open, setOpen] = useState(false);
    const handleStateOfDropDown = () => {
        setOpen(!open)
    }

    return (
        <div className="flex flex-col text-black gap-5 w-fit h-dvh pt-4 items-center bg-white lg:hidden">
            <ul className='flex flex-col gap-10 border-b'>
                {/* link with shinytag */}
                <li className='relative h-full text-center content-center group flex flex-row items-center gap-2'>
                    <NavLink to="/buyCar" className={({ isActive }) => `flex flex-row gap-2 ${isActive ? "sidebarActiveClass" : ""}`}>
                        <div className="w-6 h-6">
                            <img src="./navbar-image/001-car.png" alt="car" className='w-full h-full object-center' />
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

                <li className='relative h-full text-center content-center group flex flex-row items-center gap-2'>
                    <div className="w-7 h-7">
                        <img src="./navbar-image/002-car-key.png" alt="car-key" className='w-full h-full object-center' />
                    </div>
                    <NavLink to="/sealcar" className='flex h-full w-full text-center items-center'>{t("links.seal")}</NavLink>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>

                <li className='relative group h-full text-center content-center flex flex-row items-center gap-2'>
                    <div className="w-6 h-5">
                        <img src="./navbar-image/003-compass.png" alt="compass" className='w-full h-full object-center' />
                    </div>
                    <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.carGuide")}</Link>
                    {/* blue line */}
                    <div className="h-1 absolute -bottom-1 start-1 end-1 bg-backgroundLinear rounded-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                </li>
                <li className='relative group h-full text-center content-center flex flex-row items-center gap-2'>
                    <div className="w-7 h-7">
                        <img src="./navbar-image/004-newspaper.png" alt="car" className='w-full h-full object-center' />
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
                <CountryDrobDown />
                <LanguageSwitcher />
            </div>
            {/* car sale button */}
            <div className="bg-backgroundLinear h-fit px-3 py-2 rounded-lg customShadow cursor-pointer capitalize"><Link to='#' className='text-white'>{t('buttonSales')}</Link></div>
        </div>
    )
}
