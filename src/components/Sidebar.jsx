import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-[#F6F6F7] border-r-[1px] border-solid border-[#c7CaD0] text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <div className="flex flex-col mt-[101px] ml-6 ">
        <NavLink className="p-4" to="/">
          My Day
        </NavLink>
        <NavLink className={`p-4 `} to="/important">
          Important
        </NavLink>
      </div>
      <button
        className="absolute right-2 top-4 md:hidden"
        onClick={toggleSidebar}
      >
        X
      </button>
    </aside>
  );
}
