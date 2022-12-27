import { IAgentRequest, IUpdateAgent } from "types/agent";
import api, { axiosPrivate } from "./axios";

export const registerNewAgentByUser = async (agentObj: IAgentRequest) => {
  const { data } = await api.post("/agents", agentObj);
  return data;
};

export const getAllAgents = async (
  pageNumber: number = 0,
  agentPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/agents?pageNumber=${pageNumber}&agentPerPage=${agentPerPage}`,
    options
  );

  return data.data;
};

export const registerNewAgent = async (agentObj: IAgentRequest) => {
  const { data } = await axiosPrivate.post("/agents", agentObj);
  return data;
};

export const getAgentDetails = async (agentId: string | undefined) => {
  const { data } = await axiosPrivate.get(`/agents/${agentId}`);
  return data.data;
};

export const updateAgentDetails = async (agentObj: IUpdateAgent) => {
  const { data } = await axiosPrivate.put("/agents/edit", agentObj);
  return data;
};

export const removeAgent = async (regulatorId: string | undefined) => {
  const { data } = await axiosPrivate.delete(`/agents/${regulatorId}`);
  return data;
};

export const getTotalNumOfCreatedAgents = async () => {
  const { data } = await axiosPrivate.get("/agents/total-records");
  return data;
};

export const getNumberOfNewReqByMonth = async (options = {}) => {
  const { data } = await axiosPrivate.get("/agents/new-agent-month");
  return data;
};

export const getNumberOfApprovedAgentByMonth = async (options = {}) => {
  const { data } = await axiosPrivate.get("/agents/approved-by-month");
  return data;
};
