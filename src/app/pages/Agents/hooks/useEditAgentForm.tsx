import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateAgentDetails, getAgentDetails } from "api/agents";
import { IUpdateAgent } from "types/agent";

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

const useEditAgentForm = (agentId: string | undefined) => {
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

  useEffect(() => {
    getAgentDetails(agentId)
      .then((data) => {
        setAgentData({
          ...agentData,
          email: data.email,
          firstName: data.firstName,
          surname: data.surname,
          businessName: data.businessName,
          state: data.state,
          LGA: data.LGA,
          gender: data.gender,
          choiceOfSuperAgent: data.choiceOfSuperAgent,
          preferredPhoneNumber: data.preferredPhoneNumber?.slice(4),
          alternativePhoneNumber: data.alternativePhoneNumber?.slice(4),
          proposedAgentService: data.proposedAgentService
        });
      })
      .catch((error) => {
        toast.error(`Error get agent details ${error.message}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentId]);

  const handleAgentDataChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setAgentData({
      ...agentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const agentObj: IUpdateAgent = {
      id: agentId,
      email: agentData.email,
      firstName: agentData.firstName,
      surname: agentData.surname,
      businessName: agentData.businessName,
      state: agentData.state,
      LGA: agentData.LGA,
      gender: agentData.gender,
      choiceOfSuperAgent: agentData.choiceOfSuperAgent,
      preferredPhoneNumber: `+234${agentData.preferredPhoneNumber}`,
      alternativePhoneNumber: `+234${agentData.alternativePhoneNumber}`,
      proposedAgentService: agentData.proposedAgentService
    };

    const response = await updateAgentDetails(agentObj);

    if (response.status === "Success") {
      toast.success(response.message);
      navigate("/agents");
      return;
    }

    toast.error(response.message);
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
    handleAgentDataChange
  };
};

export default useEditAgentForm;
