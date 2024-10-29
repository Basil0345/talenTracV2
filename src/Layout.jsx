import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const {isSidebarCollapsed} = useContext(AppContext);

  return (
    <div className="flex h-screen overflow-hidden">
    <SideBar/>
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Navbar/>
      <main>
          <div className={`${isSidebarCollapsed?"ml-16":"ml-64"} mt-14 max-w-screen-2xl p-4 md:p-6 2xl:p-10`}>
          <Outlet/>
         </div>
        </main>
    </div>
  </div>
  )
}

export default Layout