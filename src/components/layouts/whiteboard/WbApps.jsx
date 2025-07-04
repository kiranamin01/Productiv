import { Suspense, useState, useCallback } from "react";
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
    { id: "mainGoals", type: "mainGoals" },
    { id: "dailyGoals", type: "dailyGoals" },
    { id: "todoList", type: "todoList" },
    { id: "planner", type: "planner" },
    { id: "motivation", type: "motivation" },
    { id: "pomodoro", type: "pomodoro" },
    { id: "musicPlayer", type: "musicPlayer" },
  ];

  // State for daily goals tasks (if you want to sync subgoals as subtasks)
  const [tasks, setTasks] = useState([]);

  // Handler to add subgoal as subtask to first daily goal
  const addSubTaskFromMainGoal = useCallback((subGoalContent) => {
    setTasks((prev) => {
      if (prev.length === 0) return prev;
      const firstTask = prev[0];
      const newSubTask = {
        id: `${firstTask.id}-sub-${Date.now()}`,
        content: subGoalContent,
        completed: false,
      };
      return prev.map((task, idx) =>
        idx === 0
          ? { ...task, subTasks: [...(task.subTasks || []), newSubTask] }
          : task
      );
    });
  }, []);

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
                {item.type === "mainGoals" && (
                  <LazyMainGoals onSubGoalCheckbox={addSubTaskFromMainGoal} />
                )}
                {item.type === "dailyGoals" && (
                  <LazyDailyGoals tasks={tasks} setTasks={setTasks} />
                )}
                {item.type === "todoList" && <LazyToDoList />}
                {item.type === "planner" && <LazyPlanner />}
                {item.type === "motivation" && <LazyMotivation />}
                {item.type === "pomodoro" && <LazyPomodoro />}
                {item.type === "musicPlayer" && <LazyMusicPlayer />}
              </Suspense>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WbApps;
