import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const { isSidebarCollapsed } = useContext(AppContext);
    const [hoveredItem, setHoveredItem] = useState(null);  // Track hovered item for tooltip
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });  // Position of the tooltip

    let array = [
        { id: 1, text: "Dashboard", icon: <AiOutlineDashboard />, path: "/dashboard" },
        { id: 2, text: "Approvals", icon: <FaRegThumbsUp />, path: "/approvals" },
        { id: 3, text: "Discussion", icon: <PiChatsCircleBold />, path: "/discussion" },
        { id: 7, text: "Reports", icon: "📈", path: "/reports" },
        { id: 8, text: "Settings", icon: "⚙️", path: "/settings" },
        { id: 9, text: "Help", icon: "❓", path: "/help" },
        { id: 10, text: "Logout", icon: "🚪", path: "/logout" },
    ];
    const [listItems, setListItems] = useState(array);
    const [input, setInput] = useState('');
    const [filteredItems, setFilteredItems] = useState(listItems);

    const searchMenu = (value) => {
        const filtered = listItems.filter(item =>
            item.text.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        searchMenu(e.target.value);
    };

    const handleMouseEnter = (e, item) => {
        const { top, right } = e.currentTarget.getBoundingClientRect();
        setTooltipPosition({ x: right + 10, y: top });  // Adjust tooltip to appear beside the icon
        setHoveredItem(item.id);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div
            className={`${
                isSidebarCollapsed ? 'w-16' : 'w-64'
            } bg-blue-600 text-white flex flex-col fixed h-full shadow-md transition-all duration-300 z-20`}
        >
            <div className="p-1 flex flex-col justify-center items-center">
                <div className={`w-48 ${isSidebarCollapsed ? 'hidden' : 'block'} cursor-pointer`}>
                    <img className='object-contain' draggable="false" src={logo} alt="" />
                </div>
                {!isSidebarCollapsed && (
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto text-black"
                        value={input}
                        onChange={handleInputChange}
                    />
                )}
            </div>
            <div className="flex-grow overflow-y-auto custom-scrollbar">
                <ul className="mt-1 p-2">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <li
                                key={item.id}
                                onMouseEnter={(e) => handleMouseEnter(e, item)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `p-4 cursor-pointer flex items-center ${
                                            isSidebarCollapsed ? 'justify-center' : ''
                                        } ${isActive ? 'text-white' : 'text-gray-400'} hover:text-white`
                                    }
                                >
                                    <span className="text-lg relative">
                                        {item.icon}
                                    </span>
                                    {!isSidebarCollapsed && <span className="ml-4">{item.text}</span>}
                                </NavLink>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-400 p-4 text-center">No results found</li>
                    )}
                </ul>
            </div>

            {isSidebarCollapsed && hoveredItem && (
                <div
                    className="fixed p-2 text-xs bg-black text-white rounded-md shadow-lg z-50"
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                    }}
                >
                    {filteredItems.find(item => item.id === hoveredItem).text}
                </div>
            )}
        </div>
    );
};

export default SideBar;
