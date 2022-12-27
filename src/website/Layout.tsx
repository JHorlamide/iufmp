import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="max-w-full">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
