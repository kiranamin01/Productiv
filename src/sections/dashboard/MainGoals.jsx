import React from "react";

const MainGoals = () => {
  return (
    <div className="main-goals bg-blue-100 p-4 rounded-lg shadow dashboard-card-box">
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
  );
};

export default MainGoals;
