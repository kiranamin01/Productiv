import React from "react";

const ToDoList = () => {
  return (
    <div className="to-do-list bg-purple-100 p-4 rounded-lg shadow dashboard-card-box">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-purple-800 text-xl font-[Poppins] flex items-center gap-2">
          ✅ TO-DO-LIST / TASK
        </h3>
      </div>
      <textarea
        className="w-full p-2 rounded border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Enter your tasks..."
        rows="4"
      />
    </div>
  );
};

export default ToDoList;
