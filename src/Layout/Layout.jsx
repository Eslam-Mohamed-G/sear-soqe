import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='flex flex-col gap-20'>
            <Navbar />
            <Outlet />
        </div>
    )
}
