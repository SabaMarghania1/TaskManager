import { UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header({ toggleSidebar, searchTerm, setSearchTerm }) {
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const showSearch = location.pathname === "/";

  return (
    <header className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_auto] md:col-start-2 items-center border-b-[1px] border-[#C7CAD0] py-4 px-4 lg:px-8 h-[60px] relative overflow-hidden">
      <img
        src="/hamburger.svg"
        alt="mobile icon"
        className="md:hidden w-6 h-6 cursor-pointer"
        onClick={() => toggleSidebar()}
      />

      {showSearch && (
        <div
          className={`absolute md:relative md:flex md:col-start-1 items-center transition-all duration-300 ease-in-out top-0 left-0 md:right-auto ${
            isSearchVisible
              ? "w-[48%] opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-full"
          } h-full  md:translate-x-0 md:opacity-100 md:w-80 overflow-hidden`}
        >
          <input
            type="text"
            placeholder="Search a Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-[1px] border-[#82868F] px-3 py-2 rounded-md w-full h-full"
          />
        </div>
      )}

      <div className="flex gap-3 items-center md:hidden absolute right-4 z-10">
        <div className="flex items-center gap-2">
          <span className="text-[#82868F]">EN</span>
          <div className="w-[1px] h-4 bg-[#82868F]"></div>
        </div>

        <img
          src="/search.svg"
          alt="search icon"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        />
      </div>

      <div className="flex justify-center items-center md:hidden">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox:
                "w-8 h-8 rounded-full border-2 border-[#C7CAD0]",
            },
          }}
        />
      </div>

      <div className="hidden md:flex gap-3 justify-end md:col-start-2">
        <div className="flex items-center gap-2">
          <span className="text-[#82868F]">EN</span>
          <div className="w-[1px] h-4 bg-[#82868F]"></div>
        </div>

        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox:
                "w-10 h-10 rounded-full border-2 border-[#C7CAD0]",
            },
          }}
        />
      </div>
    </header>
  );
}
