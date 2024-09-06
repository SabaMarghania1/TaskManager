import React, { useRef } from "react";
import { CiStar, CiEdit } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import useOutsideClick from "../hooks/useOutsideClick";

const TaskModal = ({
  handleDelete,
  handleEdit,
  handleComplete,
  handleToggleImportant, // Accept the toggle importance function
  task,
  onClose,
}) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  return (
    <div
      ref={modalRef}
      className="px-4 py-2 flex flex-col bg-white lg:w-[180px] w-40 rounded-lg shadow-custom"
    >
      <div
        className="flex gap-3 py-[10px] cursor-pointer"
        onClick={handleToggleImportant}
      >
        <CiStar
          size={22}
          className={`${task.important ? "text-yellow-500" : ""}`}
        />
        Importance
      </div>
      <div
        className={`flex gap-3 py-[10px] ${task.complate && "hidden"}`}
        onClick={!task.complate && handleComplete}
      >
        <FaRegCircle size={22} />
        Complete
      </div>
      <div
        className={`flex gap-3 py-[10px] ${task.complate && "hidden"}`}
        onClick={!task.complate && handleEdit}
      >
        <CiEdit size={22} />
        Edit
      </div>
      <div
        className={`flex gap-3 py-[10px] cursor-pointer`}
        onClick={handleDelete}
      >
        <AiOutlineDelete size={22} />
        Delete
      </div>
    </div>
  );
};

export default TaskModal;
