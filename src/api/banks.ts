import { IBankRequest, IUpdateBankRequest } from "types/bank";
import { axiosPrivate } from "./axios";

export const getBanks = async (
  pageNumber: number = 0,
  bankPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/banks?pageNumber=${pageNumber}&bankPerPage=${bankPerPage}`,
    options
  );

  return data.data;
};

export const createBank = async (bankObj: IBankRequest) => {
  const { data } = await axiosPrivate.post("/banks", bankObj);
  return data;
};

export const getBankDetails = async (bankId: string | undefined) => {
  const { data } = await axiosPrivate.get(`/banks/${bankId}`);
  return data;
};

export const updateBankDetails = async (bankObj: IUpdateBankRequest) => {
  const { data } = await axiosPrivate.put("/banks/edit", bankObj);
  return data;
};

export const deleteBank = async (bankId: string) => {
  const { data } = await axiosPrivate.delete(`/banks/${bankId}`);
  return data;
};
