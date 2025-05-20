import React, { useState } from "react";
import DarkMode from "../../DarkMode.jsx";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DbHello = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens or user data from localStorage if needed
    // localStorage.clear();
    // Navigate to home page
    navigate("/");
  };

  return (
    <div className="db-hello bg-orange-400/70 dark:bg-amber-800 rounded-2xl shadow-lg p-6 sm:p-8 flex justify-between items-center gap-4 text-center">
      <div className="space-y-2 text-2xl">
        <h1 className="lg:text-4xl font-[Pacifico] font-extrabold tracking-wider text-stone-50 dark:text-white flex items-center gap-3">
          Hello
          <span className="wave-animation hover:rotate-12 transition-transform">
            👋🏻
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-white to-orange-100 dark:from-amber-200 dark:to-amber-200 bg-clip-text text-transparent font-[Anton]">
            Kiran Amin{" "}
          </span>
        </h1>
      </div>

      <div className="menu flex justify-end items-center gap-3">
        {/* Menu Icon for Mobile */}
        <button
          className="lg:hidden bg-primary py-3 px-4 rounded-full flex justify-center text-white dark:text-slate-800 dark:hover:bg-orange-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="" />
        </button>

        {/* Theme and Logout Container */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex px-2 py-1 text-sm font-semibold items-center justify-center gap-3 text-slate-800 dark:text-white bg-gradient-to-r from-amber-100 to-amber-200 dark:from-slate-800 dark:to-slate-700 rounded-full lg:rounded-xl shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-slate-700/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/30 dark:border-slate-600">
            <DarkMode />
            <span className="hidden lg:flex relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-500 dark:after:bg-slate-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out">
              Change Theme
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-30 right-12 z-10 lg:hidden bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 space-y-4 ">
            <div className="flex px-2 py-1 text-sm font-semibold items-center justify-center gap-3 text-slate-800 dark:text-white bg-gradient-to-r from-amber-100 to-amber-200 dark:from-slate-800 dark:to-slate-700 rounded-full shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-slate-700/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/30 dark:border-slate-600">
              <DarkMode />
              <span>Change Theme</span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DbHello;
