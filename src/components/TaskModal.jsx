import React, { useState, useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CiStar, CiEdit } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useTodoMutations } from "@/hooks/useTodoMutation";
import { useTranslation } from "react-i18next";

export function TaskModal({ task, handleEdit }) {
  const { t } = useTranslation();
  const { completeTodoMutation, deleteTodoMutation, toggleImportantMutation } =
    useTodoMutations();

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleComplete = () => {
    completeTodoMutation.mutate({ id: task.id });
  };

  const handleDelete = () => {
    deleteTodoMutation.mutate(task.id);
  };

  const handleToggleImportant = () => {
    toggleImportantMutation.mutate({ id: task.id, important: task.important });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HoverCard open={isMobile ? isOpen : undefined} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <img
          className="cursor-pointer"
          src="/more.svg"
          alt="more"
          onClick={isMobile ? handleClick : undefined}
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-[160px] sm:w-[200px] rounded-lg shadow-custom z-50 bg-white">
        <div
          className="flex gap-3 py-2 cursor-pointer"
          onClick={handleToggleImportant}
        >
          <CiStar size={22} />
          {t("importance")}
        </div>
        {!task.complate && (
          <div
            className="flex gap-3 py-2 cursor-pointer"
            onClick={handleComplete}
          >
            <FaRegCircle size={22} />
            {t("complete")}
          </div>
        )}
        <div className="flex gap-3 py-2 cursor-pointer" onClick={handleEdit}>
          <CiEdit size={22} />
          {t("edit")}
        </div>
        <div className="flex gap-3 py-2 cursor-pointer" onClick={handleDelete}>
          <AiOutlineDelete size={22} />
          {t("delete")}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default TaskModal;
