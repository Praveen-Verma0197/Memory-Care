import React from "react";
import { SideBar } from "./SideBar";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex overflow-x-hidden bg-gray-200">
      <SideBar />
      <div className="flex flex-col w-full py-6 px-10 m-3">{children}</div>
    </div>
  );
};
