import { useDeleteTodo } from "../hooks/useDeleteTodo";
import TaskModal from "./TaskModal";
import { useState } from "react";
const Task = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteTodoMutation = useDeleteTodo();

  const handleDelete = () => {
    deleteTodoMutation.mutate(task.id);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative border rounded-lg px-4 pb-16 pt-[58px] w-full  text-sm bg-[#E3EBFC] shadow-lg max-w-full">
      <div className="absolute top-4 left-4 rounded-[30px] bg-[#f1f5fe] py-1 px-3   flex items-center">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <img src="/calendar.svg" />
          5/03/2024
        </p>
      </div>
      <p className="text-sm text-gray-700 w-full">{task.description}</p>
      <div className="absolute top-0 right-0  xl:-top-[-80%] xl:-right-0 ">
        <img src="/more.svg" onClick={() => setIsOpen((prev) => !prev)} />
      </div>
      <div className="absolute right-6 z-10  md: top-0 xl:-right-[150px] xl:top-[100%]">
        {isOpen && <TaskModal handleDelete={handleDelete} />}
      </div>
    </div>
  );
};

export default Task;
