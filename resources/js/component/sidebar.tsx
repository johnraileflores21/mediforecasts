import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-100% w-64 bg-teal-600 bor text-white flex flex-col">
            <div className="p-5 text-2xl font-bold border-b border-white flex items-center">
            <img src="images/acc.png" alt="Back Icon" className="w-10 h-10 mr-3" /> 
                Name
            </div>
            <nav className="flex flex-col flex-grow p-4 mt-8 space-y-2">
                <Link to="/dashboard" className="hover:bg-gray-500 p-5 float-right rounded border-b border-white flex items-center">
                <img src="images/dashboard.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Dashboard
                </Link>
                <Link to="/inventory" className="float-right hover:bg-gray-500 p-5 rounded border-b border-white flex items-center">
                <img src="images/inventory.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Inventory
                </Link>
                <Link to="/request" className="hover:bg-gray-500 p-5 rounded border-b border-white flex items-center">
                <img src="images/request.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Request
                </Link>
                <Link to="/post" className="hover:bg-gray-500 p-5 rounded border-b border-white flex items-center">
                <img src="images/post.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Community Post
                </Link>
                <Link to="/itr" className="hover:bg-gray-500 p-5 rounded border-b border-white flex items-center">
                <img src="images/record.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Individual Treatment Record
                </Link>
                <Link to="/logout" className="hover:bg-gray-500 p-5 rounded border-b border-white flex items-center">
                <img src="images/logout.png" alt="Back Icon" className="w-7 h-7 mr-3" /> 
                    Logout
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;