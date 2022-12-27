import { IBaseResponse } from "./login";

export type IBank = {
  _id: string;
  name: string;
  logo: string;
  modificationNotes: Array<any>;
  createdAt: string;
  updatedAt: string;
};

export interface IBankResponse extends IBaseResponse {
  data: any;
}

export type IBankRequest = {
  name: string;
  logo: string;
};

export type IUpdateBankRequest = {
  id: string;
  name: string;
  logo: string;
};

export type IBankDetails = {
  _id: string;
};
