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
        <button className="px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-gray-200 dark:border-gray-600">
          <DarkMode />
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            Change Theme
          </span>
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DbHello;
