import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';

export const contextData = createContext();
export default function StoreContextProvider({ children }) {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [userLogedin, setUserLogedin] = useState(false);
    const isUserLogedin = () => {
        setUserLogedin(!userLogedin);
    }
    const handleStateOfSideBar = () => {
        setSideBarIsOpen(!sideBarIsOpen);
    }

    const [loginData, setLoginData] = useState(null);
    // تسجيل الخروج
    const handleLogout = () => {
        Cookies.remove("loginData");
        isUserLogedin();
        setLoginData(null);
    };
    // أول ما يفتح الكومبوننت، يقرأ من الكوكي ويخزن في state
    const cookieValue = Cookies.get("loginData");
    useEffect(() => {
        if (cookieValue) {
            try {
                const parsedData = JSON.parse(cookieValue);
                setLoginData(parsedData);
                setUserLogedin(true);
            } catch (err) {
                Cookies.remove("loginData");
                setUserLogedin(false);
                setLoginData(null);
            }
        } else {
            setUserLogedin(false);
            setLoginData(null);
        }
    }, [cookieValue]);


    // حذف إعلان
    const deleteListing = async (listingId) => {
        console.log(listingId);
        try {
            if (!cookieValue) return;

            const { token } = JSON.parse(cookieValue);

            await axios.delete(
                `https://adminsand.alrmoz.com/api/user/listings/${listingId}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        } catch (error) {
            console.error("Error deleting listing:", error);
        }
    };
    return (
        <contextData.Provider value={{ sideBarIsOpen, handleStateOfSideBar, handleLogout, loginData, setLoginData, userLogedin, isUserLogedin, deleteListing }}>
            {children}
        </contextData.Provider>
    )
}