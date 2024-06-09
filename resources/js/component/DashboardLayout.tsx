import React from 'react';
import Sidebar from './sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-6 bg-gray-100 min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;