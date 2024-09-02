import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed  top-0 left-0 h-full w-8/12 md:w-[290px] bg-[#F6F6F7] border-r-[1px] border-solid border-[#c7CaD0] text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <div className="flex flex-col mt-[101px] ml-6 ">
        <NavLink
          className={({ isActive }) =>
            `p-4 rounded mr-4 flex gap-3 text-black ${
              isActive && "bg-[#E7E8EA]"
            }`
          }
          to="/"
        >
          <img src="/sun.svg" alt="sun icon" />
          My Day
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-4 rounded mr-4 flex gap-3 text-black ${
              isActive && "bg-[#E7E8EA]"
            }`
          }
          to="/important"
        >
          <img src="/star.svg" alt="sun icon" />
          Important
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-4 rounded mr-4 flex gap-3 text-black ${
              isActive && "bg-[#E7E8EA]"
            }`
          }
          to="/dashboard"
        >
          <MdOutlineSpaceDashboard size={22} />
          Dashboard
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
