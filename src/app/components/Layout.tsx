import React from "react";

interface DashboardHeaderProps {
  heading: string;
  subHeading: string;
}

interface DashboardMainViewProp {
  children: React.ReactNode;
  className?: string;
}

export const DashboardMainView = ({
  children,
  className
}: DashboardMainViewProp) => {
  return (
    <div
      className={`bg-gray-100 pt-8 pl-10 pr-10 space-y-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

const DashboardHeader = ({ heading, subHeading }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col w-full pt-5 pl-10 bg-white py-7">
      <h1 className="text-[32px] font-bold">{heading}</h1>
      <p className="text-[14px]">{subHeading}</p>
    </div> //h-1/6  height: 16.666667%
  );
};

export default DashboardHeader;
