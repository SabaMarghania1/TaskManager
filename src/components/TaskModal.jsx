import React from "react";
import { CiStar, CiEdit } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const TaskModal = ({
  handleDelete,
  handleEdit,
  handleComplete,
  task,
  onClose,
  handleToggleImportant,
}) => {
  return (
    <div className="absolute lg:inset-0   lg:items-center lg:justify-center z-50">
      <div className="px-4 py-2 absolute right-0   flex flex-col bg-white lg:w-[200px] w-[160px] rounded-lg shadow-custom">
        <div
          className="flex gap-3 py-[10px] onClick"
          onClick={handleToggleImportant}
        >
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
        <div className={`flex gap-3 py-[10px]`} onClick={handleDelete}>
          <AiOutlineDelete size={22} />
          Delete
        </div>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-500 text-white rounded px-3 py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
