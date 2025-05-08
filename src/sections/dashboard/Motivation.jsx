import React from "react";

const Motivation = () => {
  return (
    <div className="motivation bg-yellow-100 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-yellow-800 text-xl font-[Poppins] flex items-center gap-2">
        💪 Motivation
      </h3>
      <textarea
        className="w-full p-2 rounded border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Write your motivation..."
        rows="4"
      />
    </div>
  );
};

export default Motivation;
