import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerNewAgent } from "api/agents";
import { IAgentRequest } from "types/agent";

export type AgentType = {
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
};

const useAgentForm = (state: string, LGA: string | undefined) => {
  const navigate = useNavigate();
  const [agentData, setAgentData] = useState<AgentType>({
    email: "",
    firstName: "",
    surname: "",
    businessName: "",
    state: "",
    LGA: "",
    gender: "",
    choiceOfSuperAgent: "",
    preferredPhoneNumber: "",
    alternativePhoneNumber: "",
    proposedAgentService: ""
  });

  const handleCompanyDataChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setAgentData({
      ...agentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const agentObj: IAgentRequest = {
      email: agentData.email,
      firstName: agentData.firstName,
      surname: agentData.surname,
      businessName: agentData.businessName,
      state: state,
      LGA: LGA as string,
      approved: true,
      createdDate: new Date(),
      gender: agentData.gender,
      choiceOfSuperAgent: agentData.choiceOfSuperAgent,
      preferredPhoneNumber: `+234${agentData.preferredPhoneNumber}`,
      alternativePhoneNumber: `+234${agentData.alternativePhoneNumber}`,
      proposedAgentService: agentData.proposedAgentService
    };

    console.log(agentObj.createdDate);

    registerNewAgent(agentObj)
      .then((response) => {
        toast.success(response.message);
        navigate("/agents");
        return;
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return {
    agentData,
    handleSubmit,
    handlePress,
    handleCompanyDataChange
  };
};

export default useAgentForm;
