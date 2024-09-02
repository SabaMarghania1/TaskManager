import React, { useState } from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div>
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">Hello</div>
        <button className="absolute right-2 top-4" onClick={toggleSidebar}>
          X
        </button>
      </aside>
    </div>
  );
}
