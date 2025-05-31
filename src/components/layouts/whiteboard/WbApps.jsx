import { Suspense } from "react";
import {
  LazyMainGoals,
  LazyDailyGoals,
  LazyToDoList,
  LazyPlanner,
  LazyMotivation,
  LazyPomodoro,
  LazyMusicPlayer,
} from "@/components/features/whiteboard/LazyComponents";

const WbApps = () => {
  const wbItems = [
    { id: "mainGoals", component: <LazyMainGoals /> },
    { id: "dailyGoals", component: <LazyDailyGoals /> },
    { id: "todoList", component: <LazyToDoList /> },
    { id: "planner", component: <LazyPlanner /> },
    { id: "motivation", component: <LazyMotivation /> },
    { id: "pomodoro", component: <LazyPomodoro /> },
    { id: "musicPlayer", component: <LazyMusicPlayer /> },
  ];
  return (
    <div className="whiteboard-app w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 bg-whiteboard p-4">
      {wbItems.map((item) => (
        <div key={item.id} className="w-full">
          <div className="component-wrapper transition-all duration-300 ease-in-out bg-transparent relative group backdrop-blur-sm rounded-lg shadow-lg">
            <div className="w-full h-full bg-none">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-32"></div>
                  </div>
                }
              >
                {item.component}
              </Suspense>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WbApps;
