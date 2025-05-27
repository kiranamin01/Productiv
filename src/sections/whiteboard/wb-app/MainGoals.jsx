import React, { useState, useEffect } from "react";

const MainGoals = () => {
  const [mainGoals, setMainGoals] = useState(() => {
    const savedGoals = localStorage.getItem("mainGoals");
    return savedGoals || "";
  });

  useEffect(() => {
    localStorage.setItem("mainGoals", mainGoals);
  }, [mainGoals]);

  return (
    <div className="main-goals bg-blue-100 p-4 rounded-lg shadow min-h-[26rem]">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-blue-800 text-xl font-[Poppins] flex items-center gap-2">
          🎯 Main Goals
        </h3>
      </div>
      <textarea
        value={mainGoals}
        onChange={(e) => setMainGoals(e.target.value)}
        className="w-full p-2 rounded border border-blue-200 focus:ring12 focus:ring-blue-400 focus:outline-none font-[Poppins] text-lg text-background placeholder:text-gray-400"
        placeholder="Enter your main goals..."
        rows="4"
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default MainGoals;
