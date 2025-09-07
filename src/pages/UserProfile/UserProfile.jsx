import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function UserProfile() {
    const { t } = useTranslation("navbar");
    const [userData, setUserData] = useState();
    const [listings, setListings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getAllUserCarsListings = async () => {
            try {
                const cookieValue = Cookies.get("loginData");
                if (!cookieValue) { return; }
                const { token, user } = JSON.parse(cookieValue);
                setUserData(user)
                const response = await axios.get(
                    "https://adminsand.alrmoz.com/api/user/listings",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        },
                    }
                );
                setListings(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {

            }
        }

        getAllUserCarsListings();
    }, []);
    return (
        <div className="bg-white p-3 md:p-4 lg:p-8 rounded-xl customShadow mt-3 md:mt-5">
            {/* header */}
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full border-b border-gray-300">
                <h1 className='flex gap-2 text-2xl md:text-4xl font-bold capitalize'>
                    <span className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full text-black font-bold text-sm'>{userData?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
                    <span className='flex'>{userData?.name}</span>
                </h1>

                <div className="flex flex-row gap-2 text-[10px] md:text-sm font-bold">
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-[#4044C9]"><path d="M11.5 15H7a4 4 0 0 0-4 4v2" /><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><circle cx={10} cy={7} r={4} /></svg>
                        <span className=''>تعديل الملف الشخصي </span>
                    </button>
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-[#4044C9]"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg>
                        <span>تغيير كلمة المرور </span>
                    </button>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-10 bg-white'>
                <div className="border">
                    <ul className='flex flex-row md:flex-col sm:gap-2 md:gap-5 items-start justify-center md:w-56 transition-all ease-in-out duration-500'>
                        <li className='block w-56 md:w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/advertisements.png" alt="advertisements" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-2'>إعلاناتي</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/solar_heart-outline.png" alt="solar_heart-outline" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-1'>الإعلانات المفضلة</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <Link className='flex flex-row items-center justify-between text-sm md:text-base font-medium'>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5">
                                        <img src="./profile/solar_bell-linear.png" alt="solar_bell-linear" className='w-full h-full object-center' />
                                    </div>
                                    <span className='mb-1'>إشعارات الاعلانات</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ltr:rotate-180"><path d="m15 18-6-6 6-6" /></svg>
                            </Link>
                        </li>

                        {/* <li className='block w-full text-start md:px-4 md:py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-300'>
                            <button onClick={handleLogout}
                                className="w-full flex flex-row items-center gap-2 cursor-pointer"
                            >
                                <div className="w-4 h-4 md:w-5 md:h-5 ltr:rotate-180">
                                    <img src="./profile/hugeicons_logout-03.png" alt="hugeicons_logout-03" className='w-full h-full object-center' />
                                </div>
                                <span className='mb-1'>{t("authentication.logout")}</span>
                            </button>
                        </li> */}
                    </ul>
                </div>

                {/* content of tabs */}
                <div className="w-full">
                    <div className="flex flex-row flex-wrap justify-start gap-4 mt-2">
                        {listings.map((car) => (
                            <div onClick={() => { navigate(`/specificOffer/${car.id}`) }} key={car.id} className="flex flex-col gap-4 w-fit rounded-xl p-4 customShadow cursor-pointer group relative">
                                <div className="absolute top-4 end-3 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5 flex flex-row items-center justify-center gap-4">
                                    {/* delete */}
                                    <button>
                                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 5.5L18.88 15.525C18.722 18.086 18.643 19.367 18 20.288C17.6826 20.7432 17.2739 21.1273 16.8 21.416C15.843 22 14.56 22 11.994 22C9.424 22 8.139 22 7.18 21.415C6.70589 21.1257 6.29721 20.7409 5.98 20.285C5.338 19.363 5.26 18.08 5.106 15.515L4.5 5.5M3 5.5H21M16.056 5.5L15.373 4.092C14.92 3.156 14.693 2.689 14.302 2.397C14.2151 2.33232 14.1232 2.27479 14.027 2.225C13.594 2 13.074 2 12.035 2C10.969 2 10.436 2 9.995 2.234C9.89752 2.28621 9.80453 2.34642 9.717 2.414C9.322 2.717 9.101 3.202 8.659 4.171L8.053 5.5M9.5 16.5V10.5M14.5 16.5V10.5" stroke="#DB161B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    {/* update */}
                                    <button>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_13_1402)">
                                                <path
                                                    d="M13.28 6.4268L13.898 5.8088C14.3897 5.31717 14.6658 4.65039 14.6658 3.95513C14.6658 3.25987 14.3897 2.59309 13.898 2.10146C13.4064 1.60984 12.7396 1.33365 12.0444 1.33365C11.3491 1.33365 10.6823 1.60984 10.1907 2.10146L9.5727 2.71946L3.89136 8.39946C3.50669 8.7848 3.31403 8.97746 3.1487 9.18946C2.95362 9.43978 2.7862 9.71047 2.64936 9.9968C2.53403 10.2395 2.44803 10.4981 2.27603 11.0141L1.5467 13.2015M13.28 6.4268C13.28 6.4268 11.9674 6.34946 10.8087 5.1908C9.65003 4.0328 9.57336 2.71946 9.57336 2.71946M13.28 6.4268L7.59936 12.1068C7.21469 12.4915 7.02203 12.6841 6.81003 12.8495C6.55971 13.0445 6.28903 13.212 6.0027 13.3488C5.76003 13.4641 5.50203 13.5501 4.98536 13.7221L2.79803 14.4515M2.79803 14.4515L2.26336 14.6301C2.13873 14.6719 2.00491 14.6781 1.87695 14.648C1.74899 14.6179 1.63196 14.5528 1.53901 14.4598C1.44606 14.3669 1.38088 14.2498 1.35079 14.1219C1.3207 13.9939 1.3269 13.8601 1.36869 13.7355L1.54736 13.2008L2.79803 14.4515Z"
                                                    stroke="#4044C9" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_13_1402">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                                {/* img */}
                                <div className="relative">
                                    <div className="w-2xs md:w-72 overflow-hidden rounded-xl">
                                        <img src={`https://adminsand.alrmoz.com/storage/${car?.images[0]?.path}`} alt="totyta-car" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                    <span className='absolute bottom-2 start-2 bg-[#FFFFFF] rounded-lg px-1.5 py-0.5'></span>
                                </div>
                                {/* img-information */}
                                <div className="flex flex-col gap-4">
                                    {/* header */}
                                    <div className="flex flex-col gap-4">
                                        <span>{car?.name} {car?.model}</span>
                                        <span className='text-primaryColor'>ج.م {car?.price}</span>
                                        <span>اخر تحديث: {car?.created_at.substring(0, car?.created_at.indexOf('T'))}</span>
                                    </div>
                                    <div className="">
                                        <ul className='grid grid-cols-2 gap-4'>
                                            <li className='flex flex-row items-center gap-2'><img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />{car?.make}</li>
                                            <li className='flex flex-row items-center gap-2'><img src="./icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />{JSON.parse(car.description)?.mileage} كم</li>
                                            <li className='flex flex-row items-center gap-2'><img src="./icon/date-Frame.svg" alt="date icon" className="w-4 h-4" />{car?.year}</li>
                                            <li className='flex flex-row items-center gap-2'><img src="./icon/solar-Frame.svg" alt="solar icon" className="w-4 h-4" />{JSON.parse(car.description)?.fuelType}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
