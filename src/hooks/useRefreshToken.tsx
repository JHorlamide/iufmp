import useAuth from "./useAuth";
import axios from "api/axios";
import { AuthType } from "context/AuthProvider";
import { AuthContextType } from "context/AuthProvider";

const useRefreshToken = () => {
  const { saveAuth } = useAuth() as AuthContextType;

  const refresh = async () => {
    const token = localStorage.getItem("sanefToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    };

    const body = JSON.stringify({ refreshToken });

    const { data } = await axios.post("/auth/refresh-token", body, config);
    const authData: AuthType = {
      user: data.data.user,
      accessToken: data.data.accessToken,
      refreshToken: data.data.refreshToken
    };

    saveAuth(authData);

    return data.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
