import React, { createContext, useState } from 'react'

//create context
export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
    <AppContext.Provider value={{isSidebarCollapsed,setIsSidebarCollapsed}}>
        {children}
    </AppContext.Provider>
  )
}

