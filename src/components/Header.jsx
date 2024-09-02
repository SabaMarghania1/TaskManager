import React from "react";

export default function Header({ toggleSidebar }) {
  return (
    <div>
      <header className="container flex items-center justify-between w-full border-[#C7CAD0] border-solid border-b-[1px] py-2">
        <img
          src="/hamburger.svg"
          alt="mobile icon"
          className="md:hidden"
          onClick={() => toggleSidebar()}
        />
        {/* PlaceHOlder */}
        <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>

        <div className="flex justify-center gap-3 items-center">
          <img src="/search.svg" alt="search icon" />
          <div className="w-[1px] h-4 bg-[#82868F]"></div>
          <img src="/user.svg" alt="user icon" />
        </div>
      </header>
    </div>
  );
}
