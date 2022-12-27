import { axiosPrivate } from "./axios";
import { IGovernmentRequest, IUpdateGovernmentRequest } from "types/government";

export const getAllGovernments = async (
  pageNumber: number = 0,
  govPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/governments?pageNumber=${pageNumber}&govPerPage=${govPerPage}`,
    options
  );
  return data.data;
};

export const registerGovernment = async (governmentObj: IGovernmentRequest) => {
  const { data } = await axiosPrivate.post("/governments", governmentObj);
  return data;
};

export const getGovernmentDetails = async (
  governmentId: string | undefined
) => {
  const { data } = await axiosPrivate.get(`/governments/${governmentId}`);
  return data;
};

export const updateGovernmentDetails = async (
  governmentObj: IUpdateGovernmentRequest
) => {
  const { data } = await axiosPrivate.put("/governments/edit", governmentObj);
  return data;
};

export const removeGovernment = async (governmentId: string | undefined) => {
  const { data } = await axiosPrivate.delete(`/governments/${governmentId}`);
  return data;
};
