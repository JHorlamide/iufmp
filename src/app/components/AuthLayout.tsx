import React from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { AuthContextType } from "context/AuthProvider";

const AuthLayoutAuth = () => {
  const { authUser } = useAuth() as AuthContextType;

  const token = authUser?.accessToken;
  const user = authUser?.user;
  const location = useLocation();

  if (token === null && user === null) {
    return <NavLink to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthLayoutAuth;

//  <React.Fragment>
//    {token && user?.isAdmin ? (
//      <Outlet />
//    ) : (
//      <NavLink to="/login" state={{ from: location }} replace />
//    )}
//  </React.Fragment>;
