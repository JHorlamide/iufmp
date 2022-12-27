import { ISuperAgentRequest, IUpdateSuperAgentRequest } from "types/superAgent";
import { axiosPrivate } from "./axios";

export const getAllSuperAgents = async (
  pageNumber: number = 0,
  superAgentPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/super-agents?pageNumber=${pageNumber}&superAgentPerPage=${superAgentPerPage}`,
    options
  );
  return data.data;
};

export const registerNewSuperAgent = async (
  superAgentObj: ISuperAgentRequest
) => {
  const { data } = await axiosPrivate.post("/super-agents", superAgentObj);
  return data;
};

export const getSuperAgentDetails = async (
  superAgentId: string | undefined
) => {
  const { data } = await axiosPrivate.get(`/super-agents/${superAgentId}`);
  return data;
};

export const updateSuperAgent = async (
  superAgentObj: IUpdateSuperAgentRequest
) => {
  const { data } = await axiosPrivate.put("/super-agents/edit", superAgentObj);
  return data;
};

export const removeSuperAgent = async (superAgentId: string) => {
  const { data } = await axiosPrivate.delete(`/super-agents/${superAgentId}`);
  return data;
};

export const getTotalNumberOfCreatedSuperAgents = async () => {
  const { data } = await axiosPrivate.get("/super-agents/total-record");
  return data;
};

export const getTotalNumOfByMonth = async (options = {}) => {
  const { data } = await axiosPrivate.get(
    `/super-agents/record-by-month`,
    options
  );

  return data;
};
