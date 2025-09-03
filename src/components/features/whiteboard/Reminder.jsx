import React, { useState, useEffect, useRef } from "react";
import InputBox from "@/components/atoms/InputBox";

const Reminder = () => {
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toastTimeout = useRef(null);

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminders.forEach((reminder) => {
        if (
          !reminder.notified &&
          new Date(reminder.dateTime).getTime() <= now.getTime()
        ) {
          setToastMsg(`🔔 Reminder: ${reminder.task}`);
          setShowToast(true);
          setReminders((prev) =>
            prev.map((r) =>
              r.id === reminder.id ? { ...r, notified: true } : r
            )
          );
          if (toastTimeout.current) clearTimeout(toastTimeout.current);
          toastTimeout.current = setTimeout(() => setShowToast(false), 5000);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [reminders]);

  const handleAddOrUpdate = () => {
    if (!task.trim() || !date || !time) return;
    const dateTime = new Date(`${date}T${time}`);
    if (editingId) {
      setReminders((prev) =>
        prev.map((r) =>
          r.id === editingId
            ? { ...r, task, dateTime, notified: false }
            : r
        )
      );
      setEditingId(null);
    } else {
      setReminders((prev) => [
        ...prev,
        {
          id: Date.now(),
          task,
          dateTime,
          notified: false,
        },
      ]);
    }
    setTask("");
    setDate("");
    setTime("");
  };

  const handleEdit = (reminder) => {
    setTask(reminder.task);
    setDate(reminder.dateTime.slice(0, 10));
    setTime(reminder.dateTime.slice(11, 16));
    setEditingId(reminder.id);
  };

  const handleDelete = (id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTask("");
      setDate("");
      setTime("");
    }
  };

  const handleUpdateTime = (id) => {
    const reminder = reminders.find((r) => r.id === id);
    if (reminder) {
      setEditingId(id);
      setTask(reminder.task);
      setDate(reminder.dateTime.slice(0, 10));
      setTime(reminder.dateTime.slice(11, 16));
      setShowToast(false);
    }
  };

  return (
    <div className="reminder-card bg-orange-100 p-4 rounded-lg shadow dashboard-card-box max-w-full overflow-x-auto w-full">
      <div className="header flex flex-wrap justify-between items-center mb-4">
        <h3 className="font-bold text-orange-800 text-xl font-[Poppins] flex items-center gap-2">
          ⏰ Reminder{" "}
          <span className="text-orange-800/50 text-base sm:text-lg">(Task + Date/Time)</span>
        </h3>
      </div>

      <div className="mb-4 flex flex-col gap-2 w-full">
        <InputBox
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Reminder task..."
          className="w-full p-2 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none shadow-sm transition duration-200 text-gray-900 placeholder:text-gray-400"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="min-w-[120px] p-2 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none shadow-sm transition duration-200 text-gray-900 w-full"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="min-w-[120px] p-2 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none shadow-sm transition duration-200 text-gray-900 w-full"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-orange-600 flex wb-card-btn px-4 py-2 rounded-lg text-white text-lg text-center hover:bg-orange-700 transition-colors w-auto"
            style={{ gridColumn: "span 2" }}
          >
            {editingId ? "📝 Update" : "➕ Add"}
          </button>
        </div>
      </div>

      <div className="space-y-4 w-full">
        <ul className="list-disc ml-4">
          {reminders.length === 0 && (
            <li className="text-center py-4 text-orange-500/50 italic">
              No reminders yet
            </li>
          )}
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 bg-orange-50 p-3 rounded-lg shadow-sm mb-2 max-w-full w-full"
            >
              <span className="flex-grow font-medium text-gray-800 break-words w-full sm:w-auto text-center sm:text-left">
                <span className="inline-flex items-center justify-center gap-4 w-full">
                  <span className="text-lg">{reminder.task}</span>
                  <span className="text-xs bg-orange-200 px-2 py-1 rounded whitespace-nowrap">
                    {new Date(reminder.dateTime).toLocaleString()}
                  </span>
                </span>
              </span>
              <div className="flex gap-2 flex-wrap justify-center sm:justify-end w-full sm:w-auto">
                <button
                  onClick={() => handleEdit(reminder)}
                  className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-100 transition-colors"
                  title="Edit"
                  type="button"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(reminder.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                  title="Delete"
                  type="button"
                >
                  🗑️
                </button>
                {!reminder.notified && (
                  <span className="text-xs text-orange-600 ml-2">⏳ Pending</span>
                )}
                {reminder.notified && (
                  <button
                    onClick={() => handleUpdateTime(reminder.id)}
                    className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-100 transition-colors"
                    title="Update Time"
                    type="button"
                  >
                    🔄 Update Time
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-2 mx-10 rounded-lg shadow-lg z-50 flex items-center gap-2 w-[90vw] max-w-sm">
          <span className="truncate">{toastMsg}</span>
          <button
            onClick={() => setShowToast(false)}
            className="ml-4 text-white hover:text-orange-200"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Reminder;