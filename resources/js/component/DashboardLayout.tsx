import React, { ReactNode } from 'react';
import Sidebar from './sidebar';
import TopBar from './TopBar';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 p-8 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
