import React from 'react'
import Logo from '../../assets/logo.png'
import CountryDrobDown from './CountryDrobDown/CountryDrobDown'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation("navbar");
    return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
            <div className="max-w-screen-xl flex flex-wrap gap-4 items-center mx-auto py-4">
                <a href="#" className='flex justify-center items-center gap-2 text-[#4044C9]'>
                    <img src={Logo} alt='logo' />
                    <p className='font-extrabold text-2xl'><span className='text-[#20BB74]'>{t("logo.firstName")} </span><span className='text-[#4044C9]'>{t("logo.scondName")}</span></p>
                </a>

                <div className="hidden xl:flex items-center justify-center gap-4 bg-transparent">
                    <CountryDrobDown/>
                    <LanguageSwitcher/>
                </div>
            </div>
        </nav>
    )
}
