export interface IAgent {
  _id?: string;
  email: string;
  firstName: string;
  surname: string;
  businessName: string;
  state: string;
  LGA: string;
  gender: string;
  approved: boolean;
  choiceOfSuperAgent: string;
  preferredPhoneNumber: string;
  alternativePhoneNumber: string;
  proposedAgentService: String;
  createdAt: string;
  updatedAt: string;
}

export interface IAgentRequest {
  email: string;
  firstName: string;
  surname: string;
  businessName: string;
  state: string;
  LGA: string;
  gender: string;
  approved: boolean;
  createdDate: typeof DateConstructor;
  choiceOfSuperAgent: string;
  preferredPhoneNumber: string;
  alternativePhoneNumber: string;
  proposedAgentService: String;
}

export interface IUpdateAgent {
  id: string | undefined;
  email: string;
  firstName: string;
  surname: string;
  businessName: string;
  state: string;
  LGA: string;
  gender: string;
  choiceOfSuperAgent: string;
  preferredPhoneNumber: string;
  alternativePhoneNumber: string;
  proposedAgentService: String;
}
