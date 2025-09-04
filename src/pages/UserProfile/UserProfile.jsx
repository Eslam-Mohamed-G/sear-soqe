import React from 'react'

export default function UserProfile() {
    return (
        <div>
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

            </ul>
        </div>
    )
}
