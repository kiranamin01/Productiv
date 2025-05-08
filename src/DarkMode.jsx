import React, { useState, useEffect } from "react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-btn text-center">
      {isDark ? (
        <WiDaySunny className="text-4xl" />
      ) : (
        <WiNightClear className="text-4xl" />
      )}
    </button>
  );
};

export default DarkMode;
