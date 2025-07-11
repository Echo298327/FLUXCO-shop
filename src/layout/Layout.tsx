import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
            <Outlet />
        </div>
    );
}