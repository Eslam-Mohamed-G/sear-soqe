import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';

export default function SpecificCarAd() {
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
                    <h1>{specificCar.name} {specificCar.model}</h1>
                    <h1 className='text-primaryColor text-lg font-bold'>ج.م {specificCar.price}</h1>
                    <div className="grid grid-cols-1 grid-rows-1">
                        <div className="">
                            <ul className='grid grid-cols-4 gap-4'>
                                <li className='flex flex-col items-center gap-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2'>
                                        <span>سنة الصنع</span>
                                        <span>
                                            {specificCar.year}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2'>
                                        <span>عدد الكيلومتر</span>
                                        <span>
                                            {specificCar.year}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2'>
                                        <span>نوع الوقود</span>
                                        <span>
                                            {desc?.fuelType}
                                        </span>
                                    </p>
                                </li>
                                <li className='flex flex-col items-center gap-2 overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500'>
                                    <img src="./icon/Frame.svg" alt="location icon" className="w-4 h-4" />
                                    <p className='flex flex-col gap-2'>
                                        <span>ناقل الحركة</span>
                                        <span>
                                            {desc?.transmission}
                                        </span>
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