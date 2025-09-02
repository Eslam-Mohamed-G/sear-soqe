import React, { createContext } from 'react'

export const contextData = createContext();
export default function StoreContextProvider({ children }) {
    return (
        <contextData.Provider value={}>
            {children}
        </contextData.Provider>
    )
}