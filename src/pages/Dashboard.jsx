import { React } from "react";

import DbHello from "../sections/dashboard/DbHello.jsx";
import DbWelcome from "../sections/dashboard/DbWelcome.jsx";
import MainGoals from "../sections/dashboard/MainGoals.jsx";
import DailyGoals from "../sections/dashboard/DailyGoals.jsx";
import ToDoList from "../sections/dashboard/ToDoList.jsx";
import Planner from "../sections/dashboard/Planner.jsx";
import Motivation from "../sections/dashboard/Motivation.jsx";
import Pomodoro from "../sections/dashboard/Pomodoro.jsx";
import MusicPlayer from "../sections/dashboard/MusicPlayer.jsx";

import DB_Day from "../assets/day-db.jpg";
import DB_Night from "../assets/night-db.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-section min-h-screen bg-dotted dark:bg-gray-950 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] dark:[background-size:16px_16px]">
      <div className="p-6 sm:p-8">
        <DbHello />
        <DbWelcome />
        <div className="ds-whiteboard w-full grid grid-cols-4 gap-4 p-4">
          <MainGoals />
          <DailyGoals />
          <ToDoList />
          <Planner />
          <Motivation />
          <Pomodoro />
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
