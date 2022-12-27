import { IUserRequest } from "types/user";
import api, { axiosPrivate } from "./axios";

export type LoginType = {
  email: string;
  password: string;
};

export const updateUserDetails = async (userObj: IUserRequest) => {
  const { data } = await axiosPrivate.put("/users/edit", userObj);
  return data;
};

export const loginUser = async (loginData: LoginType) => {
  const { data } = await api.post("/auth", loginData);
  return data;
};
