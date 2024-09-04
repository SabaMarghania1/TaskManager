import React, { useState } from "react";
import { useInsertTodo } from "../hooks/useInsertTodo";
import { useUser } from "@clerk/clerk-react";

export default function TaskInput() {
  const { user: user_id } = useUser();
  const [newTodo, setNewTodo] = useState("");
  const { mutate: insertTodo } = useInsertTodo();

  function handleAddTodo(e) {
    e.preventDefault();

    if (newTodo) {
      insertTodo({
        user_id,
        description: newTodo,
        complate: false,
        important: false,
      });
    }

    setNewTodo("");
  }

  return (
    <form className="relative flex justify-center" onSubmit={handleAddTodo}>
      <div className="relative w-full lg:max-w-[542px]">
        <input
          className="w-full text-[1rem] placeholder:text-[#252931] pl-14 py-3 rounded-lg shadow-custom"
          placeholder="Add a task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <span className="absolute top-3 left-4">
          <img src="/add.svg" alt="add-icon" className="w-6 h-6" />
        </span>
      </div>
    </form>
  );
}
