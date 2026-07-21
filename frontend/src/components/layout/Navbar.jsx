import { Bell, Search } from "lucide-react";

export default function Navbar() {

    return (

        <div className="h-20 bg-white shadow-md flex items-center justify-between px-8">

            <div>

                <h1 className="text-2xl font-bold text-slate-800">

                    StudyPilot AI

                </h1>

            </div>

            <div className="flex items-center gap-5">

                <Search className="cursor-pointer" />

                <Bell className="cursor-pointer" />

                <div className="w-10 h-10 rounded-full bg-[#7FB7C9]" />

            </div>

        </div>

    );

}