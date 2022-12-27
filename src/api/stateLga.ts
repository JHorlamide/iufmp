import { axiosPrivate } from "./axios";

export const fetchState = async (options = {}) => {
  const { data } = await axiosPrivate.get("/states", options);
  return data.data;
};

export const fetchLga = async (state: string = "lagos") => {
  const { data } = await axiosPrivate.get(`/states/${state}`);
  return data.data;
};
