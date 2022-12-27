import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

axiosPrivate.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem("sanefToken");
    config.headers = {
      Authorization: `Bearer ${token}`
    };

    return config;
  },

  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;

      const token = localStorage.getItem("sanefToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const payload = {
        accessToken: token,
        refreshToken: refreshToken
      };

      const apiResponse = await axios.post("/auth/refresh-token", payload);
      localStorage.setItem("sanefToken", apiResponse.data.accessToken);
      localStorage.setItem("refreshToken", apiResponse.data.refreshToken);

      prevRequest.headers[
        "Authorization"
      ] = `Bearer ${apiResponse.data.accessToken}`;

      return axiosPrivate(prevRequest);
    }

    if (
      error?.response?.status === 403 &&
      error?.response?.message === "jwt expired"
    ) {
      alert("Jwt Expired");
      window.location.replace("/login");
      toast.error(`${error?.response?.message}`);
      return axiosPrivate(prevRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
