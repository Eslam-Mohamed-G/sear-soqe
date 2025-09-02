import React, { createContext, useState } from 'react'

export const contextData = createContext();
export default function StoreContextProvider({ children }) {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const handleStateOfSideBar = () => {
        setSideBarIsOpen(!sideBarIsOpen);
    }
    return (
        <contextData.Provider value={{sideBarIsOpen, handleStateOfSideBar}}>
            {children}
        </contextData.Provider>
    )
}