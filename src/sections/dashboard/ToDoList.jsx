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
  // Ensure 'id' passed to useSortable is a string if it's not already.
  // However, consistency is key; if task IDs are numbers, use numbers everywhere for dnd-kit.
  // For this example, we'll assume IDs are consistently strings as per changes in ToDoList.
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: String(id) }); // Ensure id is a string for useSortable
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
            onClick={() => {
              console.log(`[Task] Edit button clicked for ID: ${id}`);
              onEdit(id);
            }}
            onPointerDown={(e) => e.stopPropagation()} // Prevent drag from starting on button click
            className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-100 transition-colors"
            title="Edit"
            type="button"
          >
            ✏️
          </button>
          <button
            onClick={() => {
              console.log(`[Task] Delete button clicked for ID: ${id}`);
              onDelete(id);
            }}
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
  const [editingTask, setEditingTask] = useState(null); // Stores the whole task object being edited

  const addTask = () => {
    if (newTask.trim()) {
      const newId = String(Date.now()); // Ensure ID is a string
      setTasks((prev) => ({
        ...prev,
        todo: [...prev.todo, { id: newId, content: newTask, status: "todo" }],
      }));
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    console.log("[ToDoList] deleteTask called with taskId:", taskId);
    setTasks((prev) => {
      const newTasks = { ...prev };
      Object.keys(newTasks).forEach((statusKey) => {
        newTasks[statusKey] = newTasks[statusKey].filter(
          (task) => String(task.id) !== String(taskId) // Compare as strings
        );
      });
      return newTasks;
    });
  };

  const editTask = (taskId) => {
    console.log("[ToDoList] editTask called with taskId:", taskId);
    let taskToEdit = null;
    // Find the task across all statuses
    for (const statusKey in tasks) {
      const foundTask = tasks[statusKey].find(
        (task) => String(task.id) === String(taskId) // Compare as strings
      );
      if (foundTask) {
        taskToEdit = foundTask;
        break;
      }
    }

    if (taskToEdit) {
      console.log("[ToDoList] editTask - task found:", taskToEdit);
      setEditingTask(taskToEdit); // Set the entire task object
      setNewTask(taskToEdit.content);
    } else {
      console.warn("[ToDoList] editTask - task NOT found with taskId:", taskId);
    }
  };

  const updateTask = () => {
    if (editingTask && newTask.trim()) {
      console.log(
        "[ToDoList] updateTask called for task:",
        editingTask.id,
        "New content:",
        newTask
      );
      setTasks((prev) => {
        const newTasks = { ...prev };
        // The task being edited retains its original status unless explicitly changed by handleStatusChange
        const originalStatus = editingTask.status;

        Object.keys(newTasks).forEach((statusKey) => {
          newTasks[statusKey] = newTasks[statusKey].map((task) =>
            String(task.id) === String(editingTask.id) // Compare as strings
              ? { ...task, content: newTask, status: originalStatus } // Update content, keep original status
              : task
          );
        });
        return newTasks;
      });
      setNewTask("");
      setEditingTask(null);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    console.log(
      `[ToDoList] handleStatusChange called for taskId: ${taskId}, newStatus: ${newStatus}`
    );
    setTasks((prev) => {
      const newTasks = { ...prev };
      let taskToMove;
      let originalStatusOfTask;

      // Find and remove the task from its current status
      Object.keys(newTasks).forEach((currentStatusKey) => {
        const taskIndex = newTasks[currentStatusKey].findIndex(
          (task) => String(task.id) === String(taskId) // Compare as strings
        );
        if (taskIndex !== -1) {
          originalStatusOfTask = currentStatusKey;
          [taskToMove] = newTasks[currentStatusKey].splice(taskIndex, 1);
        }
      });

      if (taskToMove) {
        console.log(
          `[ToDoList] Moving task:`,
          taskToMove,
          `from status: ${originalStatusOfTask} to status: ${newStatus}`
        );
        if (!newTasks[newStatus]) {
          newTasks[newStatus] = []; // Ensure the target status array exists
        }
        newTasks[newStatus].push({ ...taskToMove, status: newStatus });
      } else {
        console.warn(
          `[ToDoList] handleStatusChange: Task with id ${taskId} not found to move.`
        );
      }
      return newTasks;
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      console.log(
        "[ToDoList] handleDragEnd: No 'over' target. Drag cancelled."
      );
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id); // Can be a task ID or a column ID (statusKey)

    console.log(
      "[ToDoList] handleDragEnd: activeId:",
      activeId,
      "overId:",
      overId
    );

    // Find the task being dragged
    let activeTask = null;
    let originalStatus = null;
    for (const statusKey in tasks) {
      const found = tasks[statusKey].find(
        (task) => String(task.id) === activeId
      );
      if (found) {
        activeTask = found;
        originalStatus = statusKey;
        break;
      }
    }

    if (!activeTask) {
      console.error(
        "[ToDoList] handleDragEnd: Active task not found in state for id:",
        activeId
      );
      return;
    }

    // Determine the new status/column
    // 'over.data.current.sortable.containerId' is the ID of the SortableContext if dropped on an item
    // 'over.id' is the ID of the SortableContext if dropped directly on the column
    const newStatus =
      over.data.current?.sortable?.containerId ||
      (Object.prototype.hasOwnProperty.call(tasks, overId) ? overId : null);

    if (newStatus && newStatus !== originalStatus) {
      console.log(
        `[ToDoList] handleDragEnd: Calling handleStatusChange for task ${activeId} from ${originalStatus} to ${newStatus}`
      );
      handleStatusChange(activeId, newStatus);
    } else if (newStatus && newStatus === originalStatus) {
      console.log(
        `[ToDoList] handleDragEnd: Task ${activeId} dropped in the same column ${newStatus}. No status change.`
      );
      // Implement reordering logic here if needed
    } else {
      console.log(
        `[ToDoList] handleDragEnd: Could not determine valid new status or no status change needed. Original: ${originalStatus}, Target container/item: ${overId}`
      );
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
          {" "}
          {/* This maintains the vertical stacking of columns */}
          {Object.entries(tasks).map(([statusKey, statusTasks]) => (
            <div
              key={statusKey}
              className="status bg-white/30 backdrop-blur-sm p-4 rounded-lg border border-purple-200/30 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-semibold text-purple-800 capitalize">
                  {statusKey === "todo" && "📋 To Do"}
                  {statusKey === "inProgress" && "🔄 In Progress"}
                  {statusKey === "done" && "✅ Done"}
                </h4>
                <span className="text-sm text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full ml-auto">
                  {statusTasks.length}
                </span>
              </div>
              <SortableContext
                id={statusKey} // ID for the sortable context (e.g., "todo", "inProgress")
                items={statusTasks.map((task) => String(task.id))} // Ensure task IDs are strings
                strategy={verticalListSortingStrategy}
              >
                {statusTasks.map((task) => (
                  <Task
                    key={String(task.id)} // Ensure key is also string
                    id={String(task.id)} // Pass id as string
                    content={task.content}
                    status={task.status}
                    onDelete={deleteTask}
                    onEdit={editTask}
                    onStatusChange={handleStatusChange}
                  />
                ))}
                {statusTasks.length === 0 && (
                  <div className="text-center py-4 text-purple-500/50 italic">
                    No tasks here
                  </div>
                )}
              </SortableContext>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default ToDoList;
