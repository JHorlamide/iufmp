export interface IRegulator {
  _id?: string;
  name: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export type IRegulatorRequest = {
  name: string;
  logo: string;
};

export type IUpdateRegulatorRequest = {
  id: string;
  name: string;
  logo: string;
};
