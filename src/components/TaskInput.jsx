import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useTodoMutations } from "../hooks/useTodoMutation";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function TaskInput() {
  const { user } = useUser();
  const [newTodo, setNewTodo] = useState("");
  const { insertTodoMutation } = useTodoMutations();
  const { t } = useTranslation();

  function handleAddTodo(e) {
    e.preventDefault();

    if (newTodo) {
      insertTodoMutation.mutate({
        user_id: user.id,
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
          placeholder={t("addTask")}
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
