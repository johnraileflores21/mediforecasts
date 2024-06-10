import React, { useState } from 'react';

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-teal-600 text-white p-4 shadow-md flex justify-between items-center w-full">
            <div className="relative ml-auto">
                <button onClick={toggleDropdown} className="relative z-10 block rounded-md bg-teal-800 p-2 focus:outline-none">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V9a6 6 0 10-12 0v5c0 .829-.34 1.584-.895 2.11L4 17h5m6 0v2a2 2 0 11-4 0v-2m6 0H9" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-teal-800 rounded-md shadow-lg overflow-hidden z-20">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-600 hover:text-white">Notification 1</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-600 hover:text-white">Notification 2</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-600 hover:text-white">Notification 3</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBar;
