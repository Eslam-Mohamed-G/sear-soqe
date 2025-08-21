import React from 'react'
import Logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import CountryDrobDown from './CountryDrobDown/CountryDrobDown'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { t } = useTranslation("navbar");
    return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
            <div className='flex flex-row flex-wrap items-center justify-between p-4 xl:px-24 font-bold'>
                {/* avatar && logo */}
                <div className="flex gap-4 items-center">
                    <Link to="#" className='flex justify-center items-center gap-1 text-[#4044C9]'>
                        <img src={Logo} alt='logo' />
                        <p className='font-extrabold text-2xl'><span className='text-[#20BB74]'>{t("logo.firstName")} </span><span className='text-[#4044C9]'>{t("logo.scondName")}</span></p>
                        {/* <img src={avatar} alt="avatar-logo-sear-soqe" className='w-28 h-28' /> */}
                    </Link>

                    <div className="hidden xl:flex items-center justify-center gap-4 bg-transparent">
                        <CountryDrobDown />
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* links */}
                <div className="hidden lg:flex text-black">
                    <ul className='flex flex-wrap flex-row gap-10'>
                        <li className='relative'>
                            <Link to="#">{t("links.offers")}</Link>
                            <div className='absolute bottom-5 -right-5 bg-red-500 rounded flex items-center justify-center h-[15px]'>
                                <div className="relative">
                                    <span className='block text-white font-bold text-[10px] px-1'>جديد</span>
                                    {/* add the style in app.css file for animation */}
                                    <div className="newshinytag"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="#">{t("links.new")}</Link>
                        </li>
                        <li>
                            <Link to="#">{t("links.used")}</Link>
                        </li>
                        <li>
                            <Link to="#">{t("links.electric")}</Link>
                        </li>
                        <li className='relative'>
                            <Link to="#">{t("links.chinese")}</Link>
                            <div className='absolute bottom-5 -right-5 bg-red-500 rounded flex items-center justify-center h-[15px]'>
                                <div className="relative">
                                    <span className='block text-white font-bold text-[10px] px-1'>جديد</span>
                                    {/* add the style in app.css file for animation */}
                                    <div className="newshinytag"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="#">{t("links.blog")}</Link>
                        </li>
                        <li>
                            <Link to="#">{t("links.services")}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
