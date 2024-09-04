import React, { useState } from "react";

export default function TaskInput() {
  const [newTask, setNewTask] = useState("");

  return (
    <form className="relative flex justify-center">
      <div className="relative w-full lg:max-w-[542px]">
        <input
          className="w-full text-[1rem] placeholder:text-[#252931] pl-14 py-3 rounded-lg shadow-custom"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <span className="absolute top-3 left-4">
          <img src="/add.svg" alt="add-icon" className="w-6 h-6" />
        </span>
      </div>
    </form>
  );
}
