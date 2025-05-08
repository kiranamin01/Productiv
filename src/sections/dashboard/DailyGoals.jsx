import React from "react";

const DailyGoals = () => {
  return (
    <div className="daily-goals bg-green-100 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-green-800 text-xl font-[Poppins] flex items-center gap-2">
        📅 Daily Goals
      </h3>
      <textarea
        className="w-full p-2 rounded border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Enter your daily goals..."
        rows="4"
      />
    </div>
  );
};

export default DailyGoals;
