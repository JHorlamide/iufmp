import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  path: string;
  title: string;
  className: string;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
}

const RouterLink = ({
  path,
  title,
  leftIcon,
  rightIcon,
  className
}: LinkProps) => {
  return (
    <Link to={path} className={className}>
      {!!leftIcon && leftIcon}
      {title}
      {!!rightIcon && rightIcon}
    </Link>
  );
};

export default RouterLink;
