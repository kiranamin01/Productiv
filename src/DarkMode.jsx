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
        className="text-center dark-mode-btn px-3 py-2 rounded-full"
      >
        {isDark ? (
          <FcLandscape className="text-2xl" />
        ) : (
          <FcNightLandscape className="text-2xl" />
        )}
      </button>
    </>
  );
};

export default DarkMode;
