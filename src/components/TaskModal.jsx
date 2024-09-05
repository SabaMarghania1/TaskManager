import React from "react";
import { CiStar, CiEdit } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const TaskModal = ({ handleDelete, handleEdit }) => {
  return (
    <div className="px-4 py-2 flex flex-col bg-white lg:w-[180px] w-40 rounded-lg shadow-custom">
      <div className="flex gap-3 py-[10px] ">
        <CiStar size={22} />
        Importance
      </div>
      <div className="flex gap-3 py-[10px] ">
        <FaRegCircle size={22} />
        Complete
      </div>
      <div className="flex gap-3 py-[10px] " onClick={handleEdit}>
        <CiEdit size={22} />
        Edit
      </div>
      <div className="flex gap-3 py-[10px]" onClick={handleDelete}>
        <AiOutlineDelete size={22} />
        Delete
      </div>
    </div>
  );
};

export default TaskModal;
