import React, { useState, useCallback, useEffect } from "react";
import InputBox from "../../../components/whiteboard/InputBox";
import { CiCircleChevDown } from "react-icons/ci";

const Task = ({
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
  const [editingSubTaskId, setEditingSubTaskId] = useState(null);

  // Add useEffect to sync subTasks with parent component
  useEffect(() => {
    setSubTasks(initialSubTasks);
  }, [initialSubTasks]);

  // Update useEffect to call onSubTasksChange
  useEffect(() => {
    if (onSubTasksChange) {
      onSubTasksChange(id, subTasks);
    }
  }, [subTasks, id, onSubTasksChange]);

  const handleAddSubTask = () => {
    if (newSubTask.trim()) {
      if (editingSubTaskId) {
        // Update existing subtask
        setSubTasks((prevSubTasks) =>
          prevSubTasks.map((task) =>
            task.id === editingSubTaskId
              ? { ...task, content: newSubTask }
              : task
          )
        );
        setEditingSubTaskId(null);
      } else {
        // Add new subtask
        const newSubTaskItem = {
          id: `${id}-sub-${Date.now()}`,
          content: newSubTask,
          completed: false,
        };
        setSubTasks((prevSubTasks) => [...prevSubTasks, newSubTaskItem]);
      }
      setNewSubTask("");
    }
  };

  const editSubTask = (subTaskId) => {
    const subTask = subTasks.find((task) => task.id === subTaskId);
    if (subTask) {
      setNewSubTask(subTask.content);
      setEditingSubTaskId(subTaskId);
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
    <li className="mb-2 text-gray-800 font-[Poppins] bg-green-50 border-l-4 border-green-400 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col relative">
      <div className="flex items-center justify-items-start gap-5">
        <button
          className="more-li hover:bg-green-300/50 rounded-full hover:cursor-pointer transition-colors duration-200 p-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowSubTasks((prevShowSubTasks) => !prevShowSubTasks);
          }}
        >
          <CiCircleChevDown
            className={`text-3xl transform transition-transform ${
              showSubTasks ? "rotate-180 text-green-600" : "text-green-400"
            }`}
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

        <span className="flex items-center gap-3 relative z-20">
          <button
            className="hover:bg-green-300/50 p-1 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit(id);
            }}
          >
            ✏️
          </button>

          <button
            className="hover:bg-green-300/50 p-1 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete(id);
            }}
          >
            🗑️
          </button>
        </span>
      </div>

      <div
        className={`subtask-section transition-all duration-300 ${
          showSubTasks ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
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
                  onClick={() => editSubTask(subTask.id)}
                  className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-100"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteSubTask(subTask.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100"
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
                e.stopPropagation();
                setNewSubTask(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddSubTask();
                }
              }}
              placeholder={
                editingSubTaskId ? "Edit subtask..." : "Add a subtask..."
              }
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
              {editingSubTaskId ? "Update" : "Add"}
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
      const newTaskItem = {
        id: newId,
        content: newTask,
        completed: false,
        subTasks: [],
      };
      setTasks((prev) => [...prev, newTaskItem]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    // Reset editing state if the deleted task was being edited
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
      setNewTask("");
    }
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((t) => t.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setNewTask(taskToEdit.content);
    }
  };

  const updateTask = () => {
    if (editingTask && newTask.trim()) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? { ...task, content: newTask.trim() }
            : task
        )
      );
      setNewTask("");
      setEditingTask(null);
    }
  };

  const handleSubTasksChange = useCallback((taskId, updatedSubTasks) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, subTasks: updatedSubTasks } : task
      )
    );
  }, []);

  return (
    <div className="daily-goals bg-green-100 p-2 sm:p-3 md:p-4 rounded-lg shadow min-h-[28rem] max-h-[calc(100vh-2rem)] overflow-auto">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-green-800 text-lg sm:text-xl font-[Poppins] flex items-center gap-1 sm:gap-2">
          📅 Daily Goals
        </h3>
      </div>
      <div className="goals-list rounded py-1 sm:py-2 px-2 sm:px-3 shadow-md shadow-gray-300 relative z-0 overflow-y-auto max-h-[calc(100vh-12rem)]">
        <h4 className="font-bold mb-1 sm:mb-2 text-green-800 font-[Poppins] text-base sm:text-lg">
          Today's Tasks
        </h4>
        <ul className="list-disc ml-2 sm:ml-4 space-y-2">
          {tasks.map((task) => (
            <Task
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
      </div>
      <div className="border-t-2 border-green-600/30 mt-2 sm:mt-3"></div>
      <div className="input-box flex flex-col sm:flex-row gap-2 sm:gap-0 my-3 sm:my-5 relative z-10">
        <InputBox
          className="flex-1 p-1.5 sm:p-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none shadow-sm transition duration-200 font-[Poppins] sm:mr-2 bg-green-100 text-sm sm:text-base text-black/80 placeholder:text-gray-400"
          placeholder={
            editingTask ? "Edit task..." : "Enter your daily goals..."
          }
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              editingTask ? updateTask() : addTask();
            }
          }}
        />
        <button
          className="bg-green-600 wb-card-btn relative z-10 text-center w-full sm:w-auto text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
          onClick={() => (editingTask ? updateTask() : addTask())}
        >
          {editingTask ? "📝 Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default DailyGoals;
