export interface IStrategicPartner {
  _id?: string;
  name: string;
  logo: any;
  createdAt: string;
  updatedAt: string;
}

export type IRequest = {
  name: string;
  logo: string;
};

export type IUpdateRequest = {
  id: string;
  name: string;
  logo: string;
};
