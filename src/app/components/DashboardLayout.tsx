import React from "react";
import SidebarContent from "./SidebarContent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="relative z-10 flex flex-col h-auto col-span-3 space-y-8 bg-white shadow-lg shadow-gray-400">
        {/* Sidebar */}
        <SidebarContent />
      </div>

      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default Layout;
