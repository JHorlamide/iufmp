import React, { useState } from "react";
// import { IUser } from "types/user";

export interface AuthType {
  user: any;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

export interface AuthContextType {
  authUser: AuthType | null;
  saveAuth: (auth: AuthType) => void;
  logOutUser: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthType>({
    user: null,
    accessToken: "",
    refreshToken: ""
  });

  const saveAuth = (auth: AuthType) => {
    setAuthUser({
      ...authUser,
      user: auth.user,
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken
    });
  };

  const logOutUser = () => {
    saveAuth({
      user: null,
      accessToken: "",
      refreshToken: ""
    });
  };

  return (
    <AuthContext.Provider value={{ authUser, saveAuth, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
