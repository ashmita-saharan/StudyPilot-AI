import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import bgImage from "../../assets/bg1.png";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        /* CHANGE: Replaced bg-[#F7FAFC] with cover/center classes and the style tag */
        <div 
            className="flex h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}