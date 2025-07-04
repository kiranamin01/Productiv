import { lazy } from "react";

// Lazy load all whiteboard app components
export const LazyDailyGoals = lazy(() => import("./DailyGoals"));
export const LazyMainGoals = lazy(() => import("./MainGoals"));
export const LazyMotivation = lazy(() => import("./Motivation"));
export const LazyMusicPlayer = lazy(() => import("./MusicPlayer"));
export const LazyPlanner = lazy(() => import("./Planner"));
export const LazyPomodoro = lazy(() => import("./Pomodoro"));
export const LazyToDoList = lazy(() => import("./ToDoList"));
export const LazyWeatherApi = lazy(() => import("./WeatherApi"));
