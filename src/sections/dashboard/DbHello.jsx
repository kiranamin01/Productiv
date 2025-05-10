import React from "react";

import DarkMode from "../../DarkMode.jsx";

const DbHello = () => {
  return (
    <div className="db-hello bg-orange-400/70 dark:bg-amber-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Hello, <span className="wave-animation">👋🏻</span>
          <span className="text-amber-200 dark:text-blue-200 font-[Poppins]">
            Kiran Amin{" "}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-2 py-1  text-sm font-semibold flex items-center justify-center gap-3 text-slate-800 dark:text-white bg-gradient-to-r from-amber-100 to-amber-200 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-slate-700/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/30 dark:border-slate-600">
          <DarkMode />
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-500 dark:after:bg-slate-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out">
            Change Theme
          </span>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DbHello;
