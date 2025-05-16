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
        className="dark-mode-btn text-center dark-mode-btn2"
      >
        {isDark ? (
          <FcLandscape className="text-3xl p-1" />
        ) : (
          <FcNightLandscape className="text-3xl p-1" />
        )}
      </button>
    </>
  );
};

export default DarkMode;
