import React, { useState, useEffect } from "react";

const Planner = () => {
  const [plannerText, setPlannerText] = useState(() => {
    const savedText = localStorage.getItem("plannerText");
    return savedText || "";
  });

  useEffect(() => {
    localStorage.setItem("plannerText", plannerText);
  }, [plannerText]);

  return (
    <div className="planner bg-pink-100 p-4 rounded-lg shadow dashboard-card-box min-h-[26rem]">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-pink-800 text-xl font-[Poppins] flex items-center gap-2">
          📝 Planner
        </h3>
      </div>
      <textarea
        className="w-full p-2 rounded border border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none font-[Poppins] text-lg text-background placeholder:text-gray-400"
        placeholder="Plan your schedule..."
        rows="4"
        value={plannerText}
        onChange={(e) => setPlannerText(e.target.value)}
      />
    </div>
  );
};

export default Planner;