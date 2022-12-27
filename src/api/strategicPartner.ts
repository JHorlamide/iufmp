import { IRequest, IUpdateRequest } from "types/strategicPartner";
import { axiosPrivate } from "./axios";

export const getAllPartner = async (
  pageNumber: number = 0,
  partnerPerPage: number = 20,
  options = {}
) => {
  const { data } = await axiosPrivate.get(
    `/strategic-partners?pageNumber=${pageNumber}&partnerPerPage=${partnerPerPage}`,
    options
  );

  return data.data;
};

export const registerNewPartner = async (partnerObj: IRequest) => {
  const { data } = await axiosPrivate.post("/strategic-partners", partnerObj);
  return data;
};

export const getPartnerDetails = async (partnerId: string | undefined) => {
  const { data } = await axiosPrivate.get(`/strategic-partners/${partnerId}`);
  return data;
};

export const updatePartnerDetails = async (partnerObj: IUpdateRequest) => {
  const { data } = await axiosPrivate.put(
    "/strategic-partners/edit",
    partnerObj
  );
  return data;
};

export const removePartner = async (partnerId: string | undefined) => {
  const { data } = await axiosPrivate.delete(
    `/strategic-partners/${partnerId}`
  );
  return data;
};
