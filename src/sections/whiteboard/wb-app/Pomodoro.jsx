import { React, useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            clearInterval(intervalRef.current);
            setIsActive(false);
            // Optional: Play sound or show notification
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, minutes, seconds]);

  const handlePlay = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTimeSelect = (mins) => {
    setIsActive(false);
    setMinutes(mins);
    setSeconds(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="pomodoro-timer bg-red-100 p-4 rounded-lg shadow dashboard-card-box">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-red-800 text-xl font-[Poppins] flex items-center gap-2">
          ⏲️ Pomodoro Timer
        </h3>
      </div>
      <div className="pt-box bg-gray-500 p-2 sm:p-3 rounded my-4 sm:my-8">
        <div className="pt-box-clock bg-black/70 rounded p-2 sm:p-4">
          <h4 className="pd-timer font-[Orbitron] text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white tracking-wider">
            {formatTime(Math.floor(minutes / 60))}:{formatTime(minutes % 60)}:
            {formatTime(seconds)}
          </h4>
        </div>
      </div>
      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => handleTimeSelect(25)}
          className={`px-4 py-2 rounded-full font-medium text-sm shadow-sm transform active:scale-95 transition-all duration-150 ${
            minutes === 25
              ? "bg-red-500 text-white ring-2 ring-red-300"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          25 min
        </button>
        <button
          onClick={() => handleTimeSelect(50)}
          className={`px-4 py-2 rounded-full font-medium text-sm shadow-sm transform active:scale-95 transition-all duration-150 ${
            minutes === 50
              ? "bg-red-500 text-white ring-2 ring-red-300"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          50 min
        </button>
        <button
          onClick={() => handleTimeSelect(90)}
          className={`px-4 py-2 rounded-full font-medium text-sm shadow-sm transform active:scale-95 transition-all duration-150 ${
            minutes === 90
              ? "bg-red-500 text-white ring-2 ring-red-300"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          90 min
        </button>
      </div>
      <div className="pt-switch bg-red-200 rounded-full flex justify-evenly gap-5 py-2">
        <button
          className={`play-btn pd-switch-btn ${isActive ? "opacity-50" : ""}`}
          onClick={handlePlay}
          disabled={isActive}
        >
          <FaPlay className="text-white text-xl" />
        </button>
        <button
          className={`pause-btn pd-switch-btn ${!isActive ? "opacity-50" : ""}`}
          onClick={handlePause}
          disabled={!isActive}
        >
          <FaPause className="text-white text-xl" />
        </button>
        <button className="reset-btn pd-switch-btn" onClick={handleReset}>
          <RiResetLeftLine className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
