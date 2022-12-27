import React, { useDebugValue } from "react";
import AuthContext from "context/AuthProvider";
import { AuthContextType } from "context/AuthProvider";

const useAuth = () => {
  const { authUser } = React.useContext(AuthContext) as AuthContextType;
  useDebugValue(authUser, (authUser) =>
    authUser?.user ? "Logged In" : "Logged Out"
  );

  return React.useContext(AuthContext);
};

export default useAuth;
