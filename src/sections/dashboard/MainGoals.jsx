import React from "react";

const MainGoals = ({ id, size, onPin }) => {
  return (
    <div className="main-goals bg-blue-100 p-4 rounded-lg shadow dashboard-card-box wb-card-size">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-blue-800 text-xl font-[Poppins] flex items-center gap-2">
          🎯 Main Goals
        </h3>
        <button
          onClick={() => onPin(id)}
          className="pinbtn p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
          title={size === 2 ? "Unpin" : "Pin"}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            {size === 2 ? (
              <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
            ) : (
              <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z" />
            )}
          </svg>
        </button>
      </div>
      <textarea
        className="w-full p-2 rounded border border-blue-200 focus:ring12 focus:ring-blue-400 focus:outline-none font-[Poppins] text-lg text-background placeholder:text-gray-400"
        placeholder="Enter your main goals..."
        rows="4"
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default MainGoals;
