import React, { useState, useEffect, useCallback } from "react";
import InputBox from "../../components/whiteboard/InputBox";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CiCircleChevDown } from "react-icons/ci";

// Draggable Task Component
const DraggableTask = ({
  id,
  content,
  onEdit,
  onDelete,
  subTasks: initialSubTasks = [],
  onSubTasksChange,
}) => {
  const [showSubTasks, setShowSubTasks] = useState(false);
  const [subTasks, setSubTasks] = useState(initialSubTasks);
  const [newSubTask, setNewSubTask] = useState("");

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Update parent component when subtasks change
  useEffect(() => {
    // Deep comparison instead of reference comparison
    const areEqual =
      JSON.stringify(subTasks) === JSON.stringify(initialSubTasks);
    if (onSubTasksChange && !areEqual) {
      onSubTasksChange(id, subTasks);
    }
  }, [subTasks, id, onSubTasksChange, initialSubTasks]);

  // Ensure handleAddSubTask correctly updates state
  const handleAddSubTask = () => {
    console.log("handleAddSubTask called with value:", newSubTask);
    if (newSubTask.trim()) {
      const newSubTaskItem = {
        id: `${id}-sub-${Date.now()}`,
        content: newSubTask,
        completed: false,
      };
      console.log("Creating new subtask:", newSubTaskItem);

      // Use functional update to ensure we're working with the latest state
      setSubTasks((prevSubTasks) => {
        const updatedSubTasks = [...prevSubTasks, newSubTaskItem];
        console.log(
          "Updated subtasks (local DraggableTask state):",
          updatedSubTasks
        );
        return updatedSubTasks;
      });

      setNewSubTask(""); // Clear the input field
    } else {
      console.log(
        "handleAddSubTask: newSubTask is empty or only whitespace. Subtask not added."
      );
    }
  };

  const toggleSubTask = (subTaskId) => {
    setSubTasks((prevSubTasks) =>
      prevSubTasks.map((task) =>
        task.id === subTaskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteSubTask = (subTaskId) => {
    setSubTasks((prevSubTasks) =>
      prevSubTasks.filter((task) => task.id !== subTaskId)
    );
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-2 text-gray-800 font-[Poppins] bg-green-50 border-l-4 border-green-400 p-3 rounded-lg shadow-sm cursor-move hover:shadow-md transition-all duration-200 flex flex-col"
    >
      <div className="flex items-center justify-items-start gap-5">
        <button
          className="more-li hover:bg-green-300/50 rounded-full hover:cursor-pointer transition-colors duration-200 p-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(
              "Current showSubTasks state (before toggle):",
              showSubTasks
            );
            setShowSubTasks((prevShowSubTasks) => !prevShowSubTasks);
            // To see the new state, you'd log it in a useEffect dependent on showSubTasks
            // or know that console.log here will show the state *before* this update.
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <CiCircleChevDown
            className={`text-3xl transform transition-transform ${
              showSubTasks ? "rotate-180 text-green-600" : "text-green-400"
            }`}
            // Removed redundant onClick from the icon itself
          />
        </button>

        <span className="flex-grow">
          {content}
          {subTasks && subTasks.length > 0 && (
            <span className="ml-2 text-xs bg-green-200 px-1 rounded">
              {subTasks.length}
            </span>
          )}
        </span>

        <span className="flex items-center gap-3">
          <button
            className="hover:bg-green-300/50 p-1 rounded-full"
            onClick={() => onEdit(id)}
            onPointerDown={(e) => e.stopPropagation()}
          >
            ✏️
          </button>

          <button
            className="hover:bg-green-300/50 p-1 rounded-full"
            onClick={() => onDelete(id)}
            onPointerDown={(e) => e.stopPropagation()}
          >
            🗑️
          </button>
        </span>
      </div>

      <div
        className={`subtask-section transition-all duration-300 pointer-events-auto ${
          showSubTasks ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="subtask-list ml-10 mt-3 space-y-2">
          {subTasks && subTasks.length > 0 ? (
            subTasks.map((subTask) => (
              <li
                key={subTask.id}
                className="flex items-center gap-2 bg-green-100 p-2 rounded"
              >
                <input
                  type="checkbox"
                  checked={subTask.completed}
                  onChange={() => toggleSubTask(subTask.id)}
                  className="form-checkbox h-4 w-4 text-green-600"
                />
                <span
                  className={`flex-grow ${
                    subTask.completed ? "line-through" : ""
                  }`}
                >
                  {subTask.content}
                </span>
                <button
                  onClick={() => deleteSubTask(subTask.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  🗑️
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No subtasks yet</li>
          )}
          <li className="flex items-center gap-2">
            <input
              type="text"
              value={newSubTask}
              onChange={(e) => {
                // Stop event propagation
                e.stopPropagation();
                // Directly set the value without any processing
                setNewSubTask(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddSubTask();
                }
              }}
              // Prevent any click events from bubbling up
              onClick={(e) => e.stopPropagation()}
              placeholder="Add a subtask..."
              // Add pointer-events-auto to ensure the input receives events
              className="flex-1 p-1 rounded border border-green-300 focus:outline-none focus:ring-1 focus:ring-green-500 bg-white z-10 pointer-events-auto"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddSubTask();
              }}
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 z-10 pointer-events-auto"
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

const DailyGoals = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: "Complete project",
      subTasks: [{ id: "test-1", content: "Test subtask", completed: false }],
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      const newId = String(Date.now());
      setTasks((prev) => [
        ...prev,
        { id: newId, content: newTask, subTasks: [] },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setEditingTask(task);
      setNewTask(task.content);
    }
  };

  const updateTask = () => {
    if (editingTask && newTask.trim()) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id ? { ...task, content: newTask } : task
        )
      );
      setNewTask("");
      setEditingTask(null);
    }
  };

  const handleSubTasksChange = useCallback((taskId, updatedSubTasks) => {
    console.log("Updating subtasks for task:", taskId, updatedSubTasks);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, subTasks: updatedSubTasks } : task
      )
    );
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id && over?.id) {
      const isInternalDrag = tasks.some((task) => task.id === over.id);

      if (isInternalDrag) {
        setTasks((currentTasks) => {
          const oldIndex = currentTasks.findIndex(
            (task) => task.id === active.id
          );
          const newIndex = currentTasks.findIndex(
            (task) => task.id === over.id
          );
          return arrayMove(currentTasks, oldIndex, newIndex);
        });
      }
    }
  };
  console.log("Initial tasks:", tasks);

  return (
    <div className="daily-goals bg-green-100 p-4 rounded-lg shadow whiteboard-card-box wb-card-size">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-green-800 text-xl font-[Poppins] flex items-center gap-2">
          📅 Daily Goals
        </h3>
      </div>
      <div className="goals-list rounded py-2 px-3 shadow-md shadow-gray-300">
        <h4 className="font-bold mb-2 text-green-800 font-[Poppins]">
          Today&apos;s Tasks
        </h4>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul className="list-disc ml-4">
              {tasks.map((task) => (
                <DraggableTask
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  subTasks={task.subTasks || []}
                  onSubTasksChange={handleSubTasksChange}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
      <div className="border-t-2 border-green-600/30 mt-3"></div>
      <div className="input-box flex my-5">
        <InputBox
          className="flex-1 p-2 rounded-lg text-background border border-green-200 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none shadow-sm transition duration-200 font-[Poppins] mr-2 placeholder:text-gray-400"
          placeholder="Enter your daily goals..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && (editingTask ? updateTask() : addTask())
          }
        />
        <button
          className="bg-green-600 wb-card-btn"
          onClick={editingTask ? updateTask : addTask}
        >
          {editingTask ? "📝 Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default DailyGoals;
