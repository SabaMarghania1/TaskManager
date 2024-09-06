import { format } from "date-fns";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import TaskModal from "./TaskModal";
import { useEffect, useRef, useState } from "react";
import useEditTodo from "../hooks/useEditTodo";
import useCompleteTodo from "../hooks/useCompleteTodo";
import { useUser } from "@clerk/clerk-react";

const Task = ({ task, isOpen, toggleOpen }) => {
  const { user } = useUser();

  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(task.description);

  const deleteTodoMutation = useDeleteTodo();
  const { mutate } = useEditTodo();
  const completeTodoMutation = useCompleteTodo();

  const textareaRef = useRef(null);

  const handleDelete = () => {
    deleteTodoMutation.mutate(task.id);
    toggleOpen();
  };

  const handleComplete = () => {
    completeTodoMutation.mutate({
      id: task.id,
      userId: user.id,
    });
    console.log(task);
  };

  const handleEdit = () => {
    setIsEdit(true);
    toggleOpen();
  };

  const handleSaveEdit = () => {
    mutate({ id: task.id, description });
    setIsEdit(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [description]);

  const formattedDate = format(new Date(task.created_at), "MM/dd/yyyy");

  return (
    <div className="relative border rounded-lg px-4 pb-16 pt-[58px]  text-sm bg-[#E3EBFC] shadow-lg w-[243px] xl-[252px]">
      <div className="absolute top-4 left-4 rounded-[30px] bg-[#f1f5fe] py-1 px-3 flex items-center">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <img src="/calendar.svg" alt="Calendar icon" />
          {formattedDate}
        </p>
      </div>
      <textarea
        cols={24}
        readOnly={!isEdit}
        value={description}
        className="bg-transparent border-none outline-none resize-none overflow-hidden w-full h-auto min-h-[100px] px-2 py-1 rounded-md"
        ref={textareaRef}
        onChange={(e) => setDescription(e.target.value)}
      />
      {isEdit && (
        <button
          className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleSaveEdit}
        >
          Save
        </button>
      )}
      {!isEdit && (
        <div className="absolute top-4 right-2 xl:top-[85%]">
          <img src="/more.svg" alt="More options" onClick={toggleOpen} />
        </div>
      )}
      <div className="absolute right-6 z-10 md:top-0 xl:right-[150px] xl:top-[200px]">
        {isOpen && (
          <TaskModal
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
