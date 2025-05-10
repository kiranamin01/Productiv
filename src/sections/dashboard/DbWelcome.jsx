import { React, useState, useEffect } from "react";
import { format } from "date-fns";
import WeatherApi from "./WeatherApi";

const DbWelcome = () => {
  const [formattedDate, setFormattedDate] = useState(
    format(new Date(), "MMMM dd, yyyy HH:mm:ss")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setFormattedDate(format(new Date(), "MMMM dd, yyyy HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ds-welcome bg-amber-200 py-5 rounded my-2">
      <h2 className="text-gray-600 font-bold ml-4 text-2xl font-['Montserrat'] flex items-center gap-2">
        <span className="animate-bounce">✨</span>
        Welcome to Dashboard
        <span className="animate-pulse text-3xl">🎯</span>
      </h2>
      <div
        className="ds-text flex justify-between p-6 rounded-xl shadow-lg backdrop-blur-sm bg-white/30 
        bg-[url('/day-db.jpg')] dark:bg-[url('/night2-db.jpg')] bg-center bg-cover mt-2"
      >
        <div className="ds-text-left space-y-4 backdrop-blur-md bg-white/40 p-6 rounded-lg border border-white/20 hover:bg-white/50 transition-all duration-300">
          <div className="date-section">
            <p className="text-2xl font-[Poppins] font-semibold text-gray-800 bg-white/30 p-3 rounded-lg">
              {formattedDate.split(" ")[0]} {formattedDate.split(" ")[1]}{" "}
              {formattedDate.split(" ")[2]}
            </p>
            <div className="text-4xl font-[Orbitron] font-bold text-center flex items-center justify-center gap-2 text-gray-700 mt-2 rounded-lg">
              <span>{formattedDate.split(" ")[3].split(":")[0]}</span>
              <span className="text-gray-400 animate-pulse">:</span>
              <span>{formattedDate.split(" ")[3].split(":")[1]}</span>
              <span className="text-gray-400 animate-pulse">:</span>
              <span>{formattedDate.split(" ")[3].split(":")[2]}</span>
            </div>
          </div>

          <div className="location-section mt-4 border-t border-gray-200/30 pt-4">
            <div className="flex items-center gap-3 bg-white/30 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xl font-[Poppins] text-gray-700">
                Mumbai (MH)
              </span>
            </div>
          </div>
        </div>

        <div className="ds-text-right flex items-center backdrop-blur-md bg-white/40 p-4 rounded-lg">
          <div className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            {typeof window !== "undefined" && <WeatherApi />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbWelcome;
