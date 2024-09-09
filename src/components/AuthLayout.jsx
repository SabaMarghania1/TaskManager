import React from "react";
import { Outlet } from "react-router-dom";
import Pattern from "../components/DesktopLoginPattern";
import { useMediaQuery } from "react-responsive";

const AuthLayout = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div
      className={`w-full h-screen flex ${
        isDesktop
          ? "justify-between items-center gap-[175px]"
          : "justify-center items-center"
      } xl:pl-[66px] xl:pr-[45px] overflow-hidden max-w-[1280px] mx-auto`}
    >
      {isDesktop && <Pattern />}

      <div className={`w-full flex justify-center items-center`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
