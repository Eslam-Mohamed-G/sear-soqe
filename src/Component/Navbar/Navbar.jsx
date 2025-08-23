import React from 'react'
import Logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import CountryDrobDown from './CountryDrobDown/CountryDrobDown'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import NewLinkDrobDown from '../NewLinkDrobDown/NewLinkDrobDown'

export default function Navbar() {
    const { t } = useTranslation("navbar");
    return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b h-[74px] content-center border-gray-200 dark:border-gray-600'>
            <div className='flex flex-row flex-wrap items-center justify-between px-8 3xl:px-10 2xl:px-24 font-bold'>
                {/* avatar && logo */}
                <div className="flex items-center gap-10">
                    <Link to="#" className='flex justify-center items-center'>
                        {/* <img src={Logo} alt='logo' /> */}
                        {/* <p className='font-extrabold text-2xl'><span className='text-[#20BB74]'>{t("logo.firstName")} </span><span className='text-[#4044C9]'>{t("logo.scondName")}</span></p> */}
                        <div className="w-16 h-14">
                            <img src={avatar} alt="avatar-logo-sear-soqe" className='w-full h-full object-center' />
                        </div>
                    </Link>

                    <div className="hidden xl:flex items-center justify-center gap-10">
                        <CountryDrobDown />
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* links */}
                <div className="flex flex-row items-center gap-5">
                    <div className="hidden lg:flex text-black h-[72px] content-center">
                        <ul className='flex flex-wrap flex-row content-center'>
                            {/* link with shinytag */}
                            <li className='relative h-full text-center content-center px-5 group'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.offers")}</Link>
                                <div className='absolute top-3 right-0 bg-red-500 rounded flex items-center justify-center h-[15px]'>
                                    <div className="relative">
                                        <span className='block text-white font-bold text-[10px] px-1'>{t("links.shinytag")}</span>
                                        {/* add the style in app.css file for animation */}
                                        <div className="newshinytag" />
                                    </div>
                                </div>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            <li className='relative h-full text-center content-center px-5 group'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.new")}</Link>
                                <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full translate-y-0.5 flex flex-col justify-center h-0 w- overflow-hidden group-hover:h-[480px] group-hover:z-20 bg-white font-normal customShadow rounded-xl transition-all ease-in-out duration-500">
                                    <NewLinkDrobDown/>
                                </div>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            <li className='relative group h-full text-center content-center px-5'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.used")}</Link>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>
                            <li className='relative group h-full text-center content-center px-5'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.electric")}</Link>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-all ease-in-out duration-500" />
                            </li>

                            {/* link with shinytag */}
                            <li className='relative h-full text-center content-center px-5 group'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.chinese")}</Link>
                                <div className='absolute top-3 right-0 bg-red-500 rounded flex items-center justify-center h-[15px]'>
                                    <div className="relative">
                                        <span className='block text-white font-bold text-[10px] px-1'>{t("links.shinytag")}</span>
                                        {/* add the style in app.css file for animation */}
                                        <div className="newshinytag" />
                                    </div>
                                </div>
                                {/* blue line  */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-colors ease-in-out duration-500" />
                            </li>

                            {/* link with drobdown */}
                            <li className='relative group h-full text-center content-center px-5'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.blog.name")}</Link>
                                <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full translate-y-0.5 flex flex-col justify-center h-0 w-52 overflow-hidden group-hover:h-36 group-hover:z-20 bg-white font-normal customShadow rounded-2xl transition-all ease-in-out duration-500">
                                    <ul className='flex flex-col items-start'>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.blog.links.new_cars")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.blog.links.new_videos")}</li>
                                        <li className='block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-300'>{t("links.blog.links.expert_ratings")}</li>
                                    </ul>
                                </div>
                                {/* blue line */}
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-colors ease-in-out duration-500" />
                            </li>
                            {/* link with drobdown */}
                            <li className='relative group h-full text-center content-center px-5'>
                                <Link to="#" className='flex h-full w-full text-center items-center'>{t("links.services.name")}</Link>
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
                                <div className="h-1 absolute -bottom-0.5 start-5 end-5 bg-primaryColor rounded-t-2xl hidden group-hover:block transition-colors ease-in-out duration-500" />
                            </li>
                        </ul>
                    </div>
                    {/* car sale button */}
                    <div className="bg-mainColor h-fit px-3 py-2 rounded-lg customShadow cursor-pointer capitalize"><Link to='#' className='text-white'>{t('buttonSales')}</Link></div>
                </div>

            </div>
        </nav>
    )
}
