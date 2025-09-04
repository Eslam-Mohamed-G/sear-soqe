import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

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
                setLoginData(JSON.parse(cookieValue));
            } catch (err) {
                Cookies.remove("loginData");
            }
        }
    }, [cookieValue]);

    useEffect(() => {
        const loginData = Cookies.get("loginData");
        if (loginData) {
            setUserLogedin(true);
        } else {
            setUserLogedin(false);
        }
    }, []);

    return (
        <contextData.Provider value={{ sideBarIsOpen, handleStateOfSideBar, handleLogout, loginData, setLoginData, userLogedin, isUserLogedin }}>
            {children}
        </contextData.Provider>
    )
}