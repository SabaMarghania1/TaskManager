import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleOpen = (taskId) => {
    setOpenTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-1  grid-rows-[60px_1fr] md:grid-cols-[300px_auto] lg:grid-rows-[68px 1fr]  h-screen mb-10">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Header toggleSidebar={toggleSidebar} />

      <Outlet context={{ openTaskId, toggleOpen }} />
    </div>
  );
};

export default AppLayout;
