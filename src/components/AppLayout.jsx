import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-1  grid-rows-[60px_1fr] md:grid-cols-[290px_auto] lg:grid-rows-[68px 1fr] h-screen ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Header toggleSidebar={toggleSidebar} />

      <Outlet />
    </div>
  );
};

export default AppLayout;
