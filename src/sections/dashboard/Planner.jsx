import React from "react";

const Planner = () => {
  return (
    <div className="planner bg-pink-100 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-pink-800 text-xl font-[Poppins] flex items-center gap-2">
        📝 Planner
      </h3>
      <textarea
        className="w-full p-2 rounded border border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Plan your schedule..."
        rows="4"
      />
    </div>
  );
};

export default Planner;
