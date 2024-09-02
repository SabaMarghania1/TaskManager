import Input from "../components/Input";
import React from "react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="flex lg:w-full  items-center justify-between border-b-[1px] border-[#C7CAD0] border-solid py-4 px-4 lg:px-8 md:col-start-2 md:row-start-1 h-[60px]">
      <img
        src="/hamburger.svg"
        alt="mobile icon"
        className="md:hidden"
        onClick={() => toggleSidebar()}
      />
      {/* Placeholder */}
      <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
      {/*  */}

      <div className="flex justify-center gap-3 items-center">
        <form>
          <Input
            legend="input"
            type="email"
            id="email"
            placeholder="Enter your username or Email"
            className="hidden"
          />
        </form>
        <img src="/search.svg" alt="search icon" className="" />

        <div className="w-[1px] h-4 bg-[#82868F]"></div>
        <img src="/user.svg" alt="user icon" />
      </div>
    </header>
  );
}
