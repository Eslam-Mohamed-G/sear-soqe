import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='flex flex-col gap-20'>
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 3xl:px-10 2xl:px-24">
                <Outlet />
            </div>
        </div>
    )
}
