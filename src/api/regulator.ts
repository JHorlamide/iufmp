import { IRegulatorRequest, IUpdateRegulatorRequest } from "types/regulator";
import { axiosPrivate } from "./axios";

export const getAllRegulators = async (
  pageNumber: number = 0,
  regulatorPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/regulators?pageNumber=${pageNumber}&regulatorPerPage=${regulatorPerPage}`,
    options
  );
  return data.data;
};

export const registerNewRegulator = async (regulatorObj: IRegulatorRequest) => {
  const { data } = await axiosPrivate.post("/regulators", regulatorObj);
  return data;
};

export const getRegulatorDetails = async (regulatorId: string | undefined) => {
  const { data } = await axiosPrivate.get(`/regulators/${regulatorId}`);
  return data;
};

export const updateRegulator = async (
  regulatorObj: IUpdateRegulatorRequest
) => {
  const { data } = await axiosPrivate.put("/regulators/edit", regulatorObj);
  return data;
};

export const removeRegulator = async (regulatorId: string | undefined) => {
  const { data } = await axiosPrivate.delete(`/regulators/${regulatorId}`);
  return data;
};
