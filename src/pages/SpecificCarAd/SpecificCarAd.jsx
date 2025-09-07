import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';
import { contextData } from '../../Context/Context';

export default function SpecificCarAd() {
    const { deleteListing } = useContext(contextData);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const [specificCar, setSpecificCar] = useState([]);
    const [desc, setDesc] = useState(null)
    useEffect(() => {
        const specificOffer = async () => {
            setLoading(true);
            setErrorMSG('');
            try {
                const cookieValue = Cookies.get("loginData");
                if (!cookieValue) { return; }
                const { token, user } = JSON.parse(cookieValue);
                const response = await axios.get(`https://adminsand.alrmoz.com/api/user/listings/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        }
                    }
                );
                setSpecificCar(response.data);
                // ✅ لو فيه description نحوله Object ونخزنه
                if (response.data.description) {
                    setDesc(JSON.parse(response.data.description));
                }
                console.log(response.data);
                setLoading(true);
            } catch (error) {
                setErrorMSG(error.message);
            } finally {
                setLoading(false);
            }
        };

        specificOffer();
    }, []);
    return (
        <div className="">
            {loading &&
                <div role="status" className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <span className="sr-only">Loading...</span>
                </div>
            }

            {errorMSG && <p className='text-center capitalize text-red-500 font-sans font-bold text-[34px]'>{errorMSG}</p>}

            {!loading && !errorMSG && (
                <div className="">
                    {/* img */}
                    <div className=""></div>
                    {/* header */}
                    <h1 className='w-full flex justify-between'>{specificCar.name} {specificCar.model}
                        <button onClick={() => {deleteListing(specificCar.id)}} className='flex items-center gap-1 text-red-500'>
                            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 5.5L18.88 15.525C18.722 18.086 18.643 19.367 18 20.288C17.6826 20.7432 17.2739 21.1273 16.8 21.416C15.843 22 14.56 22 11.994 22C9.424 22 8.139 22 7.18 21.415C6.70589 21.1257 6.29721 20.7409 5.98 20.285C5.338 19.363 5.26 18.08 5.106 15.515L4.5 5.5M3 5.5H21M16.056 5.5L15.373 4.092C14.92 3.156 14.693 2.689 14.302 2.397C14.2151 2.33232 14.1232 2.27479 14.027 2.225C13.594 2 13.074 2 12.035 2C10.969 2 10.436 2 9.995 2.234C9.89752 2.28621 9.80453 2.34642 9.717 2.414C9.322 2.717 9.101 3.202 8.659 4.171L8.053 5.5M9.5 16.5V10.5M14.5 16.5V10.5" stroke="#DB161B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            حذف
                        </button>
                    </h1>
                    {/* السعر */}
                    <h1 className='text-primaryColor text-lg font-bold'>ج.م {specificCar.price}</h1>

                    {/* البيانات */}
                    <div className="grid grid-cols-1 grid-rows-1 gap-5 mt-5">
                        <div className="">
                            <ul className='grid grid-cols-4 gap-2 md:gap-4'>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/Year-Frame.svg" alt="Year icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>سنة الصنع</span>
                                        <span className='text-black text-sm font-bold'>
                                            {specificCar.year}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/speed-Frame.svg" alt="speed icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>عدد الكيلومتر</span>
                                        <span className='text-black text-sm font-bold'>
                                            {desc?.mileage} كم
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/solar-Frame.svg" alt="fueltype icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>نوع الوقود</span>
                                        <span className='text-black text-sm font-bold'>
                                            {desc?.fuelType}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/Vector.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>ناقل الحركة</span>
                                        <span className='text-black text-sm font-bold'>
                                            {desc?.transmission}
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <ul className='grid grid-cols-4 gap-2 md:gap-4'>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/location.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>الموقع</span>
                                        <span className='text-black text-sm font-bold'>
                                            {specificCar.make}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/color.svg" alt="color icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>اللون</span>
                                        <span className='text-black text-sm font-bold'>
                                            {specificCar.color}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/solar-Frame.svg" alt="fueltype icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>الحالة</span>
                                        <span className='text-black text-sm font-bold'>
                                            {specificCar?.status}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 py-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="/icon/Vector.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2 items-center justify-center'>
                                        <span className='text-gray-400 text-sm'>سعة المحرك</span>
                                        <span className='text-black text-sm font-bold'>
                                            {desc?.engineCapacity}
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 mt-5">
                            <h1 className='text-lg font-bold mb-5'>بيانات البائع</h1>
                            <ul className='flex flex-col gap-4 items-start'>
                                <li className=''>
                                    <p className='flex flex-row gap-2 items-center justify-center text-black font-bold'>
                                        الأسم: {specificCar?.user?.name}
                                    </p>
                                </li>
                                <li className=''>
                                    <p className='flex flex-row gap-2 items-center justify-center text-black font-bold'>
                                        رقم الهاتف: {specificCar?.user?.phone}
                                    </p>
                                </li>
                                <li className=''>
                                    <p className='flex flex-row gap-2 items-center justify-center text-black font-bold'>
                                        تاريخ النشر: {specificCar?.created_at?.split("T")[0]}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};