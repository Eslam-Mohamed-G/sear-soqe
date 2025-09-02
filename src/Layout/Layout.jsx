import React, { useContext } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { contextData } from '../Context/Context'
import SideBar from '../Component/SideBar/SideBar'

export default function Layout() {
    const { handleStateOfSideBar, sideBarIsOpen } = useContext(contextData)
    return (
        <div className='flex flex-col gap-20 relative'>
            <Navbar />
            <div onClick={handleStateOfSideBar} className={`fixed z-40 top-0 bottom-0 start-0 end-0 bg-[#00000050] overflow-hidden ${sideBarIsOpen ? "opacity-100 block" : "opacity-0 hidden"} lg:hidden transition-all ease-in-out duration-500`}/>
                <div className={`fixed z-50 end-0 top-0 bottom-0 bg-white ${sideBarIsOpen ? "w-40 sm:w-56": "w-0"} transition-all ease-in-out duration-500 lg:hidden`} onClick={(e) => e.stopPropagation()}>
                    <SideBar />
                </div>
            <div className="pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24">
                <Outlet />
            </div>
        </div>
    )
}
