import TaskModal from "./TaskModal";
import { useState } from "react";
const Task = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border rounded-lg px-4 pb-16 pt-[58px] w-full  text-sm bg-[#E3EBFC] shadow-lg lg:max-w-[]">
      <div className="absolute top-4 left-4 rounded-[30px] bg-[#f1f5fe] py-1 px-3   flex items-center">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <img src="/calendar.svg" />
          5/03/2024
        </p>
      </div>
      <p className="text-sm text-gray-700 w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="absolute bottom-2 right-2">
        <img src="/more.svg" onClick={() => setIsOpen((prev) => !prev)} />
        {isOpen && <TaskModal />}
      </div>
    </div>
  );
};

export default Task;
