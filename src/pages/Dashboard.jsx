import React from "react";
import DarkMode from "../DarkMode.jsx";

import Pomodoro from "../sections/dashboard/Pomodoro.jsx";

import DB_Day from "../assets/day-db.jpg";
import DB_Night from "../assets/night-db.jpg";

import AlbumImage from "../assets/avatar-1.png";

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dashboard-section min-h-screen bg-dotted dark:bg-gray-950 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] dark:[background-size:16px_16px]">
      <div className="p-6 sm:p-8">
        <div className="bg-orange-400/70 dark:bg-amber-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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

        <div className="ds-welcome bg-amber-200 py-5 rounded my-2">
          <h2 className="text-gray-600 font-bold ml-5 text-xl font-[Poppins]">
            Welcome to DashBoard
          </h2>
          <div
            className="ds-text flex justify-between p-6 rounded-xl shadow-lg backdrop-blur-sm bg-white/30 
          bg-[url('/day-db.jpg')] dark:bg-[url('/night-db.jpg')] bg-top bg-cover mt-2"
          >
            <div className="ds-text-left space-y-3 backdrop-blur-md bg-white/40 p-4 rounded-lg">
              <p className="text-2xl font-[Poppins] font-semibold text-gray-800">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-xl font-[Poppins] flex items-center gap-2 text-gray-700">
                {new Date().toLocaleString("en-US", { weekday: "long" })}
                <span className="text-gray-400 px-2">•</span>
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="text-xl font-[Poppins] flex items-center gap-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-500"
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
                Mumbai (MH)
              </p>
            </div>
            <div className="ds-text-right flex items-center backdrop-blur-md bg-white/40 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                28°C
              </p>
            </div>
          </div>
        </div>
        <div className="ds-board w-full grid grid-cols-4 gap-4 p-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-blue-800 text-xl font-[Poppins] flex items-center gap-2">
              🎯 Main Goals
            </h3>
            <textarea
              className="w-full p-2 rounded border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none font-[Poppins] text-lg"
              placeholder="Enter your main goals..."
              rows="4"
              style={{ resize: "none" }}
            />
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-green-800 text-xl font-[Poppins] flex items-center gap-2">
              📅 Daily Goals
            </h3>
            <textarea
              className="w-full p-2 rounded border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none font-[Poppins] text-lg"
              placeholder="Enter your daily goals..."
              rows="4"
            />
          </div>

          <div className="bg-purple-100 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-purple-800 text-xl font-[Poppins] flex items-center gap-2">
              ✅ TO-DO-LIST / TASK
            </h3>
            <textarea
              className="w-full p-2 rounded border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none font-[Poppins] text-lg"
              placeholder="Enter your tasks..."
              rows="4"
            />
          </div>

          <div className="bg-pink-100 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-pink-800 text-xl font-[Poppins] flex items-center gap-2">
              📝 Planner
            </h3>
            <textarea
              className="w-full p-2 rounded border border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none font-[Poppins] text-lg"
              placeholder="Plan your schedule..."
              rows="4"
            />
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-yellow-800 text-xl font-[Poppins] flex items-center gap-2">
              💪 Motivation
            </h3>
            <textarea
              className="w-full p-2 rounded border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none font-[Poppins] text-lg"
              placeholder="Write your motivation..."
              rows="4"
            />
          </div>

          <Pomodoro />

          <div className="music-player bg-indigo-300 p-4 rounded-lg shadow dashboard-card-box">
            <h3 className="font-bold mb-2 text-indigo-800 text-xl font-[Poppins] flex items-center gap-2">
              🎵 Music Player
            </h3>
            <div className="music-player-box bg-white/30 backdrop-blur-sm rounded-xl p-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-full overflow-hidden mb-4 ${
                    isPlaying ? "animate-spin" : ""
                  }`}
                >
                  <img
                    src={AlbumImage}
                    alt="Album Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-indigo-900">
                    Song Title
                  </h4>
                  <p className="text-sm text-indigo-700">Artist Name</p>
                </div>
                <div className="w-full bg-indigo-200 rounded-full h-1 mb-4">
                  <div className="bg-indigo-600 h-1 rounded-full w-1/3"></div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 hover:bg-indigo-200 rounded-full transition-colors "
                  >
                    <svg
                      className="w-6 h-6 text-indigo-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-indigo-200 rounded-full transition-colors">
                    <svg
                      className="w-6 h-6 text-indigo-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
