export interface ISuperAgent {
  _id: string;
  logo: any;
  email: string;
  companyName: string;
  companyAddress: string;
  phoneNumber: string;
  contactPerson: string;
  designation: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISuperAgentRequest {
  logo: any;
  email: string;
  createdDate: typeof DateConstructor;
  companyName: string;
  companyAddress: string;
  phoneNumber: string;
  contactPerson: string;
  designation: string;
}

export interface IUpdateSuperAgentRequest {
  id: string | undefined;
  email: string;
  companyName: string;
  companyAddress: string;
  logo: any;
  phoneNumber: string;
  contactPerson: string;
  designation: string;
}
