import React, { useEffect, useRef } from "react";
import { CiStar, CiEdit } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useTodoMutations } from "../hooks/useTodoMutation";

const TaskModal = ({ task, onClose, handleEdit }) => {
  const {
    completeTodoMutation,
    deleteTodoMutation,
    updateTodoMutation,
    toggleImportantMutation,
  } = useTodoMutations();

  const handleComplete = () => {
    completeTodoMutation.mutate({ id: task.id });
  };

  const handleDelete = () => {
    deleteTodoMutation.mutate(task.id);
  };

  const handleToggleImportant = () => {
    toggleImportantMutation.mutate({ id: task.id, important: task.important });
  };

  return (
    <div className="absolute right-0 inset-0 bottom-0 lg:bottom-auto z-50">
      <div className="px-4 py-2 bg-white lg:w-[200px] w-[160px] rounded-lg shadow-custom">
        <div className="flex gap-3 py-[10px]" onClick={handleToggleImportant}>
          <CiStar size={22} />
          Importance
        </div>
        <div
          className={`flex gap-3 py-[10px] ${task.complate && "hidden"}`}
          onClick={handleComplete}
        >
          <FaRegCircle size={22} />
          Complete
        </div>
        <div
          className={`flex gap-3 py-[10px] ${task.complate && "hidden"}`}
          onClick={handleEdit}
        >
          <CiEdit size={22} />
          Edit
        </div>
        <div className="flex gap-3 py-[10px]" onClick={handleDelete}>
          <AiOutlineDelete size={22} />
          Delete
        </div>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-500 text-white rounded  px-3 py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
