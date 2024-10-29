import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import InputField from './InputField';

const Navbar = () => {
    const {isSidebarCollapsed, setIsSidebarCollapsed} = useContext(AppContext);

  return (
    <div
    className="bg-white shadow-md fixed flex justify-between items-center px-4 py-3 z-10  md:w-auto gap-2 lg:px-6"
    style={{ left: isSidebarCollapsed ? '4rem' : '16rem', right: '0' }}
  >
    <button
      className="text-2xl focus:outline-none block "
      onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
    >
      ☰
    </button>
    <div className="flex gap-2 w-full md:w-auto">
      <InputField placeholder="Employee Search..." searchType="employee"/>
      <InputField placeholder="Department Search..." searchType="department"/>
    </div>
    <div className="flex items-center gap-2 cursor-pointer">
      <p className="text-sm sm:text-sm flex-1">Arvind V</p>
      <div className="w-8 h-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLsEUHMQTc0Rj0RdXsNQAGSnDbUpZ0KLuCQ&s"
          alt=""
          className="rounded-full border border-gray-300 object-contain"
          draggable="false"
        />
      </div>
    </div>
  </div>  )
}

export default Navbar