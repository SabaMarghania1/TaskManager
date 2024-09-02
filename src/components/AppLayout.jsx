import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = ({ isAuthenticated }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr] md:grid-cols-[200px_1fr] lg:grid-rows-[68px 1fr] h-screen w-full">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Header toggleSidebar={toggleSidebar} />

      <Outlet />
    </div>
  );
};

export default AppLayout;
