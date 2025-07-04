import React, { useState, useEffect } from "react";
import InputBox from "@/components/atoms/InputBox";
import { CiCircleChevDown } from "react-icons/ci";

// SubGoal component for subtasks under each main goal
const SubGoal = ({
  subGoal,
  onToggle,
  onDelete,
  setEditingSubGoalId,
  setNewSubGoal,
  onSubGoalCheckbox = { onSubGoalCheckbox },
}) => (
  <li className="flex items-center gap-2 bg-blue-100 p-2 rounded">
    <input
      type="checkbox"
      checked={subGoal.completed}
      onChange={() => {
        onToggle(subGoal.id);
        if (onSubGoalCheckbox) {
          onSubGoalCheckbox(subGoal.content);
        }
      }}
      className="form-checkbox h-4 w-4 text-blue-600"
    />
    <span className={`flex-grow ${subGoal.completed ? "line-through" : ""}`}>
      {subGoal.content}
    </span>
    <button
      onClick={() => {
        setNewSubGoal(subGoal.content);
        setEditingSubGoalId(subGoal.id);
      }}
      className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-100"
    >
      ✏️
    </button>
    <button
      onClick={() => onDelete(subGoal.id)}
      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100"
    >
      🗑️
    </button>
  </li>
);

const MainGoalItem = ({
  goal,
  idx,
  onEdit,
  onDelete,
  onSubGoalsChange,
  onSubGoalCheckbox,
}) => {
  const [showSubGoals, setShowSubGoals] = useState(false);
  const [subGoals, setSubGoals] = useState(goal.subGoals || []);
  const [newSubGoal, setNewSubGoal] = useState("");
  const [editingSubGoalId, setEditingSubGoalId] = useState(null);

  useEffect(() => {
    setSubGoals(goal.subGoals || []);
  }, [goal.subGoals]);

  useEffect(() => {
    onSubGoalsChange(idx, subGoals);
    // eslint-disable-next-line
  }, [subGoals]);

  const handleAddOrUpdateSubGoal = () => {
    if (newSubGoal.trim()) {
      if (editingSubGoalId) {
        setSubGoals((prev) =>
          prev.map((sg) =>
            sg.id === editingSubGoalId ? { ...sg, content: newSubGoal } : sg
          )
        );
        setEditingSubGoalId(null);
      } else {
        setSubGoals((prev) => [
          ...prev,
          {
            id: `${idx}-sub-${Date.now()}`,
            content: newSubGoal,
            completed: false,
          },
        ]);
      }
      setNewSubGoal("");
    }
  };

  const handleToggleSubGoal = (subGoalId) => {
    setSubGoals((prev) =>
      prev.map((sg) =>
        sg.id === subGoalId ? { ...sg, completed: !sg.completed } : sg
      )
    );
  };

  const handleDeleteSubGoal = (subGoalId) => {
    setSubGoals((prev) => prev.filter((sg) => sg.id !== subGoalId));
    if (editingSubGoalId === subGoalId) {
      setEditingSubGoalId(null);
      setNewSubGoal("");
    }
  };

  return (
    <li className="saveddailygoals mb-2 text-gray-800 font-[Poppins] bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col relative">
      <div className="flex items-center justify-items-start gap-5">
        <button
          className="more-li hover:bg-blue-300/50 rounded-full hover:cursor-pointer transition-colors duration-200 p-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowSubGoals((prev) => !prev);
          }}
        >
          <CiCircleChevDown
            className={`text-3xl transform transition-transform ${
              showSubGoals ? "rotate-180 text-blue-600" : "text-blue-400"
            }`}
          />
        </button>
        <span className="flex-grow">
          {goal.content}
          {subGoals && subGoals.length > 0 && (
            <span className="ml-2 text-xs bg-blue-200 px-1 rounded">
              {subGoals.length}
            </span>
          )}
        </span>
        <span className="flex items-center gap-3 relative z-20">
          <button
            className="hover:bg-blue-300/50 p-1 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit(idx);
            }}
          >
            ✏️
          </button>
          <button
            className="hover:bg-blue-300/50 p-1 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete(idx);
            }}
          >
            🗑️
          </button>
        </span>
      </div>
      <div
        className={`subgoal-section transition-all duration-300 ${
          showSubGoals ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="subgoal-list ml-10 mt-3 space-y-2">
          {subGoals && subGoals.length > 0 ? (
            subGoals.map((subGoal) => (
              <SubGoal
                key={subGoal.id}
                subGoal={subGoal}
                onToggle={handleToggleSubGoal}
                onDelete={handleDeleteSubGoal}
                setEditingSubGoalId={setEditingSubGoalId}
                setNewSubGoal={setNewSubGoal}
                onSubGoalCheckbox={onSubGoalCheckbox} // <-- FIXED: use the prop from arguments
              />
            ))
          ) : (
            <li className="text-gray-500">No daily/subgoals yet</li>
          )}
          <li className="flex items-center gap-2">
            <input
              type="text"
              value={newSubGoal}
              onChange={(e) => setNewSubGoal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddOrUpdateSubGoal();
                }
              }}
              placeholder={
                editingSubGoalId
                  ? "Edit daily/subgoal...."
                  : "Add a daily/subgoal...."
              }
              className="flex-1 p-1 rounded border border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white z-10 pointer-events-auto"
            />
            <button
              type="button"
              onClick={handleAddOrUpdateSubGoal}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 z-10 pointer-events-auto"
            >
              {editingSubGoalId ? "Update" : "Add"}
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

const MainGoals = ({ onSubGoalCheckbox }) => {
  // Store goals as an array of objects with subGoals
  const [mainGoals, setMainGoals] = useState(() => {
    try {
      const savedGoals = localStorage.getItem("mainGoals");
      const parsed = savedGoals ? JSON.parse(savedGoals) : [];
      // Ensure structure: { content, subGoals }
      return Array.isArray(parsed)
        ? parsed.map((g) =>
            typeof g === "string"
              ? { content: g, subGoals: [] }
              : { ...g, subGoals: g.subGoals || [] }
          )
        : [];
    } catch (e) {
      localStorage.removeItem("mainGoals");
      return [];
    }
  });
  const [newGoal, setNewGoal] = useState("");
  const [editingGoal, setEditingGoal] = useState(null); // index of goal being edited, or null

  useEffect(() => {
    localStorage.setItem("mainGoals", JSON.stringify(mainGoals));
  }, [mainGoals]);

  const addGoal = () => {
    if (newGoal.trim() === "") return;
    setMainGoals([...mainGoals, { content: newGoal.trim(), subGoals: [] }]);
    setNewGoal("");
  };

  const startEditGoal = (idx) => {
    setEditingGoal(idx);
    setNewGoal(mainGoals[idx].content);
  };

  const updateGoal = () => {
    if (editingGoal === null || newGoal.trim() === "") return;
    const updatedGoals = [...mainGoals];
    updatedGoals[editingGoal] = {
      ...updatedGoals[editingGoal],
      content: newGoal.trim(),
    };
    setMainGoals(updatedGoals);
    setEditingGoal(null);
    setNewGoal("");
  };

  const deleteGoal = (idx) => {
    const updatedGoals = mainGoals.filter((_, i) => i !== idx);
    setMainGoals(updatedGoals);
    if (editingGoal === idx) {
      setEditingGoal(null);
      setNewGoal("");
    }
  };

  // Handle subGoals update for a main goal
  const handleSubGoalsChange = (goalIdx, updatedSubGoals) => {
    setMainGoals((prev) =>
      prev.map((goal, idx) =>
        idx === goalIdx ? { ...goal, subGoals: updatedSubGoals } : goal
      )
    );
  };

  return (
    <div className="main-goals bg-blue-100 p-4 rounded-lg shadow min-h-[26rem]">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-blue-800 text-xl font-[Poppins] flex items-center gap-2">
          🎯 Main Goals
        </h3>
      </div>

      <ul className="savedmaingoals mt-4 space-y-2">
        {mainGoals.length === 0 && (
          <li className="text-gray-400 italic">No goals yet. Add one above!</li>
        )}
        {mainGoals.map((goal, idx) => (
          <MainGoalItem
            key={idx}
            goal={goal}
            idx={idx}
            onEdit={startEditGoal}
            onDelete={deleteGoal}
            onSubGoalsChange={handleSubGoalsChange}
            editingGoal={editingGoal}
            setEditingGoal={setEditingGoal}
            setNewGoal={setNewGoal}
            onSubGoalCheckbox={onSubGoalCheckbox} // <-- Pass the prop correctly
          />
        ))}
      </ul>
      <div className="border-t-2 border-blue-600/30 mt-2 sm:mt-3"></div>
      <div className="input-box flex flex-col sm:flex-row gap-2 sm:gap-0 my-3 sm:my-5 relative z-10">
        <InputBox
          className="flex-1 p-1.5 sm:p-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none shadow-sm transition duration-200 font-[Poppins] sm:mr-2 bg-blue-100 text-sm sm:text-base text-black/80 placeholder:text-gray-400"
          placeholder={
            editingGoal !== null ? "Edit goal..." : "Enter your main goals..."
          }
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              editingGoal !== null ? updateGoal() : addGoal();
            }
          }}
        />
        <button
          className="bg-blue-600 wb-card-btn relative z-10 text-center w-full sm:w-auto text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          onClick={() => (editingGoal !== null ? updateGoal() : addGoal())}
        >
          {editingGoal !== null ? "📝 Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default MainGoals;
