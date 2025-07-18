// React import
import React from 'react'
// Router import
import { Outlet } from 'react-router-dom'
// Components import
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout: React.FC = () => {
    return (
        <div
            className="min-h-screen"
            style={{
            background:"linear-gradient(45deg, #8B7355 0%, #A0956B 25%, #8B7355 50%, #6B5B47 75%, #8B7355 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
        }}
      >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}