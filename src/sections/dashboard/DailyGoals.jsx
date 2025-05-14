import React, { useState } from "react";
import InputBox from "../../components/whiteboard/InputBox";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Draggable Task Component
const DraggableTask = ({ id, content, onEdit, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-2 text-gray-800 font-[Poppins] bg-green-50 border-l-4 border-green-400 p-3 rounded-lg shadow-sm cursor-move hover:shadow-md transition-all duration-200 flex justify-between"
    >
      {content}
      <span className="gap-2">
        <button
          className="hover:bg-green-300/50 p-1 rounded-full"
          onClick={() => onEdit(id)}
          onPointerDown={(e) => e.stopPropagation()}
        >
          ✏️
        </button>
        <button
          className="hover:bg-green-300/50 ml-5 p-1 rounded-full"
          onClick={() => onDelete(id)}
          onPointerDown={(e) => e.stopPropagation()}
        >
          🗑️
        </button>
      </span>
    </li>
  );
};

const DailyGoals = () => {
  const [tasks, setTasks] = useState([
    { id: "1", content: "Complete project" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      const newId = String(Date.now());
      setTasks((prev) => [...prev, { id: newId, content: newTask }]);
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

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // If dropped within the same component
    if (active.id !== over?.id && over?.id) {
      // Check if the target is within this component
      const isInternalDrag = tasks.some((task) => task.id === over.id);

      if (isInternalDrag) {
        setTasks((tasks) => {
          const oldIndex = tasks.findIndex((task) => task.id === active.id);
          const newIndex = tasks.findIndex((task) => task.id === over.id);
          return arrayMove(tasks, oldIndex, newIndex);
        });
      }
      // If dropped outside, the parent Dashboard component will handle it
    }
  };

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
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
      <div className="input-box flex my-5">
        <InputBox
          className="flex-1 p-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none shadow-sm transition duration-200 font-[Poppins] mr-2"
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
