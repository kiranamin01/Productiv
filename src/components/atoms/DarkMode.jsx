import React, { useState, useEffect } from "react";
import { FcNightLandscape } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="text-center dark-mode-btn p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        {isDark ? (
          <FcLandscape className="text-lg" />
        ) : (
          <FcNightLandscape className="text-lg" />
        )}
      </button>
    </>
  );
};

export default DarkMode;