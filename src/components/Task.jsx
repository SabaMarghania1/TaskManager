import { format } from "date-fns";
import TaskModal from "./TaskModal";
import { useEffect, useRef, useState } from "react";

const Task = ({
  task,
  isOpen,
  toggleOpen,
  bg = "#E3EBFC",
  randomBg = false,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(task.description);

  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (isEdit) {
      adjustTextareaHeight();
    }
  }, [isEdit, description]);

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
    toggleOpen();
  };

  const handleSaveEdit = () => {
    mutate({ id: task.id, newDescription: description });
    setIsEdit(false);
  };

  const formattedDate = format(new Date(task.created_at), "MM/dd/yyyy");

  const bgColors = [
    "#E3EBFC",
    "#FBF0E4",
    "#E4F6FC",
    "#FCE4E4",
    "#E7E4FC",
    "#FCE4F5",
  ];

  const [appliedBgColor] = useState(() => {
    return randomBg
      ? bgColors[Math.floor(Math.random() * bgColors.length)]
      : bg;
  });

  return (
    <div
      className="break-inside-avoid relative border rounded-lg px-4 pb-16 pt-[58px] text-sm shadow-lg mb-4 max-w-[253px]"
      style={{ backgroundColor: appliedBgColor }}
    >
      {formattedDate && (
        <div className="absolute top-4 left-4 rounded-[30px] bg-[#f1f5fe] py-1 px-3 flex items-center">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <img src="/calendar.svg" alt="Calendar icon" />
            {formattedDate}
          </p>
        </div>
      )}
      <textarea
        cols={24}
        readOnly={!isEdit}
        value={description}
        className="bg-transparent border-none outline-none resize-none break-words overflow-hidden w-full h-auto px-2 py-1 rounded-md"
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

      {task.complate && <p className="text-green-500">Complete</p>}
      {!isEdit && (
        <div className="absolute top-4 right-2 xl:top-[85%]">
          <img src="/more.svg" alt="More options" onClick={toggleOpen} />
        </div>
      )}
      {isOpen && (
        <TaskModal task={task} handleEdit={handleEdit} onClose={toggleOpen} />
      )}
    </div>
  );
};

export default Task;
