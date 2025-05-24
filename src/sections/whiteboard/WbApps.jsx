import MainGoals from "./wb-app/MainGoals";
import DailyGoals from "./wb-app/DailyGoals";
import ToDoList from "./wb-app/ToDoList";
import Planner from "./wb-app/Planner";
import Motivation from "./wb-app/Motivation";
import Pomodoro from "./wb-app/Pomodoro";
import MusicPlayer from "./wb-app/MusicPlayer";

const WbApps = () => {
  const wbItems = [
    { id: "mainGoals", component: <MainGoals /> },
    { id: "dailyGoals", component: <DailyGoals /> },
    { id: "todoList", component: <ToDoList /> },
    { id: "planner", component: <Planner /> },
    { id: "motivation", component: <Motivation /> },
    { id: "pomodoro", component: <Pomodoro /> },
    { id: "musicPlayer", component: <MusicPlayer /> },
  ];
  return (
    <div className="whiteboard-app w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 bg-whiteboard p-4">
      {wbItems.map((item) => (
        <div key={item.id} className="w-full">
          <div className="component-wrapper transition-all duration-300 ease-in-out bg-transparent relative group backdrop-blur-sm rounded-lg shadow-lg">
            <div className="w-full h-full bg-none">{item.component}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WbApps;
