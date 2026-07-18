import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
    LayoutDashboard,
    Upload,
    MessageCircle,
    BookOpen,
    Brain
} from "lucide-react";

const links = [
    {
        name: "Dashboard",
        path: "/",
        icon: <LayoutDashboard size={20} />
    },
    {
        name: "Upload",
        path: "/upload",
        icon: <Upload size={20} />
    },
    {
        name: "Tutor",
        path: "/tutor",
        icon: <MessageCircle size={20} />
    },
    {
        name: "Notes",
        path: "/notes",
        icon: <BookOpen size={20} />
    },
    {
        name: "Quiz",
        path: "/quiz",
        icon: <Brain size={20} />
    }
];

export default function Sidebar() {
    return (
        <div className="w-64 bg-gradient-to-b from-[#6F95A3] to-[#5F8795] text-white p-6">

            <div className="flex items-center gap-3 mb-10">
                <img 
                    src={logo} 
                    alt="StudyPilot Logo" 
                    className="w-50 h-50 object-contain" 
                />
            </div>

            <div className="flex flex-col gap-4">
                {
                    links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${
                                    isActive
                                        ? "bg-white text-black"
                                        : "hover:bg-[#89AEBB]"
                                }`
                            }
                        >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}