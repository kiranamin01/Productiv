import { React, useState } from "react";

import DbHello from "../sections/dashboard/DbHello.jsx";
import DbWelcome from "../sections/dashboard/DbWelcome.jsx";
import MainGoals from "../sections/dashboard/MainGoals.jsx";
import DailyGoals from "../sections/dashboard/DailyGoals.jsx";
import ToDoList from "../sections/dashboard/ToDoList.jsx";
import Planner from "../sections/dashboard/Planner.jsx";
import Motivation from "../sections/dashboard/Motivation.jsx";
import Pomodoro from "../sections/dashboard/Pomodoro.jsx";
import MusicPlayer from "../sections/dashboard/MusicPlayer.jsx";

// import DB_Day from "../assets/day-db.jpg";
// import DB_Night from "../assets/night-db.jpg";

// Create a context for sharing drag data between components

// Create a wrapper component for sortable items

const Dashboard = () => {
  const handlePinComponent = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, size: item.size === 2 ? 1 : 2 } : item
      )
    );
  };

  const [items, setItems] = useState([
    {
      id: "mainGoals",
      component: (
        <MainGoals id="mainGoals" size={1} onPin={handlePinComponent} />
      ),
      size: 1,
    },
    { id: "dailyGoals", component: <DailyGoals />, size: 1 },
    { id: "todoList", component: <ToDoList />, size: 1 },
    { id: "planner", component: <Planner />, size: 1 },
    { id: "motivation", component: <Motivation />, size: 1 },
    { id: "pomodoro", component: <Pomodoro />, size: 1 },
    { id: "musicPlayer", component: <MusicPlayer />, size: 1 },
  ]);

  // Add a function to handle cross-component drag events

  return (
    <div className="dashboard-section min-h-screen bg-dotted dark:bg-gray-950 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] dark:[background-size:16px_16px]">
      <div className="p-6 sm:p-8">
        <DbHello />
        <DbWelcome />

        <div className="whiteboard-panel flex justify-between mb-4 bg-amber-200 w-full rounded-xl my-4 py-2 px-4">
          <div className="wb-panel-text font-[Poppins] flex justify-center">
            <h2 className="text-gray-800 font-semibold text-lg lg:text-xl flex items-center gap-2">
              <span role="img" aria-label="whiteboard">
                📝
              </span>
              WhiteBoard Panel
              <span role="img" aria-label="sparkles">
                ✨
              </span>
            </h2>
          </div>
          <div className="wb-panel-btn">
            <button>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="ds-whiteboard w-full grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4 gap-4 p-4">
          {items.map((item) => (
            <div key={item.id}>
              <div
                className={`component-wrapper transition-all duration-300 ease-in-out bg-transparent ${
                  item.component.props.size === 2
                    ? "sm:col-span-2 lg:col-span-2 xl:col-span-2 transform hover:scale-[1.02]"
                    : "transform hover:scale-[1.01]"
                } relative group backdrop-blur-sm rounded-lg shadow-lg`}
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                {item.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
