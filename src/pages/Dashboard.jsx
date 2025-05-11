import { React, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

// Create a wrapper component for sortable items
const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

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

  const [isSortingEnabled, setSortingEnabled] = useState(false);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = [...items];
        const [removed] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, removed);
        return newItems;
      });
    }
  };

  return (
    <div className="dashboard-section min-h-screen bg-dotted dark:bg-gray-950 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] dark:[background-size:16px_16px]">
      <div className="p-6 sm:p-8">
        <DbHello />
        <DbWelcome />
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="flex justify-end mb-4 bg-amber-200 w-full rounded-xl my-4 py-2 px-4">
            <button
              onClick={() => setSortingEnabled(!isSortingEnabled)}
              className={`sortbtn px-4 py-2 mr-15 ${
                isSortingEnabled
                  ? "bg-red-600/90 hover:bg-red-700"
                  : "bg-indigo-600/90 hover:bg-indigo-700"
              } text-white rounded-lg shadow-md transition-colors duration-200 ease-in-out font-medium text-sm flex items-center gap-2`}
            >
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
              {isSortingEnabled ? "Disable Drag/Sort" : "Enable Drag/Sort"}
            </button>
          </div>
          {isSortingEnabled ? (
            <div className="ds-whiteboard w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              <SortableContext
                items={items.map((item) => item.id)}
                strategy={rectSortingStrategy}
              >
                {items.map((item) => (
                  <SortableItem key={item.id} id={item.id}>
                    <div
                      className={`component-wrapper transition-all duration-300 ease-in-out bg-transparent ${
                        item.component.props.size === 2
                          ? "sm:col-span-2 lg:col-span-2 xl:col-span-2 transform hover:scale-[1.02]"
                          : "transform hover:scale-[1.01]"
                      } relative group rounded-lg shadow-lg`}
                    >
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button
                          onClick={() => {
                            setItems(
                              items.map((i) =>
                                i.id === item.id
                                  ? { ...i, size: i.size === 2 ? 1 : 2 }
                                  : i
                              )
                            );
                          }}
                          className="righttick p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                          title={
                            item.component.props.size === 2 ? "Unpin" : "Pin"
                          }
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            {item.component.props.size === 2 ? (
                              <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                            ) : (
                              <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {item.component}
                    </div>
                  </SortableItem>
                ))}
              </SortableContext>
            </div>
          ) : (
            <div className="ds-whiteboard w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
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
          )}
        </DndContext>
      </div>
    </div>
  );
};

export default Dashboard;
