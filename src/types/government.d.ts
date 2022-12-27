export interface IGovernment {
  _id?: string;
  name: string;
  logo: any;
  createdAt: string;
  updatedAt: string;
}

export type IGovernmentRequest = {
  name: string;
  logo: string;
};

export type IUpdateGovernmentRequest = {
  id: string;
  name: string;
  logo: string;
};
