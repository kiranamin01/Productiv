import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Task component with drag-and-drop functionality
const Task = ({ id, content, status, onDelete, onEdit, onStatusChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const statusColors = {
    todo: "bg-yellow-50 border-l-4 border-yellow-400",
    inProgress: "bg-blue-50 border-l-4 border-blue-400",
    done: "bg-green-50 border-l-4 border-green-400",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${statusColors[status]} p-3 rounded-lg shadow-sm mb-2 cursor-move hover:shadow-md transition-all duration-200`}
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-medium">{content}</p>
        <div className="flex gap-2 items-center">
          <select
            value={status}
            onChange={(e) => onStatusChange(id, e.target.value)}
            onPointerDown={(e) => e.stopPropagation()} // Prevent drag from starting on select interaction
            className="text-sm bg-white/50 border border-gray-200 rounded px-2 py-1 hover:bg-white transition-colors"
          >
            <option value="todo">📋 To Do</option>
            <option value="inProgress">🔄 In Progress</option>
            <option value="done">✅ Done</option>
          </select>
          <button
            onClick={() => onEdit(id)}
            onPointerDown={(e) => e.stopPropagation()} // Prevent drag from starting on button click
            className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-100 transition-colors"
            title="Edit"
            type="button"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(id)}
            onPointerDown={(e) => e.stopPropagation()} // Prevent drag from starting on button click
            className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
            title="Delete"
            type="button"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

const ToDoList = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => ({
        ...prev,
        todo: [
          ...prev.todo,
          { id: Date.now(), content: newTask, status: "todo" },
        ],
      }));
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => {
      const newTasks = { ...prev };
      Object.keys(newTasks).forEach((status) => {
        newTasks[status] = newTasks[status].filter(
          (task) => task.id !== taskId
        );
      });
      return newTasks;
    });
  };

  const editTask = (taskId) => {
    Object.keys(tasks).forEach((status) => {
      const task = tasks[status].find((t) => t.id === taskId);
      if (task) {
        setEditingTask(task);
        setNewTask(task.content);
      }
    });
  };

  const updateTask = () => {
    if (editingTask && newTask.trim()) {
      setTasks((prev) => {
        const newTasks = { ...prev };
        Object.keys(newTasks).forEach((status) => {
          newTasks[status] = newTasks[status].map((task) =>
            task.id === editingTask.id ? { ...task, content: newTask } : task
          );
        });
        return newTasks;
      });
      setNewTask("");
      setEditingTask(null);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prev) => {
      const newTasks = { ...prev };
      let taskToMove;

      // Find and remove the task from its current status
      Object.keys(newTasks).forEach((status) => {
        const taskIndex = newTasks[status].findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          [taskToMove] = newTasks[status].splice(taskIndex, 1);
        }
      });

      // Add the task to its new status column
      if (taskToMove) {
        newTasks[newStatus] = [
          ...newTasks[newStatus],
          { ...taskToMove, status: newStatus },
        ];
      }

      return newTasks;
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      // Handle drag and drop logic here
      const activeTask = Object.keys(tasks).reduce((found, status) => {
        return found || tasks[status].find((task) => task.id === active.id);
      }, null);

      if (activeTask) {
        handleStatusChange(active.id, over.data.current.sortable.containerId);
      }
    }
  };

  return (
    <div className="to-do-list bg-purple-100 p-4 rounded-lg shadow dashboard-card-box">
      <div className="header flex justify-between items-center mb-4">
        <h3 className="font-bold text-purple-800 text-xl font-[Poppins] flex items-center gap-2">
          ✅ TO-DO-LIST <span className="text-purple-800/50">(Kanban)</span>
        </h3>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && (editingTask ? updateTask() : addTask())
          }
          placeholder="Add a new task..."
          className="flex-1 p-2 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
        />
        <button
          onClick={editingTask ? updateTask : addTask}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-sm hover:shadow flex items-center gap-2"
        >
          {editingTask ? "📝 Update" : "➕ Add"}
        </button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="space-y-4">
          {Object.entries(tasks).map(([status, statusTasks]) => (
            <div
              key={status}
              className="status bg-white/30 backdrop-blur-sm p-4 rounded-lg border border-purple-200/30 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-semibold text-purple-800 capitalize">
                  {status === "todo" && "📋 To Do"}
                  {status === "inProgress" && "🔄 In Progress"}
                  {status === "done" && "✅ Done"}
                </h4>
                <span className="text-sm text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                  {statusTasks.length}
                </span>
              </div>
              {/* // In the SortableContext section, make sure to pass the props
              explicitly */}
              <SortableContext
                items={statusTasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
              >
                {statusTasks.map((task) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    status={task.status}
                    onDelete={deleteTask}
                    onEdit={editTask}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </SortableContext>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default ToDoList;
