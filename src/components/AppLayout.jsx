import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default AppLayout;
